import React from 'react';
import { FiClock } from 'react-icons/fi';
import { differenceInDays } from 'date-fns';

const TrialCountdown = () => {
  // Example trial end date
  const trialEndDate = new Date('2024-04-15');
  const daysRemaining = differenceInDays(trialEndDate, new Date());

  return (
    <div className="flex items-center space-x-2 text-sm">
      <FiClock className="text-primary" />
      <span className="text-gray-600">Trial expires in</span>
      <span className="font-semibold text-primary">{daysRemaining} days</span>
    </div>
  );
};

export default TrialCountdown;