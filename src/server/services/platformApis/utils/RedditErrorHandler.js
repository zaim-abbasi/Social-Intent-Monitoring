export class RedditErrorHandler {
  static handle(error) {
    if (error.name === 'InvalidCredentialsError') {
      throw new Error('Invalid Reddit API credentials');
    }

    if (error.name === 'RateLimitError') {
      throw new Error('Reddit API rate limit exceeded');
    }

    if (error.name === 'NetworkError') {
      throw new Error('Network error while connecting to Reddit API');
    }

    // Log unexpected errors
    console.error('Unexpected Reddit API error:', error);
    throw new Error('An unexpected error occurred while fetching Reddit data');
  }

  static isRetryableError(error) {
    return [
      'NetworkError',
      'RateLimitError',
      'TimeoutError'
    ].includes(error.name);
  }
}