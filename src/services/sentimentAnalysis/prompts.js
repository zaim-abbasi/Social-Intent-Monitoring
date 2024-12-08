export const createAnalysisPrompt = (posts) => {
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
};