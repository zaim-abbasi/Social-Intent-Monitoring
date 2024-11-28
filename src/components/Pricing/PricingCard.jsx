import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ plan, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-white rounded-2xl shadow-xl p-8 relative h-full flex flex-col ${
        isPopular ? 'border-2 border-primary ring-4 ring-primary/10' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="flex items-end justify-center">
          <span className="text-5xl font-bold">${plan.price}</span>
          <span className="text-gray-600 ml-2 mb-1">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FiCheck className="text-green-500 mr-3 text-xl" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
          isPopular
            ? 'bg-primary text-white hover:bg-secondary hover:scale-105 transform'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105 transform'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;