import { useState, useEffect } from 'react';
import api from '../utils/api';

export const useTrialStatus = () => {
  const [trialStatus, setTrialStatus] = useState({
    daysRemaining: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchTrialStatus = async () => {
      try {
        const response = await api.get('/api/user/trial-status');
        setTrialStatus({
          daysRemaining: response.data.daysRemaining,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setTrialStatus({
          daysRemaining: null,
          isLoading: false,
          error: error.response?.data?.message || 'Failed to fetch trial status'
        });
      }
    };

    fetchTrialStatus();
  }, []);

  return trialStatus;
};