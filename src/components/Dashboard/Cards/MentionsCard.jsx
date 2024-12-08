import React from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';

const MentionsCard = ({ title, value, change, children, onRefresh }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h3>
        <motion.button
          whileTap={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          onClick={onRefresh}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
        >
          <FiRefreshCw className="w-5 h-5" />
        </motion.button>
      </div>

      {children}

      {value && (
        <div className="mt-4">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
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