import React from 'react';
import { clsx } from 'clsx';

const FormInput = ({ label, error, touched, className, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'w-full px-4 py-2.5 border rounded-lg transition-all duration-200',
          'focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none',
          'hover:border-gray-400',
          error && touched ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && touched && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default FormInput;