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

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'images.unsplash.com'],
        formats: ['image/avif',  'image/webp']
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
