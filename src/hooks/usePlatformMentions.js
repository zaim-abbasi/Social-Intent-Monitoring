import { useState, useEffect } from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import api from '../utils/api';

export const usePlatformMentions = () => {
  const { user } = useAuth();
  const [mentionsData, setMentionsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentionsData = async () => {
      if (!user?.platforms?.length || !user?.keywords?.length) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await api.get('/api/mentions/platform-stats');
        setMentionsData(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch mentions data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentionsData();
  }, [user]);

  return { mentionsData, isLoading, error };
};