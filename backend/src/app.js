const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors()); // Allow all origins
app.use(express.json()); // Parse JSON 
app.use(morgan('dev')); // Log requests in console of get, post with time

// Health check Route
app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server is running! 🚀' });
});

// API Routes (will add later)
// app.use('/api/v1/auth', require('./routes/auth.routes'));


// 404 handler - middleware to Catch-all for undefined routes
// Note: '_req' prefix indicates parameter is intentionally unused
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler - Centralized error handling
app.use(errorHandler);

module.exports = app;
