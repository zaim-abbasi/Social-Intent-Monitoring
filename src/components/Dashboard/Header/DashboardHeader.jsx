import React, { useState } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { FiSearch, FiCalendar, FiBell, FiMenu } from 'react-icons/fi';
import KeywordDropdown from './KeywordDropdown';
import TrialCountdown from './TrialCountdown';
import UserProfile from './UserProfile';
import NotificationsDropdown from './NotificationsDropdown';

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Left section */}
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trend
            </div>
          </div>

          {/* Center section - Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search mentions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <TrialCountdown />
            
            <button className="hidden md:flex items-center px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all duration-300 font-medium">
              <FiCalendar className="w-4 h-4 mr-2" />
              Schedule Demo
            </button>

            <NotificationsDropdown />
            <KeywordDropdown />
            <UserProfile />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mentions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;