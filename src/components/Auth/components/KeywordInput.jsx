import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

const KeywordInput = ({ keywords, onAdd, onRemove }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() && keywords.length < 3) {
      e.preventDefault();
      onAdd(e.target.value.trim());
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <input
          type="text"
          placeholder="Type a keyword and press Enter"
          onKeyDown={handleKeyDown}
          className="w-full pl-3 pr-10 py-1.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          disabled={keywords.length >= 3}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
          <PlusIcon className="w-4 h-4" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1.5">
        {keywords.map((keyword, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onRemove(index)}
            className="bg-black/5 text-black px-2 py-1 rounded-full flex items-center text-xs hover:bg-black/10 transition-colors"
          >
            {keyword}
          </motion.button>
        ))}
      </div>
      
      {keywords.length < 3 && (
        <p className="text-xs text-gray-500">
          You can add up to {3 - keywords.length} more keyword{3 - keywords.length !== 1 ? 's' : ''}.
        </p>
      )}
    </div>
  );
};

export default KeywordInput;