import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiUsers } from 'react-icons/fi';

const insights = [
  {
    icon: FiTrendingUp,
    title: 'High Purchase Intent',
    description: 'Detected 45% increase in purchase intent signals across social platforms, primarily in product-related discussions.',
    change: '+45%',
    color: 'text-emerald-600',
    gradient: 'from-emerald-500/5 to-teal-500/5'
  },
  {
    icon: FiTarget,
    title: 'Intent Patterns',
    description: 'Top intent signals: Product Research (40%), Price Comparison (35%), Feature Requests (25%)',
    change: '89%',
    color: 'text-blue-600',
    gradient: 'from-blue-500/5 to-indigo-500/5'
  },
  {
    icon: FiUsers,
    title: 'Buyer Persona Match',
    description: 'Intent signals strongly align with target buyer personas, showing 85% match with ideal customer profiles.',
    change: '+85%',
    color: 'text-violet-600',
    gradient: 'from-violet-500/5 to-purple-500/5'
  }
];

const SentimentInsights = () => {
  return (
    <div className="space-y-4">
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          whileHover={{ x: 4 }}
          className="relative overflow-hidden bg-white rounded-xl p-4 border border-black/5 hover:border-black/20 transition-all duration-300 group"
        >
          <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${insight.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
          
          <div className="relative flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${insight.gradient}`}>
                <insight.icon className={`w-4 h-4 ${insight.color}`} />
              </div>
              <div>
                <h4 className="font-medium text-black">{insight.title}</h4>
                <p className="text-sm text-gray-600 mt-1 pr-4">{insight.description}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${insight.color} flex-shrink-0`}>{insight.change}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SentimentInsights;