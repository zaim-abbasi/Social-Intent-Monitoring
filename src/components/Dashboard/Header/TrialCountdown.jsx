import React from 'react';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAuth } from '../../Auth/AuthContext';

const TrialCountdown = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl border transition-colors bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary"
    >
      <FiClock className="w-4 h-4" />
      <span className="text-sm font-medium">
        7 days trial
      </span>
    </motion.div>
  );
};

export default TrialCountdown;