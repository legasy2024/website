/**
 * Utilidades para cargar contenido de posts del blog
 *
 * Este módulo proporciona funciones para:
 * - Cargar contenido completo de un post por ID o slug
 * - Listar todos los posts disponibles
 * - Manejar errores cuando un post no existe
 */

import {
  blogPostsRegistry,
  getPostById,
  getPostBySlug,
} from "@/content/blog/posts-registry";

/**
 * Carga el contenido completo de un post por su ID
 * @param {string} id - ID del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Promise<Object>} - Objeto con metadata y contenido del post
 * @throws {Error} Si el post no existe o falta la traducción
 */
export async function getBlogPostById(id, locale) {
  const postMetadata = getPostById(id);

  if (!postMetadata) {
    throw new Error(`Post with id "${id}" not found`);
  }

  if (!postMetadata.published) {
    throw new Error(`Post with id "${id}" is not published`);
  }

  try {
    // Importar dinámicamente el JSON combinado del post (con todas las traducciones)
    const contentModule = await import(`@/content/blog/posts/${id}.json`);
    const content = contentModule.default || contentModule;

    if (!content.translations || !content.translations[locale]) {
      throw new Error(
        `Missing translations for locale "${locale}" in post "${id}"`,
      );
    }

    const t = content.translations[locale];

    // Combinar metadata del registry con contenido del JSON
    return {
      id: postMetadata.id,
      slug: t.slug || postMetadata.slugs[locale],
      label: postMetadata.label[locale],
      image: postMetadata.image,
      date: t.date || postMetadata.date[locale], // Preferir fecha del JSON, fallback al registry
      title: t.title,
      excerpt: t.excerpt,
      seo: t.seo,
      contentHtml: t.contentHtml,
      cta: t.cta,
      contactInfo: t.contactInfo,
    };
  } catch (error) {
    throw new Error(
      `Failed to load content for post "${id}" in locale "${locale}": ${error.message}`,
    );
  }
}

/**
 * Carga el contenido completo de un post por su slug
 * @param {string} slug - Slug del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Promise<Object>} - Objeto con metadata y contenido del post
 * @throws {Error} Si el post no existe o falta la traducción
 */
export async function getBlogPostBySlug(slug, locale) {
  // Permitir que el slug venga en cualquiera de los idiomas.
  // Ej: si estás en /es/... pero por rewrite/cache llega el slug EN,
  // buscamos por el otro locale y cargamos el contenido correcto para `locale`.
  const postMetadata =
    getPostBySlug(slug, locale) ||
    getPostBySlug(slug, locale === "es" ? "en" : "es");

  if (!postMetadata) {
    throw new Error(`Post with slug "${slug}" not found in locale "${locale}"`);
  }

  return getBlogPostById(postMetadata.id, locale);
}

/**
 * Obtiene todos los posts disponibles para un idioma
 * Solo retorna metadata básica (sin contenido completo)
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Array} - Array de objetos con metadata de posts
 */
export function getAllBlogPosts(locale) {
  const { getAllPublishedPosts } = require("@/content/blog/posts-registry");
  const posts = getAllPublishedPosts();

  return posts.map((post) => ({
    id: post.id,
    slug: post.slugs[locale],
    title: null, // Se cargará desde el JSON si es necesario
    description: null,
    image: post.image,
    date: post.date[locale],
    label: post.label[locale],
    cta: locale === "es" ? "Leer más" : "Read more",
    ctaUrl: post.slugs[locale],
  }));
}

/**
 * Obtiene todos los posts con contenido completo para un idioma
 * Útil para pre-renderizar o generar sitemaps
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Promise<Array>} - Array de posts con contenido completo
 */
export async function getAllBlogPostsWithContent(locale) {
  const { getAllPublishedPosts } = require("@/content/blog/posts-registry");
  const posts = getAllPublishedPosts();

  const postsWithContent = await Promise.all(
    posts.map((post) => getBlogPostById(post.id, locale).catch(() => null)),
  );

  return postsWithContent.filter((post) => post !== null);
}

/**
 * Valida que un post existe y tiene traducción en el idioma especificado
 * @param {string} id - ID del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {boolean} - true si el post existe y tiene traducción
 */
export async function validatePostExists(id, locale) {
  try {
    await getBlogPostById(id, locale);
    return true;
  } catch {
    return false;
  }
}
