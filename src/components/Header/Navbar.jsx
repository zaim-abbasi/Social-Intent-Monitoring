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
          <div className="text-2xl font-display font-bold gradient-text">Trend</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#use-cases" className="hover:text-primary transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowLoginModal(true)}
              className="btn-secondary"
            >
              Login
            </button>
            <button className="btn-primary">
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