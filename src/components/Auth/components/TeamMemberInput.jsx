import React from 'react';
import { motion } from 'framer-motion';
import { UserPlusIcon } from '@heroicons/react/24/outline';

const TeamMemberInput = ({ members, onAdd, onRemove }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const email = e.target.value.trim();
      if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        onAdd(email);
        e.target.value = '';
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="email"
          placeholder="Enter team member's email and press Enter"
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <UserPlusIcon className="w-6 h-6" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {members.map((email, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onRemove(index)}
            className="bg-secondary/10 text-secondary px-4 py-2 rounded-full flex items-center hover:bg-secondary/20 transition-colors"
          >
            {email}
          </motion.button>
        ))}
      </div>
      
      <p className="text-sm text-gray-500">
        Click on a team member's email to remove them from the list.
      </p>
    </div>
  );
};

export default TeamMemberInput;