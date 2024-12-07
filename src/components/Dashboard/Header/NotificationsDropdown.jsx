import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiBell } from 'react-icons/fi';
import { motion } from 'framer-motion';

const notifications = [
  {
    id: 1,
    title: 'New mention on Twitter',
    description: 'Your product was mentioned by @techinfluencer',
    time: '5m ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Sentiment Alert',
    description: 'Unusual spike in negative mentions detected',
    time: '1h ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Weekly Report',
    description: 'Your weekly analytics report is ready',
    time: '3h ago',
    unread: false,
  },
];

const NotificationsDropdown = () => {
  const [unreadCount, setUnreadCount] = useState(2);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
        <FiBell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </Menu.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <Menu.Item key={notification.id}>
                {({ active }) => (
                  <motion.button
                    whileHover={{ x: 4 }}
                    className={`${
                      active ? 'bg-gray-50' : ''
                    } w-full px-4 py-3 text-left flex items-start space-x-3 ${
                      notification.unread ? 'bg-blue-50/50' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {notification.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                    {notification.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    )}
                  </motion.button>
                )}
              </Menu.Item>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-gray-100">
            <button className="text-sm text-primary hover:text-secondary font-medium">
              View all notifications
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationsDropdown;