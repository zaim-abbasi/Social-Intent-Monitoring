import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [selectedTab, setSelectedTab] = useState(initialTab === 'login' ? 0 : 1);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-full max-w-md min-h-[600px] shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="relative h-full">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-4 border-b mb-8">
            <Tab className={({ selected }) =>
              `w-full py-4 text-base font-medium focus:outline-none border-b-2 transition-all ${
                selected
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }>
              Login
            </Tab>
            <Tab className={({ selected }) =>
              `w-full py-4 text-base font-medium focus:outline-none border-b-2 transition-all ${
                selected
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }>
              Sign Up
            </Tab>
          </Tab.List>

          <Tab.Panels className="h-[calc(100%-4rem)]">
            <AnimatePresence mode="wait">
              <Tab.Panel className="h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="h-full"
                >
                  <LoginForm onClose={onClose} />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel className="h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="h-full"
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