# RehanXP — Portfolio

A Windows XP–styled interactive portfolio for Rehan Azim, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy

Push this folder to a GitHub repo and import it on [vercel.com](https://vercel.com) — zero config needed, or run:

```bash
npx vercel
```

## What's inside

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Boot screen, login screen, desktop, taskbar, start menu, draggable window chrome, and one component per "app" window (About, Resume, Projects, Skills, Contact, Social Links, Founder Talk video, Recycle Bin)
- `lib/` — typed content (resume, projects, socials) and the window-manager state hook
- `public/assets/` — your profile photo and resume PDF, served from the site root so paths never break regardless of route/deploy path

## Notes on fixes from the previous HTML version

- **Image loading**: images now live in `public/assets/` and are referenced with an absolute path (`/assets/profile.jpg`) via `next/image`, so they resolve correctly on any host/route instead of breaking on relative paths.
- **Video loading**: the Founder Talk video no longer auto-embeds a YouTube iframe on load (a common cause of "failed to load" / blocked-cookie errors). It shows a thumbnail with a play button and only mounts the `youtube-nocookie.com` iframe after a click.
- Update `lib/data.ts` to change resume content, projects, or social links — everything else re-renders automatically.
