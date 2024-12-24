import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import CompanyLogos from './CompanyLogos';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight text-black">
                  Discover Trends 
                  <br />
                  That Matter
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                  Transform social conversations into actionable insights with our
                  AI-powered monitoring platform.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto px-8 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto px-8 py-4 border-2 border-black/10 rounded-xl hover:border-black/20 transition-all duration-300 flex items-center justify-center gap-2 bg-white"
                >
                  <FiPlay className="text-black" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <CompanyLogos />
      </div>
    </div>
  );
};

export default HeroSection;