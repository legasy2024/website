
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import FirstBlog from "@/components/blog/BlogDetail/FirstBlog/FirstBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "Guía Definitiva: Top 5 Estudios de Tatuajes en Cali, Colombia",
  description: "Descubre los mejores lugares para tatuarte en Cali. Comparativa de estudios, estilos y calidad. Legassy Studio: donde el arte se convierte en legado.",
  keywords: "tatuajes cali, estudios de tatuajes cali, tattoo shops cali, mejores tatuadores cali, donde tatuarse cali, tatuajes colombia, artistas del tatuaje cali, tatuaje realista, blackwork, legassy studio",
  language: "es",
  subject: "Guía para encontrar los mejores estudios de tatuajes en Cali, Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/guia-definitiva-donde-tatuarse-en-cali",
    languages: {
      'es': '/es/guia-definitiva-donde-tatuarse-en-cali',
      'en': '/en/guia-definitiva-donde-tatuarse-en-cali'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Ultimate Guide: Top 5 Tattoo Studios in Cali, Colombia",
  description: "Discover the best places to get tattooed in Cali. Compare studios, styles and quality. Legassy Studio: where art becomes legacy.",
  keywords: "cali tattoos, tattoo studios cali, cali tattoo shops, best tattoo artists cali, where to get tattooed cali, colombia tattoos, cali tattoo artists, realistic tattoo, blackwork, legassy studio",
  language: "en",
  subject: "Guide to finding the best tattoo studios in Cali, Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/guia-definitiva-donde-tatuarse-en-cali",
    languages: {
      'es': '/es/guia-definitiva-donde-tatuarse-en-cali',
      'en': '/en/guia-definitiva-donde-tatuarse-en-cali'
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
       <FirstBlog />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}