import React from 'react';
import { motion } from 'framer-motion';

export const AuthButtons = ({ className = '', user, onAuthClick }) => {
  if (user) {
    return (
      <div className={`items-center space-x-3 ${className}`}>
        <span className="text-sm text-gray-700 font-medium">
          {user.name}
        </span>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAuthClick('logout')}
          className="px-4 py-2.5 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
        >
          Logout
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`items-center space-x-3 ${className}`}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onAuthClick('login')}
        className="px-4 py-2.5 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
      >
        Login
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onAuthClick('signup')}
        className="px-4 py-2.5 text-sm font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
      >
        Get Started
      </motion.button>
    </div>
  );
};