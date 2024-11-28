import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: 49,
    features: [
      'Up to 1,000 social mentions/month',
      'Basic analytics dashboard',
      'Email support',
      '2 team members',
      'API access'
    ]
  },
  {
    name: 'Professional',
    description: 'For growing companies',
    price: 99,
    features: [
      'Up to 5,000 social mentions/month',
      'Advanced analytics',
      'Priority support',
      '5 team members',
      'Custom integrations',
      'Lead scoring'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 249,
    features: [
      'Unlimited social mentions',
      'Custom reporting',
      '24/7 dedicated support',
      'Unlimited team members',
      'Custom AI models',
      'White labeling'
    ]
  }
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard
                plan={plan}
                isPopular={index === 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;