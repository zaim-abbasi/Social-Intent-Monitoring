import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiArrowDown, FiActivity, FiUsers, FiMessageCircle } from 'react-icons/fi';

const MentionsStats = () => {
  const stats = [
    {
      icon: FiActivity,
      label: 'Total Mentions',
      value: '1,284',
      change: '+12.5%',
      isPositive: true,
      color: 'from-blue-500/10 to-indigo-500/10',
      textColor: 'text-blue-600'
    },
    {
      icon: FiUsers,
      label: 'Unique Authors',
      value: '456',
      change: '+8.2%',
      isPositive: true,
      color: 'from-emerald-500/10 to-teal-500/10',
      textColor: 'text-emerald-600'
    },
    {
      icon: FiMessageCircle,
      label: 'Engagement Rate',
      value: '3.8%',
      change: '-2.1%',
      isPositive: false,
      color: 'from-violet-500/10 to-purple-500/10',
      textColor: 'text-violet-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} transform group-hover:scale-110 transition-all duration-300`}>
              <stat.icon className="w-6 h-6 text-black" />
            </div>
            <div className={`flex items-center space-x-1 ${
              stat.isPositive ? stat.textColor : 'text-red-500'
            }`}>
              {stat.isPositive ? (
                <FiArrowUp className="w-4 h-4" />
              ) : (
                <FiArrowDown className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">{stat.change}</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-black mb-1">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MentionsStats;