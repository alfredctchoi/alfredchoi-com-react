# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for Alfred Choi (alfredchoi.com). Deployed as static files to AWS S3, served via CloudFront.

## Repository Structure

This is a monorepo-style layout. The original Create React App site lives in `web-cra/` and is being migrated to Next.js SSG.

- `web-nextjs/` — **active** Next.js site (App Router, TypeScript, Tailwind CSS, static export)
- `web-cra/` — legacy CRA site (React 16, React Router v5, styled-components, react-grid-system)

## web-nextjs

Commands (run from `web-nextjs/`):
- `npm run dev` — dev server
- `npm run build` — production build (static export to `out/`)
- `npm run lint` — ESLint
- `CLOUDFRONT_DISTRIBUTION_ID=<id> ./scripts/deploy.sh` — build, upload to S3, invalidate CloudFront

Configured with `output: "export"` in `next.config.ts` for fully static site generation. All pages must be statically renderable — no server-side features (API routes, middleware, dynamic server rendering).

## web-cra (legacy — reference only)

Commands (run from `web-cra/`):
- `npm start` — dev server
- `npm run build` — production build
- `npm test` — run tests (Jest, interactive watch mode)
- `npm run deploy` — build + upload to S3 (`upload.sh` uses AWS CLI)

**Routing** (`src/components/app.js`): Four routes — `/` (Home), `/projects` (project list), `/projects/:id` (project detail), `/resume`.

**Data layer**: Content lives in two plain JS files exporting arrays of objects:
- `src/projects.js` — project cards (title, image, description, link)
- `src/work.js` — work experience entries (company, roles, responsibilities)

**Project detail pages**: Each project has its own directory under `src/components/projects/<slug>/` containing an `index.js` component and associated images. The slug-to-component mapping is a manual `map` object in `src/components/projects/project-details.js` — adding a new project requires both a data entry in `projects.js` and a mapping here.

**Responsive pattern**: Mobile detection uses `react-grid-system`'s `useScreenClass` hook, with `isMobileViewport()` from `src/utils/screen-util.js` treating `xs`/`sm` as mobile. Components like `RenderMobile`/`RenderDesktop` conditionally render children based on viewport.

**Shared UI primitives**: `src/components/containers.js` exports reusable styled-components (`MarginContainer`, `ImageWithShadow`, `Link` with safe `rel` attributes, etc.).

**Icons**: FontAwesome via `@fortawesome/react-fontawesome`.
