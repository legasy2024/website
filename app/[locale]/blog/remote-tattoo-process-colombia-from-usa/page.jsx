
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import SevenBlog from "@/components/blog/BlogDetail/SevenBlog/SevenBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "¿Tatuarse en Colombia? Proceso de Trabajo con Artistas Colombianos a Distancia desde EEUU",
  description: "Descubre el paso a paso completo para colaborar a distancia con los mejores tatuadores colombianos, desde la selección del artista hasta tu viaje a Cali. Una guía detallada para conseguir arte corporal excepcional.",
  keywords: "tatuajes colombia, proceso tatuaje a distancia, tattoo artists cali, tatuajes desde estados unidos, tatuajes internacionales, appointment tattoo studios colombia, legassy studio, tatuaje viaje colombia, consulta virtual tatuaje, artistas tatuadores colombianos",
  language: "es",
  subject: "Guía para proceso de tatuaje a distancia con artistas colombianos",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/remote-tattoo-process-colombia-from-usa",
    languages: {
      'es': '/es/remote-tattoo-process-colombia-from-usa',
      'en': '/en/remote-tattoo-process-colombia-from-usa'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Getting Tattooed in Colombia? Remote Collaboration Process with Colombian Artists from the USA",
  description: "Discover the complete step-by-step process for collaborating remotely with the best Colombian tattoo artists, from selecting your artist to planning your trip to Cali. A detailed guide to exceptional body art.",
  keywords: "colombia tattoos, remote tattoo process, cali tattoo artists, tattoos from united states, international tattoos, appointment tattoo studios colombia, legassy studio, tattoo travel colombia, virtual tattoo consultation, colombian tattoo artists",
  language: "en",
  subject: "Guide for remote tattoo process with Colombian artists",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/remote-tattoo-process-colombia-from-usa",
    languages: {
      'es': '/es/remote-tattoo-process-colombia-from-usa',
      'en': '/en/remote-tattoo-process-colombia-from-usa'
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
       <SevenBlog />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}