import React from 'react';
import { useField } from 'formik';
import { clsx } from 'clsx';

const FormInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={clsx(
          'w-full px-4 py-2.5 border rounded-lg transition-all duration-200',
          'focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none',
          'hover:border-gray-400',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
      />
      {error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default FormInput;