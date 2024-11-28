import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
    >
      <div className="text-primary text-4xl mb-6">
        <Icon />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;