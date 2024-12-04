import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Team from '../models/Team.js';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
export const signup = async (req, res) => {
  try {
    const { 
      email, 
      name, 
      password, 
      keywords, 
      keywordIntent, 
      platforms, 
      teamName, 
      teamMembers 
    } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create team first
    const team = await Team.create({
      name: teamName,
      members: teamMembers.map(email => ({ email }))
    });

    // Format keywords and platforms
    const formattedKeywords = keywords.map(text => ({ text }));
    const formattedPlatforms = platforms.map(name => ({ name }));

    // Create user with team reference
    const user = await User.create({
      name,
      email,
      password,
      keywords: formattedKeywords,
      keywordIntent,
      platforms: formattedPlatforms,
      team: team._id
    });

    // Update team with owner reference
    team.owner = user._id;
    await team.save();

    if (user) {
      const token = generateToken(user._id);
      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          keywords: user.keywords,
          keywordIntent: user.keywordIntent,
          platforms: user.platforms,
          team: {
            id: team._id,
            name: team.name,
            members: team.members
          }
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and populate team information
    const user = await User.findOne({ email }).populate('team');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Update last login
    user.lastLogin = Date.now();
    await user.save();

    const token = generateToken(user._id);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        keywords: user.keywords,
        keywordIntent: user.keywordIntent,
        platforms: user.platforms,
        team: user.team ? {
          id: user.team._id,
          name: user.team.name,
          members: user.team.members
        } : null
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('team');
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        keywords: user.keywords,
        keywordIntent: user.keywordIntent,
        platforms: user.platforms,
        team: user.team ? {
          id: user.team._id,
          name: user.team.name,
          members: user.team.members
        } : null
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};