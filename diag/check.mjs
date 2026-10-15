import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://homexa-react.vercel.app';
fs.rmSync('diag/out', { recursive: true, force: true });
fs.mkdirSync('diag/out', { recursive: true });
// Wait for Vercel to finish deploying the new design (the slider marks it).
for (let i = 0; i < 40; i++) {
  const html = await (await fetch(base + '/')).text();
  if (html.includes('hero-slider')) break;
  await new Promise((r) => setTimeout(r, 15000));
}
const b = await chromium.launch();
const report = [];
for (const w of [1366, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message.slice(0, 200)));
  for (const path of ['/', '/projects', '/about', '/insights', '/career', '/contact', '/privacy-policy']) {
    await p.goto(base + path, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 150)); } scrollTo(0, 0); });
    await p.waitForLoadState('networkidle'); await p.waitForTimeout(600);
    report.push({ w, path, slider: await p.locator('.hero-slider').count(), h1: await p.locator('h1').count(), broken: await p.evaluate(() => [...document.images].filter((i) => !i.complete || !i.naturalWidth).length), errs: [...errs] });
    await p.screenshot({ path: `diag/out/${w}${path.replace(/\//g, '_') || '_'}.png`, fullPage: w === 1366 || path === '/' });
  }
}
await b.close();
fs.writeFileSync('diag/out/report.json', JSON.stringify(report, null, 2));
