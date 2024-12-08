import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import { FiUser, FiLock, FiShield, FiMail } from 'react-icons/fi';

const BasicInfoStep = ({ formData, updateFormData, errors = {}, touched = {}, isValid }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-black mb-3">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-base font-medium">
          Join thousands of professionals monitoring social trends
        </p>
      </div>

      <div className="space-y-5">
        <div className="relative group">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-200 z-10" />
          <FormInput
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            error={errors.name}
            touched={touched.name}
            className="pl-11 w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white hover:border-primary/30 transition-all duration-300"
          />
        </div>

        <div className="relative group">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-200 z-10" />
          <FormInput
            name="email"
            type="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            error={errors.email}
            touched={touched.email}
            className="pl-11 w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white hover:border-primary/30 transition-all duration-300"
          />
        </div>

        <div className="relative group">
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-200 z-10" />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
            error={errors.password}
            touched={touched.password}
            className="pl-11 w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white hover:border-primary/30 transition-all duration-300"
          />
        </div>

        <div className="relative group">
          <FiShield className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-200 z-10" />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            className="pl-11 w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white hover:border-primary/30 transition-all duration-300"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p className="font-medium">By creating an account, you agree to our</p>
        <p className="mt-1">
          <a href="#" className="text-primary hover:text-secondary font-semibold transition-colors">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-primary hover:text-secondary font-semibold transition-colors">Privacy Policy</a>
        </p>
      </div>
    </motion.div>
  );
};

export default BasicInfoStep;