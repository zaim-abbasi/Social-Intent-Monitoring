import axios from 'axios';
import { createAnalysisPrompt } from './prompts';
import { parseGeminiResponse, aggregateResults } from './utils';
import { splitIntoBatches } from '../../utils/arrayUtils';

export class SentimentAnalysisService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }

  async analyzeSentiment(posts) {
    try {
      const batchSize = 10;
      const batches = splitIntoBatches(posts, batchSize);
      const results = [];

      for (const batch of batches) {
        const batchResults = await this.processBatch(batch);
        results.push(...batchResults);
      }

      return aggregateResults(results);
    } catch (error) {
      console.error('Sentiment analysis error:', error);
      throw error;
    }
  }

  async processBatch(posts) {
    const prompt = createAnalysisPrompt(posts);
    
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

    return parseGeminiResponse(response.data);
  }
}