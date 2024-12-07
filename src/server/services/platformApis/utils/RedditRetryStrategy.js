export class RedditRetryStrategy {
  constructor(maxRetries = 3, initialDelay = 1000) {
    this.maxRetries = maxRetries;
    this.initialDelay = initialDelay;
  }

  async execute(operation) {
    let lastError;
    
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (!this.shouldRetry(error, attempt)) {
          throw error;
        }

        await this.delay(attempt);
      }
    }

    throw lastError;
  }

  shouldRetry(error, attempt) {
    return attempt < this.maxRetries && (
      error.name === 'NetworkError' ||
      error.name === 'RateLimitError' ||
      error.name === 'TimeoutError'
    );
  }

  async delay(attempt) {
    const delayTime = this.initialDelay * Math.pow(2, attempt - 1);
    await new Promise(resolve => setTimeout(resolve, delayTime));
  }
}