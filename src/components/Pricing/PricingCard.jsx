import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col group ${
        isPopular ? 'border-2 border-primary ring-4 ring-primary/10' : ''
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      <div className="relative text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="flex items-end justify-center">
          <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
          <span className="text-gray-600 ml-2 mb-2">/month</span>
        </div>
      </div>

      <ul className="relative space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center group/feature"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 group-hover/feature:bg-primary/20 transition-colors">
              <FiCheck className="text-primary" />
            </span>
            <span className="text-gray-700">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
          isPopular
            ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;