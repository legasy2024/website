/**
 * Script para migrar posts del blog al nuevo formato JSON
 * Convierte firstblog.json y secondblog.json al nuevo formato con contentHtml
 */

const fs = require('fs');
const path = require('path');

// Importar helpers
const { convertFirstBlogToHtml, convertSecondBlogToHtml } = require('../lib/blogContentConverter.js');

// Cargar JSONs existentes
const firstBlogEs = require('../locales/es/firstblog.json');
const firstBlogEn = require('../locales/en/firstblog.json');
const secondBlogEs = require('../locales/es/secondblog.json');
const secondBlogEn = require('../locales/en/secondblog.json');

// Función para crear el JSON en el nuevo formato
function createNewPostJson(id, slug, title, date, image, excerpt, seo, contentHtml, cta, contactInfo, locale) {
  return {
    id,
    slug,
    title,
    date,
    image,
    excerpt,
    seo,
    contentHtml,
    cta,
    contactInfo
  };
}

// Migrar FirstBlog (definitive-guide)
const definitiveGuideEs = createNewPostJson(
  'definitive-guide',
  'guia-definitiva-donde-tatuarse-en-cali',
  firstBlogEs.title,
  firstBlogEs.date,
  '/img/blog/post1.png',
  'Descubre los mejores lugares para tatuarte en Cali. Comparativa de estudios, estilos y calidad. Legassy Studio: donde el arte se convierte en legado.',
  {
    title: 'Guía Definitiva: Top 5 Estudios de Tatuajes en Cali, Colombia',
    description: 'Descubre los mejores lugares para tatuarte en Cali. Comparativa de estudios, estilos y calidad. Legassy Studio: donde el arte se convierte en legado.',
    keywords: ['tatuajes cali', 'estudios de tatuajes cali', 'tattoo shops cali', 'mejores tatuadores cali', 'donde tatuarse cali', 'tatuajes colombia', 'artistas del tatuaje cali', 'tatuaje realista', 'blackwork', 'legassy studio'],
    canonical: 'https://www.legassystudio.com/es/blog/guia-definitiva-donde-tatuarse-en-cali'
  },
  convertFirstBlogToHtml(firstBlogEs),
  {
    whatsapp: {
      text: firstBlogEs.cta_button,
      url: 'https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog%20XGIYHXPQU2JMA1,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes'
    },
    instagram: {
      text: 'Instagram',
      url: 'https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt'
    }
  },
  {
    title: firstBlogEs.contact_info_title,
    location: firstBlogEs.contact_info_location,
    phone: firstBlogEs.contact_info_tel
  },
  'es'
);

const definitiveGuideEn = createNewPostJson(
  'definitive-guide',
  'definitive-guide-on-where-to-tattoo-en-cali',
  firstBlogEn.title,
  firstBlogEn.date,
  '/img/blog/post1.png',
  'Discover the best places to get tattooed in Cali. Compare studios, styles and quality. Legassy Studio: where art becomes legacy.',
  {
    title: 'Ultimate Guide: Top 5 Tattoo Studios in Cali, Colombia',
    description: 'Discover the best places to get tattooed in Cali. Compare studios, styles and quality. Legassy Studio: where art becomes legacy.',
    keywords: ['cali tattoos', 'tattoo studios cali', 'cali tattoo shops', 'best tattoo artists cali', 'where to get tattooed cali', 'colombia tattoos', 'cali tattoo artists', 'realistic tattoo', 'blackwork', 'legassy studio'],
    canonical: 'https://www.legassystudio.com/en/blog/definitive-guide-on-where-to-tattoo-en-cali'
  },
  convertFirstBlogToHtml(firstBlogEn),
  {
    whatsapp: {
      text: firstBlogEn.cta_button,
      url: 'https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos'
    },
    instagram: {
      text: 'Instagram',
      url: 'https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt'
    }
  },
  {
    title: firstBlogEn.contact_info_title,
    location: firstBlogEn.contact_info_location,
    phone: firstBlogEn.contact_info_tel
  },
  'en'
);

// Migrar SecondBlog (travel-reasons)
const travelReasonsEs = createNewPostJson(
  'travel-reasons',
  'razones-para-viajar-a-colombia-por-tu-proximo-tatuaje',
  secondBlogEs.title,
  secondBlogEs.date,
  '/img/blog/post2.png',
  'Descubre por qué Colombia se ha convertido en el destino perfecto para combinar turismo y tatuajes de calidad excepcional.',
  {
    title: '7 Razones para Viajar a Colombia por tu Próximo Tatuaje',
    description: 'Descubre por qué Colombia se ha convertido en el destino perfecto para combinar turismo y tatuajes de calidad excepcional. Legassy Studio: donde el arte se convierte en legado.',
    keywords: ['tatuajes colombia', 'turismo de tatuaje', 'tattoo cali', 'mejores tatuadores colombia', 'donde tatuarse colombia', 'tatuajes cali', 'artistas del tatuaje colombia', 'tatuaje realista', 'legassy studio'],
    canonical: 'https://www.legassystudio.com/es/blog/razones-para-viajar-a-colombia-por-tu-proximo-tatuaje'
  },
  convertSecondBlogToHtml(secondBlogEs),
  {
    whatsapp: {
      text: secondBlogEs.final_cta_buttons.whatsapp,
      url: 'https://wa.me/573128717100?text=Hola!%20Vengo%20del%20blog,%20quisiera%20tener%20mas%20informacion%20sobre%20tatuajes'
    },
    instagram: {
      text: secondBlogEs.final_cta_buttons.instagram,
      url: 'https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt'
    }
  },
  {
    title: secondBlogEs.contact_info.title,
    location: secondBlogEs.contact_info.location,
    phone: secondBlogEs.contact_info.phone
  },
  'es'
);

const travelReasonsEn = createNewPostJson(
  'travel-reasons',
  'reason-to-travel-to-colombia-for-your-next-tattoo',
  secondBlogEn.title,
  secondBlogEn.date,
  '/img/blog/post2.png',
  'Discover why Colombia has become the perfect destination to combine tourism and exceptional quality tattoos.',
  {
    title: '7 Reasons to Travel to Colombia for Your Next Tattoo',
    description: 'Discover why Colombia has become the perfect destination to combine tourism and exceptional quality tattoos. Legassy Studio: where art becomes legacy.',
    keywords: ['colombia tattoos', 'tattoo tourism', 'cali tattoo', 'best tattoo artists colombia', 'where to get tattooed colombia', 'cali tattoos', 'colombian tattoo artists', 'realistic tattoo', 'legassy studio'],
    canonical: 'https://www.legassystudio.com/en/blog/reason-to-travel-to-colombia-for-your-next-tattoo'
  },
  convertSecondBlogToHtml(secondBlogEn),
  {
    whatsapp: {
      text: secondBlogEn.final_cta_buttons.whatsapp,
      url: 'https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos'
    },
    instagram: {
      text: secondBlogEn.final_cta_buttons.instagram,
      url: 'https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt'
    }
  },
  {
    title: secondBlogEn.contact_info.title,
    location: secondBlogEn.contact_info.location,
    phone: secondBlogEn.contact_info.phone
  },
  'en'
);

// Crear directorio si no existe
const postsDir = path.join(__dirname, '../content/blog/posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Guardar archivos
fs.writeFileSync(
  path.join(postsDir, 'definitive-guide.es.json'),
  JSON.stringify(definitiveGuideEs, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(postsDir, 'definitive-guide.en.json'),
  JSON.stringify(definitiveGuideEn, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(postsDir, 'travel-reasons.es.json'),
  JSON.stringify(travelReasonsEs, null, 2),
  'utf8'
);

fs.writeFileSync(
  path.join(postsDir, 'travel-reasons.en.json'),
  JSON.stringify(travelReasonsEn, null, 2),
  'utf8'
);

console.log('✅ Posts migrados exitosamente:');
console.log('  - definitive-guide.es.json');
console.log('  - definitive-guide.en.json');
console.log('  - travel-reasons.es.json');
console.log('  - travel-reasons.en.json');
