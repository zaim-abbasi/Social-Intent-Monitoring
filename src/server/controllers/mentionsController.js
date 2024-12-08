import { MentionsService } from '../services/mentionsService.js';

export const getPlatformStats = async (req, res) => {
  try {
    if (!req.user.platforms?.length) {
      // Return a 400 status code with a message if no platforms are configured for the user
      return res.status(400).json({ 
        message: 'No platforms configured for this user' 
      });
    }

    if (!req.user.keywords?.length) {
      // Return a 400 status code with a message if no keywords are configured for the user
      return res.status(400).json({ 
        message: 'No keywords configured for this user' 
      });
    }

    const stats = await MentionsService.getPlatformStats(req.user);
    // Return the platform statistics
    res.json(stats);
  } catch (error) {
    console.error('Platform stats error:', error);
    // Return a 500 status code with an error message
    res.status(500).json({ 
      message: error.message || 'Error fetching platform statistics' 
    });
  }
};