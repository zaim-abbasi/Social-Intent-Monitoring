import express from 'express';
import { protect } from '../middleware/auth.js';
import { getMentions } from '../controllers/mentions/getMentions.js';

const router = express.Router();

router.get('/', protect, getMentions);

export default router;