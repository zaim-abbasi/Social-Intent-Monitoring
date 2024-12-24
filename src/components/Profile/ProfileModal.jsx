import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import ProfileEditor from './steps/ProfileEditor';
import { useAuth } from '../Auth/AuthContext';
import { FiX } from 'react-icons/fi';

const ProfileModal = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-full max-w-md max-h-[600px] overflow-hidden shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h2 className="text-base font-semibold text-black">Profile Settings</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex-1 overflow-y-auto"
        >
          <ProfileEditor user={user} onClose={onClose} />
        </motion.div>
      </div>
    </Modal>
  );
};

export default ProfileModal;