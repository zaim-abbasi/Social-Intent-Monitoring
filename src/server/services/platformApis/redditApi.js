import Snoowrap from 'snoowrap';
import { redditConfig } from '../../config/redditConfig.js';
import { RedditMentionTransformer } from './transformers/RedditMentionTransformer.js';
import { RedditRateLimiter } from './utils/RedditRateLimiter.js';


// Reddit API class
export class RedditApi {
  constructor() {
    this.client = new Snoowrap({
      userAgent: redditConfig.userAgent,
      clientId: redditConfig.clientId,
      clientSecret: redditConfig.clientSecret,
      refreshToken: redditConfig.refreshToken
    });
    
    this.rateLimiter = new RedditRateLimiter();
    this.transformer = new RedditMentionTransformer();
  }

  async searchMentions(keyword) {
    try {
      await this.rateLimiter.checkLimit();

      const searchResults = await this.client.search({
        query: keyword,
        time: 'week',
        sort: 'relevance',
        limit: 100,
        subreddit: redditConfig.targetSubreddits
      });

      const transformedResults = await this.transformer.transformResults(searchResults);
      
      return transformedResults.length;
    } catch (error) {
      console.error('Reddit API error:', error);
      throw new Error(`Reddit API error: ${error.message}`);
    }
  }

  async getSubredditStats(keyword) {
    try {
      await this.rateLimiter.checkLimit();

      const stats = {};
      for (const subreddit of redditConfig.targetSubreddits) {
        const results = await this.client.getSubreddit(subreddit).search({
          query: keyword,
          time: 'week',
          limit: 100
        });
        stats[subreddit] = results.length;
      }

      return stats;
    } catch (error) {
      console.error('Reddit subreddit stats error:', error);
      throw new Error(`Reddit subreddit stats error: ${error.message}`);
    }
  }
}