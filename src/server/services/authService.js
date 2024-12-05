import User from '../models/User.js';
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

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    const sanitizedUser = sanitizeUser(user);

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