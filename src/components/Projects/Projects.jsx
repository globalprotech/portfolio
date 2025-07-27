import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Dr. Nandurkar's Healthcare Platform",
      description: "Developed a comprehensive healthcare website for Dr. Nandurkar featuring online appointment booking, patient management, admin panel for website handling, blogs and news sections with excellent UI/UX design.",
      icon: "🏥",
      technologies: ["React", "Node.js", "MongoDB", "Admin Panel", "Blog System"],
      liveUrl: "https://drnandurkars.com/",
      githubUrl: "#",
      views: "3.5k",
      date: "2024",
      client: "Dr. Nandurkar"
    },
    {
      title: "CDSportz Sports Platform",
      description: "Built a premier sports news and analysis platform covering football, basketball, baseball, soccer, tennis and more. Features latest sports updates, engaging content, and comprehensive sports coverage for enthusiasts worldwide.",
      icon: "⚽",
      technologies: ["React", "Node.js", "MongoDB", "Sports API", "Content Management"],
      liveUrl: "https://cdsportz.com/",
      githubUrl: "#",
      views: "4.2k",
      date: "2025",
      client: "CDSportz"
    },
    {
      title: "E-Commerce Platform",
      description: "Built a comprehensive e-commerce solution for a retail client, featuring advanced inventory management, payment processing, and analytics dashboard.",
      icon: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      views: "2.5k",
      date: "2024",
      client: "RetailCorp"
    },
    {
      title: "Healthcare Management System",
      description: "Developed a patient management system for a healthcare provider with appointment scheduling, medical records, and telemedicine features.",
      icon: "🏥",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      views: "1.8k",
      date: "2024",
      client: "HealthTech Inc"
    },
    {
      title: "Financial Dashboard",
      description: "Built a comprehensive financial analytics dashboard for investment management with real-time data visualization and reporting.",
      icon: "📊",
      technologies: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      views: "1.5k",
      date: "2024",
      client: "FinancePro"
    },
    {
      title: "Learning Management System",
      description: "Developed an online learning platform with course management, video streaming, and student progress tracking.",
      icon: "🎓",
      technologies: ["React", "Django", "Redis", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      views: "2.1k",
      date: "2023",
      client: "EduTech Solutions"
    },
    {
      title: "Real Estate Platform",
      description: "Created a property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.",
      icon: "🏠",
      technologies: ["Next.js", "Node.js", "MongoDB", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
      views: "1.9k",
      date: "2023",
      client: "RealEstate Pro"
    }
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

  return (
    <section id="projects" className="py-20 relative">
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
            Featured <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise in expert tech consulting, 
            custom web & app development, and ongoing support. Each project showcases our commitment to guiding 
            digital transformation from strategy to launch.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div key={project.title} className={index === 6 ? "lg:col-start-2" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, RetailCorp",
                testimonial: "Global Pro Tech delivered an exceptional e-commerce platform that increased our online sales by 300%. Their expert tech consulting and ongoing support exceeded our expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, HealthTech Inc",
                testimonial: "The healthcare management system they built for us is robust, secure, and user-friendly. Their custom development approach streamlined our operations significantly.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, FoodExpress",
                testimonial: "Our food delivery app has been a game-changer. Global Pro Tech understood our vision and delivered a product that our customers love, with excellent ongoing support.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects; 