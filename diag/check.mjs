import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://homexa-react.vercel.app';
fs.rmSync('diag/out', { recursive: true, force: true }); fs.mkdirSync('diag/out', { recursive: true });
let deployed = false;
for (let i = 0; i < 40 && !deployed; i++) { deployed = (await (await fetch(base + '/?t=' + i)).text()).includes('index-IQDXWlIH.js'); if (!deployed) await new Promise((r) => setTimeout(r, 15000)); }
const b = await chromium.launch(); const report = { deployed, version: b.version(), runs: {} };
for (const patched of [false, true]) {
  const p = await b.newPage(); const logs = [];
  if (patched) await p.addInitScript(() => { const o = window.scrollTo.bind(window); window.scrollTo = (...a) => { o(...a); return Promise.resolve(); }; });
  p.on('console', (m) => { if (['error', 'warning'].includes(m.type())) logs.push(m.type() + ': ' + m.text().slice(0, 160)); });
  p.on('pageerror', (e) => logs.push('pageerror ' + e.message));
  await p.goto(base + '/', { waitUntil: 'networkidle' });
  const pages = [];
  for (const name of ['Projects', 'Story', 'Insights', 'Career', 'Contact']) {
    await p.locator('header nav a', { hasText: name }).first().click(); await p.waitForTimeout(1200);
    pages.push(name + ' ' + new URL(p.url()).pathname + ' ' + (await p.locator('h1').first().textContent().catch(() => '?')));
  }
  report.runs[patched ? 'promiseScrollTo' : 'normal'] = { pages, logs };
}
await b.close(); fs.writeFileSync('diag/out/report.json', JSON.stringify(report, null, 1));
