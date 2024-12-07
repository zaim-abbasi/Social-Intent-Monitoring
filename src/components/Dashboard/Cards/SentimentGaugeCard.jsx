import React from 'react';
import { motion } from 'framer-motion';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';

const SentimentGaugeCard = ({ score = 75 }) => {
  const width = 200;
  const height = 120;
  const centerX = width / 2;
  const centerY = height - 10;
  const radius = 90;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  
  // Convert score to angle (score is 0-100, angle is π to 2π)
  const scoreAngle = startAngle + (score / 100) * Math.PI;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Score</h3>
      
      <div className="flex flex-col items-center">
        <svg width={width} height={height}>
          <Group top={centerY} left={centerX}>
            {/* Background arc */}
            <Arc
              radius={radius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={10}
            />
            {/* Score arc */}
            <Arc
              radius={radius}
              startAngle={startAngle}
              endAngle={scoreAngle}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth={10}
              strokeLinecap="round"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </Group>
        </svg>
        <div className="text-3xl font-bold text-gray-900 -mt-4">{score}%</div>
      </div>
    </motion.div>
  );
};

export default SentimentGaugeCard;