import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const ResourceCard = ({ title, description, image, category, readTime }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 border border-black/5 hover:border-black/20 hover:shadow-lg"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-black
            shadow-lg backdrop-blur-sm
          `}>
            {category}
          </span>
        </div>
      </div>

      <div className="flex-grow p-6 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FiClock className="mr-2" />
          <span>{readTime} min read</span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 flex-grow line-clamp-2">
          {description}
        </p>

        <motion.button
          whileHover={{ x: 4 }}
          className="inline-flex items-center text-black font-semibold group/btn"
        >
          Read More
          <FiArrowRight className="ml-2 transform transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResourceCard;