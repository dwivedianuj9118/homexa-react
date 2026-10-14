# Homexa Realty (React + JSX)

A React rebuild of https://www.homexarealty.com with the SEO and accessibility issues from `PLAN.md` fixed.

## Run it

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build + prerender into dist/
```

`npm run build` pre-renders every route to its own `dist/<route>/index.html` with a unique title, description,
canonical, Open Graph tags and JSON-LD, and writes `dist/sitemap.xml` and `dist/robots.txt`.
Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, S3). `vercel.json` is included.
To preview the build locally use a static server that serves folder `index.html` files, e.g. `npx serve dist`
(`vite preview` falls back to the home page for every URL, which causes hydration warnings).

## Where to edit

| What | File |
|---|---|
| Phone, email, address, hours, social links, CRM login | `src/data/site.js` |
| Projects (price, location, highlights, images) | `src/data/projects.js` |
| Insight articles | `src/data/insights.js` |
| Job openings | `src/data/careers.js` |
| Policy pages (placeholder copy) | `src/data/policies.js` |
| Colours and fonts | `src/styles/global.css` (`:root` tokens) |

Adding a project or article to the data files automatically creates its page, adds it to the sitemap and pre-renders it.

## Before launch
- Confirm the phone number and the `homexrealty.com` email / CRM domain (the site itself is `homexarealty.com`).
- Add RERA numbers, real social URLs and lawyer-reviewed policy text.
- Project detail copy, highlights, the article bodies and the full testimonial were written for this rebuild where the live site had none; review them.
- Images load from the live site by default. Run `npm run fetch-images`, then set `VITE_IMAGE_BASE=/images` in `.env` to self-host.
- Set `VITE_FORM_ENDPOINT` to receive enquiries; without it the form opens WhatsApp with the enquiry pre-filled.

## Deploy to GitHub Pages
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `BASE_PATH=/<repo-name>/` and publishes to
`https://<user>.github.io/<repo-name>/`. In the repo, set **Settings → Pages → Source** to **GitHub Actions** once.
For a custom domain, remove the `BASE_PATH` line from the workflow.
