<div align="center">

# 🍲 ABUELA

### *Every recipe has a story.*

A digital home for preserving family recipes, traditions, and the memories attached to the people who made them.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.9-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Auth.js](https://img.shields.io/badge/Auth.js-v5-purple)](https://authjs.dev/)

</div>

---

## ✨ About

**Abuela** (Spanish for *grandmother*) is a recipe-sharing platform built around the idea that every recipe carries a story — of a grandmother's kitchen, a father's Tuesday pasta, a mother's Sunday biryani. Users can create, browse, and search recipes while preserving the personal narratives behind each dish.

---

## 🧰 Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [Next.js 16.3](https://nextjs.org/) (App Router, Server Components, Server Actions) |
| **Language** | TypeScript 5 |
| **Database** | PostgreSQL via [Prisma ORM 7](https://www.prisma.io/) + `@prisma/adapter-pg` |
| **Auth** | [Auth.js v5](https://authjs.dev/) (NextAuth) — Credentials provider, JWT sessions |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + custom brand design tokens |
| **UI** | Radix UI primitives · Lucide icons · Framer Motion animations |
| **Forms** | React Hook Form + Zod validation |
| **Images** | Cloudinary SDK (installed, ready to wire up) |
| **Fonts** | Playfair Display (serif headings) · Inter (body) via `next/font` |

---

## 📂 Project Structure

```
abuela/
├── app/
│   ├── actions/          # Server Actions (auth, recipe CRUD)
│   ├── api/auth/         # NextAuth catch-all route handler
│   ├── dashboard/        # Authenticated user dashboard
│   │   └── new/          # Create-a-recipe form
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── recipes/          # Public recipe listing
│   │   └── [id]/         # Individual recipe detail page
│   ├── search/           # Recipe search page
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   ├── page.tsx          # Landing / home page
│   ├── not-found.tsx     # Custom 404 page
│   └── globals.css       # Global styles & Tailwind directives
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── recipe/           # RecipeCard, RecipeActions
│   └── ui/               # Logo, SearchBar
├── lib/
│   ├── prisma.ts         # PrismaClient singleton (pg adapter)
│   ├── data.ts           # Data-fetching helpers (server-only)
│   ├── constants.ts      # Shared constants (categories, cuisines, etc.)
│   └── utils.ts          # cn() utility (clsx + tailwind-merge)
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script with sample recipes
├── auth.ts               # NextAuth main config (providers, adapter)
├── auth.config.ts        # Auth edge config (callbacks, pages)
├── middleware.ts          # Route protection middleware
├── prisma.config.ts      # Prisma CLI config (migration paths, datasource URL)
├── next.config.ts        # Next.js config (external packages, image domains)
├── tailwind.config.ts    # Custom brand palette & design tokens
├── .env.example          # ⬅ Example environment variables
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** (comes with Node) — or yarn / pnpm / bun
- **PostgreSQL** — running locally or a hosted instance (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), [Railway](https://railway.app))

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/abuela.git
cd abuela
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your real values:

```bash
cp .env.example .env.local
```

Open `.env.local` and configure:

| Variable | Required | Description |
| --- | --- | --- |
| `POSTGRES_PRISMA_URL` | ✅ | PostgreSQL connection string |
| `AUTH_SECRET` | ✅ | Random secret for Auth.js sessions (run `npx auth secret` to generate) |
| `DATABASE_URL` | ❌ | Fallback DB URL (only if `POSTGRES_PRISMA_URL` is not set) |
| `NEXTAUTH_URL` | ❌ | App base URL — set in production, auto-detected locally |
| `CLOUDINARY_*` | ❌ | Only if you enable Cloudinary image uploads |

> **💡 Tip:** Generate an auth secret quickly with:
> ```bash
> npx auth secret
> ```
> or
> ```bash
> openssl rand -base64 32
> ```

### 4. Set up the database

Generate the Prisma client, then push the schema to your database:

```bash
npx prisma generate
npx prisma db push
```

> **Note:** `db push` is great for rapid prototyping. For production, use `npx prisma migrate dev` to create proper migration files.

### 5. Seed the database (optional)

The seed script populates the database with 6 beautifully crafted sample recipes:

```bash
npx tsx prisma/seed.ts
```

### 6. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're in! 🎉

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate Prisma client & build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open the Prisma database GUI |
| `npx prisma db push` | Push schema changes to the database |
| `npx prisma migrate dev` | Create and apply a new migration |
| `npx tsx prisma/seed.ts` | Seed the database with sample data |

---

## 🗄️ Database Schema

The app uses four core models:

| Model | Purpose |
| --- | --- |
| **User** | Registered users (name, email, hashed password) |
| **Account** | OAuth accounts linked to users (via Auth.js adapter) |
| **Session** | User sessions with expiry tracking |
| **VerificationToken** | Email verification tokens |
| **Recipe** | The main content — title, story, ingredients, steps, images, cuisine, category, etc. |

Recipes include rich fields like `story` (the personal narrative), `lovedOneName`, `relationship`, prep/cook times, difficulty, and arrays for ingredients, steps, tags, and images.

---

## 🔐 Authentication

- Built with **Auth.js v5** (NextAuth beta) using the **Credentials** provider.
- Passwords are hashed with **bcryptjs**.
- JWT-based sessions (no database sessions).
- Middleware protects `/dashboard/*` routes — unauthenticated users are redirected to `/login`.
- Auth config is split across:
  - `auth.config.ts` — edge-compatible config (callbacks, custom pages)
  - `auth.ts` — full config (Prisma adapter, providers)

---

## 🎨 Design System

The app uses a custom warm, organic brand palette defined in `tailwind.config.ts`:

| Token | Color | Hex |
| --- | --- | --- |
| **Dark Green** | 🟢 | `#0A3323` |
| **Moss Green** | 🌿 | `#839958` |
| **Beige** | 🟡 | `#F7F4D5` |
| **Rosy Brown** | 🌸 | `#D3968C` |
| **Midnight Green** | 🌊 | `#105666` |

Typography pairs **Playfair Display** (elegant serif for headings) with **Inter** (clean sans-serif for body text). Custom animations include `fade-in`, `slide-up`, `float`, and `shimmer`.

---

## 🌍 Deployment

### Vercel (recommended)

1. Push your repo to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Add environment variables (`POSTGRES_PRISMA_URL`, `AUTH_SECRET`) in the Vercel dashboard.
4. Deploy — the `build` script runs `prisma generate && next build` automatically.

### Other platforms

The app runs anywhere that supports Node.js 18+. Make sure to:
1. Set all required environment variables.
2. Run `npx prisma generate` before building.
3. Run `npx prisma db push` or `npx prisma migrate deploy` against your production database.

---

## 💡 Tips & Gotchas

- **Prisma client generation** — The `build` script includes `prisma generate`, so deploys work out of the box. If you see "PrismaClient not generated" errors locally, run `npx prisma generate`.
- **Hot reload & Prisma** — The singleton pattern in `lib/prisma.ts` prevents connection pool exhaustion during Next.js hot reloads in dev.
- **Image domains** — `next.config.ts` allows remote images from `images.unsplash.com` and `i.pravatar.cc`. Add your own domains (e.g., Cloudinary) there if needed.
- **Seeding is idempotent** — The seed script uses `upsert`, so running it multiple times won't create duplicates.
- **Edge middleware** — `auth.config.ts` is the edge-compatible subset of the auth config. Don't import Prisma or `pg` there.

---

## 📄 License

This project is private. See `package.json` for details.

---

<div align="center">
  <sub>Built with ❤️ and a lot of family recipes.</sub>
</div>
