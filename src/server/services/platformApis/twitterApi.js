import { TwitterApi } from 'twitter-api-v2';

export class TwitterApiService {
  constructor() {
    this.client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });
  }

  async searchMentions(keyword) {
    try {
      const result = await this.client.v2.search(keyword, {
        'tweet.fields': ['created_at'],
        'start_time': new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        max_results: 100,
      });

      return result.data?.length || 0;
    } catch (error) {
      console.error('Twitter API error:', error);
      return 0;
    }
  }
}