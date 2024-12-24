import React, { memo } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../OptimizedImage';
import { useInView } from 'react-intersection-observer';

const ResourceOptimizer = memo(({ resource, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 border border-black/5 hover:border-black/20 hover:shadow-lg will-change-transform"
    >
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-black shadow-lg backdrop-blur-sm">
            {resource.category}
          </span>
        </div>
      </div>

      <div className="flex-grow p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-13h-2v6l5.2 3.2.8-1.3-4-2.4V7z"
            />
          </svg>
          <span>{resource.readTime} min read</span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black transition-colors duration-300">
          {resource.title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-2">
          {resource.description}
        </p>
      </div>
    </motion.div>
  );
});

ResourceOptimizer.displayName = 'ResourceOptimizer';
export default ResourceOptimizer;