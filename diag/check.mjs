import { chromium } from 'playwright';
import fs from 'node:fs';
const hosts = { vercel: 'https://homexa-react.vercel.app', pages: 'https://dwivedianuj9118.github.io/homexa-react' };
fs.rmSync('diag/out', { recursive: true, force: true });
fs.mkdirSync('diag/out', { recursive: true });
const b = await chromium.launch();
const report = [];
const state = (p) => p.evaluate(() => ({ path: location.pathname, title: document.title, h1: document.querySelector('h1')?.textContent || null, mainText: document.querySelector('main')?.innerText.length || 0, rootChildren: document.getElementById('root')?.children.length ?? -1, scrollY: scrollY }));
for (const [name, base] of Object.entries(hosts)) {
  for (const w of [1366, 390]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    const errors = [];
    p.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message.slice(0, 300)));
    p.on('console', (m) => m.type() === 'error' && errors.push('CONSOLE ' + m.text().slice(0, 300)));
    await p.goto(base + '/', { waitUntil: 'networkidle' });
    const fresh = await state(p);
    report.push({ host: name, width: w, step: 'fresh load /', ...fresh });
    const hrefs = await p.$$eval('#root a[href]', (as) => [...new Set(as.map((a) => a.getAttribute('href')).filter((h) => h.startsWith('/')))]);
    for (const h of hrefs) {
      await p.goto(base + '/', { waitUntil: 'networkidle' });
      errors.length = 0;
      const link = p.locator(`#root a[href="${h}"]`).first();
      if (w === 390 && !(await link.isVisible())) { await p.click('.menu-toggle').catch(() => {}); }
      try {
        await link.click({ timeout: 5000 });
        await p.waitForTimeout(800);
        const s = await state(p);
        report.push({ host: name, width: w, step: 'click ' + h, ...s, errors: [...errors] });
        if (!s.h1 || s.mainText < 50) await p.screenshot({ path: `diag/out/${name}-${w}-click${h.replace(/\//g, '_')}.png` });
        // browser back should restore the previous page too
        await p.goBack(); await p.waitForTimeout(500);
        const back = await state(p);
        if (!back.h1) report.push({ host: name, width: w, step: 'back from ' + h, ...back, errors: [...errors] });
      } catch (e) { report.push({ host: name, width: w, step: 'click ' + h, error: e.message.slice(0, 200), errors: [...errors] }); }
    }
    await ctx.close();
  }
}
await b.close();
fs.writeFileSync('diag/out/report.json', JSON.stringify(report, null, 2));
