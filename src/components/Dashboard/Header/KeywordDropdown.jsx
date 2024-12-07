import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiSearch, FiPlus, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../utils/api';
import toast from 'react-hot-toast';

const KeywordDropdown = ({ keywords }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');

  const filteredKeywords = keywords?.filter(keyword =>
    keyword.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddKeyword = async (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;

    try {
      const response = await api.post('/api/user/keywords', {
        keyword: newKeyword.trim()
      });
      
      // Update local state with new keyword
      keywords.push(response.data.keyword);
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
      // Remove keyword from local state
      keywords = keywords.filter(k => k._id !== keywordId);
      toast.success('Keyword removed successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to remove keyword');
    }
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <FiSearch className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-700 font-medium">Keywords</span>
      </Menu.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search keywords..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="max-h-64 overflow-y-auto py-2">
            <AnimatePresence>
              {filteredKeywords?.map((keyword) => (
                <motion.div
                  key={keyword._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span className="text-sm text-gray-700">{keyword.text}</span>
                  <button
                    onClick={() => handleRemoveKeyword(keyword._id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="px-4 py-3 border-t border-gray-100">
            {isAdding ? (
              <form onSubmit={handleAddKeyword} className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter new keyword"
                  className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-primary hover:text-secondary"
                >
                  Add
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center space-x-2 text-sm text-primary hover:text-secondary font-medium"
              >
                <FiPlus className="w-4 h-4" />
                <span>Add new keyword</span>
              </button>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default KeywordDropdown;