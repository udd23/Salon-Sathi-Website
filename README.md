# SalonSathi

SalonSathi is a premium salon discovery and appointment booking platform. This repository starts with Phase 1: the Next.js application foundation, brand tokens, shared site shell, and Firebase client boundary.

## Requirements

- Node.js 20.9 or newer
- npm
- Firebase web app configuration for the existing SalonSathi Firebase project (when available)

## Setup

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Fill `.env.local` with the existing Firebase project's web app configuration before enabling Firebase-backed pages. The client helper returns `null` when configuration is absent so the application does not pretend it is connected.

## Structure

```text
src/
  app/              App Router routes, root layout, and global design tokens
  components/       Shared site navigation and footer
  lib/firebase/     Firebase web client initialization
```

## Data and security boundary

No Firebase configuration, Firestore export, security rules, or mobile schema was present in the supplied workspace. The current app therefore does not issue Firestore queries or write booking data. Before building data features, inspect the existing project collections, fields, approval logic, and booking relationships; keep the mobile schema compatible and validate availability on a trusted server before confirming bookings. Do not put Admin credentials in the web app.

## Development phases

Phase 1 is the foundation. Discovery, salon details, booking, authentication, customer, partner, and editorial content routes will be added in subsequent phases once the Firebase schema and product rules are known.
