import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative">
        <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
        
        <motion.button
          whileHover={{ x: 4 }}
          className="inline-flex items-center text-primary font-semibold group/btn"
        >
          Learn more
          <svg
            className="w-5 h-5 ml-2 transform transition-transform group-hover/btn:translate-x-1"
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
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;