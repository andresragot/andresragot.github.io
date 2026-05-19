# andresragot.github.io

Personal portfolio of **Andrés Ragot** — Firmware & Embedded Software Engineer.

Built with **Astro** + vanilla CSS/JS. Trilingual (ES / EN / FR). Deployed on GitHub Pages.

---

## Local development

Requires Node 20+.

```bash
npm install
npm run dev     # local dev server
npm run build   # production build → dist/
npm run preview # preview the built site
```

The built site lives in `dist/`.

## Deploy

A GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds
the site on every push to `main` and publishes it via GitHub Pages.

To enable Pages once:

1. Go to **Settings → Pages**.
2. Set **Source** = **GitHub Actions**.

That's it. Subsequent pushes to `main` will redeploy automatically.

## Structure

```
src/
├─ pages/         # index.astro (es), en/index.astro, fr/index.astro, 404.astro
├─ layouts/       # Base.astro
├─ components/    # Hero, About, Now, Experience, Skills, Featured, Work, Demo, Contact, Header, Footer
├─ data/          # projects.ts (i18n project catalog)
├─ i18n/          # es.ts, en.ts, fr.ts, config.ts, index.ts
├─ scripts/       # wireframe.ts (software 3D demo)
└─ styles/        # global.css
public/
├─ images/        # project thumbnails, icons, etc.
├─ cv/            # drop CV PDF here
├─ robots.txt
├─ sitemap.xml
└─ favicon.png
legacy/           # previous site, kept for reference
```

## Placeholders / to confirm

These items are intentionally pending — see the "Open items" section below.

- [ ] `public/cv/Andres_Ragot_CV.pdf` — real CV
- [ ] `public/images/og-cover.png` — social share card (1200×630). Currently missing → social previews will fall back.
- [ ] Concrete public details about the CipherBit role (responsibilities, project names) once shareable.
- [ ] Real performance metrics for `esp32_3d_engine` (FPS, frame time, memory).
- [ ] Replace existing JPG/PNG thumbnails with WebP/AVIF + responsive sizes for extra perf.

## Adding a project

Edit `src/data/projects.ts`. Each entry needs an `id`, `categories`, `tech`, `links` and an `i18n`
block with `{ es, en, fr }` translations.

## License

Code in this repository is © Andrés Ragot. Project assets and external links belong to their
respective owners.
