import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginModal from '../Auth/LoginModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl md:text-4xl font-display font-extrabold gradient-text tracking-tight">
            Trend
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Features', 'Use Cases', 'Pricing', 'Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 text-lg tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setShowLoginModal(true)}
              className="btn-secondary text-lg font-medium hover:scale-105 transition-transform duration-200"
            >
              Login
            </button>
            <button className="btn-primary text-lg font-medium hover:scale-105 transition-transform duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </motion.nav>
  );
};

export default Navbar;