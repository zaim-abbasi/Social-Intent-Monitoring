import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import { FiUser, FiMail, FiLock, FiShield } from 'react-icons/fi';

const BasicInfoStep = ({ formData, updateFormData, errors = {}, touched = {}, isValid }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
        <p className="text-gray-600 text-sm">Join thousands of professionals monitoring social trends</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <FormInput
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            error={errors.name}
            touched={touched.name}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <FormInput
            name="email"
            type="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            error={errors.email}
            touched={touched.email}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
            error={errors.password}
            touched={touched.password}
            className="pl-10"
          />
        </div>

        <div className="relative">
          <FiShield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            className="pl-10"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-auto">
        <p>By creating an account, you agree to our</p>
        <p className="mt-1">
          <a href="#" className="text-primary hover:text-secondary">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-primary hover:text-secondary">Privacy Policy</a>
        </p>
      </div>
    </motion.div>
  );
};

export default BasicInfoStep;