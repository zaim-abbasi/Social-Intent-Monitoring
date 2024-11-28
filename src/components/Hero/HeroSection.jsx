import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial from-primary/5 via-transparent to-transparent">
      <div className="absolute inset-0 w-screen bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            Discover Social{' '}
            <span className="gradient-text">Trends</span>{' '}
            That Matter
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Transform social conversations into actionable insights with our
            AI-powered monitoring platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto text-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto text-lg"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;