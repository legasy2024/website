
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import BlogList from "@/components/blog/BlogList/BlogList";
import Header from "@/components/blog/Header";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";

import postsEs from "@/locales/es/posts.json"
import postsEn from "@/locales/en/posts.json"


//Components


//Diferent namespaces
const i18nNameSpaces = ["home", "blog", "posts", "about", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Blog de Legassy Studio - Historias, consejos y arte del tatuaje",
  description: "Explora el blog de Legassy Studio: historias detrás del tatuaje, consejos para cuidar tu piel, tendencias, procesos creativos y más. Una mirada íntima al arte de grabar legado en la piel.",
  keywords: "blog de tatuajes, consejos de tatuaje, cuidado del tatuaje, historias de tatuajes, artistas del tatuaje, tendencias tattoo, inspiración tatuajes, blog tattoo, cultura del tatuaje, diseño de tatuajes",
  language: "es",
  subject: "Legassy Studio Blog - Una mirada íntima al arte del tatuaje.",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/blog",
    languages: {
      'es': '/es/blog'
    }
  }
};

const metadata_en = {
    title: "Blog de Legassy Studio - Historias, consejos y arte del tatuaje",
    description: "Explora el blog de Legassy Studio: historias detrás del tatuaje, consejos para cuidar tu piel, tendencias, procesos creativos y más. Una mirada íntima al arte de grabar legado en la piel.",
    keywords: "blog de tatuajes, consejos de tatuaje, cuidado del tatuaje, historias de tatuajes, artistas del tatuaje, tendencias tattoo, inspiración tatuajes, blog tattoo, cultura del tatuaje, diseño de tatuajes",
    language: "es",
    subject: "Legassy Studio Blog - Una mirada íntima al arte del tatuaje.",
    coverage: "Global",
    robots: "index, follow",
    author: "Legassy Studio",
    publisher: "Legassy Studio",
    alternates: {
      canonical: "https://www.legassystudio.com/blog",
      languages: {
        'es': '/es/blog'
      }
    }
  };

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}



export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const posts = locale === "en" ? postsEn.posts : postsEs.posts;

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
        <Header translations={headerTranslations} />
        <BlogList posts={posts} />
      </TranslationsProvider>
    </div>
  );
}