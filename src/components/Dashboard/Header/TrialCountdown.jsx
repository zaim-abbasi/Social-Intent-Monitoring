import React from 'react';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAuth } from '../../Auth/AuthContext';

const TrialCountdown = () => {
  const { user } = useAuth();

  const getDaysRemaining = () => {
    if (!user?.trialStartDate) return 0;
    
    const trialStart = new Date(user.trialStartDate);
    const now = new Date();
    const trialEnd = new Date(trialStart);
    trialEnd.setDate(trialEnd.getDate() + 7); // 7-day trial
    
    const daysRemaining = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
    return Math.max(0, daysRemaining);
  };

  const daysRemaining = getDaysRemaining();

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl border transition-colors ${
        daysRemaining > 0
          ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary'
          : 'bg-red-50 border-red-200 text-red-600'
      }`}
    >
      <FiClock className="w-4 h-4" />
      <span className="text-sm font-medium">
        {daysRemaining > 0 
          ? `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} left`
          : 'Trial expired'}
      </span>
    </motion.div>
  );
};

export default TrialCountdown;