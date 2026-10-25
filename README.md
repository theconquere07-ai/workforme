# JARVIS Workspace

A full-stack personal project management platform. Built with React + Vite (frontend), Node.js + Express (backend), and Supabase (database).

## Features

- **Notesboard** — Pannable canvas with draggable/resizable note, image, and file cards
- **Projects** — Track projects with status, priority, tags, resources, and custom fields
- **Analyzer** — Structured topic analysis with what/why/core/build/ask/free sections
- **Timer** — Work session timer with task logging and session history
- **Intro** — Cinematic intro animation (JARVIS-style)

## Stack

- **Frontend**: React 18 + TypeScript + Vite → Netlify
- **Backend**: Node.js + Express + TypeScript → Render
- **Database**: Supabase (PostgreSQL + Auth + RLS)

## Setup

### Frontend (`/frontend`)

```bash
cd frontend
cp .env.example .env
# Fill in your Supabase URL and anon key
npm install
npm run dev
```

### Backend (`/backend`)

```bash
cd backend
cp .env.example .env
# Fill in your Supabase URL and service role key
npm install
npm run dev
```

### Environment Variables

**frontend/.env**
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=http://localhost:3001
```

**backend/.env**
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
FRONTEND_URL=http://localhost:5173
PORT=3001
```

## Database

Run the migration in `supabase/migrations/001_initial_schema.sql` via the Supabase dashboard or CLI.

## Deployment

- **Frontend**: Push to GitHub → Netlify auto-deploys from `frontend/` directory
- **Backend**: Deploy to Render using Node.js runtime, set `npm run build` as build command and `npm start` as start command
