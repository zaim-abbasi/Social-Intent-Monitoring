export const parseGeminiResponse = (response) => {
  // Extract the sentiment analysis results from the Gemini response
  try {
    const resultText = response.candidates[0].content.parts[0].text;
    return JSON.parse(resultText).results;
  } catch (error) {
    // Log an error and throw an exception if the response cannot be parsed
    console.error('Error parsing Gemini response:', error);
    throw new Error('Failed to parse sentiment analysis results');
  }
};

export const aggregateResults = (results) => {
  // Aggregate the sentiment analysis results to calculate the global score
  let positiveCount = 0;
  let neutralCount = 0;
  let negativeCount = 0;
  let totalConfidence = 0;

  results.forEach(result => {
    // Count the number of positive, neutral, and negative posts
    if (result.sentiment === 'positive') positiveCount++;
    else if (result.sentiment === 'neutral') neutralCount++;
    else if (result.sentiment === 'negative') negativeCount++;
    totalConfidence += result.confidence;
  });

  const totalPosts = results.length;
  // Calculate the global score based on the sentiment analysis results
  const globalScore = Math.round((
    (positiveCount - negativeCount) / totalPosts + 1
  ) * 50);

  return {
    // Return the aggregated sentiment analysis results
    globalScore,
    positive: positiveCount,
    neutral: neutralCount,
    negative: negativeCount,
    averageConfidence: totalConfidence / totalPosts
  };
};