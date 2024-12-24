import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

const ChatHeader = ({ onClose, isExpanded, onToggleExpand }) => {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
          <span className="text-lg font-semibold">AI</span>
        </div>
        <div>
          <h3 className="font-medium">Trend Assistant</h3>
          <p className="text-xs text-white/70">Powered by Gemini</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleExpand}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isExpanded ? (
            <FiMinimize2 className="w-4 h-4" />
          ) : (
            <FiMaximize2 className="w-4 h-4" />
          )}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <FiX className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatHeader;