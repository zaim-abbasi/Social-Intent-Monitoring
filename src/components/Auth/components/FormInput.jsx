import React from 'react';

const FormInput = ({ label, error, touched, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
          error && touched ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && touched && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default FormInput;