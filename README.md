# IP Workshop

A small full-stack workshop project with:

- `backend/`: Express API server
- `frontend/`: React + Vite client

## Project Structure

```text
ip-workshop/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   └── src/
└── bin/
```

## Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm

## Quick Start

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Run the backend

In one terminal:

```bash
cd backend
node server.js
```

The API runs on `http://localhost:3000`.

### 3. Run the frontend

In a second terminal:

```bash
cd frontend
npm run dev
```

The frontend runs on Vite's default dev URL (typically `http://localhost:5173`).

## API

### `GET /user`

Returns a sample user payload:

```json
{
  "userId": "12345"
}
```

Example request:

```bash
curl http://localhost:3000/user
```

## Frontend Scripts

From `frontend/`:

- `npm run dev` - start dev server
- `npm run build` - build production bundle
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Notes

- `frontend/README.md` currently contains the default Vite template notes.
- This root README is the recommended entry point for running the full project.
