import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaTwitter, FaMedium, 
  FaReddit, FaStackOverflow, FaYoutube, 
  FaInstagram, FaSlack 
} from 'react-icons/fa';

const platforms = [
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    description: 'Professional networking'
  },
  { 
    id: 'twitter', 
    name: 'Twitter', 
    icon: FaTwitter, 
    description: 'Real-time conversations'
  },
  { 
    id: 'medium', 
    name: 'Medium', 
    icon: FaMedium, 
    description: 'Professional content'
  },
  { 
    id: 'reddit', 
    name: 'Reddit', 
    icon: FaReddit, 
    description: 'Community discussions'
  },
  { 
    id: 'youtube', 
    name: 'YouTube', 
    icon: FaYoutube, 
    description: 'Video content'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: FaInstagram, 
    description: 'Visual content'
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    icon: FaStackOverflow,
    description: 'Programming Q&A'
  },
  { 
    id: 'slack', 
    name: 'Slack', 
    icon: FaSlack, 
    description: 'Team collaboration'
  }
];

const PlatformSelector = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {platforms.map(({ id, name, icon: Icon, description }) => {
        const isSelected = selected.includes(id);
        
        return (
          <motion.button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative p-2 rounded-xl flex items-center space-x-3 transition-all duration-300
              ${isSelected
                ? 'ring-2 ring-black bg-black/5 text-black'
                : 'border border-gray-200 hover:border-black/30 text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center
              ${isSelected ? 'bg-black/10' : 'bg-gray-100'}
            `}>
              <Icon className={`text-xl ${isSelected ? 'text-black' : ''}`} />
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className={`font-medium text-sm truncate ${isSelected ? 'text-black' : 'text-gray-900'}`}>
                {name}
              </p>
              <p className="text-xs text-gray-500 truncate">{description}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default PlatformSelector;