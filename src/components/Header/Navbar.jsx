import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../Auth/AuthContext';
import AuthModal from '../Auth/AuthModal';
import { FiHome, FiGrid, FiTarget, FiDollarSign, FiBook, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', icon: FiHome, href: '#home' },
  { label: 'Features', icon: FiGrid, href: '#features' },
  { label: 'Use Cases', icon: FiTarget, href: '#use-cases' },
  { label: 'Pricing', icon: FiDollarSign, href: '#pricing' },
  { label: 'Resources', icon: FiBook, href: '#resources' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [initialAuthTab, setInitialAuthTab] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-3xl md:text-4xl font-display font-extrabold text-black tracking-tight">
              Trend
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:text-black hover:bg-black/5 transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-sm text-gray-700 font-medium">
                  {user.name}
                </span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAuthClick('login')}
                  className="px-4 py-2 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAuthClick('signup')}
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-black/5 transition-colors md:hidden"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg rounded-b-2xl p-4 md:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-black/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              {!user && (
                <div className="grid gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      handleAuthClick('login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-black bg-black/5 rounded-xl hover:bg-black/10 transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      handleAuthClick('signup');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialTab={initialAuthTab}
      />
    </motion.nav>
  );
}

export default Navbar;