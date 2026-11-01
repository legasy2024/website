#!/usr/bin/env node
/**
 * Optimiza las imágenes del proyecto en su sitio (mismo nombre y ruta):
 * - Corrige la orientación EXIF y elimina metadatos.
 * - Redimensiona al lado largo máximo (sin ampliar nunca).
 * - Recomprime: JPEG mozjpeg progresivo / PNG con paleta.
 * - Solo sobrescribe si el resultado pesa menos (idempotente: se puede correr siempre).
 *
 * Además genera miniaturas de las portadas del blog en public/img/thumbs/
 * (las usan el listado del blog y los posts relacionados).
 *
 * Uso: npm run optimize:images
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { blogPostsRegistry } = require("../content/blog/posts-registry");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const TARGETS = [
  // Blog, galerías y portadas: se ven como máximo a ~1/3 o 1/2 del ancho
  { dir: path.join(PUBLIC, "img"), maxSize: 1600, skip: [path.join(PUBLIC, "img", "thumbs")] },
  // Imágenes importadas en componentes (heros a pantalla completa, portafolio)
  { dir: path.join(ROOT, "components"), maxSize: 2000, skip: [] },
];

const THUMB_WIDTH = 640;
const JPEG = { quality: 78, mozjpeg: true, progressive: true };
const PNG = { palette: true, quality: 80, compressionLevel: 9, effort: 10 };

function walk(dir, skip, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (skip.includes(full)) continue;
    if (entry.isDirectory()) walk(full, skip, out);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function encode(pipeline, file) {
  return /\.png$/i.test(file) ? pipeline.png(PNG) : pipeline.jpeg(JPEG);
}

async function optimize(file, maxSize) {
  const input = fs.readFileSync(file);
  const output = await encode(
    sharp(input).rotate().resize(maxSize, maxSize, { fit: "inside", withoutEnlargement: true }),
    file
  ).toBuffer();

  if (output.length < input.length * 0.95) {
    fs.writeFileSync(file, output);
    return { before: input.length, after: output.length };
  }
  return { before: input.length, after: input.length };
}

/** /img/blog/post2.png -> /img/thumbs/blog/post2.jpg */
function thumbPathFor(src) {
  return src.replace(/^\/img\//, "/img/thumbs/").replace(/\.(png|jpe?g)$/i, ".jpg");
}

async function generateThumbs() {
  const covers = [...new Set(blogPostsRegistry.map((p) => p.image).filter((src) => src?.startsWith("/img/")))];
  let created = 0;
  for (const src of covers) {
    const source = path.join(PUBLIC, src);
    const target = path.join(PUBLIC, thumbPathFor(src));
    if (!fs.existsSync(source)) continue;
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= fs.statSync(source).mtimeMs) continue;
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await sharp(source)
      .rotate()
      .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 72, mozjpeg: true, progressive: true })
      .toFile(target);
    created++;
  }
  return { covers: covers.length, created };
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1) + " MB";

async function main() {
  let before = 0;
  let after = 0;
  let changed = 0;

  for (const { dir, maxSize, skip } of TARGETS) {
    const files = walk(dir, skip);
    for (const file of files) {
      try {
        const r = await optimize(file, maxSize);
        before += r.before;
        after += r.after;
        if (r.after < r.before) changed++;
      } catch (error) {
        console.warn(`⚠️  ${path.relative(ROOT, file)}: ${error.message}`);
      }
    }
  }

  console.log(`✅ Imágenes optimizadas: ${changed}  (${mb(before)} → ${mb(after)})`);

  const thumbs = await generateThumbs();
  console.log(`✅ Miniaturas de portada: ${thumbs.created} nuevas (${thumbs.covers} portadas)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

