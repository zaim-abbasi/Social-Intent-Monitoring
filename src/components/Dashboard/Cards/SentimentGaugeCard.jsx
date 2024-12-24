import React from 'react';
import { motion } from 'framer-motion';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';

const SentimentGaugeCard = ({ score = 75 }) => {
  const width = 120;
  const height = 60;
  const centerX = width / 2;
  const centerY = height - 10;
  const radius = 50;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const scoreAngle = startAngle + (score / 100) * Math.PI;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl p-4 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg overflow-hidden group"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-900">Intent Score</h3>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
          Last 7 days
        </span>
      </div>
      
      <div className="flex flex-col items-center">
        <svg width={width} height={height}>
          <Group top={centerY} left={centerX}>
            <Arc
              radius={radius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={6}
            />
            <Arc
              radius={radius}
              startAngle={startAngle}
              endAngle={scoreAngle}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth={6}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </Group>
        </svg>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-black">{score}</span>
          <span className="text-xs text-gray-500 ml-1">/ 100</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentGaugeCard;