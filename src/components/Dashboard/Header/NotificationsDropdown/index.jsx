import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiBell } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../../Auth/AuthContext';
import NotificationItem from './NotificationItem';
import { generateMockNotifications } from './mockNotifications';

const NotificationsDropdown = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (user?.platforms) {
      const userNotifications = generateMockNotifications(user.platforms);
      setNotifications(userNotifications);
    }
  }, [user]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAsRead = useCallback((notificationId) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, unread: false }
          : notification
      )
    );
  }, []);

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button 
            className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiBell className="w-6 h-6" />
            <AnimatePresence>
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
                >
                  {unreadCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Menu.Button>

          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items 
              static
              className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black/5 focus:outline-none overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              </div>

              <div className="max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                <AnimatePresence>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Menu.Item>
                          <NotificationItem
                            notification={notification}
                            onRead={handleMarkAsRead}
                          />
                        </Menu.Item>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-12 px-4 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <FiBell className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-600 font-medium">No notifications yet</p>
                      <p className="text-sm text-gray-500 mt-1">
                        We'll notify you when something important happens
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {notifications.length > 0 && (
                <div className="px-4 py-3 border-t border-gray-100">
                  <button className="w-full text-sm text-primary hover:text-secondary font-medium transition-colors text-center">
                    View all notifications
                  </button>
                </div>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default NotificationsDropdown;