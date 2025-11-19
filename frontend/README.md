# AI Chat Frontend

A beautiful Next.js frontend for the AI Chat Application that integrates with the FastAPI backend.

## Features

- ✨ Beautiful, modern UI with girly color scheme (pink gradients)
- 💬 Real-time streaming chat responses
- 🔐 Secure API key input (password field)
- ⚙️ Configurable system/developer messages
- 🎨 Responsive design that works on all devices
- 🚀 Ready for Vercel deployment

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Backend API running (see `/api/README.md` for setup instructions)

## Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. If you're updating from a previous installation or seeing issues, clean install:

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json
# On Windows PowerShell:
# Remove-Item -Recurse -Force node_modules, package-lock.json

# Fresh install
npm install
```

3. After installation, address security vulnerabilities:

```bash
npm audit fix
```

This will automatically fix any security vulnerabilities that can be resolved without breaking changes.

**Note**: Some deprecation warnings (like for `eslint@8.57.1`, `inflight`, `rimraf`, `glob`) are expected and come from transitive dependencies used by Next.js and ESLint. These don't affect functionality and will be resolved when the upstream packages update their dependencies. The updated `package.json` uses the latest stable versions of all direct dependencies.

## Running Locally

1. Make sure the backend API is running on `http://localhost:8000` (or update the API URL in the code)

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### API URL

By default, the frontend connects to `http://localhost:8000` for the backend API. 

To change this, you can:
- Set the `NEXT_PUBLIC_API_URL` environment variable
- Or modify the API URL in `app/page.tsx` (line with `const apiUrl = ...`)

For production/Vercel deployment, the API routes are automatically handled by Vercel's routing configuration.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx             # Main chat page component
│   ├── page.module.css      # Styles for the chat page
│   └── globals.css          # Global styles
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Usage

1. Enter your OpenAI API key in the password field
2. (Optional) Customize the system/developer message
3. (Optional) Select a different model
4. Type your message and click send
5. Watch the AI response stream in real-time!

## Troubleshooting

- **Connection errors**: Make sure the backend is running on the correct port
- **API key errors**: Verify your OpenAI API key is correct
- **CORS errors**: The backend should have CORS enabled (already configured)
