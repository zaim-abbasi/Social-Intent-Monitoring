import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingOptimizer = memo(({ plan, isPopular, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl p-8 h-full flex flex-col group transition-all duration-300 will-change-transform ${
        isPopular 
          ? 'border-2 border-black shadow-xl' 
          : 'border border-black/10 hover:border-black/30 hover:shadow-lg'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="flex items-end justify-center">
          <span className="text-5xl font-bold text-black">${plan.price}</span>
          <span className="text-gray-600 ml-2 mb-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <span className="w-5 h-5 bg-black/5 rounded-full flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-black" viewBox="0 0 12 12">
                <path
                  d="M3.5 6.5L5 8L8.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

PricingOptimizer.displayName = 'PricingOptimizer';
export default PricingOptimizer;