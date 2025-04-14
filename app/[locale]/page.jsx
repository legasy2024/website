
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import LandingSection from "@/components/home/LandingSection/Main"
const PortfolioSection = dynamic(() => import("@/components/home/PortfolioSection/PortfolioSection"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials/Testimonials"));
const OurStudio = dynamic(() => import("@/components/home/OurStudio/OurStudio"));
const OurStories = dynamic(() => import("@/components/home/OurStories/OurStories"));
const DoYouWantToBe = dynamic(() => import("@/components/home/DoYouWantToBe/DoYouWantToBe"));
const DoYouWantToWork = dynamic(() => import("@/components/common/DoYouWantToWork/DoYouWantToWork"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));

//Diferent namespaces
const i18nNameSpaces = ["home", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Legassy Studio - Estudio Premium de Tatuajes en Cali, Colombia",
  description: "Legassy Studio: estudio privado en Cali donde arte y creatividad se transforman en tatuajes únicos, grabando un legado en cada trazo",
  keywords: "tatuajes, estudio de tatuajes, tattoo, artistas del tatuaje, tatuaje realista, blackwork, minimalista, lettering, tatuajes personalizados, microrealismo, ilustraciones",
  language: "es",
  subject: "Legassy Studio - Grabando un legado en cada trazo.",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es",
    languages: {
      'es': '/es',
      'en': '/en'
    }
  }
};

const metadata_en = {
  title: "Legassy Studio - Premium Tattoo Studio in Cali, Colombia",
  description: "Legassy Studio: private tattoo studio in Cali, Colombia where art becomes unique, personalized designs, engraving a legacy with every stroke",
  keywords: "tattoos, tattoo studio, tattoo, tattoo artists, realistic tattoo, blackwork, minimalist, lettering, custom tattoos, microrealism, illustrations",
  language: "en",
  subject: "Legassy Studio - Engraving a legacy in every stroke.",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en",
    languages: {
      'es': '/es',
      'en': '/en'
    }
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}


export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const landingTranslations = {
    hero_title: t("home:hero_content.title"),
    hero_subtitle: t("home:hero_content.subtitle"),
    hero_text: t("home:hero_content.text"),
    cta: t("home:hero_content.cta"),
  }

  const portfolioTranslations = {
    start_text: t("home:portfolio_section.start_text"),
    style_text: t("home:portfolio_section.style_text"),
    middle_text: t("home:portfolio_section.middle_text"),
    style_text_2: t("home:portfolio_section.style_text_2"),
    end_text: t("home:portfolio_section.end_text"),
    cta_label: t("home:portfolio_section.cta_label"),
    cta: t("home:portfolio_section.cta"),
  }

  const ourStudioTranslations = {
    label_title: t("home:our_studio.label_title"),
    title: t("home:our_studio.title"),
    title_decorator: t("home:our_studio.title_decorator"),
    paragraph_1: t("home:our_studio.paragraph_1"),
    paragraph_2: t("home:our_studio.paragraph_2"),
    cta: t("home:our_studio.cta"),
  }

  const OurStoriesTranslations = {
    section_title: t("home:our_stories.section_title"),
    title_start: t("home:our_stories.title_start"),
    title_end: t("home:our_stories.title_end"),
    city_california: t("home:our_stories.stories.0.city_california"),
    paragraph_1_california: t("home:our_stories.stories.0.paragraph_1_california"),
    paragraph_2_california: t("home:our_stories.stories.0.paragraph_2_california"),
    city_pensilvania: t("home:our_stories.stories.1.city_pensilvania"),
    paragraph_1_pensilvania: t("home:our_stories.stories.1.paragraph_1_pensilvania"),
    paragraph_2_pensilvania: t("home:our_stories.stories.1.paragraph_2_pensilvania"),
    city_luisiana: t("home:our_stories.stories.2.city_luisiana"),
    paragraph_1_luisiana: t("home:our_stories.stories.2.paragraph_1_luisiana"),
    paragraph_2_luisiana: t("home:our_stories.stories.2.paragraph_2_luisiana"),
    cta: t("home:our_stories.cta"),
  }

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
        <LandingSection translations={landingTranslations} />
        <PortfolioSection translations={portfolioTranslations} locale={locale} ></PortfolioSection>
        <Testimonials></Testimonials>
         <OurStudio translations={ourStudioTranslations}></OurStudio> 
        <OurStories translations={OurStoriesTranslations}></OurStories>
        <DoYouWantToBe translations={DoYouWantToBeTranslations}></DoYouWantToBe>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </div>
      </TranslationsProvider>
    </>
  );
}