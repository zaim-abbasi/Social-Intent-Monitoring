import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { FiActivity, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: FiActivity,
    title: 'Real-Time Monitoring',
    description: 'Track social conversations as they happen with instant updates and alerts.',
  },
  {
    icon: FiTarget,
    title: 'Lead Generation',
    description: 'Convert social interactions into qualified leads automatically.',
  },
  {
    icon: FiTrendingUp,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights and metrics to measure your social ROI.',
  },
  {
    icon: FiUsers,
    title: 'Audience Insights',
    description: 'Deep understanding of your audience behavior and preferences.',
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to monitor, analyze, and convert social interactions
            into valuable business opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;