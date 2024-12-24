import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiMinus, FiTrendingDown } from 'react-icons/fi';

const variants = {
  negative: {
    icon: FiTrendingDown,
    gradient: 'from-red-500/10 to-orange-500/10',
    iconColor: 'text-red-500',
    label: 'Negative'
  },
  neutral: {
    icon: FiMinus,
    gradient: 'from-yellow-500/10 to-orange-500/10',
    iconColor: 'text-yellow-500',
    label: 'Neutral'
  },
  positive: {
    icon: FiTrendingUp,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
    label: 'Positive'
  }
};

const SentimentCountCard = ({ type, count }) => {
  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl p-4 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg overflow-hidden group"
    >
      <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${variant.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="flex items-start justify-between">
        <div>
          <span className="text-sm font-medium text-gray-900">{variant.label}</span>
          <div className="flex items-baseline mt-1">
            <span className="text-2xl font-bold text-black">{count}</span>
            <span className="ml-1 text-xs text-gray-500">mentions</span>
          </div>
        </div>
        
        <div className={`p-2 rounded-lg bg-gradient-to-br ${variant.gradient}`}>
          <Icon className={`w-4 h-4 ${variant.iconColor}`} />
        </div>
      </div>

      <div className="mt-3">
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(count / 100) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${variant.gradient.replace('/10', '')}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentCountCard;