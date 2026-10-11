import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'public/images');
const output = path.join(source, 'optimized');
await mkdir(output, { recursive: true });
await mkdir(path.join(root, 'lib'), { recursive: true });
const manifest = {};
let originalBytes = 0;
let largestBytes = 0;

// Generate once, rather than encoding images while a visitor waits.
for (const file of (await readdir(source)).filter(file => file.endsWith('.webp')).sort()) {
  const buffer = await readFile(path.join(source, file));
  const { width, height } = await sharp(buffer).metadata();
  const hash = createHash('sha256').update(buffer).update('avif-q45-webp-q60-v2').digest('hex').slice(0, 12);
  const widths = [...new Set([320, 480, 768, 1200].map(size => Math.min(size, width)))];
  const variants = [];
  const avifVariants = [];
  for (const size of widths) {
    const name = `${path.parse(file).name}-${hash}-${size}.webp`;
    const destination = path.join(output, name);
    try { await access(destination); } catch {
      await sharp(buffer).resize({ width: size, withoutEnlargement: true }).webp({ quality: 60, effort: 4 }).toFile(destination);
    }
    variants.push({ src: `/images/optimized/${name}`, width: size });
    const avifName = `${path.parse(file).name}-${hash}-${size}.avif`;
    const avifDestination = path.join(output, avifName);
    try { await access(avifDestination); } catch {
      await sharp(buffer).resize({ width: size, withoutEnlargement: true }).avif({ quality: 45, effort: 3, chromaSubsampling: '4:2:0' }).toFile(avifDestination);
    }
    avifVariants.push({ src: `/images/optimized/${avifName}`, width: size });
  }
  const preview = await sharp(buffer).resize({ width: 16 }).webp({ quality: 30 }).toBuffer();
  manifest[`/images/${file}`] = { width, height, variants, avifVariants, placeholder: `data:image/webp;base64,${preview.toString('base64')}` };
  originalBytes += buffer.length;
  const last = avifVariants[avifVariants.length - 1];
  largestBytes += (await readFile(path.join(root, 'public', last.src))).length;
}

await writeFile(path.join(root, 'lib/optimized-images.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Images: ${Math.round(originalBytes / 1024)} KB → ${Math.round(largestBytes / 1024)} KB in AVIF at maximum resolution; responsive WebP fallbacks also ready.`);
