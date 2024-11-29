import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { 
  ChartBarIcon, 
  BoltIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ChartBarIcon,
    title: 'Real-Time Analytics',
    description: 'Track social conversations and metrics in real-time with our advanced analytics dashboard.',
    color: 'blue'
  },
  {
    icon: BoltIcon,
    title: 'Instant Alerts',
    description: 'Get notified instantly when potential leads or important discussions emerge.',
    color: 'yellow'
  },
  {
    icon: UserGroupIcon,
    title: 'Lead Generation',
    description: 'Convert social interactions into qualified leads with AI-powered intent detection.',
    color: 'green'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Platform',
    description: 'Monitor conversations across all major social platforms from a single dashboard.',
    color: 'purple'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Trend Analysis',
    description: 'Identify emerging trends and patterns in your industry conversations.',
    color: 'pink'
  },
  {
    icon: BellAlertIcon,
    title: 'Smart Notifications',
    description: 'Customizable alerts for keywords, competitors, and market opportunities.',
    color: 'orange'
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Sentiment Analysis',
    description: 'Understand the tone and context of social conversations with AI.',
    color: 'indigo'
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Custom Reports',
    description: 'Generate detailed reports and insights tailored to your needs.',
    color: 'teal'
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features to help you monitor, analyze, and convert social interactions
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-xl hover:bg-secondary transition-colors duration-300"
          >
            Explore All Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;