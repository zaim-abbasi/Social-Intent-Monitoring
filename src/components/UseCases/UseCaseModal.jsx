import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const UseCaseModal = ({ isOpen, onClose, useCase }) => {
  if (!useCase) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl border border-black/5"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">{useCase.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6 text-gray-600">{useCase.fullDescription}</p>
          <h3 className="text-xl font-semibold mb-4 text-black">Key Benefits</h3>
          <ul className="space-y-3">
            {useCase.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-600"
              >
                <span className="w-2 h-2 bg-black rounded-full mr-3" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-colors"
          >
            Got it
          </motion.button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default UseCaseModal;