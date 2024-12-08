import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative bg-white rounded-2xl p-8 h-full flex flex-col group transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-black shadow-xl' 
          : 'border border-black/10 hover:border-black/30 hover:shadow-lg'
      }`}
    >
      {/* Popular badge */}
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
            className="flex items-center group/feature"
          >
            <span className="flex-shrink-0 w-5 h-5 bg-black/5 rounded-full flex items-center justify-center mr-3 group-hover/feature:bg-black/10 transition-colors">
              <FiCheck className="w-3 h-3 text-black" />
            </span>
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
          isPopular
            ? 'bg-black text-white hover:bg-black/90'
            : 'bg-black/5 text-black hover:bg-black/10'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;