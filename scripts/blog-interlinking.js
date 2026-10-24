#!/usr/bin/env node
/**
 * Interlinking automático del blog.
 *
 * Para cada post publicado e idioma, calcula los posts más relacionados
 * (similitud de keywords, título y categoría) e inserta un bloque
 * "Sigue leyendo" con 3 enlaces contextuales + 1 enlace a página comercial.
 *
 * El bloque va delimitado por <!-- related:start --> / <!-- related:end -->,
 * así que el script es idempotente: re-ejecutarlo reemplaza el bloque.
 *
 * Uso: node scripts/blog-interlinking.js [--dry]
 */
const fs = require("fs");
const path = require("path");
const { blogPostsRegistry } = require("../content/blog/posts-registry");

const POSTS_DIR = path.join(__dirname, "../content/blog/posts");
const DRY = process.argv.includes("--dry");
const RELATED = 3;

const STOP = new Set(
  ("de la el en y a los las un una para por con del que tu tus su sus como al es mas más o se lo " +
    "the of and in to for a an your you on with how what is are guide guía cali colombia tattoo tattoos " +
    "tatuaje tatuajes 2025 2026 vs").split(" ")
);
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const tokens = (s) =>
  new Set(norm(s).split(/[^a-z0-9ñ]+/).filter((w) => w.length > 2 && !STOP.has(w)));

const MONEY = {
  gallery: { es: ["/es/portfolio", "nuestro portafolio de tatuajes en Cali"], en: ["/en/portfolio", "our tattoo portfolio in Cali"] },
  contact: { es: ["/es/contact", "agenda una valoración gratuita con nuestros artistas"], en: ["/en/contact", "book a free consultation with our artists"] },
};
const HEADING = { es: "Sigue leyendo", en: "Keep reading" };
const INTRO = {
  es: "Si este tema te sirvió, estas guías complementan lo que acabas de leer:",
  en: "If this was useful, these guides build on what you just read:",
};
const MONEY_TEXT = {
  es: (a) => `¿Listo para dar el paso? Revisa ${a}.`,
  en: (a) => `Ready to take the next step? Check ${a}.`,
};

const published = blogPostsRegistry.filter((p) => p.published);
const posts = published.map((meta) => {
  const data = JSON.parse(fs.readFileSync(path.join(POSTS_DIR, `${meta.id}.json`), "utf8"));
  const profile = {};
  for (const lang of ["es", "en"]) {
    const t = data.translations[lang];
    if (!t) continue;
    profile[lang] = {
      kw: tokens([...(t.seo?.keywords || []), t.title].join(" ")),
      label: meta.label?.[lang],
    };
  }
  return { meta, data, profile, isGallery: meta.id.startsWith("gallery") };
});

function score(a, b, lang) {
  const A = a.profile[lang].kw;
  const B = b.profile[lang].kw;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const jaccard = inter / (A.size + B.size - inter || 1);
  const sameLabel = a.profile[lang].label === b.profile[lang].label ? 0.15 : 0;
  // Las galerías enlazan a guías y las guías a alguna galería: mezcla tipos.
  const mixType = a.isGallery !== b.isGallery ? 0.05 : 0;
  return jaccard + sameLabel + mixType;
}

const inbound = Object.fromEntries(posts.map((p) => [p.meta.id, 0]));
let changed = 0;

for (const lang of ["es", "en"]) {
  for (const post of posts) {
    if (!post.profile[lang]) continue;
    const ranked = posts
      .filter((o) => o !== post && o.profile[lang])
      // Penaliza levemente a los posts que ya reciben muchos enlaces para repartir autoridad.
      .map((o) => ({ o, s: score(post, o, lang) - inbound[o.meta.id] * 0.004 }))
      .sort((x, y) => y.s - x.s)
      .slice(0, RELATED)
      .map((x) => x.o);
    ranked.forEach((o) => inbound[o.meta.id]++);
    post.related = post.related || {};
    post.related[lang] = ranked;
  }

  // Ningún post debe quedar huérfano: se añade como 4º enlace en su post más afín.
  for (const orphan of posts.filter((p) => p.profile[lang] && inbound[p.meta.id] === 0)) {
    const host = posts
      .filter((o) => o !== orphan && o.profile[lang] && o.related[lang].length === RELATED)
      .sort((x, y) => score(orphan, y, lang) - score(orphan, x, lang))[0];
    host.related[lang].push(orphan);
    inbound[orphan.meta.id]++;
  }

  for (const post of posts) {
    if (!post.profile[lang]) continue;
    const ranked = post.related[lang];

    const money = post.isGallery ? MONEY.contact[lang] : MONEY.gallery[lang];
    const items = ranked
      .map((o) => {
        const t = o.data.translations[lang];
        return `<li><a href="/${lang}/blog/${o.meta.slugs[lang]}">${t.title}</a></li>`;
      })
      .join("");
    const block =
      `<!-- related:start --><h2>${HEADING[lang]}</h2><p>${INTRO[lang]}</p><ul>${items}</ul>` +
      `<p>${MONEY_TEXT[lang](`<a href="${money[0]}">${money[1]}</a>`)}</p><!-- related:end -->`;

    const t = post.data.translations[lang];
    const base = (t.contentHtml || "").replace(/<!-- related:start -->[\s\S]*?<!-- related:end -->/, "");
    t.contentHtml = base + block;
  }
}

for (const post of posts) {
  const file = path.join(POSTS_DIR, `${post.meta.id}.json`);
  const out = JSON.stringify(post.data, null, 2) + "\n";
  if (out !== fs.readFileSync(file, "utf8")) {
    changed++;
    if (!DRY) fs.writeFileSync(file, out);
  }
}

const counts = Object.values(inbound);
console.log(
  `${DRY ? "[dry] " : ""}${changed} archivos actualizados. Enlaces entrantes por post/idioma: ` +
    `min ${Math.min(...counts) / 2}, max ${Math.max(...counts) / 2}, huérfanos ${counts.filter((c) => c === 0).length}`
);
