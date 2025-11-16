// Global error handler

// WHY: Single place to handle ALL errors from any route/middleware
// WHEN: Any error occurs (throw new ApiError, database errors, validation fails)
// RESULT: Consistent error response format, prevents app crashes
// ORDER: Must be LAST middleware (after all routes and 404 handler)
// HOW IT WORKS: Express automatically passes errors to this if it has 4 params (err, req, res, next)
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
    stack: err.stack, // Shows where error happened
  });
};

module.exports = errorHandler;

// Example
// GET /api/users (but database fails)
//       ↓
//   Route throws error
//       ↓
//   Express automatically forwards to errorHandler
//       ↓
//   ✓ errorHandler sends {success: false, error: 'Database connection failed', stack: ...}