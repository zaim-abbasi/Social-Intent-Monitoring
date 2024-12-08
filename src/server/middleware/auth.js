import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to protect routes that require authentication
export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ 
        message: 'Not authorized, no token provided' 
      });
    }


    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({ 
        message: 'User not found' 
      });
    }
    // Attach the user object to the request object
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
      message: 'Not authorized, token validation failed' 
    });
  }
};