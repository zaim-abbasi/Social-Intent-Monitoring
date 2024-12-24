import React from 'react';
import { FiHome, FiGrid, FiTarget, FiDollarSign, FiBook } from 'react-icons/fi';

const navItems = [
  { label: 'Home', icon: FiHome, href: '#home' },
  { label: 'Features', icon: FiGrid, href: '#features' },
  { label: 'Use Cases', icon: FiTarget, href: '#use-cases' },
  { label: 'Pricing', icon: FiDollarSign, href: '#pricing' },
  { label: 'Resources', icon: FiBook, href: '#resources' }
];

const NavLinks = ({ className = '' }) => {
  return (
    <div className={`items-center space-x-1 ${className}`}>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 hover:text-black hover:bg-black/5 transition-all duration-200"
        >
          <item.icon className="w-4 h-4" />
          <span className="text-sm font-medium">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavLinks;