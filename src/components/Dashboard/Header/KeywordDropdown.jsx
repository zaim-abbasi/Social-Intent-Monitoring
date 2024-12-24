import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../Auth/AuthContext';
import api from '../../../utils/api';
import toast from 'react-hot-toast';

const KeywordDropdown = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const { user } = useAuth();

  const keywords = user?.keywords || [];

  const handleAddKeyword = async (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;

    if (keywords.length >= 3) {
      toast.error('Maximum 3 keywords allowed');
      return;
    }

    try {
      const response = await api.post('/api/user/keywords', {
        keyword: newKeyword.trim()
      });
      
      if (user) {
        user.keywords = [...keywords, response.data.keyword];
      }
      setNewKeyword('');
      setIsAdding(false);
      toast.success('Keyword added successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add keyword');
    }
  };

  const handleRemoveKeyword = async (keywordId) => {
    try {
      await api.delete(`/api/user/keywords/${keywordId}`);
      if (user) {
        user.keywords = keywords.filter(k => k._id !== keywordId);
      }
      toast.success('Keyword removed successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to remove keyword');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddKeyword(e);
    } else if (e.key === 'Escape') {
      setIsAdding(false);
      setNewKeyword('');
    }
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <span className="text-sm text-gray-700 font-medium">Keywords</span>
        {keywords.length > 0 && (
          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
            {keywords.length}/3
          </span>
        )}
      </Menu.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <h3 className="font-medium text-gray-900">Your Keywords</h3>
            {keywords.length < 3 && (
              <button
                onClick={() => setIsAdding(true)}
                className="text-sm font-medium text-black hover:text-black/70 transition-colors"
              >
                Add keyword
              </button>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto py-2 no-scrollbar">
            {isAdding && (
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Press Enter to add keyword"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black"
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
            )}
            
            <AnimatePresence>
              {keywords.map((keyword) => (
                <motion.div
                  key={keyword._id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="px-4 py-2"
                >
                  <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 group hover:bg-gray-100 transition-colors">
                    <span className="text-sm text-gray-700">{keyword.text}</span>
                    <button
                      onClick={() => handleRemoveKeyword(keyword._id)}
                      className="text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {keywords.length === 0 && !isAdding && (
              <div className="px-4 py-8 text-center">
                <p className="text-sm text-gray-500 font-medium">No keywords added yet</p>
                <p className="text-xs text-gray-400 mt-1">Add keywords to start monitoring</p>
              </div>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default KeywordDropdown;