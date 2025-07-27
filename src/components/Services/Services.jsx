import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  Database, 
  Server, 
  Users,
  Code,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and Python. We create scalable, responsive websites that drive business growth.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Modern Stack']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that users love.',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging digital experiences. We focus on usability, accessibility, and beautiful aesthetics.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions. We help businesses leverage the power of AWS, Azure, and Google Cloud.',
      features: ['AWS/Azure/GCP', 'Serverless', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Complete e-commerce solutions that drive sales and provide excellent customer experiences. From simple stores to complex marketplaces.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Multi-vendor']
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Robust and scalable APIs that power modern applications. We build RESTful and GraphQL APIs with comprehensive documentation.',
      features: ['REST & GraphQL', 'Authentication', 'Rate Limiting', 'Documentation']
    },
    {
      icon: Zap,
      title: 'AI Solutions & Integrations',
      description: 'Cutting-edge artificial intelligence solutions including chatbots, data analytics, machine learning models, and AI-powered automation systems.',
      features: ['Chatbots', 'Data Analytics', 'ML Models', 'AI Automation']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide expert tech consulting, custom web & app development, and ongoing support to help businesses thrive online. 
            From strategy to launch, we guide your digital transformation every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div key={service.title} className={index === 6 ? "lg:col-start-2" : ""}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-xl p-6 hover:bg-white/15 dark:hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Us?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Expert Team', desc: 'Experienced developers and designers' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times' },
              { icon: Shield, title: 'Quality Assured', desc: 'Rigorous testing and quality control' },
              { icon: TrendingUp, title: 'Growth Focused', desc: 'Solutions that scale with your business' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 