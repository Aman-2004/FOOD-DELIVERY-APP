# 🍕 Food Delivery Application - Full Stack Learning Project

A production-grade food delivery platform built from scratch to learn full-stack development, clean architecture, and real-world system design.

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
- Backend: http://localhost:5000

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

**Phase:** Not started
**Next:** Phase 0 - Project Foundation

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

*More variables will be added as we progress through phases.*

---

## 📚 Documentation

- **CLAUDE.md** - Guide for AI assistants
- **docs/PHASE-BREAKDOWN.md** - Complete phase breakdown
- **docs/api-documentation.md** - API reference (built as we go)
- **docs/database-schema.md** - Database design (built as we go)

---

## 📧 Contact

For questions or feedback about this learning project, feel free to reach out!

---

**Let's start learning! 🚀**
