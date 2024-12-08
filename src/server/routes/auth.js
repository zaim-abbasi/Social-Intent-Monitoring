import express from 'express';
import { login, signup, verifyToken } from '../controllers/authController.js';
import { loginValidator, signupValidator } from '../validators/authValidators.js';
import { protect } from '../middleware/auth.js';

// Create a new router instance
const router = express.Router();

router.post('/login', loginValidator, login);
router.post('/signup', signupValidator, signup);
router.get('/verify', protect, verifyToken);

export default router;