import React from 'react';
import { motion } from 'framer-motion';

const KeywordInput = ({ keywords, onAdd, onRemove }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() && keywords.length < 3) {
      e.preventDefault();
      onAdd(e.target.value.trim());
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter a keyword and press Enter"
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center"
          >
            {keyword}
            <button
              onClick={() => onRemove(index)}
              className="ml-2 text-primary hover:text-secondary"
            >
              ×
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeywordInput;