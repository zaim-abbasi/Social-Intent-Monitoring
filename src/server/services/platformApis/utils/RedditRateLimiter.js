export class RedditRateLimiter {
  constructor() {
    this.requests = [];
    this.maxRequests = 60; // Maximum requests per minute
    this.timeWindow = 60 * 1000; // 1 minute in milliseconds
  }

  async checkLimit() {
    const now = Date.now();
    
    // Remove requests outside the time window
    this.requests = this.requests.filter(
      timestamp => now - timestamp < this.timeWindow
    );

    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.timeWindow - (now - oldestRequest);
      
      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }

    this.requests.push(now);
  }
}