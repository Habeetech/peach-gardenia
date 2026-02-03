# peach-gardenia
Repository for Team Peach Gardenia - Spring 2026 Cohort

## Table of Contents
- [Overview](#overview)
  - [Foster Care Wishlist Platform](#foster-care-wishlist-platform)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the repository](#clone-the-repository)
  - [Frontend](#frontend)
- [Team Members](#team-members)
  - [Leadership](#leadership)
  - [Participants](#participants)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend-1)
  - [Backend](#backend)
  - [Database](#database)
  - [Test Suite](#test-suite)
  - [Package Manager](#package-manager)
- [Project Structure](#project-structure)

## Overview

### Foster Care Wishlist Platform
> "Every kid deserves a birthday gift"

Kids in foster care often miss out on the little things other kids take for granted — birthday presents, back-to-school supplies, holiday gifts. This platform lets caseworkers or foster parents create wishlists for kids, and community members can browse and fulfill those wishes.

Privacy and dignity are paramount here. You're not putting kids on display — you're giving people a way to help while protecting the children's identities. How do you share enough information to inspire generosity without compromising privacy? How do you make sure gifts actually get to the kids?

## Getting Started

### Prerequisites
- Node.js >= 24.0.0 (Use `node -v` to check your version)
- pnpm >= 10.28.2 (Use `pnpm -v` to check your version)

### Clone the repository

```bash
git clone https://github.com/nhcarrigan-spring-2026-cohort/peach-gardenia.git
cd peach-gardenia
```

> Note: To contribute, fork this repository and keep your fork’s `main` branch in sync with the upstream `main`. Create a feature branch in your fork, commit and push your changes to that branch, then open a pull request from your feature branch to this repository’s `main` branch for review.

### Frontend
The frontend lives in `client/`.

Install dependencies:

```bash
cd client
pnpm install
```
Run the dev server:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test --watch
```

## Team Members

### Leadership
- [Habeetech](https://github.com/Habeetech)
- [Rhombert](https://github.com/ElectricMolasses)

### Participants
- [Tabeni](https://github.com/TabsOO7)
- [Manro](https://github.com/Manro95)
- [Mohamed Eldaly](https://github.com/mohamedeldaly)
- [Abba Gueime](https://github.com/abbagueimeali)
- [Leorium](https://github.com/LeoriumDev)
- [Hippy Groove Dawg](https://github.com/Lauro235)
- [Trev](https://github.com/TrevorBrowning)
- [nd](https://github.com/andiedoescode)
- [MiliMade](https://github.com/MiliMade)

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- [React](https://react.dev)

### Backend
- [Express](https://expressjs.com)

### Database
- SQL (TBD)

### Test Suite
- [Jest](https://jestjs.io)

### Package Manager
- [pnpm](https://pnpm.io)

## Project Structure

```
.
├── README.md                           # Project documentation
├── Server/                             # Backend (Express)
│  ├── app.js
│  ├── package.json
│  └── package-lock.json
└── client/                             # Frontend (React + Vite + Jest)
   ├── public/                          # Static public assets
   │  └── vite.svg
   ├── src/
   │  ├── __mocks__/                    # Jest file mocks
   │  │  └── fileMock.js
   │  ├── assets/                       # Bundled assets
   │  │  └── react.svg
   │  ├── tests/                        # Jest tests
   │  │  └── App.test.jsx
   │  ├── App.css
   │  ├── App.jsx                       # Main component
   │  ├── index.css
   │  └── main.jsx                      # App entry
   ├── README.md
   ├── index.html
   ├── babel.config.cjs                 # Babel config for Jest transforms
   ├── eslint.config.js
   ├── jest.config.cjs                  # Jest config (jsdom, asset/CSS mapping)
   ├── package.json
   ├── pnpm-lock.yaml
   ├── pnpm-workspace.yaml
   └── vite.config.js
```