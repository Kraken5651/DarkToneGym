import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Dark_luxury_gym_hero_image_6f94dfd5.png';
import groupClassImage from '@assets/generated_images/Group_fitness_class_scene_d34c68ad.png';
import equipmentImage from '@assets/generated_images/Modern_gym_equipment_showcase_27b605b7.png';
import trainerImage from '@assets/generated_images/Professional_gym_trainer_portrait_0934e590.png';

const GallerySection = () => {
  // todo: remove mock functionality - gallery images
  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: 'State-of-the-art gym interior',
      category: 'facility'
    },
    {
      id: 2,
      src: groupClassImage,
      alt: 'High-energy group fitness class',
      category: 'classes'
    },
    {
      id: 3,
      src: equipmentImage,
      alt: 'Premium gym equipment',
      category: 'equipment'
    },
    {
      id: 4,
      src: trainerImage,
      alt: 'Professional trainer in action',
      category: 'trainers'
    },
    {
      id: 5,
      src: heroImage,
      alt: 'Modern weight training area',
      category: 'facility'
    },
    {
      id: 6,
      src: groupClassImage,
      alt: 'Yoga and mindfulness session',
      category: 'classes'
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'facility', 'equipment', 'classes', 'trainers'];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = filteredImages.find(img => img.id === selectedImage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of our premium facilities, state-of-the-art equipment, and vibrant community atmosphere.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
              data-testid={`filter-${category}`}
            >
              {category === 'all' ? 'All' : category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openLightbox(image.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              data-testid={`gallery-image-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
                <p className="text-xs text-gray-300 capitalize">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="h-4 w-4" />
              </Button>
              
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                data-testid="button-prev-image"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                data-testid="button-next-image"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{selectedImageData.alt}</h3>
                <p className="text-sm text-muted-foreground capitalize">{selectedImageData.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;