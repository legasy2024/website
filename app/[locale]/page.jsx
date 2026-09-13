
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import LandingSection from "@/components/home/LandingSection/Main"
const PortfolioSection = dynamic(() => import("@/components/home/PortfolioSection/PortfolioSection"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials/Testimonials"));
const OurStudio = dynamic(() => import("@/components/home/OurStudio/OurStudio"));
const ShortsGallery = dynamic(() => import("@/components/home/ShortsGallery/ShortsGallery"));
const BookConsult = dynamic(() => import("@/components/common/BookConsult/BookConsult"));
const FaqSection = dynamic(() => import("@/components/home/FaqSection/FaqSection"));

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
      en: "/en",
      es: "/es",
      "x-default": "/en",
    },
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
      en: "/en",
      es: "/es",
      "x-default": "/en",
    },
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

  const shortsGalleryTranslations = {
    section_title: t("home:shorts_gallery.section_title"),
    title_start: t("home:shorts_gallery.title_start"),
    title_decorator: t("home:shorts_gallery.title_decorator"),
    title_end: t("home:shorts_gallery.title_end"),
    description: t("home:shorts_gallery.description"),
    cta: t("home:shorts_gallery.cta"),
    watch_label: t("home:shorts_gallery.watch_label"),
    videos: [
      {
        id: "qDQAN-RIJV8",
        tag: t("home:shorts_gallery.videos.0.tag"),
        title: t("home:shorts_gallery.videos.0.title"),
        subtitle: t("home:shorts_gallery.videos.0.subtitle"),
      },
      {
        id: "q8ri1Vmrmwo",
        tag: t("home:shorts_gallery.videos.1.tag"),
        title: t("home:shorts_gallery.videos.1.title"),
        subtitle: t("home:shorts_gallery.videos.1.subtitle"),
      },
      {
        id: "UVnVEv55UmA",
        tag: t("home:shorts_gallery.videos.2.tag"),
        title: t("home:shorts_gallery.videos.2.title"),
        subtitle: t("home:shorts_gallery.videos.2.subtitle"),
      },
    ],
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
    studio_name: t("home:book_consultation.studio_name"),
    address_label: t("home:book_consultation.address_label"),
    address_value: t("home:book_consultation.address_value"),
    city_value: t("home:book_consultation.city_value"),
    hours_label: t("home:book_consultation.hours_label"),
    hours_value: t("home:book_consultation.hours_value"),
    phone_value: t("home:book_consultation.phone_value"),
    email_value: t("home:book_consultation.email_value"),
    maps_cta: t("home:book_consultation.maps_cta"),
    maps_url: t("home:book_consultation.maps_url"),
    confirm_phone_form: t("home:book_consultation.confirm_phone_form"),
    error_phone_form: t("home:book_consultation.error_phone_form"),
    confirm_email_form: t("home:book_consultation.confirm_email_form"),
    error_email_form: t("home:book_consultation.error_email_form"),
  };

  const faqTranslations = {
    section_title: t("home:faq_section.section_title"),
    title_start: t("home:faq_section.title_start"),
    title_decorator: t("home:faq_section.title_decorator"),
    title_end: t("home:faq_section.title_end"),
    description: t("home:faq_section.description"),
    more_questions_text: t("home:faq_section.more_questions_text"),
    more_questions_subtext: t("home:faq_section.more_questions_subtext"),
    cta_whatsapp: t("home:faq_section.cta_whatsapp"),
    whatsapp_url: t("home:faq_section.whatsapp_url"),
    categories: {
      all: t("home:faq_section.categories.all"),
      cali: t("home:faq_section.categories.cali"),
      usa: t("home:faq_section.categories.usa"),
      sessions: t("home:faq_section.categories.sessions"),
    },
    items: [
      {
        category: t("home:faq_section.items.0.category"),
        question: t("home:faq_section.items.0.question"),
        answer: t("home:faq_section.items.0.answer"),
      },
      {
        category: t("home:faq_section.items.1.category"),
        question: t("home:faq_section.items.1.question"),
        answer: t("home:faq_section.items.1.answer"),
      },
      {
        category: t("home:faq_section.items.2.category"),
        question: t("home:faq_section.items.2.question"),
        answer: t("home:faq_section.items.2.answer"),
      },
      {
        category: t("home:faq_section.items.3.category"),
        question: t("home:faq_section.items.3.question"),
        answer: t("home:faq_section.items.3.answer"),
      },
      {
        category: t("home:faq_section.items.4.category"),
        question: t("home:faq_section.items.4.question"),
        answer: t("home:faq_section.items.4.answer"),
      },
      {
        category: t("home:faq_section.items.5.category"),
        question: t("home:faq_section.items.5.question"),
        answer: t("home:faq_section.items.5.answer"),
      },
      {
        category: t("home:faq_section.items.6.category"),
        question: t("home:faq_section.items.6.question"),
        answer: t("home:faq_section.items.6.answer"),
      },
    ],
  };

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
        <ShortsGallery translations={shortsGalleryTranslations}></ShortsGallery>
        <div className="flex flex-col items-center w-full">
          <BookConsult translations={BookConsultTranslations} locale={locale}></BookConsult>
        </div>
        <FaqSection translations={faqTranslations}></FaqSection>
      </TranslationsProvider>
    </>
  );
}