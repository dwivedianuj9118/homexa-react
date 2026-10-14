import { chromium } from 'playwright';
import fs from 'node:fs';
const hosts = { vercel: 'https://homexa-react.vercel.app', pages: 'https://dwivedianuj9118.github.io/homexa-react' };
const paths = ['/', '/projects', '/projects/kohinoor-outer-ring-road', '/projects/vaidehi-enclave-ayodhya-road', '/about', '/insights', '/insights/why-gated-plots-are-gaining-ground', '/career', '/contact', '/privacy-policy', '/rera-compliance'];
fs.mkdirSync('diag/out', { recursive: true });
const b = await chromium.launch();
const report = [];
for (const [name, base] of Object.entries(hosts)) {
  for (const w of [1366, 390]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    for (const path of paths) {
      const r = { host: name, width: w, path, console: [], failed: [] };
      p.removeAllListeners('console'); p.removeAllListeners('requestfailed'); p.removeAllListeners('response'); p.removeAllListeners('pageerror');
      p.on('console', (m) => m.type() === 'error' && r.console.push(m.text().slice(0, 200)));
      p.on('pageerror', (e) => r.console.push('PAGEERROR ' + e.message.slice(0, 200)));
      p.on('requestfailed', (q) => r.failed.push(q.url() + ' ' + q.failure()?.errorText));
      p.on('response', (s) => s.status() >= 400 && r.failed.push(s.status() + ' ' + s.url()));
      try {
        const res = await p.goto(base + path, { waitUntil: 'networkidle', timeout: 45000 });
        r.status = res.status();
        r.finalUrl = p.url();
        // Scroll through the page so lazy-loaded images load, like a real visitor.
        await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
        await p.waitForLoadState('networkidle');
        Object.assign(r, await p.evaluate(() => ({
          title: document.title,
          h1: document.querySelector('h1')?.textContent,
          cssLoaded: getComputedStyle(document.body).fontFamily,
          bodyBg: getComputedStyle(document.body).backgroundColor,
          textLen: document.body.innerText.length,
          imgs: document.images.length,
          brokenImgs: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
          height: document.documentElement.scrollHeight,
        })));
        if (w === 1366 || path === '/') await p.screenshot({ path: `diag/out/${name}-${w}${path.replace(/\//g, '_') || '_'}.png`, fullPage: true });
      } catch (e) { r.error = e.message.slice(0, 200); }
      report.push(r);
    }
    await ctx.close();
  }
}
await b.close();
fs.writeFileSync('diag/out/report.json', JSON.stringify(report, null, 2));
