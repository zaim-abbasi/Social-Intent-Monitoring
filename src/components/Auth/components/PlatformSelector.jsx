import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaTwitter, FaGithub, FaMedium, 
  FaReddit, FaStackOverflow, FaYoutube, FaInstagram,
  FaDiscord, FaSlack 
} from 'react-icons/fa';

const platforms = [
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    type: 'Free API',
    description: 'Professional networking platform'
  },
  { 
    id: 'twitter', 
    name: 'Twitter', 
    icon: FaTwitter, 
    type: 'Paid API',
    description: 'Real-time social conversations'
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    icon: FaGithub, 
    type: 'Free API',
    description: 'Developer community platform'
  },
  { 
    id: 'medium', 
    name: 'Medium', 
    icon: FaMedium, 
    type: 'Limited API',
    description: 'Professional content platform'
  },
  { 
    id: 'reddit', 
    name: 'Reddit', 
    icon: FaReddit, 
    type: 'Free API',
    description: 'Community discussions platform'
  },
  { 
    id: 'stackoverflow', 
    name: 'Stack Overflow', 
    icon: FaStackOverflow, 
    type: 'Free API',
    description: 'Developer Q&A platform'
  },
  { 
    id: 'youtube', 
    name: 'YouTube', 
    icon: FaYoutube, 
    type: 'Free API',
    description: 'Video content platform'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: FaInstagram, 
    type: 'Paid API',
    description: 'Visual content platform'
  },
  { 
    id: 'discord', 
    name: 'Discord', 
    icon: FaDiscord, 
    type: 'Free API',
    description: 'Community chat platform'
  },
  { 
    id: 'slack', 
    name: 'Slack', 
    icon: FaSlack, 
    type: 'Paid API',
    description: 'Business communication platform'
  }
];

const PlatformSelector = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {platforms.map(({ id, name, icon: Icon, type, description }) => (
        <motion.button
          key={id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(id)}
          className={`p-4 rounded-lg border-2 flex flex-col items-start space-y-2 transition-all ${
            selected.includes(id)
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-gray-200 hover:border-primary/30'
          }`}
        >
          <div className="flex items-center space-x-3 w-full">
            <Icon className="text-xl" />
            <span className="font-medium">{name}</span>
            <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
              type === 'Free API' 
                ? 'bg-green-100 text-green-700'
                : type === 'Paid API'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {type}
            </span>
          </div>
          <p className="text-sm text-gray-600 text-left">{description}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default PlatformSelector;