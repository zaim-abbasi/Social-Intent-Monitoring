import React from 'react';
import { motion } from 'framer-motion';
import KeywordInput from '../components/KeywordInput';
import { FiUpload } from 'react-icons/fi';

const KeywordStep = ({ formData, updateFormData }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateFormData({ keywordImage: file });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Track Keywords</h3>
        <p className="text-gray-600 mt-2">Add up to 3 keywords to monitor</p>
      </div>

      <div className="space-y-6">
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
            className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none resize-none"
            rows="3"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Attach an image to search
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
            >
              <FiUpload className="mr-2 text-gray-500" />
              <span className="text-gray-600">
                {formData.keywordImage ? formData.keywordImage.name : 'Click to upload image'}
              </span>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KeywordStep;