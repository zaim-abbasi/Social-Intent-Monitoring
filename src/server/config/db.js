import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Properly encode the password containing @ symbol
    const uri = process.env.MONGODB_URI.replace(
      'mongo@1122',
      encodeURIComponent('mongo@1122')
    );

    const conn = await mongoose.connect(uri, {
      // The following options are required to avoid deprecation warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;