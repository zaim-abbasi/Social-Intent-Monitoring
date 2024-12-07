import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FiSearch } from 'react-icons/fi';

const KeywordDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100">
        <FiSearch className="w-5 h-5 text-gray-500" />
        <span className="text-gray-700">Keywords</span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-2 z-50">
        <div className="p-2">
          <input
            type="text"
            placeholder="Search keywords..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="max-h-64 overflow-y-auto">
          {/* Placeholder for keyword list */}
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100' : ''
                } w-full text-left px-3 py-2 rounded-lg`}
              >
                Example Keyword
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default KeywordDropdown;