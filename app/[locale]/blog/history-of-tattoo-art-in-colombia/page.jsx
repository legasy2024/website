
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import EightBlog from "@/components/blog/BlogDetail/EightBlog/EightBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "Tatuajes en Colombia: Fusión de Historia y Modernidad",
  description: "Explora el fascinante recorrido del arte del tatuaje en Colombia, desde las prácticas ancestrales indígenas hasta las innovadoras técnicas contemporáneas. Descubre cómo este legado cultural milenario continúa evolucionando.",
  keywords: "tatuajes colombia, historia tatuaje colombia, tatuajes precolombinos, arte tradicional tatuaje colombiano, estilos tatuaje colombiano, artistas tatuaje cali, convenciones tatuaje colombia, legassy studio, tatuajes indígenas, patrimonio cultural tatuajes",
  language: "es",
  subject: "Historia y evolución del arte del tatuaje en Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/history-of-tattoo-art-in-colombia",
    languages: {
      'es': '/es/history-of-tattoo-art-in-colombia',
      'en': '/en/history-of-tattoo-art-in-colombia'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Tattoos in Colombia: Fusion of History and Modernity",
  description: "Explore the fascinating journey of tattoo art in Colombia, from ancestral indigenous practices to innovative contemporary techniques. Discover how this millenary cultural legacy continues to evolve.",
  keywords: "colombia tattoos, colombian tattoo history, pre-columbian tattoos, colombian traditional tattoo art, colombian tattoo styles, cali tattoo artists, colombia tattoo conventions, legassy studio, indigenous tattoos, cultural heritage tattoos",
  language: "en",
  subject: "History and evolution of tattoo art in Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/history-of-tattoo-art-in-colombia",
    languages: {
      'es': '/es/history-of-tattoo-art-in-colombia',
      'en': '/en/history-of-tattoo-art-in-colombia'
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
       <EightBlog />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}