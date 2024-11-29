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
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Choose Your Platforms</h3>
        <p className="text-gray-600 mb-6">
          Select the social platforms you want to monitor. You can choose multiple platforms.
        </p>
      </div>

      <PlatformSelector
        selected={formData.platforms}
        onSelect={handlePlatformSelect}
      />

      {formData.platforms.length === 0 && (
        <p className="text-red-500 text-sm mt-4">
          Please select at least one platform to continue
        </p>
      )}

      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h4 className="text-blue-700 font-medium mb-2">Pro Tip</h4>
        <p className="text-blue-600 text-sm">
          Combining multiple platforms can help you get a more comprehensive view of your brand's social presence.
          Free APIs are great to start with, while paid APIs offer more advanced features.
        </p>
      </div>
    </motion.div>
  );
};

export default PlatformStep;