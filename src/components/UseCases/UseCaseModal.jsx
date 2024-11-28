import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const UseCaseModal = ({ isOpen, onClose, useCase }) => {
  if (!useCase) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-2xl w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{useCase.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">{useCase.fullDescription}</p>
          <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
          <ul className="list-disc pl-6 space-y-2">
            {useCase.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Modal>
  );
};

export default UseCaseModal;