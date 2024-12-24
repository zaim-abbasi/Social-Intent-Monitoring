import React from 'react';
import { motion } from 'framer-motion';
import { FiPieChart, FiBarChart2, FiTrendingUp } from 'react-icons/fi';

const SentimentHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center space-x-2 text-sm text-black/60 mb-2">
          <FiPieChart className="w-4 h-4" />
          <span>Real-Time Sentiment Analysis</span>
        </div>
        <h2 className="text-3xl font-display font-bold text-black">Brand Perception</h2>
        <p className="text-gray-600 mt-1">AI-powered analysis of your brand's social presence</p>
      </div>
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
        >
          <FiBarChart2 className="w-4 h-4" />
          <span>Detailed Analysis</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
        >
          <FiTrendingUp className="w-4 h-4" />
          <span>Export Report</span>
        </motion.button>
      </div>
    </div>
  );
};

export default SentimentHeader;