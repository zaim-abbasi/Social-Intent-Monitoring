import React from 'react';
import { motion } from 'framer-motion';
import KeywordInput from '../components/KeywordInput';

const KeywordStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-[420px] flex flex-col"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Track Keywords</h3>
        <p className="text-gray-600 mt-2">Add up to 3 keywords to monitor</p>
      </div>

      <div className="flex-1 space-y-6">
        <KeywordInput
          keywords={formData.keywords}
          onAdd={(keyword) => updateFormData({
            keywords: [...formData.keywords, keyword]
          })}
          onRemove={(index) => updateFormData({
            keywords: formData.keywords.filter((_, i) => i !== index)
          })}
        />

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            What's your intent?
          </label>
          <textarea
            placeholder="e.g., Looking for companies interested in social listening tools"
            value={formData.keywordIntent}
            onChange={(e) => updateFormData({ keywordIntent: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows="3"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default KeywordStep;