import React from 'react';
import { motion } from 'framer-motion';

const UseCaseCard = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="flex items-center mb-6">
        <div className="bg-primary/10 p-4 rounded-xl">
          <Icon className="text-3xl text-primary" />
        </div>
        <h3 className="text-2xl font-semibold ml-6">{title}</h3>
      </div>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default UseCaseCard;