import mongoose from 'mongoose';

// Define the schema for the mentions collection
const mentionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sentiment: {
    type: String,
    enum: ['positive', 'neutral', 'negative'],
    required: true
  },
  keywords: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Mention = mongoose.model('Mention', mentionSchema);

export default Mention;