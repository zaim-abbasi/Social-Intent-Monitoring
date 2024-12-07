import User from '../models/User.js';

export const getTrialStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const daysRemaining = user.getTrialDaysRemaining();
    
    res.json({ daysRemaining });
  } catch (error) {
    console.error('Trial status error:', error);
    res.status(500).json({ message: 'Error fetching trial status' });
  }
};

export const getUserKeywords = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('keywords');
    res.json({ keywords: user.keywords });
  } catch (error) {
    console.error('Get keywords error:', error);
    res.status(500).json({ message: 'Error fetching keywords' });
  }
};

export const addKeyword = async (req, res) => {
  try {
    const { keyword } = req.body;
    
    if (!keyword) {
      return res.status(400).json({ message: 'Keyword is required' });
    }

    const user = await User.findById(req.user._id);
    
    // Check for duplicate keywords
    const isDuplicate = user.keywords.some(k => 
      k.text.toLowerCase() === keyword.toLowerCase()
    );
    
    if (isDuplicate) {
      return res.status(400).json({ message: 'Keyword already exists' });
    }

    if (user.keywords.length >= 10) {
      return res.status(400).json({ message: 'Maximum keywords limit reached (10)' });
    }

    const newKeyword = {
      text: keyword,
      createdAt: new Date()
    };

    user.keywords.push(newKeyword);
    await user.save();

    res.status(201).json({ keyword: newKeyword });
  } catch (error) {
    console.error('Add keyword error:', error);
    res.status(500).json({ message: 'Error adding keyword' });
  }
};

export const removeKeyword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const keywordExists = user.keywords.some(k => k._id.toString() === req.params.id);
    
    if (!keywordExists) {
      return res.status(404).json({ message: 'Keyword not found' });
    }

    user.keywords = user.keywords.filter(k => k._id.toString() !== req.params.id);
    await user.save();
    
    res.json({ message: 'Keyword removed successfully' });
  } catch (error) {
    console.error('Remove keyword error:', error);
    res.status(500).json({ message: 'Error removing keyword' });
  }
};