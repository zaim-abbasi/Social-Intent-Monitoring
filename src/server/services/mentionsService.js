import { LinkedInApi } from './platformApis/linkedinApi.js';
import { TwitterApiService } from './platformApis/twitterApi.js';
import { RedditApi } from './platformApis/redditApi.js';

export class MentionsService {
  constructor() {
    this.linkedinApi = new LinkedInApi();
    this.twitterApi = new TwitterApiService();
    this.redditApi = new RedditApi();
  }

  static async getPlatformStats(user) {
    const service = new MentionsService();
    const mentions = {};
    
    for (const platform of user.platforms) {
      const keywords = user.keywords.map(k => k.text);
      mentions[platform.name] = await service.fetchPlatformMentions(platform.name, keywords);
    }
    
    return mentions;
  }

  async fetchPlatformMentions(platform, keywords) {
    try {
      const mentionCounts = await Promise.all(
        keywords.map(keyword => this.fetchMentionsForKeyword(platform, keyword))
      );
      
      // Sum up all mentions for each keyword
      return mentionCounts.reduce((total, count) => total + count, 0);
    } catch (error) {
      console.error(`Error fetching mentions for ${platform}:`, error);
      return 0;
    }
  }

  async fetchMentionsForKeyword(platform, keyword) {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return await this.linkedinApi.searchMentions(keyword);
      case 'twitter':
        return await this.twitterApi.searchMentions(keyword);
      case 'reddit':
        return await this.redditApi.searchMentions(keyword);
      default:
        return 0;
    }
  }
}