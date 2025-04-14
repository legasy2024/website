
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import Header from "@/components/about-us/Header";
import Timeline from "@/components/about-us/Timeline";
import OurStudio from "@/components/home/OurStudio/OurStudio";
import WhyGetTattoo from "@/components/about-us/WhyGetTattoo/WhyGetTattoo";
import DoYouWantToWork from "@/components/common/DoYouWantToWork/DoYouWantToWork";
import BookConsult from "@/components/common/BookConsult/BookConsult";
//Diferent namespaces
const i18nNameSpaces = ["home", "about", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Sobre Nosotros - Legassy Studio",
  description: "Descubre la historia detrás de Legassy Studio, un colectivo de tatuadores apasionados dedicados a transformar narrativas personales en arte corporal excepcional. Conoce a nuestros artistas y nuestro compromiso con la creatividad.",
  keywords: "artistas de tatuajes, historia del estudio, colectivo creativo de tatuajes, artistas de tatuajes profesionales, filosofía del arte del tatuaje, estudio de tatuajes en Cali",
  language: "es",
  subject: "Sobre Legassy Studio - Nuestra Historia y Visión Artística",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/es/nosotros",
      languages: {
          'en': '/about',
          'es': '/es/nosotros'
      }
  },
  openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://www.legassystudio.com/es/nosotros",
      title: "Nosotros - Legassy Studio",
      description: "Descubre la historia detrás de Legassy Studio, un colectivo de tatuadores apasionados dedicados a transformar narrativas personales en arte corporal excepcional.",
      siteName: "Legassy Studio"
  }
};

const metadata_en = {
  title: "About Us - Legassy Studio",
  description: "Discover the story behind Legassy Studio, a passionate tattoo collective dedicated to transforming personal narratives into exceptional body art. Meet our artists and our commitment to creativity.",
  keywords: "tattoo artists, studio history, creative tattoo collective, professional tattoo artists, tattoo art philosophy, Cali tattoo studio",
  language: "en",
  subject: "About Legassy Studio - Our Story and Artistic Vision",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassytattoo.com/about",
      languages: {
          'en': '/about',
          'es': '/es/nosotros'
      }
  },
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.legassytattoo.com/about",
      title: "About Us - Legassy Studio",
      description: "Discover the story behind Legassy Studio, a passionate tattoo collective dedicated to transforming personal narratives into exceptional body art.",
      siteName: "Legassy Studio"
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const headerTranslations = {
    section_title: t("about:header.section_title"),
    title: t("about:header.title"),
    title_decorator: t("about:header.title_decorator"),
    description: t("about:header.description"),
  }

  const timelineTranslations = {
    title: t("about:timeline.title"),
    title_decorator: t("about:timeline.title_decorator"),
    title_end: t("about:timeline.title_end"),
    title_decorator_end: t("about:timeline.title_decorator_end"),
    idea: t("about:timeline.idea"),
    idea_description: t("about:timeline.idea_description"),
    motivation: t("about:timeline.motivation"),
    motivation_description: t("about:timeline.motivation_description"),
    promise: t("about:timeline.promise"),
    promise_description: t("about:timeline.promise_description"),
    morethanastudio: t("about:timeline.morethanastudio"),
    morethanastudio_description: t("about:timeline.morethanastudio_description"),
  }

  const ourStudioTranslations = {
    label_title: t("home:our_studio.label_title"),
    title: t("home:our_studio.title"),
    title_decorator: t("home:our_studio.title_decorator"),
    paragraph_1: t("home:our_studio.paragraph_1"),
    paragraph_2: t("home:our_studio.paragraph_2"),
    cta: t("home:our_studio.cta"),
  }

  const whyGetTattooTranslations = {
    section_title: t("about:why_get_tattoo.section_title"),
    section_title_decorator: t("about:why_get_tattoo.section_title_decorator"),
    paragraph: t("about:why_get_tattoo.paragraph"),
    quality: t("about:why_get_tattoo.values.quality"),
    quality_description: t("about:why_get_tattoo.values.quality_description"),
    design: t("about:why_get_tattoo.values.design"),
    design_description: t("about:why_get_tattoo.values.design_description"),
    process: t("about:why_get_tattoo.values.process"),
    process_description: t("about:why_get_tattoo.values.process_description"),
    experience: t("about:why_get_tattoo.values.experience"),
    experience_description: t("about:why_get_tattoo.values.experience_description"),
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
    <div className="bg-[#EDEDED] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <Header translations={headerTranslations} />
        <Timeline translations={timelineTranslations} />
        <OurStudio translations={ourStudioTranslations}></OurStudio>
        <WhyGetTattoo translations={whyGetTattooTranslations}></WhyGetTattoo>
        <DoYouWantToWork translations={DoYouWantToWorkTranslations}></DoYouWantToWork>
        <section className="w-full flex flex-col items-center">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </section>
      </TranslationsProvider>
    </div>
  );
}