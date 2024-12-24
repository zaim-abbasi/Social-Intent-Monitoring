import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import PostCard from './PostCard';
import { useAuth } from '../../../components/Auth/AuthContext';
import { getRandomPosts } from '../../../utils/postUtils';

const PostsGrid = ({ view, selectedPlatforms, selectedSentiment }) => {
  const { user } = useAuth();
  
  const posts = useMemo(() => {
    if (!user?.platforms) return [];
    
    // Always get 8 posts
    let allPosts = getRandomPosts(user.platforms, 8);

    // Apply platform filter if any platforms are selected
    if (selectedPlatforms.length > 0) {
      allPosts = allPosts.filter(post => 
        selectedPlatforms.includes(post.platform.toLowerCase())
      );
    }

    // Apply sentiment filter if not set to 'all'
    if (selectedSentiment !== 'all') {
      allPosts = allPosts.filter(post => 
        post.sentiment === selectedSentiment
      );
    }

    return allPosts;
  }, [user?.platforms, selectedPlatforms, selectedSentiment]);

  return (
    <div className={
      view === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        : 'space-y-4'
    }>
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <PostCard post={post} view={view} />
        </motion.div>
      ))}
    </div>
  );
};

export default PostsGrid;