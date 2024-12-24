import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const FormInput = ({ label, error, touched, className, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-xs font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={clsx(
            'w-full px-3 py-1.5 border rounded-lg transition-all duration-200',
            'focus:ring-2 focus:ring-black/20 focus:border-black focus:outline-none',
            'hover:border-gray-300 text-sm',
            error && touched ? 'border-red-500' : 'border-gray-200',
            className
          )}
          {...props}
        />
      </div>
      {error && touched && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default FormInput;