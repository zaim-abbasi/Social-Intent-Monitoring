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
      className="hidden md:flex items-center space-x-2.5 px-4 py-2 rounded-xl transition-colors bg-black/5 hover:bg-black/10 border border-black/10"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-black/10">
        <FiClock className="w-4 h-4 text-black" />
      </div>
      <div>
        <span className="text-sm font-semibold text-black">
          4 days left
        </span>
        <div className="text-[10px] font-medium text-gray-600">
          Upgrade to Pro →
        </div>
      </div>
    </motion.div>
  );
};

export default TrialCountdown;