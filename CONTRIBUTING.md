# Contributing Guide (Content Editors)

This project uses local files for all content. No CMS is involved.

## Where to Edit Content
- data/newsData.ts: News items
- data/speakers.ts: Speakers
- data/partners.ts: Partners
- data/sponsors.ts: Sponsors

## Image URLs
- Use plain string URLs (absolute or relative to /public).
- Prefer adding images to /public and referencing them like "/images/example.jpg".
- Components provide fallbacks, but verify every URL is valid.

## Adding/Updating Content
1. Open the relevant file in data/.
2. Add or edit entries following the existing TypeScript types.
3. Ensure values are serializable (avoid undefined; omit keys instead).
4. If adding fields, update the consuming page/component mapping as needed.

## New Content Types
1. Create a new file in data/ (e.g., data/sessions.ts) exporting typed arrays/objects.
2. Import and wire it into the relevant page’s getStaticProps.
3. Display with components that accept string URLs for images.

## Build & Deploy
- Local: npm run dev for development; npm run build to verify production build.
- Deploy: Push to the default branch; Vercel will build and deploy.

## Code Style
- Keep data consistent and typed.
- Avoid undefined in getStaticProps results—omit the property instead.
- Keep comments current (no references to any CMS).