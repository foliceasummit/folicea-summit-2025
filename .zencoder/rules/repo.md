# Repository Summary

- Name: folicea
- Framework: Next.js (TypeScript)
- Styling: Tailwind CSS
- Content: Sanity CMS (studio/)
- Deploy: Vercel (vercel.json present)

## Key Paths
- pages/: Next.js routes
- components/: Reusable UI
- lib/sanity.client.js: Sanity client and helpers
- schemas/: Sanity content schemas
- studio/: Sanity Studio app

## Build
- npm run build -> Next.js build

## Env
- .env.local used for runtime vars

## Notes
- Home page pulls content from Sanity type `home`
- Icons for features are selected from a fixed list via schema options