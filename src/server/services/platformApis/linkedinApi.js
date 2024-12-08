import { LinkedInClient } from 'linkedin-api-client';

// LinkedIn API client
export class LinkedInApi {
  constructor() {
    this.client = new LinkedInClient({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      accessToken: process.env.LINKEDIN_ACCESS_TOKEN
    });
  }

  async searchMentions(keyword) {
    try {
      const response = await this.client.search.search({
        q: keyword,
        type: ['CONTENT'],
        timeframe: 'PAST_WEEK'
      });
      
      return response.elements?.length || 0;
    } catch (error) {
      console.error('LinkedIn API error:', error);
      return 0;
    }
  }
}