import User from '../models/User.js';
import Team from '../models/Team.js';
import { comparePasswords, generateToken, sanitizeUser } from '../utils/authUtils.js';

export class AuthService {
  static async loginUser(email, password) {
    const user = await User.findOne({ email }).populate('team');
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    const sanitizedUser = sanitizeUser(user);

    return { token, user: sanitizedUser };
  }

  static async createUser(userData) {
    const { name, email, password, keywords = [], keywordIntent = '', platforms = [], teamName, teamMembers = [] } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      keywords: keywords.map(k => ({ text: k })),
      keywordIntent,
      platforms: platforms.map(p => ({ name: p }))
    });

    // Create team if teamName is provided
    if (teamName) {
      const team = await Team.create({
        name: teamName,
        owner: user._id,
        members: teamMembers.map(email => ({ email }))
      });

      user.team = team._id;
      await user.save();
    }

    const token = generateToken(user._id);
    const createdUser = await User.findById(user._id).populate('team');
    const sanitizedUser = sanitizeUser(createdUser);

    return { token, user: sanitizedUser };
  }

  static async verifyUser(userId) {
    const user = await User.findById(userId).populate('team');
    
    if (!user) {
      throw new Error('User not found');
    }

    return sanitizeUser(user);
  }
}