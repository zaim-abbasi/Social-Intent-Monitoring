import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUserPlus, FiX } from 'react-icons/fi';

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
          className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FiUserPlus className="w-6 h-6" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <AnimatePresence>
          {members.map((email, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative group"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-primary font-medium">{email}</span>
                <button
                  onClick={() => onRemove(index)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 p-1"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <p className="text-sm text-gray-500">
        Press Enter to add a team member
      </p>
    </div>
  );
};

export default TeamMemberInput;