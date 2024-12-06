import express from 'express';
import { protect } from '../middleware/auth.js';
import { 
  getTrialStatus,
  getUserKeywords,
  addKeyword,
  removeKeyword
} from '../controllers/userController.js';

const router = express.Router();

router.get('/trial-status', protect, getTrialStatus);
router.get('/keywords', protect, getUserKeywords);
router.post('/keywords', protect, addKeyword);
router.delete('/keywords/:id', protect, removeKeyword);

export default router;