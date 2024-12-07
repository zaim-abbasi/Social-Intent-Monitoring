import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  negative: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    emoji: '😞',
    label: 'Negative'
  },
  neutral: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    emoji: '😐',
    label: 'Neutral'
  },
  positive: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    emoji: '😊',
    label: 'Positive'
  }
};

const SentimentCountCard = ({ type, count }) => {
  const variant = variants[type];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${variant.bg} rounded-xl shadow-lg p-6`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-2xl`}>{variant.emoji}</span>
        <span className={`${variant.text} text-sm font-medium`}>
          {variant.label}
        </span>
      </div>
      <div className={`${variant.text} text-3xl font-bold`}>{count}</div>
    </motion.div>
  );
};

export default SentimentCountCard;