import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiSearch } from 'react-icons/fi';

const SentimentMetrics = () => {
  const metrics = [
    {
      icon: FiTarget,
      label: 'Purchase Intent',
      value: '87%',
      change: '+12%',
      color: 'text-emerald-600'
    },
    {
      icon: FiTrendingUp,
      label: 'Intent Accuracy',
      value: '94%',
      change: '+5%',
      color: 'text-blue-600'
    },
    {
      icon: FiSearch,
      label: 'Intent Discovery',
      value: '156',
      change: '+24%',
      color: 'text-violet-600'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2 }}
          className="bg-white rounded-xl p-4 border border-black/5 hover:border-black/20 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-black/5">
              <metric.icon className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600">{metric.label}</div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl font-bold text-black">{metric.value}</span>
                <span className={`text-xs font-medium ${metric.color}`}>{metric.change}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SentimentMetrics;