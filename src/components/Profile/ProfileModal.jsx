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
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <p className="text-gray-600 mt-1">Update your profile information</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ProfileEditor user={user} onClose={onClose} />
        </motion.div>
      </div>
    </Modal>
  );
};

export default ProfileModal;