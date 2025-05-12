
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Translations
import thirdBlogEs from "@/locales/es/thirdblog.json"
import thirdBlogEn from "@/locales/en/thirdblog.json"

//Components
import ThirdBlog from "@/components/blog/BlogDetail/ThirdBlog/ThirdBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

const metadata = {
  title: "Tatuarse en Colombia: Artistas de Tatuajes que Hablan Inglés en Cali",
  description: "¿Buscas tatuarte durante tu visita a Colombia? Descubre estudios con artistas bilingües en Cali donde la barrera del idioma no será un problema. Legassy Studio: experiencia internacional sin límites.",
  keywords: "tatuadores bilingües colombia, tattoo artistas inglés, tatuajes cali turistas, estudios de tatuaje inglés, tatuajes para extranjeros colombia, legassy studio cali, tatuajes turistas colombia, artistas tatuaje bilingües, tatuaje cali inglés",
  language: "es",
  subject: "Guía de tatuajes para turistas en Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/english-speaking-tattoo-artists-in-cali-colombia",
    languages: {
      'es': '/es/english-speaking-tattoo-artists-in-cali-colombia',
      'en': '/en/english-speaking-tattoo-artists-in-cali-colombia'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Tattoo in Colombia: English-Speaking Tattoo Artists in Cali",
  description: "Planning to get inked during your visit to Colombia? Discover studios with bilingual artists in Cali where language barriers won't be an issue. Legassy Studio: international experience without limits.",
  keywords: "bilingual tattoo artists colombia, english speaking tattoo artists, cali tattoos for tourists, english tattoo studios colombia, tattoos for foreigners colombia, legassy studio cali, tourist-friendly tattoo shops, bilingual tattoo experience, cali tattoo english",
  language: "en",
  subject: "Tattoo guide for tourists in Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/english-speaking-tattoo-artists-in-cali-colombia",
    languages: {
      'es': '/es/english-speaking-tattoo-artists-in-cali-colombia',
      'en': '/en/english-speaking-tattoo-artists-in-cali-colombia'
    }
  }
};
export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}


export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const thirdBlogContent = locale === "en" ? thirdBlogEn : thirdBlogEs;

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
       <ThirdBlog content={thirdBlogContent} />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}