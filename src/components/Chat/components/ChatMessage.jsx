import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const ChatMessage = ({ message, isUser, timestamp, isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
          </div>
        ) : (
          <>
            <p className="text-sm whitespace-pre-wrap">{message}</p>
            {timestamp && (
              <p className="text-[10px] mt-1 opacity-60">
                {format(new Date(timestamp), 'HH:mm')}
              </p>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;