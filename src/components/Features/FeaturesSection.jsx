import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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
    color: 'bg-blue-50'
  },
  {
    icon: BoltIcon,
    title: 'Instant Alerts',
    description: 'Get notified instantly when potential leads or important discussions emerge.',
    color: 'bg-yellow-50'
  },
  {
    icon: UserGroupIcon,
    title: 'Lead Generation',
    description: 'Convert social interactions into qualified leads with AI-powered intent detection.',
    color: 'bg-green-50'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Platform',
    description: 'Monitor conversations across all major social platforms from a single dashboard.',
    color: 'bg-purple-50'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Trend Analysis',
    description: 'Identify emerging trends and patterns in your industry conversations.',
    color: 'bg-pink-50'
  },
  {
    icon: BellAlertIcon,
    title: 'Smart Notifications',
    description: 'Customizable alerts for keywords, competitors, and market opportunities.',
    color: 'bg-orange-50'
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Sentiment Analysis',
    description: 'Understand the tone and context of social conversations with AI.',
    color: 'bg-indigo-50'
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Custom Reports',
    description: 'Generate detailed reports and insights tailored to your needs.',
    color: 'bg-teal-50'
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
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
              className="group relative bg-white p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="w-6 h-6 text-black/80" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;