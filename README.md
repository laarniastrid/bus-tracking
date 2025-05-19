# 🚌 Bus Tracking App

A real-time bus tracking system built with:

- React + Tailwind CSS + Mapbox (Frontend)
- Fastify + TypeScript + GTFS-RT + Supabase (Backend)
- Monorepo managed with pnpm workspaces

---

## 📦 Project Structure

```bash
/frontend   # React app (Vite)
/backend    # Fastify server with GTFS polling
/shared     # (Optional) Shared types/constants
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start the Frontend

```bash
pnpm --filter frontend dev
```

### 3. Start the Backend

```bash
pnpm --filter backend dev
```

---

## 🧪 Dev Tools

- **Format all code:** `pnpm format`
- **Lint all code:** `pnpm lint`
- **Run format/lint before commit:** via `husky` pre-commit hook

---

## 🧽 Environments

Each package can define its own `.env` file:

- `/backend/.env` → server port, feed URL, etc.
- `/frontend/.env` → Vite config like `VITE_MAPBOX_TOKEN`

---

## 🔐 Deployment Targets

- Frontend: Netlify
- Backend: Fly.io

---
