import React from 'react';
import { FiClock } from 'react-icons/fi';
import { differenceInDays } from 'date-fns';

const TrialCountdown = () => {
  const trialEndDate = new Date('2024-04-15');
  const daysRemaining = differenceInDays(trialEndDate, new Date());

  return (
    <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-yellow-50 text-yellow-800 rounded-xl">
      <FiClock className="w-4 h-4" />
      <span className="text-sm font-medium">
        Trial expires in {daysRemaining} days
      </span>
    </div>
  );
};

export default TrialCountdown;