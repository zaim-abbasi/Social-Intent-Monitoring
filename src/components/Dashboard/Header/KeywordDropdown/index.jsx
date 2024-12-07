import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiSearch } from 'react-icons/fi';
import { useKeywords } from '../../../../hooks/useKeywords';
import KeywordList from './KeywordList';
import KeywordForm from './KeywordForm';

const KeywordDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { keywords, isLoading, addKeyword, removeKeyword } = useKeywords();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <FiSearch className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-700 font-medium">Keywords</span>
        {keywords.length > 0 && (
          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
            {keywords.length}
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

          {isLoading ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              Loading keywords...
            </div>
          ) : (
            <>
              <KeywordList
                keywords={keywords}
                searchTerm={searchTerm}
                onRemove={removeKeyword}
              />
              <KeywordForm onAdd={addKeyword} />
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default KeywordDropdown;