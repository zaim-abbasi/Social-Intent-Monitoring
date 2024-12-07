import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial from-primary/5 via-transparent to-transparent">
      <div className="absolute inset-0 w-screen bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
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
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Introducing Social Intent Monitoring
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
                Discover {' '}
                <span className="gradient-text">Trends</span>{' '}
                That Matter
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Transform social conversations into actionable insights with our
                AI-powered monitoring platform. Track, analyze, and convert social intent
                into business opportunities.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-8 py-4 border-2 border-gray-200 rounded-xl hover:border-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiPlay className="text-primary" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
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
                <span className="font-semibold text-gray-900">500+</span> companies already using Trend
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-xl">
                  {'★'.repeat(5)}
                </div>
                <span className="text-gray-600">
                  <span className="font-semibold text-gray-900">4.9/5</span> rating
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;