// Renders every route in src/routes.js to static HTML with its own <head> tags,
// then writes sitemap.xml, robots.txt and a 404.html. Run via `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, staticPaths, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function page(url) {
  const { html, helmet } = render(url);
  const head = ['title', 'priority', 'meta', 'link', 'script'].map((k) => helmet[k].toString()).join('\n    ');
  return template
    .replace(/<html[^>]*>/, `<html ${helmet.htmlAttributes.toString() || 'lang="en-IN"'}>`)
    .replace('<!--head-tags-->', head)
    .replace('<!--app-html-->', html);
}

for (const { path: url } of staticPaths) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url));
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

const today = new Date().toISOString().slice(0, 10);
const loc = (p) => `${SITE_URL}${p === '/' ? '/' : p}`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths
  .map((r) => `  <url><loc>${loc(r.path)}</loc><lastmod>${r.lastmod || today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority.toFixed(1)}</priority></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`Prerendered ${staticPaths.length} pages + 404, sitemap.xml and robots.txt`);
