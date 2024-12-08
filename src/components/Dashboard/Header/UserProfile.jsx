import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../../Auth/AuthContext';
import ProfileModal from '../../Profile/ProfileModal';
import { 
  FiUser, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut,
  FiCreditCard,
  FiShield
} from 'react-icons/fi';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const menuItems = [
    { 
      icon: FiUser, 
      label: 'Profile', 
      action: () => setIsProfileModalOpen(true)
    },
    { icon: FiSettings, label: 'Settings', action: () => {} },
    { icon: FiCreditCard, label: 'Billing', action: () => {} },
    { icon: FiShield, label: 'Privacy', action: () => {} },
    { icon: FiHelpCircle, label: 'Help & Support', action: () => {} },
    { icon: FiLogOut, label: 'Logout', action: logout, danger: true },
  ];

  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-medium">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">View profile</p>
          </div>
        </Menu.Button>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>

            <div className="py-1">
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      onClick={item.action}
                      className={`
                        ${active ? 'bg-gray-50' : ''}
                        ${item.danger ? 'text-red-600' : 'text-gray-700'}
                        group flex items-center w-full px-4 py-2 text-sm
                      `}
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
};

export default UserProfile;