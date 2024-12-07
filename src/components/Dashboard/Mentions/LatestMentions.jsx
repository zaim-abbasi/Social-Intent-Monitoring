import React from 'react';
import MentionCard from './MentionCard';

const mockMentions = [
  {
    id: 1,
    platform: 'twitter',
    title: 'Great experience with the new feature!',
    description: 'The latest update has really improved the workflow. Kudos to the team!',
    sentiment: 'positive'
  },
  {
    id: 2,
    platform: 'linkedin',
    title: 'Interesting development in the industry',
    description: 'Looking forward to seeing how this evolves over time.',
    sentiment: 'neutral'
  },
  {
    id: 3,
    platform: 'reddit',
    title: 'Having issues with the latest release',
    description: 'Encountering some bugs after the update. Hope this gets fixed soon.',
    sentiment: 'negative'
  },
  // Add more mock mentions as needed
];

const LatestMentions = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Latest Mentions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMentions.map((mention) => (
          <MentionCard key={mention.id} {...mention} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-white hover:bg-gray-50 text-primary font-semibold px-6 py-3 rounded-xl border border-primary/20 transition-all duration-300 hover:shadow-lg">
          See all mentions
        </button>
      </div>
    </div>
  );
};

export default LatestMentions;