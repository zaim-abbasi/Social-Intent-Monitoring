import { useState, useEffect } from 'react';
import { useAuth } from '../../components/Auth/AuthContext';
import api from '../../utils/api';

export const useLatestMentions = () => {
  const [mentions, setMentions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMentions = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/mentions');
        setMentions(response.data.mentions);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch mentions');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchMentions();
    }
  }, [user]);

  return {
    mentions,
    loading,
    error
  };
};