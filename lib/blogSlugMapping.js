// Mapeo bidireccional de slugs entre español e inglés
const slugMapping = {
  // Español -> Inglés
  'guia-definitiva-donde-tatuarse-en-cali': 'definitive-guide-on-where-to-tattoo-en-cali',
  'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje': 'reason-to-travel-to-colombia-for-your-next-tattoo',
  'artistas-de-tatuajes-que-hablan-ingles-en-cali': 'english-speaking-tattoo-artists-in-cali-colombia',
  'cali-el-auge-de-una-ciudad-creativa-para-extranjeros': 'cali-tattoo-scene-for-foreigners',
  'precios-de-tatuajes-en-colombia-vs-eeuu': 'tattoo-prices-colombia-vs-usa',
  'estudios-de-tatuajes-inclusivos-en-colombia': 'inclusive-tattoo-studios-in-colombia',
  'proceso-de-trabajo-con-artistas-colombianos-a-distancia': 'remote-tattoo-process-colombia-from-usa',
  'historia-del-arte-del-tatuaje-en-colombia': 'history-of-tattoo-art-in-colombia',
  
  // Inglés -> Español (mapeo inverso)
  'definitive-guide-on-where-to-tattoo-en-cali': 'guia-definitiva-donde-tatuarse-en-cali',
  'reason-to-travel-to-colombia-for-your-next-tattoo': 'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje',
  'english-speaking-tattoo-artists-in-cali-colombia': 'artistas-de-tatuajes-que-hablan-ingles-en-cali',
  'cali-tattoo-scene-for-foreigners': 'cali-el-auge-de-una-ciudad-creativa-para-extranjeros',
  'tattoo-prices-colombia-vs-usa': 'precios-de-tatuajes-en-colombia-vs-eeuu',
  'inclusive-tattoo-studios-in-colombia': 'estudios-de-tatuajes-inclusivos-en-colombia',
  'remote-tattoo-process-colombia-from-usa': 'proceso-de-trabajo-con-artistas-colombianos-a-distancia',
  'history-of-tattoo-art-in-colombia': 'historia-del-arte-del-tatuaje-en-colombia',
};

/**
 * Obtiene el slug correspondiente en el idioma de destino
 * @param {string} currentSlug - Slug actual
 * @param {string} targetLocale - Idioma de destino ('es' o 'en')
 * @returns {string|null} - Slug en el idioma de destino o null si no se encuentra
 */
export function getSlugForLocale(currentSlug, targetLocale) {
  // Mapeo solo de español -> inglés
  const spanishToEnglish = {
    'guia-definitiva-donde-tatuarse-en-cali': 'definitive-guide-on-where-to-tattoo-en-cali',
    'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje': 'reason-to-travel-to-colombia-for-your-next-tattoo',
    'artistas-de-tatuajes-que-hablan-ingles-en-cali': 'english-speaking-tattoo-artists-in-cali-colombia',
    'cali-el-auge-de-una-ciudad-creativa-para-extranjeros': 'cali-tattoo-scene-for-foreigners',
    'precios-de-tatuajes-en-colombia-vs-eeuu': 'tattoo-prices-colombia-vs-usa',
    'estudios-de-tatuajes-inclusivos-en-colombia': 'inclusive-tattoo-studios-in-colombia',
    'proceso-de-trabajo-con-artistas-colombianos-a-distancia': 'remote-tattoo-process-colombia-from-usa',
    'historia-del-arte-del-tatuaje-en-colombia': 'history-of-tattoo-art-in-colombia',
  };
  
  // Mapeo inverso: inglés -> español
  const englishToSpanish = {
    'definitive-guide-on-where-to-tattoo-en-cali': 'guia-definitiva-donde-tatuarse-en-cali',
    'reason-to-travel-to-colombia-for-your-next-tattoo': 'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje',
    'english-speaking-tattoo-artists-in-cali-colombia': 'artistas-de-tatuajes-que-hablan-ingles-en-cali',
    'cali-tattoo-scene-for-foreigners': 'cali-el-auge-de-una-ciudad-creativa-para-extranjeros',
    'tattoo-prices-colombia-vs-usa': 'precios-de-tatuajes-en-colombia-vs-eeuu',
    'inclusive-tattoo-studios-in-colombia': 'estudios-de-tatuajes-inclusivos-en-colombia',
    'remote-tattoo-process-colombia-from-usa': 'proceso-de-trabajo-con-artistas-colombianos-a-distancia',
    'history-of-tattoo-art-in-colombia': 'historia-del-arte-del-tatuaje-en-colombia',
  };
  
  if (targetLocale === 'en') {
    // Si el slug está en español, devolver el equivalente en inglés
    if (spanishToEnglish[currentSlug]) {
      return spanishToEnglish[currentSlug];
    }
    // Si ya está en inglés, devolverlo tal cual
    return currentSlug;
  } else {
    // Si el slug está en inglés, devolver el equivalente en español
    if (englishToSpanish[currentSlug]) {
      return englishToSpanish[currentSlug];
    }
    // Si ya está en español, devolverlo tal cual
    return currentSlug;
  }
}

/**
 * Obtiene el slug en inglés (carpeta física) desde cualquier slug
 * @param {string} slug - Slug en cualquier idioma
 * @returns {string} - Slug en inglés (carpeta física)
 */
export function getEnglishSlug(slug) {
  // Mapeo solo de español -> inglés (las primeras 8 entradas)
  const spanishToEnglish = {
    'guia-definitiva-donde-tatuarse-en-cali': 'definitive-guide-on-where-to-tattoo-en-cali',
    'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje': 'reason-to-travel-to-colombia-for-your-next-tattoo',
    'artistas-de-tatuajes-que-hablan-ingles-en-cali': 'english-speaking-tattoo-artists-in-cali-colombia',
    'cali-el-auge-de-una-ciudad-creativa-para-extranjeros': 'cali-tattoo-scene-for-foreigners',
    'precios-de-tatuajes-en-colombia-vs-eeuu': 'tattoo-prices-colombia-vs-usa',
    'estudios-de-tatuajes-inclusivos-en-colombia': 'inclusive-tattoo-studios-in-colombia',
    'proceso-de-trabajo-con-artistas-colombianos-a-distancia': 'remote-tattoo-process-colombia-from-usa',
    'historia-del-arte-del-tatuaje-en-colombia': 'history-of-tattoo-art-in-colombia',
  };
  
  // Si es un slug en español, devolver el equivalente en inglés
  if (spanishToEnglish[slug]) {
    return spanishToEnglish[slug];
  }
  
  // Si no está en el mapeo de español, asumir que ya está en inglés
  return slug;
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
