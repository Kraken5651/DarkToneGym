import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import trainerImage from '@assets/generated_images/Professional_gym_trainer_portrait_0934e590.png';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: '15+ Years',
      subtitle: 'Of Excellence'
    },
    {
      icon: Users,
      title: '5000+',
      subtitle: 'Happy Members'
    },
    {
      icon: Target,
      title: '95%',
      subtitle: 'Goal Achievement'
    },
    {
      icon: Clock,
      title: '24/7',
      subtitle: 'Support'
    }
  ];

  // todo: remove mock functionality - trainer data
  const trainers = [
    {
      name: 'Marcus Steel',
      role: 'Head Trainer & Founder',
      specialization: 'Strength & Conditioning',
      experience: '12 Years',
      image: trainerImage
    },
    {
      name: 'Sarah Phoenix',
      role: 'Fitness Director',
      specialization: 'HIIT & Functional',
      experience: '8 Years',
      image: trainerImage
    },
    {
      name: 'David Thunder',
      role: 'Nutrition Specialist',
      specialization: 'Sports Nutrition',
      experience: '10 Years',
      image: trainerImage
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About <span className="text-primary">APEX Fitness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that everyone deserves to unlock their full potential, APEX Fitness has been transforming lives through cutting-edge fitness solutions and unwavering dedication to excellence.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div key={achievement.title} variants={itemVariants}>
                <Card className="text-center hover-elevate bg-card">
                  <CardContent className="p-8">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div className="text-3xl font-display font-bold text-foreground mb-2" data-testid={`stat-${achievement.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {achievement.title}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.subtitle}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="bg-card max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To create an environment where every individual can push beyond their perceived limits, embrace discomfort, and emerge stronger both physically and mentally. We believe that true transformation happens when passion meets precision."
              </p>
              <div className="mt-8 text-primary font-semibold">- Marcus Steel, Founder</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Elite Team</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certified trainers bring years of experience and unwavering dedication to help you achieve your fitness goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {trainers.map((trainer, index) => (
            <motion.div key={trainer.name} variants={itemVariants}>
              <Card className="hover-elevate group cursor-pointer bg-card">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-6"
                  >
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                      <AvatarImage src={trainer.image} alt={trainer.name} />
                      <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  <h4 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300" data-testid={`trainer-${trainer.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {trainer.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{trainer.role}</p>
                  <p className="text-muted-foreground mb-2">{trainer.specialization}</p>
                  <p className="text-sm text-muted-foreground">{trainer.experience} Experience</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;