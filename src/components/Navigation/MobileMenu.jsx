import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import NavLinks from './NavLinks';
import { AuthButtons } from './AuthButtons';

const MobileMenu = ({ isOpen, onToggle, user, onAuthClick }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="p-2 rounded-xl hover:bg-black/5 transition-colors"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-b-2xl p-4"
          >
            <NavLinks className="flex flex-col space-y-1" />
            <div className="mt-4 pt-4 border-t border-gray-100">
              <AuthButtons 
                className="flex flex-col space-y-2 w-full"
                user={user}
                onAuthClick={(tab) => {
                  onAuthClick(tab);
                  onToggle();
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;