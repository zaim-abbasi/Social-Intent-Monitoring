import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import PasswordVerification from './steps/PasswordVerification';
import ProfileEditor from './steps/ProfileEditor';
import { useAuth } from '../Auth/AuthContext';
import { FiX } from 'react-icons/fi';

const ProfileModal = ({ isOpen, onClose }) => {
  const [isVerified, setIsVerified] = useState(false);
  const { user } = useAuth();

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  const handleClose = () => {
    setIsVerified(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <p className="text-gray-600 mt-1">
            {isVerified
              ? "Update your profile information"
              : "Please verify your password to continue"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isVerified ? (
            <motion.div
              key="verification"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PasswordVerification onSuccess={handleVerificationSuccess} />
            </motion.div>
          ) : (
            <motion.div
              key="editor"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ProfileEditor user={user} onClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};

export default ProfileModal;