# Shashank Shekhar — Portfolio

Built with React + TypeScript + Tailwind CSS (Vite).

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub Pages, or any static host.

## Notes

- Resume: `public/Shashank_Shekhar_Resume.pdf` (also kept as `.docx`). Replace this file to update what the Resume buttons link to — no code changes needed as long as the filename stays the same, or update `resumeUrl` in `src/data/portfolio.ts` if you rename it.
- All content (skills, experience, projects, education) lives in `src/data/portfolio.ts` — edit there rather than in the components.
