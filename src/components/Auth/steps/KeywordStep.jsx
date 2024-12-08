import React from 'react';
import { motion } from 'framer-motion';
import KeywordInput from '../components/KeywordInput';
import { FiTarget } from 'react-icons/fi';

const KeywordStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-display font-bold text-black mb-3">
          Track Keywords
        </h3>
        <p className="text-gray-600 text-base font-medium">
          Add up to 3 keywords to monitor across platforms
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50/70 rounded-xl p-6 border-2 border-gray-100">
          <KeywordInput
            keywords={formData.keywords}
            onAdd={(keyword) => updateFormData({
              keywords: [...formData.keywords, keyword]
            })}
            onRemove={(index) => updateFormData({
              keywords: formData.keywords.filter((_, i) => i !== index)
            })}
          />
        </div>

        <div className="space-y-4">
          <label className="block text-base font-semibold text-gray-800 mb-2 flex items-center">
            <FiTarget className="mr-2 text-primary" />
            What's your intent?
          </label>
          <textarea
            placeholder="e.g., Looking for companies interested in social listening tools"
            value={formData.keywordIntent}
            onChange={(e) => updateFormData({ keywordIntent: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none resize-none bg-gray-50 hover:border-primary/30 transition-all duration-300"
            rows="3"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default KeywordStep;