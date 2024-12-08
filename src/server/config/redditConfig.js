export const redditConfig = {
  userAgent: 'trend-monitor',
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  
  // Subreddits to monitor
  targetSubreddits: [
    // Add the subreddits you want to monitor here
    'technology',
    'programming',
    'webdev',
    'javascript',
    'reactjs',
    'nodejs'
  ],
  
  // API rate limiting
  rateLimit: {
    maxRequests: 60,
    timeWindow: 60 * 1000 // 1 minute
  }
};