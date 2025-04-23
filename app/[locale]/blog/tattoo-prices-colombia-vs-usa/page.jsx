
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import SixthBlog from "@/components/blog/BlogDetail/SixthBlog/SixthBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "Estudios de Tatuajes Inclusivos en Colombia: Guía LGBTQ+ y Accesibilidad",
  description: "Descubre los estudios de tatuajes en Colombia que están liderando el cambio hacia una cultura de inclusión genuina. Legassy Studio destaca como un referente de inclusión en Cali.",
  keywords: "tatuajes inclusivos, estudios LGBTQ+ friendly, tatuajes colombia, accesibilidad tatuajes, espacios seguros tatuaje, tatuajes cali, diversidad tatuajes, tatuajes comunidad LGBTQ+, legassy studio",
  language: "es",
  subject: "Guía de estudios de tatuajes inclusivos en Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/inclusive-tattoo-studios-in-colombia",
    languages: {
      'es': '/es/inclusive-tattoo-studios-in-colombia',
      'en': '/en/inclusive-tattoo-studios-in-colombia'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Inclusive Tattoo Studios in Colombia: LGBTQ+ Guide & Accessibility",
  description: "Discover the Colombian tattoo studios leading the change toward a culture of genuine inclusion. Legassy Studio stands out as a benchmark for inclusion in Cali.",
  keywords: "inclusive tattoos, LGBTQ+ friendly studios, colombia tattoos, tattoo accessibility, safe spaces tattoo, cali tattoos, diversity tattoos, LGBTQ+ community tattoos, legassy studio",
  language: "en",
  subject: "Guide to inclusive tattoo studios in Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/inclusive-tattoo-studios-in-colombia",
    languages: {
      'es': '/es/inclusive-tattoo-studios-in-colombia',
      'en': '/en/inclusive-tattoo-studios-in-colombia'
    }
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}


export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const DoYouWantToBeTranslations = {
    title: t("home:do_you_want_to_be.title"),
    title_decorator: t("home:do_you_want_to_be.title_decorator"),
    tag1: t("home:do_you_want_to_be.tags.tag_1"),
    tag2: t("home:do_you_want_to_be.tags.tag_2"),
    tag3: t("home:do_you_want_to_be.tags.tag_3"),
    cta_label: t("home:do_you_want_to_be.cta_label"),
    cta: t("home:do_you_want_to_be.cta"),
  }

  const DoYouWantToWorkTranslations = {
    title: t("home:do_you_want_to_work.title"),
    paragraph: t("home:do_you_want_to_work.paragraph"),
    cta: t("home:do_you_want_to_work.cta"),
  }

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
  }

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
       <SixthBlog />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}