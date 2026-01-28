import postsEs from "@/locales/es/posts.json";
import postsEn from "@/locales/en/posts.json";

const BASE_URL = "https://www.legassystudio.com";

/**
 * Sitemap dinámico para Next.js (App Router)
 * Documentación: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function sitemap() {
  const locales = ["en", "es"];

  // Rutas estáticas principales (sin incluir el locale)
  const staticPaths = [
    "",           // home
    "/portfolio",
    "/about",
    "/blog",
    "/curses",
    "/vip",
    "/podcast",
    "/contact",
  ];

  // Helper para generar alternates de idioma para una ruta base (sin locale)
  const buildStaticEntries = () => {
    const entries = [];

    for (const path of staticPaths) {
      const enUrl = `${BASE_URL}/en${path}`;
      const esUrl = `${BASE_URL}/es${path}`;

      // Entrada EN
      entries.push({
        url: enUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: enUrl,
            es: esUrl,
          },
        },
      });

      // Entrada ES
      entries.push({
        url: esUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: enUrl,
            es: esUrl,
          },
        },
      });
    }

    return entries;
  };

  // Blogs: usamos el JSON en ES (que tiene slug español + slugEn) como fuente principal
  const buildBlogEntries = () => {
    const entries = [];

    postsEs.posts.forEach((postEs) => {
      const esSlug = postEs.slug;
      const enSlug = postEs.slugEn;

      if (!enSlug) {
        // Si por alguna razón falta slugEn, intentamos encontrarlo por título en postsEn
        const matchEn = postsEn.posts.find(
          (p) => p.title === postEs.title || p.label === postEs.label
        );
        // Si no encontramos correspondencia, saltamos este post
        if (!matchEn) return;
      }

      const finalEnSlug = enSlug || postsEn.posts.find(
        (p) => p.title === postEs.title || p.label === postEs.label
      )?.slug;

      if (!finalEnSlug) return;

      const enUrl = `${BASE_URL}/en/blog/${finalEnSlug}`;
      const esUrl = `${BASE_URL}/es/blog/${esSlug}`;

      // Entrada EN
      entries.push({
        url: enUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: {
            en: enUrl,
            es: esUrl,
          },
        },
      });

      // Entrada ES
      entries.push({
        url: esUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: {
            en: enUrl,
            es: esUrl,
          },
        },
      });
    });

    return entries;
  };

  return [
    ...buildStaticEntries(),
    ...buildBlogEntries(),
  ];
}

