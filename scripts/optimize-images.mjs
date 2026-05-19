#!/usr/bin/env node
/**
 * Image optimization script.
 * - Generates .webp (and .avif) alongside JPG/PNG sources in public/images/.
 * - Generates an OG social cover at public/images/og-cover.png (1200x630).
 *
 * Usage: node scripts/optimize-images.mjs
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const IMG_DIR = new URL('../public/images/', import.meta.url).pathname;
const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png']);

/**
 * Best-effort: convert all source images to .webp (and .avif when worth it).
 * Skips files that already have a fresher derivative.
 */
async function optimize() {
  const files = (await readdir(IMG_DIR)).filter(f => SOURCE_EXTS.has(extname(f).toLowerCase()));
  console.log(`Found ${files.length} source images.`);

  let bytesSaved = 0;
  for (const file of files) {
    const src = join(IMG_DIR, file);
    const name = basename(file, extname(file));
    const webp = join(IMG_DIR, `${name}.webp`);
    const avif = join(IMG_DIR, `${name}.avif`);

    const srcStat = await stat(src);

    if (!existsSync(webp) || (await stat(webp)).mtimeMs < srcStat.mtimeMs) {
      const out = await sharp(src)
        .webp({ quality: 82, effort: 5 })
        .toBuffer();
      await writeFile(webp, out);
      const saved = srcStat.size - out.length;
      bytesSaved += Math.max(0, saved);
      console.log(`  webp  ${file.padEnd(28)} ${fmt(srcStat.size)} → ${fmt(out.length)}  (${pct(out.length, srcStat.size)})`);
    }

    if (!existsSync(avif) || (await stat(avif)).mtimeMs < srcStat.mtimeMs) {
      try {
        const out = await sharp(src)
          .avif({ quality: 55, effort: 4 })
          .toBuffer();
        // Only keep AVIF if it actually beats WebP meaningfully.
        const webpSize = existsSync(webp) ? (await stat(webp)).size : Infinity;
        if (out.length < webpSize * 0.9) {
          await writeFile(avif, out);
          console.log(`  avif  ${file.padEnd(28)} ${fmt(srcStat.size)} → ${fmt(out.length)}  (${pct(out.length, srcStat.size)})`);
        }
      } catch (e) {
        // AVIF can fail on some platforms — non-fatal.
      }
    }
  }

  console.log(`\nDone. ~${fmt(bytesSaved)} saved (WebP vs source).`);
}

/**
 * Build an OG cover: simple branded SVG → 1200x630 PNG via sharp.
 */
async function buildOgCover() {
  const out = join(IMG_DIR, 'og-cover.png');
  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0c10"/>
      <stop offset="100%" stop-color="#11141b"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="rgba(124,242,192,0.07)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <g transform="translate(80,90)">
    <rect x="0" y="0" width="14" height="14" fill="#7cf2c0" rx="2"/>
    <text x="28" y="13" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20" fill="#e6ebf2" font-weight="700">andres.ragot</text>
  </g>
  <g transform="translate(80,200)">
    <text font-family="-apple-system, Inter, system-ui, sans-serif" font-size="64" font-weight="700" fill="#e6ebf2" letter-spacing="-2">
      <tspan x="0" dy="0">Firmware &amp; Embedded</tspan>
      <tspan x="0" dy="78">Software Engineer.</tspan>
    </text>
    <text font-family="-apple-system, Inter, system-ui, sans-serif" font-size="28" fill="#9aa4b2" y="220">
      C/C++ · ESP32 · real-time graphics · esp32_3d_engine
    </text>
  </g>
  <g transform="translate(80,560)" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20" fill="#7cf2c0">
    <text>andresragot.github.io</text>
  </g>
  <g transform="translate(900,90)" opacity="0.9">
    <polyline points="0,0 200,0 200,140 100,200 0,140 0,0" fill="none" stroke="#7cf2c0" stroke-width="2"/>
    <polyline points="40,40 240,40 240,180 140,240 40,180 40,40" fill="none" stroke="#6aa6ff" stroke-width="2" opacity="0.7"/>
  </g>
</svg>`);

  await sharp(svg).png({ compressionLevel: 9 }).toFile(out);
  console.log(`OG cover written: ${out}`);
}

function fmt(b) { return (b / 1024).toFixed(1) + ' KB'; }
function pct(a, b) { return Math.round((a / b) * 100) + '%'; }

await optimize();
await buildOgCover();
