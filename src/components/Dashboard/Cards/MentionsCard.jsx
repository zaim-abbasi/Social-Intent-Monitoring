import React from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';

const MentionsCard = ({ title, value, change, children, onRefresh }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: 180 }}
          transition={{ duration: 0.3 }}
          onClick={onRefresh}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-black/5 rounded-xl transition-all duration-300"
        >
          <FiRefreshCw className="w-4 h-4" />
        </motion.button>
      </div>

      {children}

      {value && (
        <div className="mt-4">
          <div className="text-3xl font-bold text-black">{value}</div>
          {change && (
            <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change >= 0 ? '+' : ''}{change}% from last period
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default MentionsCard;