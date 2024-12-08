import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../Auth/components/FormInput';
import api from '../../../utils/api';
import { toast } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Password is required')
});

const PasswordVerification = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      await api.post('/api/user/verify-password', { password: values.password });
      onSuccess();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <Field
            as={FormInput}
            name="password"
            type="password"
            label="Current Password"
            placeholder="Enter your current password"
            error={errors.password}
            touched={touched.password}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Verifying...' : 'Verify Password'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordVerification;