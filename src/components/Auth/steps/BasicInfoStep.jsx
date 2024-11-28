import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';

const BasicInfoStep = ({ formData, updateFormData, errors = {}, touched = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
      <FormInput
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
        error={errors.name}
        touched={touched.name}
      />
      <FormInput
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
        error={errors.email}
        touched={touched.email}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => updateFormData({ password: e.target.value })}
        error={errors.password}
        touched={touched.password}
      />
      <FormInput
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
      />
    </motion.div>
  );
};

export default BasicInfoStep;