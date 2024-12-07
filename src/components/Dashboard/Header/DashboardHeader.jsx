import React from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { FiSearch, FiCalendar, FiUser, FiBell } from 'react-icons/fi';
import KeywordDropdown from './KeywordDropdown';
import TrialCountdown from './TrialCountdown';
import UserProfile from './UserProfile';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold gradient-text">
              Trend
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              Book Demo
            </button>
            
            <TrialCountdown />
            
            <div className="relative">
              <KeywordDropdown />
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <FiBell className="w-6 h-6" />
              </button>
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;