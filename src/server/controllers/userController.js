import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/authUtils.js';

export const updateProfile = async (req, res) => {
  // Update user profile
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { name, newPassword, keywords, keywordIntent } = req.body;
    // Validate new password

    // Update basic info
    if (name) user.name = name;
    if (keywordIntent !== undefined) user.keywordIntent = keywordIntent;

    // Update password if provided
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // Update keywords if provided
    if (keywords) {
      user.keywords = keywords.map(text => ({ text }));
    }

    const updatedUser = await user.save();

    // Generate new token and return updated user info
    const token = generateToken(updatedUser._id);
    const sanitizedUser = {
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      keywords: updatedUser.keywords,
      keywordIntent: updatedUser.keywordIntent,
      platforms: updatedUser.platforms,
      team: updatedUser.team
    };

    res.json({ token, user: sanitizedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ 
      message: error.message || 'Error updating profile',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

export const getTrialStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const daysRemaining = user.getTrialDaysRemaining();
    res.json({ daysRemaining });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trial status' });
  }
};

export const getUserKeywords = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ keywords: user.keywords });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching keywords' });
  }
};

export const addKeyword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { keyword } = req.body;
    if (!keyword) {
      return res.status(400).json({ message: 'Keyword is required' });
    }

    user.keywords.push({ text: keyword });
    await user.save();

    res.json({ keyword: user.keywords[user.keywords.length - 1] });
  } catch (error) {
    res.status(500).json({ message: 'Error adding keyword' });
  }
};

export const removeKeyword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const keywordId = req.params.id;
    user.keywords = user.keywords.filter(k => k._id.toString() !== keywordId);
    await user.save();

    res.json({ message: 'Keyword removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing keyword' });
  }
};