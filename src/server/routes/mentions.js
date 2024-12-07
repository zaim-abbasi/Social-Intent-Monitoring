import express from 'express';
import { protect } from '../middleware/auth.js';
import { getPlatformStats } from '../controllers/mentionsController.js';

const router = express.Router();

router.get('/platform-stats', protect, getPlatformStats);

export default router;