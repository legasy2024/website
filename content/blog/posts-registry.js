/**
 * Registro centralizado de todos los posts del blog
 * 
 * Este archivo es la única fuente de verdad para:
 * - Slugs en cada idioma
 * - Metadatos básicos (imagen, fecha, label)
 * - Orden de los posts
 * - Estado de publicación
 * 
 * IMPORTANTE: El campo `id` es inmutable y nunca debe cambiar.
 * Los slugs pueden cambiar si es necesario, pero el ID permanece igual.
 */

export const blogPostsRegistry = [
  {
    id: "definitive-guide",
    slugs: {
      es: "guia-definitiva-donde-tatuarse-en-cali",
      en: "definitive-guide-on-where-to-tattoo-en-cali"
    },
    image: "/img/blog/post1.png",
    date: {
      es: "08 de abril de 2025",
      en: "April 08, 2025"
    },
    label: {
      es: "Guía Local",
      en: "Local Guide"
    },
    published: true,
    order: 1
  },
  {
    id: "travel-reasons",
    slugs: {
      es: "razones-para-viajar-a-colombia-por-tu-proximo-tatuaje",
      en: "reason-to-travel-to-colombia-for-your-next-tattoo"
    },
    image: "/img/blog/post2.png",
    date: {
      es: "14 de abril de 2025",
      en: "April 14, 2025"
    },
    label: {
      es: "Viajes",
      en: "Travel"
    },
    published: true,
    order: 2
  },
  {
    id: "english-speaking",
    slugs: {
      es: "artistas-de-tatuajes-que-hablan-ingles-en-cali",
      en: "english-speaking-tattoo-artists-in-cali-colombia"
    },
    image: "/img/blog/post3.png",
    date: {
      es: "17 de abril de 2025",
      en: "April 17, 2025"
    },
    label: {
      es: "Internacional",
      en: "International"
    },
    published: true,
    order: 3
  },
  {
    id: "cali-creative-city",
    slugs: {
      es: "cali-el-auge-de-una-ciudad-creativa-para-extranjeros",
      en: "cali-tattoo-scene-for-foreigners"
    },
    image: "/img/blog/post4.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025"
    },
    label: {
      es: "Turismo",
      en: "Tourism"
    },
    published: true,
    order: 4
  },
  {
    id: "prices-comparison",
    slugs: {
      es: "precios-de-tatuajes-en-colombia-vs-eeuu",
      en: "tattoo-prices-colombia-vs-usa"
    },
    image: "/img/blog/post5.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025"
    },
    label: {
      es: "Precios",
      en: "Prices"
    },
    published: true,
    order: 5
  },
  {
    id: "inclusive-studios",
    slugs: {
      es: "estudios-de-tatuajes-inclusivos-en-colombia",
      en: "inclusive-tattoo-studios-in-colombia"
    },
    image: "/img/blog/post6.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025"
    },
    label: {
      es: "Inclusión",
      en: "Inclusion"
    },
    published: true,
    order: 6
  },
  {
    id: "remote-process",
    slugs: {
      es: "proceso-de-trabajo-con-artistas-colombianos-a-distancia",
      en: "remote-tattoo-process-colombia-from-usa"
    },
    image: "/img/blog/post7.png",
    date: {
      es: "29 de abril de 2025",
      en: "April 29, 2025"
    },
    label: {
      es: "Proceso",
      en: "Process"
    },
    published: true,
    order: 7
  },
  {
    id: "history",
    slugs: {
      es: "historia-del-arte-del-tatuaje-en-colombia",
      en: "history-of-tattoo-art-in-colombia"
    },
    image: "/img/blog/post8.png",
    date: {
      es: "30 de abril de 2025",
      en: "April 30, 2025"
    },
    label: {
      es: "Historia",
      en: "History"
    },
    published: true,
    order: 8
  },
  {
    id: "fine-line-durability",
    slugs: {
      es: "tatuajes-de-linea-fina-en-cali-durabilidad-del-trazo",
      en: "fine-line-tattoos-in-cali-durability"
    },
    image: "/img/blog/post1.png",
    date: {
      es: "31 de enero de 2026",
      en: "January 31, 2026"
    },
    label: {
      es: "Línea fina",
      en: "Fine line"
    },
    published: true,
    order: 9
  },
  {
    id: "tattoo-healing-mistakes",
    slugs: {
      es: "7-errores-que-arruinan-la-curacion-de-tu-tatuaje",
      en: "7-mistakes-that-ruin-your-tattoo-healing"
    },
    image: "/img/blog/post2.png",
    date: {
      es: "31 de enero de 2026",
      en: "January 31, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 10
  },
  {
    id: "tattoo-healing-time",
    slugs: {
      es: "cuanto-tarda-en-cicatrizar-un-tatuaje-segun-tamano-y-zona",
      en: "how-long-does-a-tattoo-take-to-heal-size-and-placement"
    },
    image: "/img/blog/post3.png",
    date: {
      es: "12 de febrero de 2026",
      en: "February 12, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 11
  },
  {
    id: "tattoo-care-step-by-step",
    slugs: {
      es: "cuidados-del-tatuaje-paso-a-paso-guia-completa",
      en: "tattoo-care-step-by-step-complete-guide"
    },
    image: "/img/blog/post6.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 12
  },
  {
    id: "tattoo-healing-signs",
    slugs: {
      es: "senales-normales-y-senales-de-alerta-durante-la-cicatrizacion",
      en: "normal-signs-and-warning-signs-during-tattoo-healing"
    },
    image: "/img/blog/post7.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 13
  },
  {
    id: "tattoo-aftercare-products",
    slugs: {
      es: "productos-recomendados-para-cuidar-un-tatuaje-recien-hecho",
      en: "recommended-products-for-new-tattoo-care"
    },
    image: "/img/blog/post8.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 14
  },
  {
    id: "tattoo-sun-protection",
    slugs: {
      es: "como-proteger-un-tatuaje-del-sol-sin-danar-la-tinta",
      en: "how-to-protect-tattoo-from-sun-without-damaging-ink"
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 15
  },
  {
    id: "tattoo-color-loss",
    slugs: {
      es: "que-hacer-si-tu-tatuaje-pierde-color-durante-la-cicatrizacion",
      en: "what-to-do-if-tattoo-loses-color-during-healing"
    },
    image: "/img/blog/post2.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 16
  },
  {
    id: "tattoo-sleeping-guide",
    slugs: {
      es: "como-dormir-despues-de-hacerte-un-tatuaje-sin-danarlo",
      en: "how-to-sleep-after-getting-tattoo-without-damaging-it"
    },
    image: "/img/blog/post3.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 17
  },
  {
    id: "tattoo-exercise-guide",
    slugs: {
      es: "se-puede-hacer-ejercicio-despues-de-tatuarse",
      en: "can-you-exercise-after-getting-tattoo"
    },
    image: "/img/blog/post4.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Cuidado",
      en: "Aftercare"
    },
    published: true,
    order: 18
  },
  {
    id: "first-tattoo-guide",
    slugs: {
      es: "todo-lo-que-debes-saber-antes-de-hacerte-un-tatuaje-por-primera-vez",
      en: "everything-you-should-know-before-getting-your-first-tattoo"
    },
    image: "/img/blog/post7.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 19
  },
  {
    id: "choosing-tattoo-artist",
    slugs: {
      es: "como-elegir-un-buen-tatuador-sin-dejarte-llevar-solo-por-el-precio",
      en: "how-to-choose-good-tattoo-artist-without-price-only"
    },
    image: "/img/blog/post8.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 20
  },
  {
    id: "first-tattoo-session",
    slugs: {
      es: "que-esperar-durante-tu-primera-sesion-de-tatuaje",
      en: "what-to-expect-during-your-first-tattoo-session"
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 21
  },
  {
    id: "questions-before-tattoo",
    slugs: {
      es: "preguntas-que-deberias-hacer-antes-de-tatuarte",
      en: "questions-you-should-ask-before-getting-tattoo"
    },
    image: "/img/blog/post2.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 22
  },
  {
    id: "tattoo-longevity",
    slugs: {
      es: "cuanto-dura-realmente-un-tatuaje-con-los-anos",
      en: "how-long-does-tattoo-really-last-over-years"
    },
    image: "/img/blog/post3.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 23
  },
  {
    id: "professional-vs-amateur-studio",
    slugs: {
      es: "diferencias-entre-un-estudio-profesional-de-tatuajes-y-uno-amateur",
      en: "differences-between-professional-and-amateur-tattoo-studio"
    },
    image: "/img/blog/post4.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 24
  },
  {
    id: "tattoo-session-duration",
    slugs: {
      es: "cuanto-tiempo-dura-una-sesion-de-tatuaje-segun-el-diseno",
      en: "how-long-does-tattoo-session-last-depending-on-design"
    },
    image: "/img/blog/post6.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Guía",
      en: "Guide"
    },
    published: true,
    order: 25
  },
  {
    id: "tattoo-pain-guide",
    slugs: {
      es: "duele-hacerse-un-tatuaje-guia-realista-sobre-dolor-zonas-y-sensaciones",
      en: "does-getting-tattoo-hurt-realistic-guide-pain-zones-sensations"
    },
    image: "/img/blog/post7.png",
    date: {
      es: "12 de febrero de 2026",
      en: "February 12, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 26
  },
  {
    id: "most-painful-tattoo-zones",
    slugs: {
      es: "zonas-del-cuerpo-donde-mas-duele-tatuarse-ranking-real",
      en: "most-painful-body-zones-for-tattoos-real-ranking"
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 27
  },
  {
    id: "managing-pain-long-tattoo-session",
    slugs: {
      es: "como-manejar-el-dolor-durante-una-sesion-de-tatuajes-larga",
      en: "how-to-manage-pain-during-long-tattoo-session"
    },
    image: "/img/blog/post2.png",
    date: {
      es: "14 de febrero de 2026",
      en: "February 14, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 28
  },
  {
    id: "tattoo-pain-by-skin-type",
    slugs: {
      es: "cuanto-duele-tatuarse-segun-el-tipo-de-piel",
      en: "how-much-does-tattooing-hurt-by-skin-type"
    },
    image: "/img/blog/post3.png",
    date: {
      es: "15 de febrero de 2026",
      en: "February 15, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 29
  },
  {
    id: "relaxation-techniques-during-tattoo",
    slugs: {
      es: "tecnicas-para-relajarte-mientras-te-estan-tatuando",
      en: "relaxation-techniques-while-getting-tattooed"
    },
    image: "/img/blog/post4.png",
    date: {
      es: "16 de febrero de 2026",
      en: "February 16, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 30
  },
  {
    id: "tattoo-pain-duration-after",
    slugs: {
      es: "cuanto-dura-el-dolor-despues-de-tatuarse",
      en: "how-long-does-tattoo-pain-last-after"
    },
    image: "/img/blog/post8.png",
    date: {
      es: "17 de febrero de 2026",
      en: "February 17, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 31
  },
  {
    id: "tattoo-anesthesia-guide",
    slugs: {
      es: "anestesia-para-tatuajes-funciona-realmente",
      en: "tattoo-anesthesia-does-it-really-work"
    },
    image: "/img/blog/post6.png",
    date: {
      es: "18 de febrero de 2026",
      en: "February 18, 2026"
    },
    label: {
      es: "Experiencia",
      en: "Experience"
    },
    published: true,
    order: 32
  }
];

/**
 * Obtiene un post del registro por su ID
 * @param {string} id - ID del post
 * @returns {Object|null} - Post o null si no existe
 */
export function getPostById(id) {
  return blogPostsRegistry.find(post => post.id === id) || null;
}

/**
 * Obtiene un post del registro por su slug en un idioma específico
 * @param {string} slug - Slug del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Object|null} - Post o null si no existe
 */
export function getPostBySlug(slug, locale) {
  return blogPostsRegistry.find(post => post.slugs[locale] === slug) || null;
}

/**
 * Obtiene todos los posts publicados ordenados
 * @returns {Array} - Array de posts ordenados por `order`
 */
export function getAllPublishedPosts() {
  return blogPostsRegistry
    .filter(post => post.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene el slug en inglés (carpeta física) desde cualquier slug
 * @param {string} slug - Slug en cualquier idioma
 * @returns {string|null} - Slug en inglés o null si no se encuentra
 */
export function getEnglishSlug(slug) {
  const post = blogPostsRegistry.find(
    p => p.slugs.es === slug || p.slugs.en === slug
  );
  return post ? post.slugs.en : null;
}

/**
 * Obtiene el slug correspondiente en el idioma de destino
 * @param {string} currentSlug - Slug actual
 * @param {string} targetLocale - Idioma de destino ('es' o 'en')
 * @returns {string|null} - Slug en el idioma de destino o null
 */
export function getSlugForLocale(currentSlug, targetLocale) {
  const post = blogPostsRegistry.find(
    p => p.slugs.es === currentSlug || p.slugs.en === currentSlug
  );
  return post ? post.slugs[targetLocale] : null;
}
