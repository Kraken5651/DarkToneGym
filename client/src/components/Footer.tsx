import { motion } from 'framer-motion';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: remove mock functionality - newsletter subscription
    console.log('Newsletter subscription:', email);
    toast({
      title: "Subscribed!",
      description: "You'll receive our latest fitness tips and updates.",
    });
    setEmail('');
  };

  const footerLinks = {
    services: [
      { name: 'Personal Training', href: '#services' },
      { name: 'Group Classes', href: '#services' },
      { name: 'Strength Training', href: '#services' },
      { name: 'Nutrition Coaching', href: '#services' }
    ],
    membership: [
      { name: 'Basic Plan', href: '#membership' },
      { name: 'Pro Plan', href: '#membership' },
      { name: 'Elite Plan', href: '#membership' },
      { name: 'Corporate Rates', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'FAQ', href: '#contact' },
      { name: 'Privacy Policy', href: '#contact' },
      { name: 'Terms of Service', href: '#contact' },
      { name: 'Support Center', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Dumbbell className="h-8 w-8 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">APEX Fitness</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your life through fitness. Join our community of champions and unlock your true potential with world-class facilities and expert guidance.
              </p>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>123 Fitness Street, Downtown District</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>info@apexfitness.com</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Membership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6">Membership</h3>
              <ul className="space-y-3">
                {footerLinks.membership.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-6">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get fitness tips, workout routines, and exclusive offers delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-card border-card-border text-sm"
                  data-testid="input-newsletter"
                />
                <Button 
                  type="submit" 
                  className="w-full text-sm"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © 2024 APEX Fitness. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${social.name} clicked`);
                    }}
                    data-testid={`social-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;