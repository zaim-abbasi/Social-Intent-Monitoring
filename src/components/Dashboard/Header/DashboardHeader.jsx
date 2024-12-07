import React, { useState } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { FiSearch, FiMenu } from 'react-icons/fi';
import KeywordDropdown from './KeywordDropdown';
import TrialCountdown from './TrialCountdown';
import UserProfile from './UserProfile';
import NotificationsDropdown from './NotificationsDropdown';
import { motion } from 'framer-motion';

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button 
              className="lg:hidden ml-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-6 text-3xl font-display font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-sm">
                Trend
              </span>
            </motion.div>
            
            <div className="ml-8">
              <TrialCountdown />
            </div>
          </div>

          {/* Center section - Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search mentions..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2 mr-6">
            <NotificationsDropdown />
            <KeywordDropdown />
            <div className="h-8 w-[1px] bg-gray-200 mx-2" />
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
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;