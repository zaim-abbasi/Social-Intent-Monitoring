import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiMinus, FiTrendingDown } from 'react-icons/fi';

const variants = {
  negative: {
    icon: FiTrendingDown,
    gradient: 'from-red-500 to-orange-500',
    lightBg: 'bg-red-50',
    darkBg: 'bg-red-500',
    text: 'text-red-700',
    label: 'Negative'
  },
  neutral: {
    icon: FiMinus,
    gradient: 'from-yellow-500 to-orange-500',
    lightBg: 'bg-yellow-50',
    darkBg: 'bg-yellow-500',
    text: 'text-yellow-700',
    label: 'Neutral'
  },
  positive: {
    icon: FiTrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    lightBg: 'bg-green-50',
    darkBg: 'bg-green-500',
    text: 'text-green-700',
    label: 'Positive'
  }
};

const SentimentCountCard = ({ type, count }) => {
  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl shadow-lg p-4 overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${variant.gradient}`} />
      
      <div className="flex items-start justify-between">
        <div>
          <span className={`inline-flex items-center text-xs font-medium ${variant.text} mb-1`}>
            {variant.label}
          </span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">{count}</span>
            <span className="ml-1 text-xs text-gray-500">mentions</span>
          </div>
        </div>
        
        <div className={`${variant.lightBg} p-2 rounded-lg`}>
          <Icon className={`w-4 h-4 ${variant.text}`} />
        </div>
      </div>

      <div className="mt-3">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(count / 100) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${variant.gradient}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentCountCard;