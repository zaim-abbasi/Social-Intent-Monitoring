import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

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
                <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
                  Introducing Social Intent Monitoring
                </span>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
              >
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-white"
                      src={`https://i.pravatar.cc/100?img=${i + 1}`}
                      alt="User avatar"
                    />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold text-black">500+</span> companies already using Trend
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-xl">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-gray-600">
                    <span className="font-semibold text-black">4.9/5</span> rating
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;