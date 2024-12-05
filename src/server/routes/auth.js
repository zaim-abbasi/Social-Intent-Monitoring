import express from 'express';
import { login, verifyToken } from '../controllers/authController.js';
import { loginValidator } from '../validators/authValidators.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', loginValidator, login);
router.get('/verify', protect, verifyToken);

export default router;