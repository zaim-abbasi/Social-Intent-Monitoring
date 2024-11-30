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
    description: 'Professional networking'
  },
  { 
    id: 'twitter', 
    name: 'Twitter', 
    icon: FaTwitter, 
    description: 'Real-time conversations'
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    icon: FaGithub, 
    description: 'Developer community'
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
    id: 'stackoverflow', 
    name: 'Stack Overflow', 
    icon: FaStackOverflow, 
    description: 'Developer Q&A'
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
    id: 'discord', 
    name: 'Discord', 
    icon: FaDiscord, 
    description: 'Community chat'
  },
  { 
    id: 'slack', 
    name: 'Slack', 
    icon: FaSlack, 
    description: 'Business communication'
  }
];

const PlatformSelector = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {platforms.map(({ id, name, icon: Icon, description }) => (
        <motion.button
          key={id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(id)}
          className={`p-3 rounded-lg border-2 flex items-center space-x-3 transition-all ${
            selected.includes(id)
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-gray-200 hover:border-primary/30'
          }`}
        >
          <Icon className="text-xl flex-shrink-0" />
          <div className="text-left">
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default PlatformSelector;