import { useState } from 'react';
import { ProfileService } from '../services/profile/profileService';
import { useAuth } from '../components/Auth/AuthContext';
import { toast } from 'react-hot-toast';

export const useProfileUpdate = (onClose) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const updateProfile = async (values) => {
    try {
      setIsSubmitting(true);
      const data = await ProfileService.updateProfile(values);
      
      if (data.token && data.user) {
        await login(data);
        toast.success('Profile updated successfully');
        onClose();
      }
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    updateProfile
  };
};