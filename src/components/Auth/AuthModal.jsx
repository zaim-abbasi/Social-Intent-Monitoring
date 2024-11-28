import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab === 'login' ? 0 : 1);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-4 border-b mb-6">
            <Tab className={({ selected }) =>
              `py-2 px-4 text-sm font-medium focus:outline-none ${
                selected
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }>
              Login
            </Tab>
            <Tab className={({ selected }) =>
              `py-2 px-4 text-sm font-medium focus:outline-none ${
                selected
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }>
              Sign Up
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <AnimatePresence mode="wait">
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <LoginForm onClose={onClose} />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <SignupForm onClose={onClose} />
                </motion.div>
              </Tab.Panel>
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Modal>
  );
};

export default AuthModal;