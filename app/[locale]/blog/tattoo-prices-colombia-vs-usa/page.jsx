
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
  title: "Todo lo que Debes Saber sobre Precios de Tatuajes en Colombia vs. EE.UU.",
  description: "Descubre la extraordinaria ventaja que ofrece Colombia, y particularmente Cali, cuando se trata de combinar calidad artística excepcional con precios sorprendentemente accesibles para tatuajes en comparación con Estados Unidos.",
  keywords: "precios tatuajes colombia, tatuajes económicos colombia, comparativa precios tatuajes, tatuajes cali precios, ahorrar en tatuajes, tatuajes calidad precio, turismo de tatuajes, tatuajes estados unidos vs colombia, tatuajes baratos colombia, legassy studio precios",
  language: "es",
  subject: "Comparativa de precios de tatuajes entre Colombia y Estados Unidos",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/blog/precios-de-tatuajes-en-colombia-vs-eeuu",
    languages: {
      en: "/en/blog/tattoo-prices-colombia-vs-usa",
      es: "/es/blog/precios-de-tatuajes-en-colombia-vs-eeuu",
      "x-default": "/en/blog/tattoo-prices-colombia-vs-usa",
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "Everything You Need to Know About Tattoo Prices in Colombia vs. USA",
  description: "Discover the extraordinary advantage Colombia offers, particularly Cali, when it comes to combining exceptional artistic quality with surprisingly affordable prices for tattoos compared to the United States.",
  keywords: "colombia tattoo prices, affordable tattoos colombia, tattoo price comparison, cali tattoo prices, save money on tattoos, tattoo value for money, tattoo tourism, usa vs colombia tattoos, cheap tattoos colombia, legassy studio prices",
  language: "en",
  subject: "Comparison of tattoo prices between Colombia and the United States",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/blog/tattoo-prices-colombia-vs-usa",
    languages: {
      en: "/en/blog/tattoo-prices-colombia-vs-usa",
      es: "/es/blog/precios-de-tatuajes-en-colombia-vs-eeuu",
      "x-default": "/en/blog/tattoo-prices-colombia-vs-usa",
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