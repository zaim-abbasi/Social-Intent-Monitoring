import React from 'react';
import { motion } from 'framer-motion';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';

const SentimentGaugeCard = ({ score = 75 }) => {
  const width = 160;
  const height = 90;
  const centerX = width / 2;
  const centerY = height - 10;
  const radius = 70;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const scoreAngle = startAngle + (score / 100) * Math.PI;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl shadow-lg p-4 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">Global Score</h3>
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
              strokeWidth={8}
            />
            <Arc
              radius={radius}
              startAngle={startAngle}
              endAngle={scoreAngle}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth={8}
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
        <div className="flex items-baseline -mt-2">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
          <span className="text-sm text-gray-500 ml-1">/ 100</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SentimentGaugeCard;