# Portfolio

Live at https://selimf1998.github.io — personal portfolio, Vue 3, Tailwind CSS v4, Vite. English / German, light / dark mode.

```bash
npm install
npm run dev      # http://localhost:5173  (/de/ for German)
npm run build    # static site in dist/
npm run preview
```

## Editing content

- `src/data/profile.js` — name, contacts, photo, skills, jobs, projects (with `logo` / `repo`), and `siteUrl`
- `src/i18n/{en,de}.js` — all translated text, including page titles / meta descriptions

**Photo:** put it in `public/` (e.g. `public/profile.jpg`) and set `photo: '/profile.jpg'`.

## SEO

`npm run build` prerenders every language to static HTML (`/`, `/de/`) so crawlers get the full
content, and generates per-language `<title>`, meta description, canonical + `hreflang` links, Open Graph /
Twitter tags, JSON-LD `Person` data, `sitemap.xml` and `robots.txt`.

Set your real domain in `siteUrl` (or build with `SITE_URL=https://example.com npm run build`) — it is used
for all absolute URLs. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`.
