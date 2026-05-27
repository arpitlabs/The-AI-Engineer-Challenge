## Frontend (Next.js)

This frontend provides a professional dark-mode chat experience for the FastAPI backend in `api/`.

### Features

- Clean, terminal-inspired dark theme for visual clarity.
- Animated "thinking" states while waiting for the OpenAI response.
- Keyboard UX:
  - `Enter` sends the message.
  - `Shift + Enter` inserts a new line.

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- Backend running locally at `http://localhost:8000` (or set a custom API URL)

### Install and Run

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

### Backend URL Configuration

By default, the frontend calls:

```text
http://localhost:8000/api/chat
```

To change this, set:

```bash
NEXT_PUBLIC_API_URL=http://your-backend-host
```

### Production Build

```bash
cd frontend
npm run build
npm run start
```