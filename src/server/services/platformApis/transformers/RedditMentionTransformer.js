export class RedditMentionTransformer {
  async transformResults(searchResults) {
    try {
      return searchResults.map(result => ({
        id: result.id,
        title: result.title,
        content: result.selftext,
        subreddit: result.subreddit_name_prefixed,
        author: result.author.name,
        score: result.score,
        url: `https://reddit.com${result.permalink}`,
        createdAt: new Date(result.created_utc * 1000),
        sentiment: this.analyzeSentiment(result.title + ' ' + result.selftext)
      }));
    } catch (error) {
      console.error('Error transforming Reddit results:', error);
      throw error;
    }
  }

  analyzeSentiment(text) {
    // Simple sentiment analysis based on keyword matching
    const positiveWords = ['good', 'great', 'awesome', 'excellent', 'love', 'amazing'];
    const negativeWords = ['bad', 'poor', 'terrible', 'hate', 'awful', 'horrible'];

    const words = text.toLowerCase().split(/\s+/);
    let score = 0;

    words.forEach(word => {
      if (positiveWords.includes(word)) score++;
      if (negativeWords.includes(word)) score--;
    });

    if (score > 0) return 'positive';
    if (score < 0) return 'negative';
    return 'neutral';
  }
}