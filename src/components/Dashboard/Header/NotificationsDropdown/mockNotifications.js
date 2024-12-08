import { subMinutes, subHours, subDays } from 'date-fns';

export const generateMockNotifications = (userPlatforms) => {
  const allNotifications = [
    {
      id: 1,
      platform: 'twitter',
      title: 'New Twitter Mention',
      description: 'Your product was mentioned by @techinfluencer: "Just discovered this amazing tool for social monitoring!"',
      time: subMinutes(new Date(), 5).toISOString(),
      unread: true,
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      platform: 'linkedin',
      title: 'LinkedIn Discussion',
      description: 'Your post about social monitoring trends is gaining traction in the Tech Innovation group',
      time: subMinutes(new Date(), 15).toISOString(),
      unread: true,
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      platform: 'reddit',
      title: 'Trending on r/SaaS',
      description: 'Your product was recommended in a discussion about best social monitoring tools',
      time: subHours(new Date(), 1).toISOString(),
      unread: true,
      iconColor: 'text-orange-500'
    },
    {
      id: 4,
      platform: 'github',
      title: 'GitHub Discussion',
      description: 'New mention in a discussion about social analytics tools in the developer community',
      time: subHours(new Date(), 2).toISOString(),
      unread: false,
      iconColor: 'text-gray-800'
    },
    {
      id: 5,
      platform: 'stackoverflow',
      title: 'Stack Overflow Activity',
      description: 'Your integration was mentioned in a popular answer about social media monitoring',
      time: subHours(new Date(), 3).toISOString(),
      unread: false,
      iconColor: 'text-orange-500'
    },
    {
      id: 6,
      platform: 'youtube',
      title: 'YouTube Review',
      description: 'TechReviewer mentioned your platform in their latest video about social monitoring tools',
      time: subHours(new Date(), 4).toISOString(),
      unread: false,
      iconColor: 'text-red-500'
    },
    {
      id: 7,
      platform: 'discord',
      title: 'Discord Community',
      description: 'Growing discussion about your platform in the Social Tools Discord server',
      time: subDays(new Date(), 1).toISOString(),
      unread: false,
      iconColor: 'text-indigo-500'
    },
    {
      id: 8,
      platform: 'medium',
      title: 'Medium Article',
      description: 'Your platform was featured in "Top 10 Social Monitoring Tools for 2024"',
      time: subDays(new Date(), 1).toISOString(),
      unread: false,
      iconColor: 'text-gray-800'
    }
  ];

  // Filter notifications based on user's selected platforms
  return allNotifications.filter(notification => 
    userPlatforms.some(p => p.name.toLowerCase() === notification.platform)
  );
};