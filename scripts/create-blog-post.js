/**
 * Script interactivo para crear un nuevo post del blog
 * 
 * Este script:
 * 1. Pide el ID del post
 * 2. Crea los archivos JSON desde los templates
 * 3. Ayuda a añadir la entrada al registry
 * 4. Genera los archivos legacy automáticamente
 * 
 * Ejecutar con: npm run create:post
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

/**
 * Carga el template y lo personaliza
 */
function loadTemplate(locale, postId, postData) {
  const templatePath = path.join(__dirname, `../content/blog/posts/_template.${locale}.json`);
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template no encontrado: ${templatePath}`);
  }

  const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
  
  // Personalizar template con datos básicos
  template.id = postId;
  template.slug = postData.slug[locale];
  template.title = postData.title[locale] || `Post ${postId}`;
  template.date = postData.date[locale] || new Date().toLocaleDateString(locale === 'es' ? 'es-CO' : 'en-US');
  template.image = postData.image || '/img/blog/post1.png';
  template.excerpt = postData.excerpt[locale] || '';
  
  // Actualizar SEO
  if (template.seo) {
    template.seo.title = postData.title[locale] || template.seo.title;
    template.seo.description = postData.excerpt[locale] || template.seo.description;
    template.seo.canonical = `https://www.legassystudio.com/${locale}/blog/${postData.slug[locale]}`;
  }

  return template;
}

/**
 * Crea los archivos JSON del post
 */
function createPostFiles(postId, postData) {
  const postsDir = path.join(__dirname, '../content/blog/posts');
  
  // Crear archivo ES
  const esTemplate = loadTemplate('es', postId, postData);
  const esPath = path.join(postsDir, `${postId}.es.json`);
  fs.writeFileSync(esPath, JSON.stringify(esTemplate, null, 2), 'utf8');
  console.log(`✅ Creado: content/blog/posts/${postId}.es.json`);

  // Crear archivo EN
  const enTemplate = loadTemplate('en', postId, postData);
  const enPath = path.join(postsDir, `${postId}.en.json`);
  fs.writeFileSync(enPath, JSON.stringify(enTemplate, null, 2), 'utf8');
  console.log(`✅ Creado: content/blog/posts/${postId}.en.json`);
}

/**
 * Genera el código para añadir al registry
 */
function generateRegistryEntry(postId, postData) {
  return `
  {
    id: "${postId}",
    slugs: {
      es: "${postData.slug.es}",
      en: "${postData.slug.en}"
    },
    image: "${postData.image}",
    date: {
      es: "${postData.date.es}",
      en: "${postData.date.en}"
    },
    label: {
      es: "${postData.label.es}",
      en: "${postData.label.en}"
    },
    published: true,
    order: ${postData.order || 1}
  },`;
}

/**
 * Script principal
 */
async function main() {
  console.log('📝 Creador de Posts del Blog\n');
  console.log('Este script te ayudará a crear un nuevo post paso a paso.\n');

  try {
    // Paso 1: ID del post
    const postId = await question('1. ID del post (lowercase, con guiones, ej: mi-nuevo-post): ');
    if (!postId || !/^[a-z0-9-]+$/.test(postId)) {
      console.error('❌ Error: El ID debe ser lowercase, solo letras, números y guiones');
      process.exit(1);
    }

    // Verificar que no existe
    const esPath = path.join(__dirname, `../content/blog/posts/${postId}.es.json`);
    if (fs.existsSync(esPath)) {
      console.error(`❌ Error: Ya existe un post con ID "${postId}"`);
      process.exit(1);
    }

    // Paso 2: Slugs
    console.log('\n2. Slugs (URLs del post):');
    const slugEs = await question('   Slug en español: ');
    const slugEn = await question('   Slug en inglés: ');

    // Paso 3: Títulos
    console.log('\n3. Títulos:');
    const titleEs = await question('   Título en español: ');
    const titleEn = await question('   Título en inglés: ');

    // Paso 4: Fechas
    console.log('\n4. Fechas:');
    const dateEs = await question('   Fecha en español (ej: 01 de enero de 2025): ');
    const dateEn = await question('   Fecha en inglés (ej: January 01, 2025): ');

    // Paso 5: Label/Categoría
    console.log('\n5. Categoría/Label:');
    const labelEs = await question('   Label en español: ');
    const labelEn = await question('   Label en inglés: ');

    // Paso 6: Imagen
    console.log('\n6. Imagen:');
    const image = await question('   Ruta de imagen (ej: /img/blog/post1.png): ') || '/img/blog/post1.png';

    // Paso 7: Excerpt
    console.log('\n7. Descripción corta (excerpt):');
    const excerptEs = await question('   Excerpt en español: ');
    const excerptEn = await question('   Excerpt en inglés: ');

    // Paso 8: Order
    const orderStr = await question('\n8. Orden (número, mayor = más reciente, default: 1): ');
    const order = parseInt(orderStr) || 1;

    // Preparar datos
    const postData = {
      slug: { es: slugEs, en: slugEn },
      title: { es: titleEs, en: titleEn },
      date: { es: dateEs, en: dateEn },
      label: { es: labelEs, en: labelEn },
      image: image,
      excerpt: { es: excerptEs, en: excerptEn },
      order: order
    };

    // Crear archivos
    console.log('\n📁 Creando archivos...\n');
    createPostFiles(postId, postData);

    // Generar código para registry
    console.log('\n📋 Código para añadir al registry:\n');
    console.log('Abre: content/blog/posts-registry.js');
    console.log('Añade esta entrada al array blogPostsRegistry:');
    console.log(generateRegistryEntry(postId, postData));

    // Preguntar si quiere generar posts.json
    const generate = await question('\n¿Generar archivos posts.json legacy? (s/n): ');
    if (generate.toLowerCase() === 's') {
      console.log('\n🔄 Generando posts.json...\n');
      const { execSync } = require('child_process');
      try {
        execSync('npm run generate:posts', { stdio: 'inherit' });
      } catch (error) {
        console.warn('⚠️  Error generando posts.json. Ejecuta manualmente: npm run generate:posts');
      }
    }

    console.log('\n✨ ¡Post creado exitosamente!\n');
    console.log('📝 Próximos pasos:');
    console.log('   1. Edita los archivos JSON con el contenido completo');
    console.log('   2. Añade la entrada al registry (código mostrado arriba)');
    console.log('   3. Ejecuta: npm run validate:blog');
    console.log('   4. Ejecuta: npm run generate:posts (si no lo hiciste antes)\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Ejecutar
main();
