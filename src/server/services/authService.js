import User from '../models/User.js';
import Team from '../models/Team.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthService {
  static async loginUser(email, password) {
    const user = await User.findOne({ email }).populate('team');
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    const sanitizedUser = {
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
    };

    return { token, user: sanitizedUser };
  }

  static async createUser(userData) {
    const { name, email, password, keywords = [], keywordIntent = '', platforms = [], teamName, teamMembers = [] } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      keywords: keywords.map(k => ({ text: k })),
      keywordIntent,
      platforms: platforms.map(p => ({ name: p }))
    });

    if (teamName) {
      const team = await Team.create({
        name: teamName,
        owner: user._id,
        members: teamMembers.map(email => ({ email }))
      });

      user.team = team._id;
      await user.save();
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    const createdUser = await User.findById(user._id).populate('team');
    const sanitizedUser = {
      id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      keywords: createdUser.keywords,
      keywordIntent: createdUser.keywordIntent,
      platforms: createdUser.platforms,
      team: createdUser.team ? {
        id: createdUser.team._id,
        name: createdUser.team.name,
        members: createdUser.team.members
      } : null
    };

    return { token, user: sanitizedUser };
  }

  static async verifyUser(userId) {
    const user = await User.findById(userId).populate('team');
    
    if (!user) {
      throw new Error('User not found');
    }

    return {
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
    };
  }
}