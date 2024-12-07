import React from 'react';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTrialStatus } from '../../../hooks/useTrialStatus';

const TrialCountdown = () => {
  const { daysRemaining, isLoading, error } = useTrialStatus();

  if (isLoading || error || daysRemaining === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`hidden md:flex items-center space-x-2 px-4 py-2.5 rounded-xl border transition-colors ${
        daysRemaining > 0
          ? 'bg-yellow-50 text-yellow-800 border-yellow-200'
          : 'bg-red-50 text-red-800 border-red-200'
      }`}
    >
      <FiClock className="w-4 h-4" />
      <span className="text-sm font-medium">
        {daysRemaining > 0 
          ? `Trial expires in ${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}`
          : 'Trial has expired'}
      </span>
    </motion.div>
  );
};

export default TrialCountdown;