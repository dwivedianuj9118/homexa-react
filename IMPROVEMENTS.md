# What was fixed and improved in the React version

This compares the live site (https://www.homexarealty.com) with the React rebuild
(https://dwivedianuj9118.github.io/homexa-react/). Each item covers what was wrong, what changed, and why it matters.

---

## 1. SEO: how Google sees the site

### 1.1 Every page now has its own title and description
**Before:** All six pages shared one title, "Homexa Realty | Premium Real Estate Company in Lucknow", and one description. Google treats these as duplicates and can't tell which page to show for which search.
**After:** Each page has a unique, keyword-focused title and description. Some examples:

| Page | New title |
|---|---|
| Home | Residential Plots & Gated Townships in Lucknow \| Homexa Realty |
| Projects | Plot & Gated Township Projects in Lucknow \| Homexa Realty |
| Kohinoor | Kohinoor Plots, Outer Ring Road, Lucknow \| Homexa Realty |
| Contact | Contact Us & Book a Site Visit in Lucknow \| Homexa Realty |

**Why it matters:** Titles and descriptions are what appear in Google results. Unique, specific ones rank better and get more clicks.
**Where:** `src/components/Seo.jsx`, used once on every page.

### 1.2 Pages are pre-rendered to real HTML
**Before:** The text arrived through JavaScript after the page loaded.
**After:** `npm run build` renders every page to finished HTML (`scripts/prerender.mjs`). React then "hydrates" that HTML so it becomes interactive.
**Why it matters:** Google, WhatsApp, Facebook and LinkedIn read the full content and tags immediately, without running JavaScript. Plain React apps usually miss this, which is the biggest SEO risk of a React site.

### 1.3 Canonical URLs
**Before:** None.
**After:** Every page declares its official address, for example `<link rel="canonical" href="https://www.homexarealty.com/projects">`.
**Why it matters:** This stops Google splitting ranking between duplicate URLs such as `/projects`, `/projects/`, `?ref=...` and the GitHub preview copy. All ranking goes to the real domain.

### 1.4 Social share previews (Open Graph and Twitter)
**Before:** None, so links shared on WhatsApp or Facebook showed no image or a random one.
**After:** Each page sets a title, description and image for sharing, and each project page shares its own project photo.

### 1.5 Structured data (JSON-LD)
**Before:** None.
**After:** Machine-readable data on each page:

| Schema | Where | What it can unlock in Google |
|---|---|---|
| `RealEstateAgent` | Home, Contact | Business panel with address, phone and hours |
| `WebSite` | Home | Site name in results |
| `BreadcrumbList` | All inner pages | "Home › Projects › Kohinoor" trail in results |
| `ItemList` | Projects | Project list understanding |
| `Product` + price per sq ft | Each project | Price shown in results |
| `Article` | Each insight | Article and Discover eligibility |
| `JobPosting` | Career | Listings in **Google Jobs** |

**Where:** `src/seo/schema.js`.

### 1.6 sitemap.xml and robots.txt
**Before:** Neither file could be loaded.
**After:** Both are generated automatically on every build from the list of pages, so a new project or article is added to the sitemap automatically.

### 1.7 New indexable pages
**Before:** Project cards and "Read Article" didn't go to individual pages, so nothing could rank for searches like "Green Country Sultanpur Road".
**After:** 11 new pages:
- 5 project pages (`/projects/green-country-sultanpur-road`, etc.) with price, location, highlights, a site-visit button and related projects.
- 2 article pages (`/insights/why-gated-plots-are-gaining-ground`, etc.).
- 4 policy pages (Privacy, Terms, Payment, RERA), which were linked but empty.
- A proper 404 page, marked `noindex` so Google ignores it.

Clean, keyword-rich URLs (slugs) help ranking and look trustworthy when shared.

### 1.8 Broken meta tags removed
**Before:** An empty `next-size-adjust` meta tag, and on /projects some meta values appeared as stray text in the page.
**After:** A clean `<head>` with `lang="en-IN"`, charset, viewport, theme colour and favicon.

---

## 2. Headings and content structure

### 2.1 Run-together headings fixed
**Before:** Spaces were deleted to force line breaks, so Google and screen readers read "CURATEDLIVING", "FIND YOURPLACE" and "TheINSIGHT". Some headings had double spaces ("MARKET  INSIGHTS").
**After:** The real text is "Curated Living", "Find Your Place" and "The Insight". The styled second word is a separate `<em>` and line breaks are done with CSS (`src/components/Section.jsx`).

### 2.2 One H1 per page and no skipped levels
**Before:** Levels jumped H1 → H3 (Contact, home stats) and H2 → H4 (Career, About), the footer used stray H4s, and "Residential Plots" was both an H3 and an H4.
**After:** Every page has exactly one H1, sections use H2, and cards use H3. I verified this on all 17 built pages.

### 2.3 Better H1s
- /projects changed from "Featured Projects" to **"Plots & gated townships in Lucknow"**, which matches what people search for.

### 2.4 Semantic HTML
`<header>`, `<nav>`, `<main>`, `<section>` linked to its heading, `<article>` for cards, `<address>` for contact details, `<dl>` for stats, `<blockquote>`/`<figure>` for testimonials, and `<time>` for article dates. These tell Google and assistive tech what each part of the page is.

---

## 3. Accessibility (also a Google ranking signal)

| Issue on live site | Fix |
|---|---|
| 4 social icons linking to `#` with no label, on every page | Hidden until real URLs are added in `site.js`; when shown they get labels like "Homexa Realty on Instagram" |
| Alt text like "Happy Family 1/2/3", "Luxury Interior", and a literal `&amp;` | Descriptive alt text for every image |
| Generic links ("Read Article", "Explore Projects") | Links say where they go, e.g. "Read: Why Gated Plots Are Gaining Ground" |
| Map shown as a raw URL, iframe without a title | Map iframe has a descriptive title |
| Form with no required markers or errors | Labelled fields, `*` required markers, inline error messages, focus moves to the first error, and a status message after sending |
| No keyboard skip option | "Skip to content" link, visible focus outlines, and a mobile menu with proper `aria-expanded` |
| Animations always on | Turned off for users who prefer reduced motion |
| Gold text on light backgrounds | A darker gold for text on light backgrounds so it meets contrast guidelines |

---

## 4. Performance

- **No layout jumps:** every image has width and height, so the page doesn't shift while loading (better Core Web Vitals / CLS).
- **Lazy-loaded images:** below-the-fold images load only when scrolled to. The hero image is marked high priority.
- **Small bundle:** plain CSS with no UI framework, about 16 KB CSS and 75 KB JS gzipped.
- **Fonts:** Google Fonts with `preconnect` and `display=swap`, so text shows immediately.

---

## 5. UX and features

- **Project filter:** filter by Gated Township, Ready to Move or Close to Metro. It's screen-reader friendly and announces the number of results.
- **Clear pricing:** prices show "₹999/sq ft onwards" with a note that rates vary, instead of a bare "₹999/Sqft".
- **Breadcrumbs** on inner pages for easier navigation.
- **Working enquiry form:** set `VITE_FORM_ENDPOINT` (e.g. Formspree or a CRM webhook) to receive enquiries. Without it, the form opens WhatsApp with the enquiry pre-filled, so leads are never lost.
- **Career page:** each job has an "Apply" button that opens an email with the subject pre-filled. The live site sent everything to the contact page.
- **Footer** now shows the address, phone and email on every page (NAP consistency helps local SEO).
- **Mobile:** responsive layout and a hamburger menu that closes after navigating. Tested at 390 px wide with no horizontal scrolling.
- **Disclaimers** added under the corridor appreciation figures, which the live site presented as facts.

---

## 6. Code quality and maintainability

- **React + JSX + Vite**, with React Router for pages and `react-helmet-async` for head tags.
- **All content in data files.** Edit text without touching components:
  - `src/data/site.js`: phone, email, address, hours, social links
  - `src/data/projects.js`: projects (adding one creates its page and sitemap entry)
  - `src/data/insights.js`, `careers.js`, `policies.js`
- **Reusable components:** `Seo`, `Section`, `PageHero`, `ProjectCard`, `InsightCard`, `CtaBanner`, `Breadcrumbs`, `Img`.
- **Design tokens:** colours and fonts live in one place (`:root` in `src/styles/global.css`).
- **Auto-deploy:** every push to `main` rebuilds and publishes to GitHub Pages.

---

## 7. Still needs your input

These are copied from the live site but look wrong, so they're marked `TODO` in `src/data/site.js`:
1. **Phone `+91 98765 43210`** looks like a placeholder number.
2. **Email and Login use `homexrealty.com`** (no "a") while the site is `homexarealty.com`.
3. **RERA registration numbers** aren't shown anywhere. Add them to the RERA page and project pages.
4. **Social media URLs**, so the icons can be shown.
5. **Text I wrote where the live site had none:** project descriptions and highlights, article bodies, policy pages and the full testimonial. Please review them, and have the policies checked legally.
6. **Images** still load from homexarealty.com. Run `npm run fetch-images` and set `VITE_IMAGE_BASE=/images` to self-host them.
7. **Design:** I couldn't access the live site's CSS, so colours and fonts are a close match rather than an exact copy.
