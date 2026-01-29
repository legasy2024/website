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
      es: "05 de mayo de 2025",
      en: "May 05, 2025"
    },
    label: {
      es: "Línea fina",
      en: "Fine line"
    },
    published: true,
    order: 9
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
