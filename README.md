# Vazgen Mkheyan — Portfolio (React + Vite + TypeScript)

Converted from the Bedimcode "responsive portfolio website Bianca" starter. Original `styles.css` is kept
untouched in `src/styles/original.css`; `src/styles/app.css` fills the sections the starter left empty.

## Run
    npm install
    cp .env.example .env     # optional: EmailJS keys
    npm run dev              # development
    npm run build            # type-check + production build
    npm run preview

## Edit content
- `src/data/site.ts` — name, tagline, about, skills, contact (verified entries only)
- `src/data/projects.ts` — projects (add summary, tech, url, repo, image + imageAlt when verified)

## Routes
/  /about  /skills  /projects  /projects/:slug  /contact  and a 404.
Direct-URL fallback: `public/_redirects` (Netlify / Cloudflare Pages) and `vercel.json` (Vercel).
# Portfolioo
