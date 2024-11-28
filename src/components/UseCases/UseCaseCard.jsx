import React from 'react';
import { motion } from 'framer-motion';

const UseCaseCard = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="text-2xl text-primary" />
        </div>
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default UseCaseCard;