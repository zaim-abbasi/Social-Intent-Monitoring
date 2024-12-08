import axios from 'axios';
import { createAnalysisPrompt } from './prompts';
import { parseGeminiResponse, aggregateResults } from './utils';
import { splitIntoBatches } from '../../utils/arrayUtils';

// Service for analyzing the sentiment of social media posts
export class SentimentAnalysisService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }

  async analyzeSentiment(posts) {
    try {
      // Split posts into batches to avoid exceeding the API's payload limit
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
    // Generate a prompt for the analysis
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
    // Parse the response from the Gemini API

    return parseGeminiResponse(response.data);
  }
}