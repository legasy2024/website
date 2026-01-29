import { blogPostsRegistry, getPostBySlug } from '@/content/blog/posts-registry';

/**
 * Construye el mapeo de slugs dinámicamente desde el registry
 * @returns {Object} - Objeto con mapeos ES->EN y EN->ES
 */
function buildSlugMapping() {
  const mapping = {
    esToEn: {},
    enToEs: {}
  };

  blogPostsRegistry.forEach(post => {
    if (post.published && post.slugs.es && post.slugs.en) {
      mapping.esToEn[post.slugs.es] = post.slugs.en;
      mapping.enToEs[post.slugs.en] = post.slugs.es;
    }
  });

  return mapping;
}

/**
 * Obtiene el slug correspondiente en el idioma de destino
 * @param {string} currentSlug - Slug actual
 * @param {string} targetLocale - Idioma de destino ('es' o 'en')
 * @returns {string|null} - Slug en el idioma de destino o null si no se encuentra
 */
export function getSlugForLocale(currentSlug, targetLocale) {
  // Buscar el post por slug en cualquier idioma
  const postEs = getPostBySlug(currentSlug, 'es');
  const postEn = getPostBySlug(currentSlug, 'en');
  
  const post = postEs || postEn;
  
  if (!post) {
    // Si no se encuentra el post, devolver el slug tal cual
    return currentSlug;
  }
  
  // Devolver el slug en el idioma de destino
  return post.slugs[targetLocale] || currentSlug;
}

/**
 * Obtiene el slug en inglés (carpeta física) desde cualquier slug
 * @param {string} slug - Slug en cualquier idioma
 * @returns {string} - Slug en inglés (carpeta física)
 */
export function getEnglishSlug(slug) {
  // Buscar el post por slug en cualquier idioma
  const postEs = getPostBySlug(slug, 'es');
  const postEn = getPostBySlug(slug, 'en');
  
  const post = postEs || postEn;
  
  if (!post) {
    // Si no se encuentra el post, asumir que ya está en inglés
    return slug;
  }
  
  // Devolver siempre el slug en inglés (carpeta física)
  return post.slugs.en || slug;
}

/**
 * Mapea una URL de blog al idioma de destino
 * IMPORTANTE: Las carpetas físicas están en inglés, así que siempre debemos
 * apuntar a la carpeta en inglés, pero mostrar el slug correcto según el idioma
 * @param {string} pathname - Pathname actual (ej: '/es/blog/guia-definitiva-donde-tatuarse-en-cali')
 * @param {string} targetLocale - Idioma de destino ('es' o 'en')
 * @returns {string} - Nueva URL con el slug correcto
 */
export function mapBlogUrl(pathname, targetLocale) {
  // Verificar si es una URL de blog
  const blogMatch = pathname.match(/^\/(es|en)\/blog\/(.+)$/);
  
  if (!blogMatch) {
    // No es una URL de blog, solo cambiar el locale
    return pathname.replace(/^\/(es|en)/, `/${targetLocale}`);
  }
  
  const [, currentLocale, currentSlug] = blogMatch;
  
  // Primero obtener el slug en inglés (carpeta física)
  const englishSlug = getEnglishSlug(currentSlug);
  
  // Si el idioma de destino es inglés, usar el slug en inglés directamente
  if (targetLocale === 'en') {
    return `/${targetLocale}/blog/${englishSlug}`;
  }
  
  // Si el idioma de destino es español, usar el slug en español
  // Los rewrites se encargarán de mapearlo a la carpeta en inglés
  const spanishSlug = getSlugForLocale(englishSlug, 'es');
  return `/${targetLocale}/blog/${spanishSlug}`;
}
