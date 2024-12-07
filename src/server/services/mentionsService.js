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
    const mentionCounts = await Promise.all(
      keywords.map(keyword => this.fetchMentionsForKeyword(platform, keyword))
    );
    
    return Math.max(...mentionCounts);
  }

  async fetchMentionsForKeyword(platform, keyword) {
    switch (platform) {
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