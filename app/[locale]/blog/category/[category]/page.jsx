//Functions
import TranslationsProvider from "@/TranslationsProvider";
import BlogIndex from "@/components/blog/BlogIndex/BlogIndex";
import initTranslations from "@/i18n";
import { notFound } from "next/navigation";

import { getAllBlogPostsWithContent } from "@/lib/blogContentLoader";
import { blogCategories, getCategoryBySlug } from "@/content/blog/categories";

//Diferent namespaces
const i18nNameSpaces = ["home", "blog", "posts", "about", "navbar", "experience", "help", "projects"];

export const dynamicParams = false;

export function generateStaticParams() {
  return ["es", "en"].flatMap((locale) =>
    blogCategories.map((category) => ({ locale, category: category.slug[locale] }))
  );
}

export async function generateMetadata({ params: { locale, category: slug } }) {
  const category = getCategoryBySlug(slug, locale);
  if (!category) return {};

  const title = category.seoTitle[locale];
  const description = category.description[locale];
  const esPath = `/es/blog/category/${category.slug.es}`;
  const enPath = `/en/blog/category/${category.slug.en}`;
  const canonical = `https://www.legassystudio.com${locale === "en" ? enPath : esPath}`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === "en" ? "en_US" : "es_CO",
    },
    alternates: {
      canonical,
      languages: {
        en: enPath,
        es: esPath,
        "x-default": enPath,
      },
    },
  };
}

export default async function BlogCategoryPage({ params: { locale, category: slug } }) {
  const category = getCategoryBySlug(slug, locale);
  if (!category) notFound();

  const { resources } = await initTranslations(locale, i18nNameSpaces);
  const posts = await getAllBlogPostsWithContent(locale);

  const headerTranslations = {
    section_title: locale === "en" ? "BLOG · CATEGORY" : "BLOG · CATEGORÍA",
    title: category.name[locale],
    title_decorator: "",
    description: category.description[locale],
  };

  return (
    <div className="bg-[#212121] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <BlogIndex
          posts={posts}
          locale={locale}
          headerTranslations={headerTranslations}
          activeCategoryId={category.id}
        />
      </TranslationsProvider>
    </div>
  );
}
