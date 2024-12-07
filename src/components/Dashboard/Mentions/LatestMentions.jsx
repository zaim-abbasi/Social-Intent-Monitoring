import React from 'react';
import MentionCard from './MentionCard';
import { useLatestMentions } from '../../../hooks/mentions/useLatestMentions';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { EmptyState } from '../../ui/EmptyState';

const LatestMentions = () => {
  const { mentions, loading } = useLatestMentions();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Latest Mentions</h2>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : mentions.length === 0 ? (
        <EmptyState
          message="No mentions found yet"
          description="We'll notify you when new mentions appear"
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentions.slice(0, 6).map((mention) => (
              <MentionCard key={mention._id} {...mention} />
            ))}
          </div>

          {mentions.length > 6 && (
            <div className="flex justify-center">
              <button className="bg-white hover:bg-gray-50 text-primary font-semibold px-6 py-3 rounded-xl border border-primary/20 transition-all duration-300 hover:shadow-lg">
                See all mentions
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LatestMentions;