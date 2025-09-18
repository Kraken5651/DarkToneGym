import { motion } from 'framer-motion';
import { Dumbbell, Users, Clock, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase power with our comprehensive strength training programs designed by certified experts.',
      features: ['Free Weights', 'Olympic Lifting', 'Powerlifting', 'Functional Training']
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join our high-energy group fitness classes and train alongside like-minded individuals pushing their limits.',
      features: ['HIIT', 'CrossFit', 'Yoga', 'Boxing']
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'Get personalized attention and customized workout plans from our elite team of certified trainers.',
      features: ['1-on-1 Sessions', 'Custom Plans', 'Nutrition Guidance', 'Progress Tracking']
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Enhance your cardiovascular health with our state-of-the-art cardio equipment and specialized programs.',
      features: ['Treadmills', 'Ellipticals', 'Rowing Machines', 'Spin Classes']
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock access to our fully equipped facility and premium amenities.',
      features: ['Keyless Entry', 'Night Security', 'Extended Hours', 'Flexible Schedule']
    },
    {
      icon: Zap,
      title: 'Recovery Zone',
      description: 'Optimize your recovery with our dedicated wellness area featuring massage therapy and recovery tools.',
      features: ['Massage Therapy', 'Sauna', 'Stretching Area', 'Recovery Tools']
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience world-class fitness services designed to push your limits and achieve extraordinary results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full hover-elevate group cursor-pointer border-card-border bg-background">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                      onClick={() => console.log(`Learn more about ${service.title}`)}
                      data-testid={`button-learn-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;