// Request logging middleware
// Logs all incoming requests for debugging and monitoring

const logger = (req, res, next) => {
  // Get current timestamp
  const timestamp = new Date().toISOString();

  // Log: [timestamp] METHOD protocol://host/path
  console.log(
    `[${timestamp}] ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );

  // Call next() to pass control to the next middleware
  next();
};

module.exports = logger;

/*
EXAMPLE OUTPUT:

[2024-01-15T10:30:00.000Z] GET http://localhost:5000/api/v1/users
[2024-01-15T10:30:05.000Z] POST http://localhost:5000/api/v1/auth/login
[2024-01-15T10:30:10.000Z] PUT http://localhost:5000/api/v1/restaurants/123

WHY CUSTOM LOGGER when we have morgan?
- morgan is great for production logging
- This custom logger gives us exact format we want
- Easy to add more details (user ID, IP, etc.) later
- We'll use BOTH: morgan for detailed logs, this for simple tracking
*/
