import React from 'react';
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
  const handlePlatformClick = (e, id) => {
    e.preventDefault();
    onSelect(id);
  };

  return (
    <div className="grid grid-cols-2 gap-1.5">
      {platforms.map(({ id, name, icon: Icon, description }) => (
        <button
          key={id}
          type="button"
          onClick={(e) => handlePlatformClick(e, id)}
          className={`p-3 rounded-lg border-2 flex items-center space-x-3 transition-all duration-300 hover:shadow-md ${
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
        </button>
      ))}
    </div>
  );
};

export default PlatformSelector;