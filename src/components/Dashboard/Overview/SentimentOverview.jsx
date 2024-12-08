import React from 'react';
import { motion } from 'framer-motion';
import SentimentGaugeCard from '../Cards/SentimentGaugeCard';
import SentimentCountCard from '../Cards/SentimentCountCard';
import { useSentimentAnalysis } from '../../../hooks/useSentimentAnalysis';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

const SentimentOverview = () => {
  const { sentimentData, isLoading, error } = useSentimentAnalysis();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sentiment Overview</h2>
          <p className="text-gray-600 mt-1">AI-powered analysis of social mentions</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          View Details
        </motion.button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SentimentGaugeCard score={sentimentData.globalScore} />
        <SentimentCountCard type="positive" count={sentimentData.positive} />
        <SentimentCountCard type="neutral" count={sentimentData.neutral} />
        <SentimentCountCard type="negative" count={sentimentData.negative} />
      </div>
    </div>
  );
};

export default SentimentOverview;