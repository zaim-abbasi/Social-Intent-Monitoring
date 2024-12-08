import React from 'react';
import { motion } from 'framer-motion';

const UseCaseCard = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-white p-8 rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative circles */}
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-3xl text-primary" />
          </div>
          <h3 className="text-2xl font-bold ml-6 text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <motion.div
          whileHover={{ x: 4 }}
          className="inline-flex items-center text-primary font-semibold"
        >
          Learn More
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;