import { getAllBlogPostsWithContent } from "@/lib/blogContentLoader";

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

  // Blogs: usamos el contenido del registry + JSONs por idioma como fuente única
  const buildBlogEntries = async () => {
    const entries = [];

    const postsEs = await getAllBlogPostsWithContent("es");
    const postsEn = await getAllBlogPostsWithContent("en");

    // Construir mapa id -> slug en cada idioma
    const mapEs = new Map(postsEs.map((p) => [p.id, p.slug]));
    const mapEn = new Map(postsEn.map((p) => [p.id, p.slug]));

    postsEs.forEach((postEs) => {
      const esSlug = mapEs.get(postEs.id);
      const enSlug = mapEn.get(postEs.id);

      if (!esSlug || !enSlug) {
        return;
      }

      const enUrl = `${BASE_URL}/en/blog/${enSlug}`;
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

  const blogEntries = await buildBlogEntries();

  return [
    ...buildStaticEntries(),
    ...blogEntries,
  ];
}

