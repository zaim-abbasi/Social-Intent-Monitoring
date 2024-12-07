import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KeywordList = ({ keywords, searchTerm }) => {
  const filteredKeywords = keywords.filter(keyword =>
    keyword.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-h-64 overflow-y-auto py-2">
      <AnimatePresence>
        {filteredKeywords.map((keyword) => (
          <motion.div
            key={keyword._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between group"
          >
            <span className="text-sm text-gray-700">{keyword.text}</span>
          </motion.div>
        ))}
        {filteredKeywords.length === 0 && (
          <div className="px-4 py-2 text-sm text-gray-500 text-center">
            No keywords found
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KeywordList;