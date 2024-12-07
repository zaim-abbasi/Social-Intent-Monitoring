import React from 'react';
import { Menu } from '@headlessui/react';
import { useAuth } from '../../Auth/AuthContext';
import { FiUser, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <FiUser className="text-primary" />
        </div>
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
        <div className="px-4 py-2 border-b">
          <p className="font-medium text-gray-900">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-100' : ''
              } flex items-center space-x-2 w-full px-4 py-2 text-gray-700`}
            >
              <FiSettings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-100' : ''
              } flex items-center space-x-2 w-full px-4 py-2 text-gray-700`}
            >
              <FiHelpCircle className="w-4 h-4" />
              <span>Help & Support</span>
            </button>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <button
              onClick={logout}
              className={`${
                active ? 'bg-gray-100' : ''
              } flex items-center space-x-2 w-full px-4 py-2 text-red-600`}
            >
              <FiLogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default UserProfile;