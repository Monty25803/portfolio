/**
 * Optional: capture real screenshots from live project URLs.
 * Run: node scripts/capture-project-screenshots.mjs
 *
 * Saves JPGs to public/projects/ — update profile.js image paths if used.
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/projects");

const targets = [
  { id: "medall-client-onboarding", url: "https://onboard.medallcorp.in/dashboard" },
  { id: "metropolis-scm", url: "https://scm.metropolisindia.com/" },
];

mkdirSync(outDir, { recursive: true });

for (const { id, url } of targets) {
  const shotUrl = `https://image.thum.io/get/width/1400/crop/800/noanimate/${encodeURIComponent(url)}`;
  console.log(`Fetching ${id}...`);
  try {
    const res = await fetch(shotUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(join(outDir, `${id}.jpg`), buf);
    console.log(`  ✓ saved ${id}.jpg`);
  } catch (err) {
    console.warn(`  ✗ ${id}: ${err.message}`);
  }
}

console.log("\nDone. To use real screenshots, set project.image to /projects/<id>.jpg in profile.js");
