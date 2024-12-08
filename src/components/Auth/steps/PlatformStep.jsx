import React from 'react';
import { motion } from 'framer-motion';
import PlatformSelector from '../components/PlatformSelector';

const PlatformStep = ({ formData, updateFormData }) => {
  const handlePlatformSelect = (platform) => {
    const platforms = formData.platforms.includes(platform)
      ? formData.platforms.filter(p => p !== platform)
      : [...formData.platforms, platform];
    updateFormData({ platforms });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-display font-bold text-black mb-0">
          Choose Platforms
        </h3>
        <p className="text-gray-600 text-base font-medium">
          Select the platforms you want to monitor for insights
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="bg-gray-50/70 rounded-xl p-6 border-2 border-gray-100">
          <PlatformSelector
            selected={formData.platforms}
            onSelect={handlePlatformSelect}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformStep;