import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { toast } from 'react-hot-toast';

export const useAuthForm = (onClose) => {
  const { login, signup } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (values) => {
    setIsSubmitting(true);
    try {
      await login(values);
      toast.success('Successfully logged in!');
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to login');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (values) => {
    setIsSubmitting(true);
    try {
      await signup(values);
      toast.success('Account created successfully!');
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create account');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleLogin,
    handleSignup
  };
};