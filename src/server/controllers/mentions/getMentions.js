import Mention from '../../models/Mention.js';

export const getMentions = async (req, res) => {
  // Get the 20 most recent mentions for the authenticated user
  try {
    const mentions = await Mention.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({ mentions });
  } catch (error) {
    // Log the error and return a 500 status code
    console.error('Get mentions error:', error);
    res.status(500).json({ message: 'Error fetching mentions' });
  }
};