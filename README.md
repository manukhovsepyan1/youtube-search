# YouTube Video Search App

A full-stack web application that allows users to search for YouTube videos, view details, watch them, and manage search history. Built with React, Tailwind CSS, NestJS, GraphQL, MikroORM, and CQRS.

## Features

### Frontend
- Built with **React** and **Tailwind CSS**
- YouTube video search with pagination
- Recent search history
- Loading and error states

### Backend
- **NestJS** for scalable architecture
- **GraphQL API** with Apollo Server
- **CQRS pattern** for separation of concerns
- **MikroORM** with PostgreSQL for data persistence
- Search history stored per user/IP (optional)

---

## Getting Started

### Prerequisites

- Node.js = v22.16.0
- PostgreSQL (for backend)
- Yarn or npm

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/manukhovsepyan1/youtube-search.git
cd youtube-search


```

### 2. Create .env and MikroORM config files

```bash
# Backend
cp ./backend/.env.example ./backend/.env
cp ./backend/mikro-orm.config.ts.example ./backend/mikro-orm.config.ts

# Frontend
cp ./frontend/.env.example ./frontend/.env

```
### 3. Install dependencies

```bash

# Backend
cd backend
npm install

# Frontend
cd frontend
npm install

```

### 4. Create and run database migrations

```bash
cd backend
npx mikro-orm migration:create
npx mikro-orm migration:fresh


5. Run the application

```bash
# Backend
npm run start:dev

# Frontend
npm run dev
```