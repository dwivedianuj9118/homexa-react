import { projects } from './data/projects.js';
import { insights } from './data/insights.js';
import { policies } from './data/policies.js';

// Every indexable URL. Used by the prerender step and to generate sitemap.xml.
export const staticPaths = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/projects', priority: 0.9, changefreq: 'weekly' },
  ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.8, changefreq: 'monthly' })),
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/insights', priority: 0.7, changefreq: 'weekly' },
  ...insights.map((a) => ({ path: `/insights/${a.slug}`, priority: 0.6, changefreq: 'monthly', lastmod: a.date })),
  { path: '/career', priority: 0.5, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'yearly' },
  ...Object.keys(policies).map((slug) => ({ path: `/${slug}`, priority: 0.2, changefreq: 'yearly' })),
];
