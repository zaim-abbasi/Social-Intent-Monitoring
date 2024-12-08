import express from 'express';
import { protect } from '../middleware/auth.js';
import { 
  getTrialStatus,
  getUserKeywords,
  addKeyword,
  removeKeyword,
  updateProfile
} from '../controllers/userController.js';

const router = express.Router();

// Define routes
router.get('/trial-status', protect, getTrialStatus);
router.get('/keywords', protect, getUserKeywords);
router.post('/keywords', protect, addKeyword);
router.delete('/keywords/:id', protect, removeKeyword);
router.put('/profile', protect, updateProfile);

export default router;