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
      const response = await axios.post('http://localhost:5000/api/auth/login', values);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      await authLogin({ token, user });
      toast.success('Successfully logged in!');
      onClose();
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.message || 'Failed to login');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', values);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      await authSignup({ token, user });
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