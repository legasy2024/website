/**
 * Script de validación del sistema de blog
 * 
 * Verifica:
 * - Que todos los posts del registry tienen archivos JSON correspondientes
 * - Que los slugs están correctamente mapeados
 * - Que los metadatos están completos
 * - Que los rewrites se generan correctamente
 * - Que generateStaticParams genera todas las rutas necesarias
 * 
 * Ejecutar con: node scripts/validate-blog-system.js
 */

const fs = require('fs');
const path = require('path');

let blogPostsRegistry;
let errors = [];
let warnings = [];

async function loadRegistry() {
  if (!blogPostsRegistry) {
    const registryModule = await import('../content/blog/posts-registry.js');
    blogPostsRegistry = registryModule.blogPostsRegistry;
  }
  return blogPostsRegistry;
}

/**
 * Valida que un archivo existe
 */
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Valida la estructura de un post JSON combinado (con traducciones)
 */
function validatePostJson(content, id, locale) {
  const t = content.translations && content.translations[locale];

  if (!t) {
    errors.push(`❌ Post "${id}" (${locale}): No tiene traducción en el JSON combinado`);
    return false;
  }

  const requiredFields = ['slug', 'title', 'date', 'excerpt', 'seo', 'contentHtml'];
  const missingFields = [];

  for (const field of requiredFields) {
    if (!t[field]) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    errors.push(`❌ Post "${id}" (${locale}): Faltan campos requeridos: ${missingFields.join(', ')}`);
    return false;
  }

  // Validar estructura de SEO
  if (t.seo) {
    const seoRequired = ['title', 'description', 'keywords', 'canonical'];
    const seoMissing = seoRequired.filter(field => !t.seo[field]);
    if (seoMissing.length > 0) {
      warnings.push(`⚠️  Post "${id}" (${locale}): Faltan campos SEO: ${seoMissing.join(', ')}`);
    }
  }

  return true;
}

/**
 * Valida que todos los posts tienen archivos JSON
 */
async function validatePostFiles() {
  console.log('📁 Validando archivos JSON de posts...\n');
  
  await loadRegistry();
  const publishedPosts = blogPostsRegistry.filter(post => post.published);
  const locales = ['es', 'en'];
  
  let validPosts = 0;
  let invalidPosts = 0;

  for (const post of publishedPosts) {
    for (const locale of locales) {
      const slug = post.slugs[locale];
      if (!slug) {
        warnings.push(`⚠️  Post "${post.id}": No tiene slug para locale "${locale}"`);
        continue;
      }

      const filePath = path.join(__dirname, `../content/blog/posts/${post.id}.json`);
      
      if (!fileExists(filePath)) {
        errors.push(`❌ Post "${post.id}": No existe archivo JSON para locale "${locale}" (esperado: ${filePath})`);
        invalidPosts++;
        continue;
      }

      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (validatePostJson(content, post.id, locale)) {
          validPosts++;
        } else {
          invalidPosts++;
        }

        // Validar que el slug en el JSON coincide con el del registry
        const t = content.translations && content.translations[locale];
        if (t && t.slug !== slug) {
          errors.push(`❌ Post "${post.id}" (${locale}): Slug en JSON (${t.slug}) no coincide con registry (${slug})`);
        }
      } catch (error) {
        errors.push(`❌ Post "${post.id}" (${locale}): Error leyendo JSON: ${error.message}`);
        invalidPosts++;
      }
    }
  }

  console.log(`✅ Posts válidos: ${validPosts}`);
  console.log(`❌ Posts inválidos: ${invalidPosts}`);
  console.log(`⚠️  Advertencias: ${warnings.length}\n`);
}

/**
 * Valida que los rewrites se generan correctamente
 */
async function validateRewrites() {
  console.log('🔄 Validando rewrites...\n');
  
  await loadRegistry();
  const publishedPosts = blogPostsRegistry.filter(post => post.published);
  
  let validRewrites = 0;
  let invalidRewrites = 0;

  for (const post of publishedPosts) {
    const slugEs = post.slugs.es;
    const slugEn = post.slugs.en;
    
    if (slugEs && slugEn && slugEs !== slugEn) {
      // Verificar que el rewrite sería correcto
      const expectedRewrite = {
        source: `/es/blog/${slugEs}`,
        destination: `/es/blog/${slugEn}`
      };
      
      // Verificar que ambos slugs existen en el registry
      const postEs = blogPostsRegistry.find(p => p.slugs.es === slugEs || p.slugs.en === slugEs);
      const postEn = blogPostsRegistry.find(p => p.slugs.es === slugEn || p.slugs.en === slugEn);
      
      if (!postEs || !postEn || postEs.id !== postEn.id) {
        errors.push(`❌ Rewrite inválido para post "${post.id}": slugs no coinciden`);
        invalidRewrites++;
      } else {
        validRewrites++;
      }
    }
  }

  console.log(`✅ Rewrites válidos: ${validRewrites}`);
  console.log(`❌ Rewrites inválidos: ${invalidRewrites}\n`);
}

/**
 * Valida que generateStaticParams generaría todas las rutas necesarias
 */
async function validateStaticParams() {
  console.log('📄 Validando generateStaticParams...\n');
  
  await loadRegistry();
  const locales = ['es', 'en'];
  const publishedPosts = blogPostsRegistry.filter(post => post.published);
  
  const expectedParams = [];
  for (const locale of locales) {
    for (const post of publishedPosts) {
      const slug = post.slugs[locale];
      if (slug) {
        expectedParams.push({ locale, slug });
      }
    }
  }

  console.log(`✅ Rutas estáticas esperadas: ${expectedParams.length}`);
  console.log(`   - Español: ${expectedParams.filter(p => p.locale === 'es').length}`);
  console.log(`   - Inglés: ${expectedParams.filter(p => p.locale === 'en').length}\n`);
  
  // Verificar que cada ruta tiene un archivo JSON correspondiente
  let validRoutes = 0;
  let invalidRoutes = 0;

  for (const param of expectedParams) {
    const post = publishedPosts.find(p => p.slugs[param.locale] === param.slug);
    if (!post) {
      errors.push(`❌ Ruta "${param.locale}/blog/${param.slug}": No se encuentra post en registry`);
      invalidRoutes++;
      continue;
    }

    const filePath = path.join(__dirname, `../content/blog/posts/${post.id}.${param.locale}.json`);
    if (!fileExists(filePath)) {
      errors.push(`❌ Ruta "${param.locale}/blog/${param.slug}": No existe archivo JSON (${post.id}.${param.locale}.json)`);
      invalidRoutes++;
    } else {
      validRoutes++;
    }
  }

  console.log(`✅ Rutas válidas: ${validRoutes}`);
  console.log(`❌ Rutas inválidas: ${invalidRoutes}\n`);
}

/**
 * Valida que los posts.json legacy están sincronizados
 */
async function validateLegacyPostsJson() {
  console.log('📋 Validando posts.json legacy...\n');
  
  await loadRegistry();
  const publishedPosts = blogPostsRegistry.filter(post => post.published);
  const locales = ['es', 'en'];
  
  for (const locale of locales) {
    const legacyPath = path.join(__dirname, `../locales/${locale}/posts.json`);
    
    if (!fileExists(legacyPath)) {
      warnings.push(`⚠️  No existe archivo legacy: locales/${locale}/posts.json`);
      continue;
    }

    try {
      const legacyContent = JSON.parse(fs.readFileSync(legacyPath, 'utf8'));
      const legacyPosts = legacyContent.posts || [];
      
      if (legacyPosts.length !== publishedPosts.length) {
        warnings.push(`⚠️  locales/${locale}/posts.json tiene ${legacyPosts.length} posts, pero el registry tiene ${publishedPosts.length}`);
      }

      // Verificar que todos los posts del registry están en el legacy
      for (const post of publishedPosts) {
        const slug = post.slugs[locale];
        const found = legacyPosts.find(p => p.slug === slug);
        if (!found) {
          warnings.push(`⚠️  Post "${post.id}" (slug: ${slug}) no está en locales/${locale}/posts.json`);
        }
      }
    } catch (error) {
      errors.push(`❌ Error leyendo locales/${locale}/posts.json: ${error.message}`);
    }
  }

  console.log('✅ Validación de posts.json legacy completada\n');
}

/**
 * Ejecuta todas las validaciones
 */
async function runValidations() {
  console.log('🔍 Iniciando validación del sistema de blog...\n');
  console.log('=' .repeat(60) + '\n');

  await validatePostFiles();
  await validateRewrites();
  await validateStaticParams();
  await validateLegacyPostsJson();

  console.log('=' .repeat(60));
  console.log('\n📊 RESUMEN DE VALIDACIÓN\n');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ ¡Todo está correcto! No se encontraron errores ni advertencias.\n');
    return true;
  }

  if (errors.length > 0) {
    console.log(`❌ ERRORES ENCONTRADOS (${errors.length}):\n`);
    errors.forEach(error => console.log(`   ${error}`));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log(`⚠️  ADVERTENCIAS (${warnings.length}):\n`);
    warnings.forEach(warning => console.log(`   ${warning}`));
    console.log('');
  }

  return errors.length === 0;
}

// Ejecutar validaciones
(async () => {
  try {
    const isValid = await runValidations();
    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error('❌ Error ejecutando validaciones:', error);
    process.exit(1);
  }
})();
