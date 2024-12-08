import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
// Define the schema for the keywords collection
const keywordSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  },
  keywords: [keywordSchema],
  keywordIntent: {
    type: String,
    trim: true
  },
  platforms: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  trialStartDate: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Get trial days remaining
userSchema.methods.getTrialDaysRemaining = function() {
  const trialDuration = 7; // 7 days trial
  const now = new Date();
  const trialEnd = new Date(this.trialStartDate);
  trialEnd.setDate(trialEnd.getDate() + trialDuration);
  
  const daysRemaining = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, daysRemaining);
};

const User = mongoose.model('User', userSchema);

export default User;