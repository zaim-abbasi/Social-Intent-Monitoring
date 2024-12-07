import { MentionsService } from '../services/mentionsService.js';

export const getPlatformStats = async (req, res) => {
  try {
    const stats = await MentionsService.getPlatformStats(req.user);
    res.json(stats);
  } catch (error) {
    console.error('Platform stats error:', error);
    res.status(500).json({ message: 'Error fetching platform statistics' });
  }
};