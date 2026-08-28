# Devi Prasana Mishra — Portfolio

Personal portfolio site for **Devi Prasana Mishra**: projects, experience, skills, and contact.

**Live site:** [https://deviprasana.vercel.app](https://deviprasana.vercel.app)

## Features

- Responsive layout for desktop and mobile
- Profile-driven content (edit one data file)
- Fast Vite build, ready for Vercel / Netlify / GitHub Pages

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages.

## Live GitHub sync

The **GitHub** section auto-fetches repos and releases via `/api/github`.

1. Copy `.env.example` to `.env.local` for local testing with [Vercel CLI](https://vercel.com/docs/cli): `vercel dev`
2. On Vercel → **Settings → Environment Variables**, add:
   - `GITHUB_TOKEN` — Optional, for higher GitHub API rate limits
   - `GITHUB_USERNAME` — `Monty25803`

**Behavior:**
- Only **public** repositories and releases are shown
- Private repos are hidden entirely
- New public repos and releases appear automatically after sync (cached ~5 min)

## Customize

Edit `src/data/profile.js` to update bio, experience, skills, projects, and contact links.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 4
