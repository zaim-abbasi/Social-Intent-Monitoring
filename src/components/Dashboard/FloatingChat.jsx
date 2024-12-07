import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const FloatingChat = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-secondary transition-colors"
    >
      <FiMessageSquare className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingChat;