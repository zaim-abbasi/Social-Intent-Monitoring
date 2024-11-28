import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiBookOpen } from 'react-icons/fi';

const platforms = [
  { id: 'linkedin', name: 'LinkedIn', icon: FiLinkedin },
  { id: 'twitter', name: 'Twitter', icon: FiTwitter },
  { id: 'reddit', name: 'Reddit', icon: FiGithub },
  { id: 'medium', name: 'Medium', icon: FiBookOpen },
];

const PlatformSelector = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {platforms.map(({ id, name, icon: Icon }) => (
        <motion.button
          key={id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(id)}
          className={`p-4 rounded-lg border flex items-center space-x-2 ${
            selected.includes(id)
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-gray-200 hover:border-primary/50'
          }`}
        >
          <Icon className="text-xl" />
          <span>{name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default PlatformSelector;