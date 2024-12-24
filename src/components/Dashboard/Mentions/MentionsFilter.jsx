import React from 'react';
import { motion } from 'framer-motion';
import { platformConfig } from '../../../config/platformConfig';

const MentionsFilter = ({ 
  selectedPlatforms, 
  setSelectedPlatforms,
  selectedSentiment,
  setSelectedSentiment 
}) => {
  const sentimentOptions = [
    { value: 'all', label: 'All' },
    { value: 'positive', label: 'Positive' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'negative', label: 'Negative' }
  ];

  const togglePlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Platform Filters */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(platformConfig).map(([key, platform]) => {
          const Icon = platform.icon;
          const isSelected = selectedPlatforms.includes(key);

          return (
            <motion.button
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => togglePlatform(key)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium
                transition-all duration-300 border
                ${isSelected 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-600 border-black/5 hover:bg-black/5'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{platform.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Sentiment Filter */}
      <div className="flex gap-2">
        {sentimentOptions.map(option => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedSentiment(option.value)}
            className={`
              px-4 py-2 rounded-xl text-sm font-medium
              transition-all duration-300 border
              ${selectedSentiment === option.value
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-600 border-black/5 hover:bg-black/5'
              }
            `}
          >
            {option.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MentionsFilter;