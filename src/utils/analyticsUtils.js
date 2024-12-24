// Engagement Rate calculation
export const calculateEngagementRate = (interactions, followers) => {
  // Calculate engagement rate based on interactions and followers
  // Interactions include likes, comments, shares, etc.
  const totalInteractions = interactions.reduce((sum, interaction) => sum + interaction, 0);
  return (totalInteractions / followers) * 100;
};

// Trend Score calculation
export const calculateTrendScore = (metrics) => {
  const {
    mentionGrowth, // Percentage growth in mentions
    sentimentScore, // Average sentiment score (-1 to 1)
    engagementRate, // Current engagement rate
    reachGrowth, // Percentage growth in reach
    shareOfVoice // Percentage of industry conversation
  } = metrics;

  // Weights for different factors
  const weights = {
    mentionGrowth: 0.25,
    sentiment: 0.2,
    engagement: 0.25,
    reach: 0.15,
    shareOfVoice: 0.15
  };

  // Normalize scores to 0-100 range
  const normalizedScores = {
    mentionGrowth: Math.min(100, Math.max(0, mentionGrowth * 2)),
    sentiment: ((sentimentScore + 1) / 2) * 100,
    engagement: Math.min(100, engagementRate * 2),
    reach: Math.min(100, Math.max(0, reachGrowth * 2)),
    shareOfVoice: Math.min(100, shareOfVoice)
  };

  // Calculate weighted score
  const trendScore = 
    (normalizedScores.mentionGrowth * weights.mentionGrowth) +
    (normalizedScores.sentiment * weights.sentiment) +
    (normalizedScores.engagement * weights.engagement) +
    (normalizedScores.reach * weights.reach) +
    (normalizedScores.shareOfVoice * weights.shareOfVoice);

  return Math.round(trendScore);
};

// Daily metrics update
export const updateDailyMetrics = async (userId) => {
  try {
    // Fetch today's metrics
    const todayMetrics = await fetchTodayMetrics(userId);
    
    // Calculate new engagement rate
    const engagementRate = calculateEngagementRate(
      todayMetrics.interactions,
      todayMetrics.followers
    );

    // Calculate new trend score
    const trendScore = calculateTrendScore({
      mentionGrowth: todayMetrics.mentionGrowth,
      sentimentScore: todayMetrics.averageSentiment,
      engagementRate,
      reachGrowth: todayMetrics.reachGrowth,
      shareOfVoice: todayMetrics.shareOfVoice
    });

    // Store updated metrics
    await storeDailyMetrics(userId, {
      date: new Date(),
      engagementRate,
      trendScore,
      // Additional metrics...
    });

    return {
      engagementRate,
      trendScore
    };
  } catch (error) {
    console.error('Error updating daily metrics:', error);
    throw error;
  }
};

// Helper function to fetch today's metrics (to be implemented)
const fetchTodayMetrics = async (userId) => {
  // Implementation would fetch real metrics from your backend
  return {
    interactions: [100, 50, 75], // likes, comments, shares
    followers: 1000,
    mentionGrowth: 0.25,
    averageSentiment: 0.6,
    reachGrowth: 0.15,
    shareOfVoice: 35
  };
};

// Helper function to store daily metrics (to be implemented)
const storeDailyMetrics = async (userId, metrics) => {
  // Implementation would store metrics in your database
  console.log('Storing metrics for user:', userId, metrics);
};