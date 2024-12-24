import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { platformIcons } from './platformIcons';

const NotificationItem = ({ notification, onRead }) => {
  const Icon = platformIcons[notification.platform];

  const handleClick = (e) => {
    e.preventDefault();
    onRead(notification.id);
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      onClick={handleClick}
      className={`w-full px-4 py-3 text-left flex items-start space-x-3 hover:bg-gray-50 transition-all cursor-pointer ${
        notification.unread ? 'bg-blue-50/50' : ''
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        {Icon && <Icon className={`w-4 h-4 ${notification.iconColor}`} />}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-gray-900 truncate pr-2">
            {notification.title}
          </p>
          {notification.unread && (
            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
          )}
        </div>
        <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
          {notification.description}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {format(new Date(notification.time), 'MMM d, h:mm a')}
        </p>
      </div>
    </motion.div>
  );
};

export default NotificationItem;