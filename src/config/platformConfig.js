import { 
  FiTwitter, 
  FiLinkedin, 
  FiGithub,
  FiMessageSquare
} from 'react-icons/fi';
import { 
  FaReddit, 
  FaMedium, 
  FaStackOverflow,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaSlack
} from 'react-icons/fa';

export const platformConfig = {
  twitter: {
    name: 'Twitter',
    color: {
      line: 'rgb(99, 102, 241)',
      fill: 'rgba(99, 102, 241, 0.1)',
      bar: 'rgba(99, 102, 241, 0.9)',
      barHover: 'rgba(99, 102, 241, 1)',
      text: 'text-blue-500',
      bgLight: 'bg-blue-50'
    },
    icon: FiTwitter
  },
  linkedin: {
    name: 'LinkedIn',
    color: {
      line: 'rgb(79, 70, 229)',
      fill: 'rgba(79, 70, 229, 0.1)',
      bar: 'rgba(79, 70, 229, 0.9)',
      barHover: 'rgba(79, 70, 229, 1)',
      text: 'text-blue-700',
      bgLight: 'bg-blue-50'
    },
    icon: FiLinkedin
  },
  reddit: {
    name: 'Reddit',
    color: {
      line: 'rgb(236, 72, 153)',
      fill: 'rgba(236, 72, 153, 0.1)',
      bar: 'rgba(236, 72, 153, 0.9)',
      barHover: 'rgba(236, 72, 153, 1)',
      text: 'text-orange-500',
      bgLight: 'bg-orange-50'
    },
    icon: FaReddit
  },
  youtube: {
    name: 'YouTube',
    color: {
      line: 'rgb(255, 0, 0)',
      fill: 'rgba(255, 0, 0, 0.1)',
      bar: 'rgba(255, 0, 0, 0.9)',
      barHover: 'rgba(255, 0, 0, 1)',
      text: 'text-red-500',
      bgLight: 'bg-red-50'
    },
    icon: FaYoutube
  },
  medium: {
    name: 'Medium',
    color: {
      line: 'rgb(0, 0, 0)',
      fill: 'rgba(0, 0, 0, 0.1)',
      bar: 'rgba(0, 0, 0, 0.9)',
      barHover: 'rgba(0, 0, 0, 1)',
      text: 'text-gray-900',
      bgLight: 'bg-gray-50'
    },
    icon: FaMedium
  },
  stackoverflow: {
    name: 'Stack Overflow',
    color: {
      line: 'rgb(255, 114, 51)',
      fill: 'rgba(255, 114, 51, 0.1)',
      bar: 'rgba(255, 114, 51, 0.9)',
      barHover: 'rgba(255, 114, 51, 1)',
      text: 'text-orange-500',
      bgLight: 'bg-orange-50'
    },
    icon: FaStackOverflow
  },
  instagram: {
    name: 'Instagram',
    color: {
      line: 'rgb(131, 58, 180)',
      fill: 'rgba(131, 58, 180, 0.1)',
      bar: 'rgba(131, 58, 180, 0.9)',
      barHover: 'rgba(131, 58, 180, 1)',
      text: 'text-pink-600',
      bgLight: 'bg-pink-50'
    },
    icon: FaInstagram
  },
  discord: {
    name: 'Discord',
    color: {
      line: 'rgb(88, 101, 242)',
      fill: 'rgba(88, 101, 242, 0.1)',
      bar: 'rgba(88, 101, 242, 0.9)',
      barHover: 'rgba(88, 101, 242, 1)',
      text: 'text-indigo-500',
      bgLight: 'bg-indigo-50'
    },
    icon: FaDiscord
  },
  slack: {
    name: 'Slack',
    color: {
      line: 'rgb(97, 212, 195)',
      fill: 'rgba(97, 212, 195, 0.1)',
      bar: 'rgba(97, 212, 195, 0.9)',
      barHover: 'rgba(97, 212, 195, 1)',
      text: 'text-teal-500',
      bgLight: 'bg-teal-50'
    },
    icon: FaSlack
  }
};