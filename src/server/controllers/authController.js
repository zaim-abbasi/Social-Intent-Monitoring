import { validationResult } from 'express-validator';
import { AuthService } from '../services/authService.js';

export const login = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { email, password } = req.body;
    const { token, user } = await AuthService.loginUser(email, password);

    res.json({ token, user });
  } catch (error) {
    const statusCode = error.message === 'Invalid credentials' ? 401 : 500;
    res.status(statusCode).json({ 
      message: error.message || 'An error occurred during login' 
    });
  }
};

export const verifyToken = async (req, res) => {
  try {
    const user = await AuthService.verifyUser(req.user._id);
    res.json({ user });
  } catch (error) {
    res.status(401).json({ 
      message: error.message || 'Token verification failed' 
    });
  }
};