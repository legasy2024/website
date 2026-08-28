//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { getBlogPostBySlug, getAllBlogPostsWithContent } from "@/lib/blogContentLoader";
import { blogPostsRegistry, getPostBySlug } from "@/content/blog/posts-registry";
import { notFound } from "next/navigation";

//Components
import BlogArticle from "@/components/blog/BlogArticle/BlogArticle";

const DoYouWantToBe = dynamic(() =>
  import("@/components/home/DoYouWantToBe/DoYouWantToBe")
);
const DoYouWantToWork = dynamic(() =>
  import("@/components/common/DoYouWantToWork/DoYouWantToWork")
);
const BookConsult = dynamic(() =>
  import("@/components/common/BookConsult/BookConsult")
);

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

/**
 * Genera todas las rutas estáticas posibles para los posts del blog
 */
export async function generateStaticParams() {
  const locales = ['es', 'en'];
  const params = [];

  // Obtener todos los posts publicados
  const publishedPosts = blogPostsRegistry.filter(post => post.published);

  for (const locale of locales) {
    for (const post of publishedPosts) {
      const slug = post.slugs[locale];
      if (slug) {
        params.push({
          locale,
          slug
        });
      }
    }
  }

  return params;
}

/**
 * Genera los metadatos para cada post
 */
export async function generateMetadata({ params: { locale, slug } }) {
  try {
    const post = await getBlogPostBySlug(slug, locale);
    
    if (!post || !post.seo) {
      return {
        title: 'Blog Post',
        description: 'Blog post'
      };
    }

    const { seo } = post;
    const otherLocale = locale === 'es' ? 'en' : 'es';
    const postMetadata = getPostBySlug(slug, locale);
    const otherSlug = postMetadata ? postMetadata.slugs[otherLocale] : null;

    return {
      title: seo.title,
      description: seo.description,
      keywords: Array.isArray(seo.keywords) ? seo.keywords.join(', ') : seo.keywords,
      language: locale,
      robots: "index, follow",
      author: "Legassy Studio",
      publisher: "Legassy Studio",
      alternates: {
        canonical: seo.canonical || `https://www.legassystudio.com/${locale}/blog/${slug}`,
        languages: {
          [locale]: `/${locale}/blog/${slug}`,
          ...(otherSlug && { [otherLocale]: `/${otherLocale}/blog/${otherSlug}` }),
          "x-default": locale === 'en'
            ? `/${locale}/blog/${slug}`
            : (otherSlug ? `/en/blog/${otherSlug}` : `/${locale}/blog/${slug}`)
        }
      }
    };
  } catch (error) {
    console.error(`Error generating metadata for slug "${slug}" in locale "${locale}":`, error);
    return {
      title: 'Blog Post',
      description: 'Blog post'
    };
  }
}

export default async function BlogPostPage({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Cargar contenido del post
  let postContent;
  try {
    postContent = await getBlogPostBySlug(slug, locale);
  } catch (error) {
    console.error(`Error loading post with slug "${slug}" in locale "${locale}":`, error);
    notFound();
  }

  // Si no se encontró el post, mostrar 404
  if (!postContent) {
    notFound();
  }

  // Preparar traducciones para componentes comunes
  const DoYouWantToBeTranslations = {
    title: t("home:do_you_want_to_be.title"),
    title_decorator: t("home:do_you_want_to_be.title_decorator"),
    tag1: t("home:do_you_want_to_be.tags.tag_1"),
    tag2: t("home:do_you_want_to_be.tags.tag_2"),
    tag3: t("home:do_you_want_to_be.tags.tag_3"),
    cta_label: t("home:do_you_want_to_be.cta_label"),
    cta: t("home:do_you_want_to_be.cta"),
  };

  const DoYouWantToWorkTranslations = {
    title: t("home:do_you_want_to_work.title"),
    paragraph: t("home:do_you_want_to_work.paragraph"),
    cta: t("home:do_you_want_to_work.cta"),
  };

  const BookConsultTranslations = {
    section_title: t("home:book_consultation.section_title"),
    title: t("home:book_consultation.title"),
    title_decorator: t("home:book_consultation.title_decorator"),
    title_end: t("home:book_consultation.title_end"),
    cta: t("home:book_consultation.cta"),
    contact_text: t("home:book_consultation.contact_text"),
    email_label: t("home:book_consultation.email_label"),
    info_title: t("home:book_consultation.info_title"),
    confirm_phone_form: t("home:book_consultation.confirm_phone_form"),
    error_phone_form: t("home:book_consultation.error_phone_form"),
    confirm_email_form: t("home:book_consultation.confirm_email_form"),
    error_email_form: t("home:book_consultation.error_email_form"),
  };

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <BlogArticle content={postContent} locale={locale} />
        <DoYouWantToBe translations={DoYouWantToBeTranslations} />
        <DoYouWantToWork translations={DoYouWantToWorkTranslations} />
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations} />
        </div>
      </TranslationsProvider>
    </>
  );
}
