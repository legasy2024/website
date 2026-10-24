#!/usr/bin/env node
// Métricas objetivas para la skill seo-status.
// Uso: node .claude/skills/seo-status/scripts/seo-metrics.js <id|slug> [es|en]
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../../..');
const POSTS_DIR = path.join(ROOT, 'content/blog/posts');
const BASE = 'https://www.legassystudio.com';

const [query, onlyLang] = process.argv.slice(2);
if (!query) {
  console.error('Uso: seo-metrics.js <id|slug> [es|en]');
  process.exit(1);
}

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8')));

const slugIndex = {}; // `${lang}/${slug}` -> id
for (const p of posts) {
  for (const [lang, t] of Object.entries(p.translations || {})) slugIndex[`${lang}/${t.slug}`] = p.id;
}

const post = posts.find(
  (p) => p.id === query || Object.values(p.translations || {}).some((t) => t.slug === query)
);
if (!post) {
  console.error(`Post no encontrado: ${query}`);
  process.exit(1);
}

const stripTags = (html) =>
  html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => s.split(/\s+/).filter(Boolean);
const STOP = new Set('de la el en y a los las un una para por con del que the of and in to for a an on with'.split(' '));
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function analyze(lang) {
  const t = post.translations[lang];
  if (!t) return { lang, error: 'traducción inexistente' };
  const html = t.contentHtml || '';
  const text = stripTags(html);
  const faq = t.faq || [];
  const galleryText = (t.gallery?.items || []).map((i) => `${i.title || ''} ${i.description || ''}`).join(' ');
  const faqText = faq.map((f) => `${f.q} ${f.a}`).join(' ');
  const allWords = words(text);
  const totalWords = words(`${text} ${galleryText} ${faqText}`).length;
  const first100 = norm(allWords.slice(0, 100).join(' '));
  const firstP = (html.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [, ''])[1];
  const keyword = (t.seo?.keywords || [])[0] || '';

  const links = [...html.matchAll(/<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1],
    anchor: stripTags(m[2]),
  }));
  const internal = [];
  const external = [];
  for (const l of links) {
    const href = l.href.replace(BASE, '');
    if (href.startsWith('/')) internal.push({ ...l, href });
    else if (/^https?:/.test(href) && !/wa\.me|instagram\.com/.test(href)) external.push(l);
  }
  const blogLinks = internal.filter((l) => /^\/(es|en)\/blog\/[^/?#]+/.test(l.href));
  const broken = [];
  const crossLang = [];
  for (const l of blogLinks) {
    const [, lng, slug] = l.href.match(/^\/(es|en)\/blog\/([^/?#]+)/);
    if (lng !== lang) crossLang.push(l.href);
    if (!slugIndex[`${lng}/${slug}`]) broken.push(l.href);
  }
  const moneyLinks = internal.filter((l) => !/\/blog\//.test(l.href));
  const weakAnchors = links.filter((l) => /^(aqu[ií]|click|clic|here|this|este art[ií]culo|leer m[aá]s|read more)/i.test(l.anchor.trim()));

  const ownSlug = t.slug;
  const inbound = posts.filter(
    (p) => p.id !== post.id && (p.translations?.[lang]?.contentHtml || '').includes(`/blog/${ownSlug}`)
  ).map((p) => p.id);

  const imgs = [...html.matchAll(/<img\s[^>]*>/gi)].map((m) => m[0]);
  const galleryItems = (t.gallery?.items || post.gallery?.items || []);
  const missingAlt = imgs.filter((i) => !/alt=["'][^"']+["']/.test(i)).length +
    galleryItems.filter((g) => !g.alt).length;

  const expectedCanonical = `${BASE}/${lang}/blog/${t.slug}`;
  const heading = (n) => (html.match(new RegExp(`<h${n}[\\s>]`, 'gi')) || []).length;

  return {
    lang,
    slug: t.slug,
    keyword,
    wordCount: allWords.length,
    wordCountWithFaqAndGallery: totalWords,
    firstParagraphWords: words(stripTags(firstP)).length,
    firstParagraph: stripTags(firstP).slice(0, 400),
    keywordInFirst100: keyword ? first100.includes(norm(keyword)) : null,
    // Variante cercana: todas las palabras significativas de la keyword aparecen en las primeras 100.
    keywordTermsInFirst100: keyword
      ? norm(keyword).split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).every((w) => first100.includes(w))
      : null,
    seoTitle: { text: t.seo?.title, length: (t.seo?.title || '').length },
    metaDescription: { length: (t.seo?.description || '').length },
    slugWords: t.slug.split('-').length,
    canonicalOk: t.seo?.canonical === expectedCanonical,
    canonical: t.seo?.canonical,
    headings: { h1: heading(1), h2: heading(2), h3: heading(3) },
    links: {
      internalBlog: blogLinks.length,
      money: moneyLinks.length,
      external: external.length,
      broken,
      crossLang,
      weakAnchors: weakAnchors.map((l) => l.anchor),
      anchors: internal.map((l) => `${l.anchor} → ${l.href}`),
    },
    inboundFromPosts: inbound,
    images: { inContent: imgs.length, gallery: galleryItems.length, missingAlt },
    faqCount: faq.length,
    hasFaqSection: faq.length >= 3 || /preguntas frecuentes|frequently asked/i.test(text),
    mentionsCali: /\bcali\b/i.test(text),
    listsOrTables: (html.match(/<(ul|ol|table)[\s>]/gi) || []).length,
    cta: { whatsapp: !!t.cta?.whatsapp?.url, whatsappPrefilled: /text=/.test(t.cta?.whatsapp?.url || ''), instagram: !!t.cta?.instagram?.url },
    date: t.date,
    dateModified: t.dateModified || null,
  };
}

const langs = onlyLang ? [onlyLang] : Object.keys(post.translations);
const titles = posts.flatMap((p) => Object.values(p.translations || {}).map((t) => t.seo?.title));
const result = {
  id: post.id,
  languages: Object.keys(post.translations),
  results: langs.map(analyze).map((r) => ({
    ...r,
    seoTitleDuplicated: titles.filter((x) => x && x === r.seoTitle?.text).length > 1,
  })),
};
console.log(JSON.stringify(result, null, 2));
