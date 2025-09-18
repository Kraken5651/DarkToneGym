import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MembershipSection = () => {
  // todo: remove mock functionality - membership plans
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      icon: Zap,
      description: 'Perfect for getting started on your fitness journey',
      popular: false,
      features: [
        'Gym access during standard hours',
        'Basic cardio and strength equipment',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      color: 'default'
    },
    {
      name: 'Pro',
      price: 59,
      period: 'month',
      icon: Star,
      description: 'Most popular choice for serious fitness enthusiasts',
      popular: true,
      features: [
        'Everything in Basic',
        '24/7 gym access',
        'Group fitness classes',
        'Guest passes (2 per month)',
        'Personal training consultation',
        'Nutrition guidance',
        'Recovery zone access'
      ],
      buttonText: 'Choose Pro',
      color: 'primary'
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      icon: Crown,
      description: 'Ultimate experience with premium benefits',
      popular: false,
      features: [
        'Everything in Pro',
        'Unlimited guest passes',
        '4 personal training sessions',
        'VIP locker with towel service',
        'Massage therapy (2 sessions)',
        'Priority class booking',
        'Meal prep service',
        'Exclusive elite events'
      ],
      buttonText: 'Go Elite',
      color: 'secondary'
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
    <section id="membership" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan to match your fitness goals and lifestyle. All memberships include access to our world-class facilities and expert support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <motion.div key={plan.name} variants={itemVariants}>
                <Card className={`h-full hover-elevate relative overflow-hidden border-card-border ${
                  isPopular 
                    ? 'bg-primary/5 border-primary/20 shadow-lg shadow-primary/10' 
                    : 'bg-background'
                }`}>
                  {isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${isPopular ? 'pt-12' : 'pt-8'}`}>
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        isPopular ? 'bg-primary/20' : 'bg-primary/10'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className={`h-8 w-8 ${isPopular ? 'text-primary' : 'text-primary'}`} />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-display font-bold mb-2 ${
                      isPopular ? 'text-primary' : 'text-foreground'
                    }`} data-testid={`plan-${plan.name.toLowerCase()}`}>
                      {plan.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className={`text-5xl font-display font-bold ${
                        isPopular ? 'text-primary' : 'text-foreground'
                      }`}>
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                            isPopular ? 'text-primary' : 'text-primary'
                          }`} />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full text-lg py-6 ${
                        isPopular 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25' 
                          : ''
                      }`}
                      variant={isPopular ? 'default' : 'outline'}
                      onClick={() => console.log(`Selected ${plan.name} plan`)}
                      data-testid={`button-${plan.name.toLowerCase()}-plan`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            All plans include a 7-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Instant activation
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;