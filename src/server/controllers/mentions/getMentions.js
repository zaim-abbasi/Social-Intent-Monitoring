import Mention from '../../models/Mention.js';

export const getMentions = async (req, res) => {
  try {
    const mentions = await Mention.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({ mentions });
  } catch (error) {
    console.error('Get mentions error:', error);
    res.status(500).json({ message: 'Error fetching mentions' });
  }
};