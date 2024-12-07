import { useAuth } from '../../components/Auth/AuthContext';
import { useLatestMentions } from './useLatestMentions';

export const usePlatformStats = () => {
  const { user } = useAuth();
  const { mentions, loading, error } = useLatestMentions();

  const getPlatformStats = () => {
    if (!user?.platforms) {
      return { labels: [], data: [] };
    }

    const platformCounts = user.platforms.reduce((acc, platform) => {
      acc[platform.name] = mentions.filter(m => m.platform === platform.name).length;
      return acc;
    }, {});

    return {
      labels: user.platforms.map(p => p.name),
      data: user.platforms.map(p => platformCounts[p.name] || 0)
    };
  };

  return {
    stats: getPlatformStats(),
    loading,
    error
  };
};