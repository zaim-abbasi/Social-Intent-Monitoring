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
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Choose Platforms</h3>
        <p className="text-gray-600 mt-2">Select the platforms you want to monitor</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <PlatformSelector
          selected={formData.platforms}
          onSelect={handlePlatformSelect}
        />
      </div>
    </motion.div>
  );
};

export default PlatformStep;