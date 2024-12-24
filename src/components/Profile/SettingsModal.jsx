import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { FiX, FiSun, FiMoon, FiGlobe, FiBell } from 'react-icons/fi';

const SettingsModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-full max-w-md max-h-[600px] overflow-hidden shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h2 className="text-base font-semibold text-black">Settings</h2>
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
          className="flex-1 overflow-y-auto custom-scrollbar p-3"
        >
          {/* Appearance Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/5 p-2.5 rounded-lg mb-2.5"
          >
            <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-black/10">
              <div className="flex items-center space-x-2">
                <FiSun className="text-black w-3.5 h-3.5" />
                <span className="text-sm text-gray-700">Theme</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <button className="p-1.5 rounded-lg bg-white border border-black/10 text-gray-700 hover:border-black/20 transition-colors">
                  <FiSun className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 rounded-lg bg-white border border-black/10 text-gray-700 hover:border-black/20 transition-colors">
                  <FiMoon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Language Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/5 p-2.5 rounded-lg mb-2.5"
          >
            <div className="flex items-center space-x-2 bg-white rounded-lg p-2 border border-black/10">
              <FiGlobe className="text-black w-3.5 h-3.5" />
              <select className="flex-1 bg-transparent border-none text-sm text-gray-700 focus:ring-0 appearance-none cursor-pointer">
                <option value="en">English (US)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </motion.div>

          {/* Notifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/5 p-2.5 rounded-lg"
          >
            {['Email Notifications', 'Push Notifications'].map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg p-2 border border-black/10 mb-1.5 last:mb-0">
                <div className="flex items-center space-x-2">
                  <FiBell className="text-black w-3.5 h-3.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-end space-x-2 mt-4 mb-4 pt-3 px-4 border-t border-gray-100">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-black bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-4 py-2 text-xs font-medium text-white bg-black rounded-lg hover:bg-black/90 transition-colors"
          >
            Save Changes
          </motion.button>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;