import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaReddit, FaMedium, FaStackOverflow, FaYoutube, FaInstagram, FaDiscord, FaSlack } from 'react-icons/fa';

const platformIcons = {
  twitter: FiTwitter,
  linkedin: FiLinkedin,
  github: FiGithub,
  reddit: FaReddit,
  medium: FaMedium,
  stackoverflow: FaStackOverflow,
  youtube: FaYoutube,
  instagram: FaInstagram,
  discord: FaDiscord,
  slack: FaSlack
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
      className="relative bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="bg-black/5 p-3 rounded-xl">
          <Icon className="text-xl text-black" />
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${sentimentColors[sentiment]}`} />
          <span className="text-sm text-gray-600 capitalize">{sentiment}</span>
        </div>
      </div>

      <h3 className="font-semibold text-black mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

      <motion.button
        whileHover={{ x: 4 }}
        className="inline-flex items-center text-black font-medium text-sm group/btn"
      >
        See More
        <svg
          className="w-4 h-4 ml-1 transform transition-transform group-hover/btn:translate-x-1"
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
      </motion.button>
    </motion.div>
  );
};

export default MentionCard;