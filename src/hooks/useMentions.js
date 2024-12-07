import { useState, useEffect } from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import api from '../utils/api';

export const useMentions = () => {
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

  const getMentionsByPlatform = () => {
    const platformCounts = user?.platforms.reduce((acc, platform) => {
      acc[platform.name] = mentions.filter(m => m.platform === platform.name).length;
      return acc;
    }, {});

    return {
      labels: user?.platforms.map(p => p.name) || [],
      data: user?.platforms.map(p => platformCounts[p.name] || 0) || []
    };
  };

  return {
    mentions,
    loading,
    error,
    getMentionsByPlatform
  };
};