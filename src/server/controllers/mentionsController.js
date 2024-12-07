import { MentionsService } from '../services/mentionsService.js';

export const getPlatformStats = async (req, res) => {
  try {
    if (!req.user.platforms?.length) {
      return res.status(400).json({ 
        message: 'No platforms configured for this user' 
      });
    }

    if (!req.user.keywords?.length) {
      return res.status(400).json({ 
        message: 'No keywords configured for this user' 
      });
    }

    const stats = await MentionsService.getPlatformStats(req.user);
    res.json(stats);
  } catch (error) {
    console.error('Platform stats error:', error);
    res.status(500).json({ 
      message: error.message || 'Error fetching platform statistics' 
    });
  }
};