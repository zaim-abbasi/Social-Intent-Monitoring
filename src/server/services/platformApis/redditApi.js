import Snoowrap from 'snoowrap';

export class RedditApi {
  constructor() {
    this.client = new Snoowrap({
      userAgent: 'trend-monitor',
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      refreshToken: process.env.REDDIT_REFRESH_TOKEN
    });
  }

  async searchMentions(keyword) {
    try {
      const searchResults = await this.client.search({
        query: keyword,
        time: 'week',
        limit: 100
      });

      return searchResults.length;
    } catch (error) {
      console.error('Reddit API error:', error);
      return 0;
    }
  }
}