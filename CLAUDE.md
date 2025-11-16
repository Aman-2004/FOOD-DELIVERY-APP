# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **learning-focused** full-stack food delivery application built with the MERN stack. The project follows a phase-by-phase approach where features are built incrementally, with each phase building on the previous one.

**Key Points:**
- Multi-role system: Users, Restaurant Owners, Delivery Partners, Admins
- Clean architecture pattern: Routes → Controllers → Services → Models
- Phase-based development (9 phases total)

## Development Commands

### Backend (Express.js)
```bash
cd backend
npm install              # Install dependencies
npm run dev              # Start dev server (nodemon)
npm start                # Start production server
```
**Runs on:** http://localhost:5000

### Frontend (React + Vite)
```bash
cd frontend
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Production build
```
**Runs on:** http://localhost:5173

### Database
- MongoDB (local or Atlas)
- Connection: `backend/src/config/db.js`
- URI from `MONGO_URI` env variable

## Architecture

### Backend Structure (Controller → Service → Model Pattern)

```
backend/src/
├── config/          # Database, env config
├── controllers/     # HTTP handlers (thin layer)
├── services/        # Business logic (reusable)
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── middleware/      # Auth, error handling
├── utils/           # ApiError, ApiResponse, asyncHandler
└── app.js           # Express app config
```

**Pattern Flow:**
1. **Routes** - Define endpoints, apply middleware
2. **Controllers** - Handle HTTP (req, res), call services
3. **Services** - Business logic, interact with models
4. **Models** - Database schemas and operations

**Why?** Separation of concerns, reusability, testability.

### Frontend Structure

```
frontend/src/
├── components/      # Reusable UI components
├── pages/           # Page components
├── features/        # Redux Toolkit slices
├── store/           # Redux store
├── routes/          # Route config
└── utils/           # Helpers
```

## Phase-Based Development

This project is built in **9 phases**. Each phase must be completed before moving to the next.

### Working on a Phase

1. User indicates: "I'm ready to start Phase X"
2. Explain phase objectives before implementing
3. Build step-by-step with explanations
4. Test after each feature
5. Don't skip ahead

### Current Phase Tracking

**Important:** Always check which phase the user is on. Ask if unclear.

Features available depend on completed phases. As phases are completed, update this section and README.md with implemented features.

## Important Constraints

### Security
- Never commit `.env` files
- Always use `asyncHandler` for async routes
- Validate input with Joi
- Use `helmet` for security headers
- Hash passwords with bcrypt

### Code Quality
- Centralized error handling (`errorHandler` middleware)
- Consistent responses (`ApiResponse` utility)
- Custom errors (`ApiError` utility)
- Log requests in development (`morgan`)

### Testing
- Test each feature after building
- Use Postman/curl for API testing
- Verify auth with protected routes

## Learning-Focused Approach

When implementing features:

1. **Explain WHY before HOW**
   - Why this pattern over alternatives
   - Why this improves maintainability
   - Why security matters

2. **Build incrementally**
   - Model → Service → Controller → Routes
   - Test at each step

3. **Teach concepts inline**
   - Explain middleware flow
   - Show how Mongoose populate works
   - Demonstrate patterns

4. **Encourage questions**
   - User should understand every line
   - No "magic" - explain abstractions

5. **Code review mindset**
   - Point out improvements
   - Explain performance implications

## Common Patterns

### Creating New Endpoint

1. **Model** - Define schema
2. **Service** - Business logic
3. **Controller** - HTTP handler
4. **Validator** - Input validation
5. **Route** - Endpoint definition

### Example Flow
```javascript
// Model
const schema = new Schema({...});
module.exports = mongoose.model('Resource', schema);

// Service
class ResourceService {
  static async create(data) { /* logic */ }
}

// Controller
const create = asyncHandler(async (req, res) => {
  const data = await ResourceService.create(req.body);
  res.status(201).json(new ApiResponse(201, data));
});

// Route
router.post('/', protect, validate(schema), create);
```

## Documentation

- **README.md** - Project overview
- **docs/PHASE-BREAKDOWN.md** - Complete phase details
- Documentation will be built incrementally as phases complete

## Current State

**Phase:** Not started
**Next:** Phase 0 - Project Foundation

As phases are completed, this section will be updated with:
- Completed features
- Available API endpoints
- Database collections
- Implementation patterns used
