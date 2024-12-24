import React from 'react';
import { useSentimentAnalysis } from '../../../hooks/useSentimentAnalysis';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import SentimentHeader from './components/SentimentHeader';
import SentimentMetrics from './components/SentimentMetrics';
import SentimentGaugeCard from '../Cards/SentimentGaugeCard';
import SentimentCountCard from '../Cards/SentimentCountCard';
import SentimentInsights from './components/SentimentInsights';
import MentionsLineChart from '../Charts/MentionsLineChart';

const SentimentOverview = () => {
  const { sentimentData, isLoading, error } = useSentimentAnalysis();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <SentimentHeader />
      
      <div className="grid grid-cols-4 gap-4">
        <SentimentGaugeCard score={sentimentData.globalScore} />
        <SentimentCountCard type="positive" count={sentimentData.positive} />
        <SentimentCountCard type="neutral" count={sentimentData.neutral} />
        <SentimentCountCard type="negative" count={sentimentData.negative} />
      </div>

      <SentimentMetrics />

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Intent Trends</h3>
          <div className="h-[300px]">
            <MentionsLineChart />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Intent Analysis</h3>
          <SentimentInsights />
        </div>
      </div>
    </div>
  );
};

export default SentimentOverview;