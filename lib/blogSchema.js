const SITE = "https://www.legassystudio.com";

const MONTHS = {
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6, julio: 7,
  agosto: 8, septiembre: 9, setiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7,
  august: 8, september: 9, october: 10, november: 11, december: 12,
};

/**
 * Convierte "31 de enero de 2026" o "January 31, 2026" a "2026-01-31".
 * Devuelve null si no reconoce el formato.
 */
export function toIsoDate(date) {
  if (!date) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(date)) return date.slice(0, 10);
  const s = date.toLowerCase().replace(/,/g, "");
  const es = s.match(/(\d{1,2}) de ([a-z]+) de (\d{4})/);
  const en = s.match(/([a-z]+) (\d{1,2}) (\d{4})/);
  let d, m, y;
  if (es) [, d, m, y] = es;
  else if (en) [, m, d, y] = en;
  else return null;
  const month = MONTHS[m];
  if (!month) return null;
  return `${y}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/**
 * JSON-LD (BlogPosting + BreadcrumbList + FAQPage opcional) para un post.
 */
export function buildBlogPostSchema(post, locale) {
  const url = post.seo?.canonical || `${SITE}/${locale}/blog/${post.slug}`;
  const image = post.image?.startsWith("http") ? post.image : `${SITE}${post.image || ""}`;
  const published = toIsoDate(post.date);
  const modified = toIsoDate(post.dateModified) || published;
  const organization = {
    "@type": "TattooParlor",
    "@id": `${SITE}/#organization`,
    name: "Legassy Studio",
    url: SITE,
    logo: `${SITE}/img/logo.svg`,
    telephone: "+57 310 311 0611",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
  };
  const author = post.author
    ? {
        "@type": "Person",
        name: post.author.name,
        ...(post.author.jobTitle && { jobTitle: post.author.jobTitle }),
        ...(post.author.url && { url: post.author.url }),
        worksFor: { "@id": organization["@id"] },
      }
    : organization;

  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: url,
      headline: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      image,
      inLanguage: locale === "es" ? "es-CO" : "en-US",
      ...(published && { datePublished: published }),
      ...(modified && { dateModified: modified }),
      author,
      publisher: organization,
      ...(post.seo?.keywords && { keywords: [].concat(post.seo.keywords).join(", ") }),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Legassy Studio", item: `${SITE}/${locale}` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/${locale}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
