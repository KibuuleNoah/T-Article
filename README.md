## T-Article
A type-safe fullstack monorepo application built with React, and tRPC.

## Project Structure

├── client/          # React (Frontend)
├── server/          # Node.js + tRPC (Backend)
├── packages/
│   └── common/      # Shared Zod schemas & TS types
├── package.json     # Root workspace config
└── tsconfig.base.json

## Getting Started

## 1. Install Dependencies
Run this once from the root. It installs all packages for client, server, and common.

npm install

## 2. Development
You can run both the frontend and backend simultaneously from the root:

# Run everything
npm run dev

# Run specific workspace only
npm run dev:client
npm run dev:server

## Build
To build all packages for production:

npm run build
