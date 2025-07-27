import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-gray-300/20 dark:border-white/20 rounded-xl overflow-hidden hover:bg-white/15 dark:hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
            <div className="text-6xl text-blue-400 opacity-50">
              {project.icon}
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 text-xs rounded-full border border-blue-500/30 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{project.views}</span>
            </div>
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 