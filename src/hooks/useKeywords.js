import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';
import { toast } from 'react-hot-toast';

export const useKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchKeywords = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/api/user/keywords');
      setKeywords(response.data.keywords);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch keywords');
      toast.error('Failed to load keywords');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addKeyword = useCallback(async (keyword) => {
    try {
      const response = await api.post('/api/user/keywords', { keyword });
      setKeywords(prev => [...prev, response.data.keyword]);
      toast.success('Keyword added successfully');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add keyword';
      toast.error(message);
      return false;
    }
  }, []);

  const removeKeyword = useCallback(async (keywordId) => {
    try {
      await api.delete(`/api/user/keywords/${keywordId}`);
      setKeywords(prev => prev.filter(k => k._id !== keywordId));
      toast.success('Keyword removed successfully');
      return true;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to remove keyword';
      toast.error(message);
      return false;
    }
  }, []);

  const refreshKeywords = useCallback(() => {
    fetchKeywords();
  }, [fetchKeywords]);

  useEffect(() => {
    fetchKeywords();
  }, [fetchKeywords]);

  return {
    keywords,
    isLoading,
    error,
    addKeyword,
    removeKeyword,
    refreshKeywords
  };
};