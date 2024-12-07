import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiSearch, FiPlus, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const KeywordDropdown = () => {
  const [keywords] = useState([
    'Product Launch',
    'Customer Feedback',
    'Competitor Analysis'
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
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
            {keywords.map((keyword, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <motion.button
                    whileHover={{ x: 4 }}
                    className={`${
                      active ? 'bg-gray-50' : ''
                    } w-full px-4 py-2 text-left flex items-center justify-between`}
                  >
                    <span className="text-sm text-gray-700">{keyword}</span>
                    <FiX className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </motion.button>
                )}
              </Menu.Item>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-gray-100">
            <button className="flex items-center space-x-2 text-sm text-primary hover:text-secondary font-medium">
              <FiPlus className="w-4 h-4" />
              <span>Add new keyword</span>
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default KeywordDropdown;