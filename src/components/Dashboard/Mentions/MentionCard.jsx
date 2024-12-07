import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaReddit } from 'react-icons/fa';

const platformIcons = {
  twitter: FiTwitter,
  linkedin: FiLinkedin,
  github: FiGithub,
  reddit: FaReddit
};

const sentimentColors = {
  positive: 'bg-green-400',
  neutral: 'bg-yellow-400',
  negative: 'bg-red-400'
};

const MentionCard = ({ platform, title, description, sentiment }) => {
  const Icon = platformIcons[platform];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-primary/20"
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="text-2xl text-gray-600" />
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${sentimentColors[sentiment]}`} />
          <span className="text-sm text-gray-600 capitalize">{sentiment}</span>
        </div>
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

      <button className="text-primary hover:text-secondary transition-colors flex items-center text-sm font-medium">
        See More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default MentionCard;