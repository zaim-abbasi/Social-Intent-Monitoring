import React from 'react';
import { motion } from 'framer-motion';
import PlatformSelector from '../components/PlatformSelector';

const PlatformStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Platform Selection</h3>
      <p className="text-gray-600 mb-4">
        Choose which platforms you want to track for your keywords.
      </p>
      <PlatformSelector
        selected={formData.platforms}
        onSelect={(platform) => {
          const platforms = formData.platforms.includes(platform)
            ? formData.platforms.filter(p => p !== platform)
            : [...formData.platforms, platform];
          updateFormData({ platforms });
        }}
      />
    </motion.div>
  );
};

export default PlatformStep;