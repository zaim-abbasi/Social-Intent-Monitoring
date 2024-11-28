import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

const ResourceCard = ({ title, description, image, category, readTime }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FiTag className="text-primary mr-2" />
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <FiClock className="mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <button className="text-primary font-semibold group-hover:text-secondary transition-colors flex items-center">
          Read More
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ResourceCard;