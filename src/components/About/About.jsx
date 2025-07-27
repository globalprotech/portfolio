import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Code, value: '100+', label: 'Projects Delivered' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  const services = [
    'Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions',
    'E-commerce Platforms', 'API Development', 'DevOps Services', 'Consulting'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Company Logo/Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="/logo1.png" alt="Global Pro Tech Logo" className="h-48 w-auto" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-lg p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Global Pro Tech is a leading technology company specializing in expert tech consulting, 
              custom web & app development, and ongoing support. We help businesses of all sizes 
              transform their digital presence and achieve their technology goals.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              From strategy to launch, we guide your digital transformation every step of the way. 
              Our team of experienced developers, designers, and consultants work closely with clients 
              to understand their unique challenges and deliver innovative solutions that drive growth 
              and efficiency.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Our Services</h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <motion.span
                    key={service}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 