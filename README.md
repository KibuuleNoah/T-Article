# T-Article

A type-safe fullstack monorepo application built with **React** and **tRPC**.

---

## Project Structure

```

.
├── client/          # React (Frontend)
├── server/          # Node.js + tRPC (Backend)
├── packages/
│   └── common/      # Shared Zod schemas & TypeScript types
├── package.json     # Root workspace configuration
└── tsconfig.base.json

````

---

## Getting Started

### 1. Install Dependencies

Run this once from the root directory to install all workspace packages:

```bash
npm install
````

---

### 2. Development

Run both frontend and backend together:

```bash
npm run dev
```

Or run them individually:

```bash
# Frontend only
npm run dev:client

# Backend only
npm run dev:server
```

---

## Build

To build all packages for production:

```bash
npm run build
```

---
