# 🍕 Food Delivery Application - Full Stack Learning Project

A full-stack food delivery platform built from scratch to learn full-stack development, clean architecture, and real-world system design.

> **Note:** This is a **learning-focused project**. Production optimizations, security hardening, and deployment concerns are documented in `backend/downside.md` and will be addressed after completing all 9 phases.

## 📋 Project Overview

A comprehensive food delivery application with:
- **User Portal** - Browse restaurants, order food, track deliveries
- **Restaurant Owner Dashboard** - Manage restaurants, food items, and orders
- **Delivery Partner App** - Accept deliveries, navigate, update status
- **Real-time Features** - Live order tracking and notifications

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT Authentication
- Socket.io for real-time features

### Frontend
- React 18 + Vite
- Redux Toolkit
- React Router v6

---

## 📁 Project Structure

```
Food-Delivery-App/
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── config/         # DB, env config
│   │   ├── controllers/    # Route handlers
│   │   ├── middleware/     # Auth, error handlers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helper functions
│   │   └── app.js          # Express app
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── features/      # Redux slices
│   │   ├── store/         # Redux store
│   │   └── App.jsx
│   └── .env               # Environment variables
│
└── docs/                  # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd Food-Delivery-App

# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
cp .env.example .env
# Edit .env with your API URL
npm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Health Check: http://localhost:3000/health

---

## 🎓 Learning Approach

This project follows a **phase-by-phase approach**:
- Start with Phase 0 (Project Foundation)
- Complete each phase before moving to the next
- Understand concepts deeply, not just copy code
- Test thoroughly after each feature

**See `docs/PHASE-BREAKDOWN.md` for complete phase details.**

---

## 📝 Current Phase

**Phase:** Phase 0 - Foundation Setup ✅ (In Progress)
**Next:** Phase 1 - Authentication & Authorization

### Completed Foundation Work
- ✅ Express server with proper startup flow (waits for DB connection)
- ✅ MongoDB connection with error handling
- ✅ Middleware setup (CORS, JSON parser, Morgan logging)
- ✅ Centralized error handling
- ✅ 404 handler for undefined routes
- ✅ Environment configuration

### Development Focus
This project prioritizes **learning and understanding**. Production concerns (rate limiting, helmet, compression, etc.) are tracked in `backend/downside.md` and will be addressed after Phase 9.

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=3000
MONGO_URI=your_mongodb_uri
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

**Note:** More variables (JWT_SECRET, NODE_ENV, etc.) will be added as we progress through phases.

---

## 📚 Documentation

- **CLAUDE.md** - Guide for AI assistants
- **backend/downside.md** - Production issues tracker (to fix after Phase 9)
- **docs/PHASE-BREAKDOWN.md** - Complete phase breakdown
- **docs/api-documentation.md** - API reference (built as we go)
- **docs/database-schema.md** - Database design (built as we go)

---

## 📧 Contact

For questions or feedback about this learning project, feel free to reach out!

---

**Let's start learning! 🚀**
