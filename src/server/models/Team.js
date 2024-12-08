import mongoose from 'mongoose';
// Define the schema for the team members
const teamMemberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  status: {
    type: String,
    enum: ['pending', 'active'],
    default: 'pending'
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Team name is required'],
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [teamMemberSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Team = mongoose.model('Team', teamSchema);

export default Team;