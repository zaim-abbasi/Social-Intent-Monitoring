import React from 'react';
import SentimentGaugeCard from '../Cards/SentimentGaugeCard';
import SentimentCountCard from '../Cards/SentimentCountCard';

const SentimentOverview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Sentiment Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SentimentGaugeCard score={75} />
        <SentimentCountCard type="negative" count={4} />
        <SentimentCountCard type="neutral" count={28} />
        <SentimentCountCard type="positive" count={8} />
      </div>
    </div>
  );
};

export default SentimentOverview;