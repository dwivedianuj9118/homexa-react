import { chromium } from 'playwright';
import fs from 'node:fs';
const base = 'https://homexa-react.vercel.app';
fs.rmSync('diag/out', { recursive: true, force: true }); fs.mkdirSync('diag/out', { recursive: true });
let deployed = false;
for (let i = 0; i < 40 && !deployed; i++) { deployed = (await (await fetch(base + '/')).text()).includes('index-MZEDCAEA.css'); if (!deployed) await new Promise((r) => setTimeout(r, 15000)); }
const b = await chromium.launch(); const report = { deployed };
for (const [w, h] of [[1366, 768], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(base + '/', { waitUntil: 'networkidle' });
  report[w] = await p.evaluate(() => ({ heroH: Math.round(document.querySelector('.hero-slider').getBoundingClientRect().height), searchBottom: Math.round(document.querySelector('.quick-search').getBoundingClientRect().bottom) }));
  await p.screenshot({ path: 'diag/out/hero-' + w + '.png' });
}
await b.close(); fs.writeFileSync('diag/out/report.json', JSON.stringify(report));
