
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import ForthBlog from "@/components/blog/BlogDetail/ForthBlog/ForthBlog"
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "Tatuajes en Colombia: Cali, El Auge de una Ciudad Creativa para Extranjeros",
  description: "Explora cómo Cali se ha convertido en el nuevo epicentro del tatuaje en Colombia, combinando talento emergente, influencia internacional y una identidad visual vibrante. Legassy Studio: donde el arte se convierte en legado.",
  keywords: "tatuajes cali, escena tatuaje colombia, artistas cali, tatuajes para extranjeros, turismo tatuaje, tatuaje identidad cultural, legassy studio, arte corporal colombia, tatuajes afropacíficos, destino tatoo",
  language: "es",
  subject: "Cali como destino emergente de tatuaje para extranjeros",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/cali-tattoo-scene-for-foreigners",
    languages: {
      'es': '/es/cali-tattoo-scene-for-foreigners',
      'en': '/en/cali-tattoo-scene-for-foreigners'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Tattoo in Colombia: Cali, The Rise of a Creative City for Foreigners",
  description: "Explore how Cali has become the new epicenter of tattooing in Colombia, combining emerging talent, international influence, and a vibrant visual identity. Legassy Studio: where art becomes legacy.",
  keywords: "cali tattoos, colombia tattoo scene, cali artists, tattoos for foreigners, tattoo tourism, cultural identity tattoo, legassy studio, colombia body art, afro-pacific tattoos, tattoo destination",
  language: "en",
  subject: "Cali as an emerging tattoo destination for foreigners",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/cali-tattoo-scene-for-foreigners",
    languages: {
      'es': '/es/cali-tattoo-scene-for-foreigners',
      'en': '/en/cali-tattoo-scene-for-foreigners'
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
       <ForthBlog />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}