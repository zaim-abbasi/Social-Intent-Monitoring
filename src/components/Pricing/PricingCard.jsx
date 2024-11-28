import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-white rounded-2xl shadow-xl p-8 relative ${
        isPopular ? 'border-2 border-primary' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="flex items-end justify-center">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FiCheck className="text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isPopular
            ? 'bg-primary text-white hover:bg-secondary'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;