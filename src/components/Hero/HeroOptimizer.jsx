import React, { memo } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../OptimizedImage';
import { useInView } from 'react-intersection-observer';

const HeroOptimizer = memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen relative"
    >
      {/* Background with reduced opacity and optimized animation */}
      <div className="fixed inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl will-change-transform" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl will-change-transform" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl will-change-transform" />
      </div>

      {/* Content with optimized animations */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight text-black">
              Discover Trends<br />That Matter
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Transform social conversations into actionable insights with our
              AI-powered monitoring platform.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

HeroOptimizer.displayName = 'HeroOptimizer';
export default HeroOptimizer;