import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export const useAuthForm = (onClose) => {
  const { login: authLogin, signup: authSignup } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/auth/login', values);
      await authLogin(response.data);
      toast.success('Successfully logged in!');
      onClose();
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to login');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/auth/signup', values);
      await authSignup(response.data);
      toast.success('Account created successfully!');
      onClose();
      navigate('/dashboard');
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