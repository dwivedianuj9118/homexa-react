import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://homexa-react.vercel.app';
fs.rmSync('diag/out', { recursive: true, force: true }); fs.mkdirSync('diag/out', { recursive: true });
let deployed = false;
for (let i = 0; i < 40 && !deployed; i++) { deployed = (await (await fetch(base + '/?t=' + i)).text()).includes('index-CTxd-JtG.css'); if (!deployed) await new Promise((r) => setTimeout(r, 15000)); }
const b = await chromium.launch(); const report = { deployed, errors: [] };
for (const [w, h, tag] of [[1366, 900, 'desktop'], [390, 844, 'mobile']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  p.on('pageerror', (e) => report.errors.push(tag + ' ' + p.url() + ' ' + e.message.slice(0, 150)));
  for (const u of ['/', '/projects', '/about', '/insights', '/career', '/contact', '/privacy-policy', '/projects/kohinoor-outer-ring-road']) {
    await p.goto(base + u, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } scrollTo(0, 0); });
    await p.waitForTimeout(500);
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) report.errors.push(tag + u + ' overflow ' + ov);
    const h1 = await p.locator('h1').count(); if (h1 !== 1) report.errors.push(tag + u + ' h1 ' + h1);
    if (u === '/' || u === '/about') await p.screenshot({ path: `diag/out/${tag}${u === '/' ? '-home' : u.replace(/\//g, '-')}.png`, fullPage: true });
  }
}
await b.close(); fs.writeFileSync('diag/out/report.json', JSON.stringify(report, null, 1));
