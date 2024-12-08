import axios from 'axios';

export class SentimentAnalysisService {
  // Service for analyzing the sentiment of social media posts
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }

  async analyzeSentiment(posts) {
    try {
      // Split posts into batches to avoid exceeding the API's payload limit
      const batchSize = 10;
      const batches = this.splitIntoBatches(posts, batchSize);
      const results = [];

      for (const batch of batches) {
        const batchResults = await this.processBatch(batch);
        results.push(...batchResults);
      }

      return this.aggregateResults(results);
    } catch (error) {
      console.error('Sentiment analysis error:', error);
      throw error;
    }
  }

  private async processBatch(posts) {
    const prompt = this.createAnalysisPrompt(posts);
    
    const response = await axios.post(
      this.endpoint,
      {
        contents: [{
          parts: [{ text: prompt }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      }
    );

    return this.parseResponse(response.data);
  }

  private createAnalysisPrompt(posts) {
    return `
      Analyze the sentiment of the following social media posts. 
      For each post, provide a sentiment score (negative: -1, neutral: 0, positive: 1) 
      and a confidence score (0-1).

      Posts to analyze:
      ${posts.map(post => `"${post.content}"`).join('\n')}

      Provide the analysis in JSON format:
      {
        "results": [
          {
            "sentiment": "positive/neutral/negative",
            "score": number,
            "confidence": number
          }
        ]
      }
    `;
  }

  private parseResponse(response) {
    // Parse Gemini API response and extract sentiment analysis results
    // This is a placeholder for the actual implementation
    return response.candidates[0].content.parts[0].text;
  }

  private aggregateResults(results) {
    let positiveCount = 0;
    let neutralCount = 0;
    let negativeCount = 0;
    let totalConfidence = 0;

    results.forEach(result => {
      if (result.sentiment === 'positive') positiveCount++;
      else if (result.sentiment === 'neutral') neutralCount++;
      else if (result.sentiment === 'negative') negativeCount++;
      totalConfidence += result.confidence;
    });

    const totalPosts = results.length;
    const globalScore = Math.round((
      (positiveCount - negativeCount) / totalPosts + 1
    ) * 50);

    return {
      globalScore,
      positive: positiveCount,
      neutral: neutralCount,
      negative: negativeCount,
      averageConfidence: totalConfidence / totalPosts
    };
  }

  private splitIntoBatches(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  }
}