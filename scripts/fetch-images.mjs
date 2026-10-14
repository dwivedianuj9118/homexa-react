// Copies the images used by the site from the live homexarealty.com into public/images
// so they can be self-hosted. Afterwards add VITE_IMAGE_BASE=/images to .env.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public/images');
const files = [
  'hero_garden_widescreen_left.png', 'family1.png', 'family2.png', 'family3.png',
  'gated_society_entrance_clean.png', 'family_playing_society_garden.png', 'lucknow_ayodhya_plots_dusk.png',
  'green_country_sultanpur_road.png', 'kohinoor_outer_ring_road.png', 'vaidehi_enclave_ayodhya_road.png',
  'exotica_city_nagram_road.png', 'purwanchal_estate_expressway.png', 'gated_township.png',
  'lucknow_market_growth.png', 'gated_plots_growth.png', 'testimonial_rajiv_sharma.png',
  'story_office_team.png', 'hero.png', 'project1.png', 'luxury_real_estate_guidance_dark.png', 'career_hero_employees.png',
];

fs.mkdirSync(out, { recursive: true });
let failed = 0;
for (const f of files) {
  try {
    const res = await fetch(`https://www.homexarealty.com/images/${f}`);
    if (!res.ok) throw new Error(String(res.status));
    fs.writeFileSync(path.join(out, f), Buffer.from(await res.arrayBuffer()));
    console.log(`saved ${f}`);
  } catch (err) {
    failed++;
    console.warn(`failed ${f}: ${err.message}`);
  }
}
// Non-zero exit tells CI to keep loading images from the live site instead.
if (failed) process.exit(1);
