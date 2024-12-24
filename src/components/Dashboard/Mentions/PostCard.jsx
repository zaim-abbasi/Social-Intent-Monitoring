import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { platformConfig } from '../../../config/platformConfig';
import { FiExternalLink } from 'react-icons/fi';

const PostCard = ({ post }) => {
  const platformInfo = platformConfig[post.platform.toLowerCase()];
  const Icon = platformInfo.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl p-6 border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg overflow-hidden group h-full flex flex-col"
    >
      {/* Platform Icon & Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl ${platformInfo.color.bgLight}`}>
            <Icon className={`w-5 h-5 ${platformInfo.color.text}`} />
          </div>
          <span className="text-sm text-gray-500">
            {format(new Date(post.date), 'MMM d, yyyy')}
          </span>
        </div>
        {post.engagement && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-black/5">
            {post.engagement} interactions
          </span>
        )}
      </div>

      {/* Post Content */}
      <div className="flex-grow">
        {post.image && (
          <div className="relative mb-4 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <h3 className="font-semibold text-black mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.content}
        </p>
      </div>

      {/* Author & Link */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          {post.author.avatar && (
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="text-sm font-medium text-gray-700">
            {post.author.name}
          </span>
        </div>
        
        <motion.a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="text-black hover:text-gray-600 transition-colors"
        >
          <FiExternalLink className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PostCard;