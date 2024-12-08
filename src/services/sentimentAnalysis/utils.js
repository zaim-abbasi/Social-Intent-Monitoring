export const parseGeminiResponse = (response) => {
  try {
    const resultText = response.candidates[0].content.parts[0].text;
    return JSON.parse(resultText).results;
  } catch (error) {
    console.error('Error parsing Gemini response:', error);
    throw new Error('Failed to parse sentiment analysis results');
  }
};

export const aggregateResults = (results) => {
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
};