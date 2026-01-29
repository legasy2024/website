/**
 * Script para generar automáticamente los archivos posts.json
 * desde el registry centralizado de posts
 * 
 * Este script lee el registry y genera:
 * - locales/es/posts.json
 * - locales/en/posts.json
 * 
 * Ejecutar con: npm run generate:posts
 */

const fs = require('fs');
const path = require('path');

// Importar el registry usando import dinámico (ES modules)
let blogPostsRegistry;

async function loadRegistry() {
  if (!blogPostsRegistry) {
    const registryModule = await import('../content/blog/posts-registry.js');
    blogPostsRegistry = registryModule.blogPostsRegistry;
  }
  return blogPostsRegistry;
}

/**
 * Carga el contenido de un post desde su archivo JSON
 * @param {string} id - ID del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Object|null} - Contenido del post o null si no existe
 */
function loadPostContent(id, locale) {
  try {
    const filePath = path.join(process.cwd(), `content/blog/posts/${id}.json`);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (!content.translations || !content.translations[locale]) return null;
      const t = content.translations[locale];
      return {
        id: content.id,
        slug: t.slug,
        title: t.title,
        date: t.date,
        image: t.image || content.image,
        excerpt: t.excerpt,
        seo: t.seo,
        contentHtml: t.contentHtml,
        cta: t.cta,
        contactInfo: t.contactInfo
      };
    }
    return null;
  } catch (error) {
    console.warn(`Warning: Could not load content for post "${id}" in locale "${locale}":`, error.message);
    return null;
  }
}

/**
 * Si el post aún NO está migrado, intentamos leer title/description desde el page legacy
 * ubicado en app/[locale]/blog/<slug-en>/page.jsx (donde <slug-en> es la carpeta física).
 *
 * Esto permite que el widget (BlogCard) tenga copys correctos aunque el contenido
 * aún esté hardcodeado en componentes legacy.
 */
function loadLegacyMetadataFromPage(englishSlug) {
  try {
    const pagePath = path.join(process.cwd(), `app/[locale]/blog/${englishSlug}/page.jsx`);
    if (!fs.existsSync(pagePath)) return null;

    const source = fs.readFileSync(pagePath, "utf8");

    // Extraer title/description de:
    // const metadata = { title: "...", description: "..." }
    // const metadata_en = { title: "...", description: "..." }
    function extractObjectLiteral(varName) {
      const startToken = `const ${varName} = {`;
      const startIdx = source.indexOf(startToken);
      if (startIdx === -1) return null;

      const afterStart = startIdx + startToken.length;
      const endIdx = source.indexOf("\n};", afterStart);
      if (endIdx === -1) return null;

      const block = source.slice(afterStart, endIdx);

      const titleMatch = block.match(/title:\s*\"([^\"]+)\"/);
      const descMatch = block.match(/description:\s*\"([^\"]+)\"/);

      return {
        title: titleMatch ? titleMatch[1].replace(/\n/g, " ").trim() : null,
        description: descMatch ? descMatch[1].replace(/\n/g, " ").trim() : null,
      };
    }

    return {
      es: extractObjectLiteral("metadata"),
      en: extractObjectLiteral("metadata_en"),
    };
  } catch (error) {
    console.warn(`Warning: Could not load legacy metadata for "${englishSlug}":`, error.message);
    return null;
  }
}

/**
 * Genera el array de posts para un idioma específico
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Array} - Array de posts en el formato esperado
 */
function generatePostsForLocale(locale) {
  const posts = [];
  
  // Obtener solo posts publicados y ordenarlos por order
  const publishedPosts = blogPostsRegistry
    .filter(post => post.published)
    // Más reciente -> más antiguo (order más alto primero)
    .sort((a, b) => (b.order || 0) - (a.order || 0));
  
  for (const post of publishedPosts) {
    const slug = post.slugs[locale];
    const slugEn = post.slugs.en;
    
    if (!slug) {
      console.warn(`Warning: Post "${post.id}" does not have a slug for locale "${locale}"`);
      continue;
    }
    
    // Cargar contenido del post
    const content = loadPostContent(post.id, locale);

    // Fallback: leer metadata desde page legacy (si existe)
    // Lo intentamos siempre; si el post está migrado, el JSON tendrá prioridad.
    const legacyMeta = post.slugs && post.slugs.en ? loadLegacyMetadataFromPage(post.slugs.en) : null;
    const legacyTitle =
      legacyMeta && legacyMeta[locale] && legacyMeta[locale].title
        ? legacyMeta[locale].title
        : null;
    const legacyDescription =
      legacyMeta && legacyMeta[locale] && legacyMeta[locale].description
        ? legacyMeta[locale].description
        : null;
    
    // Si no hay contenido, usar valores por defecto del registry
    const postData = {
      label: post.label[locale] || post.label.en || '',
      slug: slug,
      slugEn: slugEn || slug,
      title: content?.title || legacyTitle || `Post ${post.id}`,
      description: content?.excerpt || content?.seo?.description || legacyDescription || '',
      image: post.image,
      date: content?.date || post.date[locale] || post.date.en || '',
      cta: locale === 'es' ? 'Leer más' : 'Read more',
      ctaUrl: slug
    };
    
    posts.push(postData);
  }
  
  return posts;
}

/**
 * Genera los archivos posts.json para ambos idiomas
 */
async function generatePostsJson() {
  console.log('🔄 Generando posts.json desde el registry...\n');
  
  // Cargar el registry primero
  await loadRegistry();
  
  // Generar posts para español
  const postsEs = generatePostsForLocale('es');
  const postsEsPath = path.join(__dirname, '../locales/es/posts.json');
  const postsEsContent = {
    _comment: "⚠️ ARCHIVO GENERADO AUTOMÁTICAMENTE - NO EDITAR MANUALMENTE ⚠️",
    _generated_by: "scripts/generate-posts-json.js",
    _source: "content/blog/posts-registry.js",
    _note: "Este archivo se genera automáticamente desde el registry centralizado. Para modificar posts, edita content/blog/posts-registry.js y ejecuta: npm run generate:posts",
    posts: postsEs
  };
  fs.writeFileSync(
    postsEsPath,
    JSON.stringify(postsEsContent, null, 2),
    'utf8'
  );
  console.log(`✅ Generado: locales/es/posts.json (${postsEs.length} posts)`);
  
  // Generar posts para inglés
  const postsEn = generatePostsForLocale('en');
  const postsEnPath = path.join(__dirname, '../locales/en/posts.json');
  const postsEnContent = {
    _comment: "⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY ⚠️",
    _generated_by: "scripts/generate-posts-json.js",
    _source: "content/blog/posts-registry.js",
    _note: "This file is automatically generated from the centralized registry. To modify posts, edit content/blog/posts-registry.js and run: npm run generate:posts",
    posts: postsEn
  };
  fs.writeFileSync(
    postsEnPath,
    JSON.stringify(postsEnContent, null, 2),
    'utf8'
  );
  console.log(`✅ Generado: locales/en/posts.json (${postsEn.length} posts)`);
  
  console.log('\n✨ ¡Archivos posts.json generados exitosamente!');
  console.log('\n📝 Nota: Estos archivos son generados automáticamente.');
  console.log('   No edites manualmente estos archivos.');
  console.log('   Para agregar/modificar posts, edita el registry en: content/blog/posts-registry.js');
}

// Ejecutar el script
(async () => {
  try {
    await generatePostsJson();
  } catch (error) {
    console.error('❌ Error generando posts.json:', error);
    process.exit(1);
  }
})();
