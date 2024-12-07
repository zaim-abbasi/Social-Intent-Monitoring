import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import { FiSearch, FiCalendar, FiBell, FiMenu } from 'react-icons/fi';
import KeywordDropdown from './KeywordDropdown';
import TrialCountdown from './TrialCountdown';
import UserProfile from './UserProfile';
import NotificationsDropdown from './NotificationsDropdown';
import { motion } from 'framer-motion';
import api from '../../../utils/api';

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserKeywords = async () => {
      try {
        const response = await api.get('/api/user/keywords');
        setKeywords(response.data.keywords);
      } catch (error) {
        console.error('Error fetching keywords:', error);
      }
    };

    fetchUserKeywords();
  }, []);

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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            >
              Trend
            </motion.div>
          </div>

          {/* Center section - Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search mentions..."
                className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <TrialCountdown />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center px-4 py-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all duration-300 font-medium"
            >
              <FiCalendar className="w-4 h-4 mr-2" />
              Schedule Demo
            </motion.button>

            <NotificationsDropdown />
            <KeywordDropdown keywords={keywords} />
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
                className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;