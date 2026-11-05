import { blogPostsRegistry } from './content/blog/posts-registry.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Genera rewrites dinámicamente desde el registry de posts
 * Mapea slugs en español a sus equivalentes en inglés (carpetas físicas)
 */
function generateBlogRewrites() {
  const rewrites = [];
  
  // Solo generar rewrites para posts publicados
  const publishedPosts = blogPostsRegistry.filter(post => post.published);

  // Root del proyecto (para resolver rutas a /content)
  const projectRoot = path.dirname(fileURLToPath(import.meta.url));

  /**
   * Consideramos "migrado" si existen ambos JSONs del nuevo sistema (es/en)
   * En ese caso, NO debemos reescribir el slug ES -> EN porque la ruta dinámica
   * soporta el slug ES directamente.
   */
  function isMigratedPost(postId) {
    const unifiedPath = path.join(
      projectRoot,
      "content",
      "blog",
      "posts",
      `${postId}.json`,
    );
    if (fs.existsSync(unifiedPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(unifiedPath, "utf8"));
        if (data.translations?.es && data.translations?.en) return true;
      } catch {
        /* fallback a comprobación legacy */
      }
    }
    const esPath = path.join(projectRoot, "content", "blog", "posts", `${postId}.es.json`);
    const enPath = path.join(projectRoot, "content", "blog", "posts", `${postId}.en.json`);
    return fs.existsSync(esPath) && fs.existsSync(enPath);
  }
  
  for (const post of publishedPosts) {
    const slugEs = post.slugs.es;
    const slugEn = post.slugs.en;

    // Si el post YA está migrado al nuevo sistema, no generamos rewrite.
    // Esto evita que /es/blog/<slug-es> termine llegando a la ruta dinámica con slug EN.
    if (isMigratedPost(post.id)) continue;
    
    // Solo crear rewrite si los slugs son diferentes y ambos existen
    if (slugEs && slugEn && slugEs !== slugEn) {
      rewrites.push({
        source: `/es/blog/${slugEs}`,
        destination: `/es/blog/${slugEn}`
      });
    }
  }
  
  return rewrites;
}

const CSP = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://analytics.ahrefs.com https://va.vercel-scripts.com https://vercel.live",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://formspree.io https://*.googleapis.com https://*.firebaseio.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://analytics.ahrefs.com https://vitals.vercel-insights.com https://vercel.live wss://*.firebaseio.com",
    "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://vercel.live",
    "media-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://formspree.io",
    "frame-ancestors 'self'",
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'images.unsplash.com', 'img.youtube.com', 'i.ytimg.com'],
        formats: ['image/avif',  'image/webp']
    },
    async redirects() {
        // El alias *.vercel.app de producción servía el sitio completo (contenido duplicado para Google)
        return [
            {
                // /curses era una página de 25 palabras que competía con /academy
                source: '/:locale(en|es)/curses',
                destination: '/:locale/academy',
                permanent: true,
            },
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'website-omega-silk-59.vercel.app' }],
                destination: 'https://www.legassystudio.com/:path*',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                    // Solo reporta (en la consola del navegador), no bloquea nada.
                    // Cuando no aparezcan avisos, se puede cambiar a 'Content-Security-Policy'.
                    { key: 'Content-Security-Policy-Report-Only', value: CSP },
                ],
            },
            {
                // Imágenes de /public/img: sin hash en el nombre, así que caché larga pero revalidable
                source: '/img/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
                ],
            },
            {
                source: '/video/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
                ],
            },
            {
                source: '/fonts/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ];
    },
    async rewrites() {
        // Generar rewrites dinámicamente desde el registry
        const blogRewrites = generateBlogRewrites();
        
        return [
            {
                source: '/es/blog/tatuajes-en-el-brazo-galeria-de-ideas-y-recomendaciones',
                destination: '/es/blog/tatuajes-en-el-brazo-para-hombres'
            },
            ...blogRewrites
        ];
    }
};

export default nextConfig;
