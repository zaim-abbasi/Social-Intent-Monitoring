import { mockPosts } from './mockData';

export const getRandomPosts = (platforms, count) => {
  // Get available posts for selected platforms
  const availablePosts = platforms.reduce((acc, platform) => {
    const platformPosts = mockPosts[platform.name.toLowerCase()] || [];
    return [...acc, ...platformPosts];
  }, []);

  // Calculate how many posts we need from each platform
  const postsPerPlatform = Math.floor(count / platforms.length);
  const remainder = count % platforms.length;

  let selectedPosts = [];
  const usedPostIds = new Set();

  // Select posts for each platform
  platforms.forEach((platform, index) => {
    const platformPosts = mockPosts[platform.name.toLowerCase()] || [];
    const numPostsToSelect = index < remainder ? postsPerPlatform + 1 : postsPerPlatform;

    // Get random posts for this platform
    let platformSelectedPosts = [];
    while (platformSelectedPosts.length < numPostsToSelect && platformPosts.length > 0) {
      const randomIndex = Math.floor(Math.random() * platformPosts.length);
      const post = platformPosts[randomIndex];
      
      if (!usedPostIds.has(post.id)) {
        platformSelectedPosts.push(post);
        usedPostIds.add(post.id);
      }
    }

    selectedPosts = [...selectedPosts, ...platformSelectedPosts];
  });

  // Shuffle the final array
  return selectedPosts.sort(() => Math.random() - 0.5);
};