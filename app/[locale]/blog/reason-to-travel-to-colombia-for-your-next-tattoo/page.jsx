
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import SecondBlog from "@/components/blog/BlogDetail/SecondBlog/SecondBlog"

//Translations
import secondBlogEs from "@/locales/es/secondblog.json"
import secondBlogEn from "@/locales/en/secondblog.json"

const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];

// Metadata en español
const metadata = {
  title: "7 Razones para Viajar a Colombia por tu Próximo Tatuaje",
  description: "Descubre por qué Colombia se ha convertido en el destino perfecto para combinar turismo y tatuajes de calidad excepcional. Legassy Studio: donde el arte se convierte en legado.",
  keywords: "tatuajes colombia, turismo de tatuaje, tattoo cali, mejores tatuadores colombia, donde tatuarse colombia, tatuajes cali, artistas del tatuaje colombia, tatuaje realista, legassy studio",
  language: "es",
  subject: "Guía de turismo de tatuaje en Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/reason-to-travel-to-colombia-for-your-next-tatto",
    languages: {
      'es': '/es/reason-to-travel-to-colombia-for-your-next-tatto',
      'en': '/en/reason-to-travel-to-colombia-for-your-next-tatto'
    }
  }
};

// Metadata en inglés
const metadata_en = {
  title: "7 Reasons to Travel to Colombia for Your Next Tattoo",
  description: "Discover why Colombia has become the perfect destination to combine tourism and exceptional quality tattoos. Legassy Studio: where art becomes legacy.",
  keywords: "colombia tattoos, tattoo tourism, cali tattoo, best tattoo artists colombia, where to get tattooed colombia, cali tattoos, colombian tattoo artists, realistic tattoo, legassy studio",
  language: "en",
  subject: "Guide to tattoo tourism in Colombia",
  coverage: "Cali, Colombia",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/reason-to-travel-to-colombia-for-your-next-tatto",
    languages: {
      'es': '/es/reason-to-travel-to-colombia-for-your-next-tatto',
      'en': '/en/reason-to-travel-to-colombia-for-your-next-tatto'
    }
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}



export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  
  const secondBlogContent = locale === "en" ? secondBlogEn : secondBlogEs;
  
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
       <SecondBlog content={secondBlogContent} />
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}