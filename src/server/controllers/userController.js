import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/authUtils.js';

export const verifyPassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const isValid = await bcrypt.compare(req.body.password, user.password);
    
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    
    res.json({ message: 'Password verified' });
  } catch (error) {
    console.error('Password verification error:', error);
    res.status(500).json({ message: 'Error verifying password' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, newPassword, keywords, keywordIntent } = req.body;

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

    await user.save();

    // Generate new token and return updated user info
    const token = generateToken(user._id);
    const updatedUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      keywords: user.keywords,
      keywordIntent: user.keywordIntent,
      platforms: user.platforms,
      team: user.team
    };

    res.json({ token, user: updatedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
};

// ... (keep existing controller methods)