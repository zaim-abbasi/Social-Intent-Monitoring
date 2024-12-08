import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};


// Compare this snippet from src/server/utils/authUtils.js:
export const comparePasswords = async (candidatePassword, hashedPassword) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

export const sanitizeUser = (user) => {
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
};