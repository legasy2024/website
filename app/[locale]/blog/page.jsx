
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import BlogIndex from "@/components/blog/BlogIndex/BlogIndex";
import initTranslations from "@/i18n";

import { getAllBlogPostsWithContent } from "@/lib/blogContentLoader";

//Diferent namespaces
const i18nNameSpaces = ["home", "blog"];


const metadata = {
  title: "Blog de tatuajes en Cali: guías y consejos | Legassy Studio",
  description: "Blog de Legassy Studio: historias del tatuaje, consejos de cuidado, precios, tendencias y procesos creativos desde nuestro estudio en Cali, Colombia.",
  keywords: "blog de tatuajes, consejos de tatuaje, cuidado del tatuaje, historias de tatuajes, artistas del tatuaje, tendencias tattoo, inspiración tatuajes, blog tattoo, cultura del tatuaje, diseño de tatuajes",
  language: "es",
  subject: "Legassy Studio Blog - Una mirada íntima al arte del tatuaje.",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/blog",
    languages: {
      en: "/en/blog",
      es: "/es/blog",
      "x-default": "/es/blog",
    },
  }
};

const metadata_en = {
  title: "Legassy Studio Blog - Stories, tips and tattoo art",
  description: "The Legassy Studio blog: tattoo stories, aftercare tips, pricing, trends and creative processes from our tattoo studio in Cali, Colombia.",
  keywords: "tattoo blog, tattoo tips, tattoo aftercare, tattoo stories, tattoo artists, tattoo trends, tattoo inspiration, tattoo culture, tattoo design",
  language: "en",
  subject: "Legassy Studio Blog - An intimate look into tattoo art.",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/blog",
    languages: {
      en: "/en/blog",
      es: "/es/blog",
      "x-default": "/es/blog",
    },
  },
  };

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}



export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Posts ya vienen ordenados: order más alto = más reciente (ver getAllPublishedPosts)
  // BlogList es un client component: solo le pasamos los campos de la tarjeta,
  // no el contenido completo de cada post (inflaba el HTML a ~1.4 MB)
  const posts = (await getAllBlogPostsWithContent(locale)).map(
    ({ id, slug, title, image, label, description, excerpt, cta, date, category }) => ({
      id, slug, title, image, label, description, excerpt, cta, date, category,
    }),
  );

  const headerTranslations = {
    section_title: t("blog:header.section_title"),
    title: t("blog:header.title"),
    title_decorator: t("blog:header.title_decorator"),
    description: t("blog:header.description"),
  }

  return (
    <div className="bg-[#212121] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <BlogIndex posts={posts} locale={locale} headerTranslations={headerTranslations} />
      </TranslationsProvider>
    </div>
  );
}