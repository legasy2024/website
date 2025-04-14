
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import Header from "@/components/curses/Header";
//Diferent namespaces
const i18nNameSpaces = ["home", "curses", "about", "navbar", "experience", "help", "projects"];


const metadata = {
    title: "Cursos de Tatuaje - Legassy Studio",
    description: "Explora los cursos de tatuaje de Legassy Studio. Aprende técnicas profesionales de tatuaje, conoce sobre higiene, estilos artísticos y cómo convertir tu pasión en una carrera. Impartidos por artistas expertos en un entorno creativo y profesional.",
    keywords: "cursos de tatuaje, formación en tatuajes, aprender a tatuar, talleres de tatuaje, técnicas de tatuaje, curso de tatuaje en Cali, Legassy Studio",
    language: "es",
    subject: "Formación en tatuajes - Cursos profesionales de Legassy Studio",
    coverage: "Global",
    robots: "index, follow",
    author: "Legassy Studio",
    publisher: "Legassy Studio",
    alternates: {
      canonical: "https://www.legassystudio.com/es/cursos",
      languages: {
        'en': '/courses',
        'es': '/es/cursos'
      }
    },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://www.legassystudio.com/es/cursos",
      title: "Cursos de Tatuaje - Legassy Studio",
      description: "Descubre nuestros cursos de tatuaje impartidos por artistas expertos. Aprende técnicas, higiene y estilos únicos en un ambiente profesional y creativo.",
      siteName: "Legassy Studio"
    }
  };

  const metadata_en = {
    title: "Tattoo Courses - Legassy Studio",
    description: "Explore Legassy Studio's tattoo courses. Learn professional tattoo techniques, hygiene practices, artistic styles, and how to turn your passion into a career. Taught by expert artists in a creative and professional environment.",
    keywords: "tattoo courses, tattoo training, learn to tattoo, tattoo workshops, tattoo techniques, tattoo course in Cali, Legassy Studio",
    language: "en",
    subject: "Tattoo Training - Professional Courses by Legassy Studio",
    coverage: "Global",
    robots: "index, follow",
    author: "Legassy Studio",
    publisher: "Legassy Studio",
    alternates: {
      canonical: "https://www.legassystudio.com/en/courses",
      languages: {
        'en': '/courses',
        'es': '/es/cursos'
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.legassystudio.com/en/courses",
      title: "Tattoo Courses - Legassy Studio",
      description: "Discover our tattoo courses taught by expert artists. Learn techniques, hygiene, and unique styles in a professional and creative environment.",
      siteName: "Legassy Studio"
    }
  };


export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const headerTranslations = {
    section_title: t("curses:header.section_title"),
    title: t("curses:header.title"),
    title_decorator: t("curses:header.title_decorator"),
    comingsoon: t("curses:comingsoon.title"),
  }


  return (
    <div className="bg-[#EDEDED] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <Header translations={headerTranslations} />
        <section className="flex justify-center items-center w-full h-96 bg-gradient-to-br from-black to-[#262016] text-center ">
            <h1 className="text-3xl font-light text-white">{headerTranslations.comingsoon}</h1>
        </section>
      </TranslationsProvider>
    </div>
  );
}