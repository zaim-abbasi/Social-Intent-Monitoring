import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiRefreshCw, FiFilter, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import PostsGrid from './PostsGrid';
import MentionsStats from './MentionsStats';
import MentionsFilter from './MentionsFilter';
import { useAuth } from '../../../components/Auth/AuthContext';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { EmptyState } from '../../ui/EmptyState';

const LatestMentions = () => {
  const { user } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedSentiment, setSelectedSentiment] = useState('all');
  const [view, setView] = useState('grid');

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  }, []);

  if (!user?.platforms?.length) {
    return (
      <EmptyState
        message="No platforms configured"
        description="Add social media platforms to start monitoring mentions"
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-sm text-black/60 mb-4">
            <FiTrendingUp className="w-4 h-4" />
            <span>Latest Activity</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-black mb-2">Latest Mentions</h2>
          <p className="text-xl text-gray-600">Recent mentions across your monitored platforms</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* View Toggle */}
          <div className="bg-white rounded-xl p-1 border border-black/5">
            <div className="flex space-x-1">
              <button
                onClick={() => setView('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  view === 'grid'
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-black/5'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  view === 'list'
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-black/5'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Filter Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {}}
            className="px-4 py-2 text-sm font-medium text-black bg-white rounded-xl border border-black/5 hover:bg-black/5 transition-all duration-300 flex items-center space-x-2"
          >
            <FiFilter className="w-4 h-4" />
            <span>Filter</span>
          </motion.button>

          {/* Refresh Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-4 py-2 text-sm font-medium text-black bg-white rounded-xl border border-black/5 hover:bg-black/5 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
          >
            <FiRefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </motion.button>
        </div>
      </div>

      {/* Stats Section */}
      <MentionsStats />

      {/* Filters Section */}
      <MentionsFilter
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
        selectedSentiment={selectedSentiment}
        setSelectedSentiment={setSelectedSentiment}
      />

      {/* Content Section */}
      <AnimatePresence mode="wait">
        {isRefreshing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[400px] flex items-center justify-center"
          >
            <LoadingSpinner />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PostsGrid
              view={view}
              selectedPlatforms={selectedPlatforms}
              selectedSentiment={selectedSentiment}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LatestMentions;