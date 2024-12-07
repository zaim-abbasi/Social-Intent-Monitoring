import React from 'react';

export const EmptyState = ({ message, description }) => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-900 font-medium mb-1">{message}</p>
      {description && (
        <p className="text-gray-500 text-sm">{description}</p>
      )}
    </div>
  );
};