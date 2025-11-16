// Database connection
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    console.error('💀 Server cannot start without database. Exiting...\n');
    process.exit(1); // Exit with error code 1 (failure)
  }
};

module.exports = connectDB;
