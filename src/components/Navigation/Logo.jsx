import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.a
      href="#home"
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-3xl md:text-4xl font-display font-extrabold text-black tracking-tight">
        Trend
      </div>
    </motion.a>
  );
};