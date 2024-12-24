import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../Auth/AuthContext';
import AuthModal from '../Auth/AuthModal';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import { Logo } from './Logo';
import { AuthButtons } from './AuthButtons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [initialAuthTab, setInitialAuthTab] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = (tab) => {
    setInitialAuthTab(tab);
    setShowAuthModal(true);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <NavLinks className="hidden lg:flex" />
          
          {/* Auth Buttons */}
          <AuthButtons 
            className="hidden lg:flex" 
            user={user} 
            onAuthClick={handleAuthClick} 
          />

          {/* Mobile Menu Button */}
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            user={user}
            onAuthClick={handleAuthClick}
          />
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialTab={initialAuthTab}
      />
    </motion.nav>
  );
};

export default Navbar;