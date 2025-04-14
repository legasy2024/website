
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import Container from "@/components/portfolio/Container";
//Diferent namespaces
const i18nNameSpaces = ["home", "portfolio", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Portafolio - Legassy Studio",
  description: "Explora el viaje artístico de Legassy Studio a través de nuestro diverso portafolio. Descubre tatuajes únicos que abarcan estilos de realismo, blackwork, minimalismo, lettering y micro-realismo.",
  keywords: "portafolio de tatuajes, tatuajes realistas, tatuajes blackwork, tatuajes minimalistas, tatuajes de lettering, micro-realismo, galería de arte de tatuajes, artistas de tatuajes en Cali",
  language: "es",
  subject: "Portafolio de Tatuajes de Legassy Studio - Diversidad Artística y Expresión Creativa",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://legassystudio.com/es/portafolio",
      languages: {
          'en': '/portfolio',
          'es': '/es/portafolio'
      }
  },
  openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://legassystudio.com/es/portafolio",
      title: "Portafolio - Legassy Studio",
      description: "Explora el viaje artístico de Legassy Studio a través de nuestro diverso portafolio de tatuajes únicos.",
      siteName: "Legassy Studio"
  }
};

const metadata_en = {
  title: "Portfolio - Legassy Studio",
  description: "Explore the artistic journey of Legassy Studio through our diverse portfolio. Discover unique tattoos spanning realism, blackwork, minimalism, lettering, and micro-realism styles.",
  keywords: "tattoo portfolio, realistic tattoos, blackwork tattoos, minimalist tattoos, lettering tattoos, micro-realism, tattoo art gallery, Cali tattoo artists",
  language: "en",
  subject: "Legassy Studio Tattoo Portfolio - Artistic Diversity and Creative Expression",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://legassystudio.com/portfolio",
      languages: {
          'en': '/portfolio',
          'es': '/es/portafolio'
      }
  },
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://legassystudio.com/portfolio",
      title: "Portfolio - Legassy Studio",
      description: "Explore the artistic journey of Legassy Studio through our diverse portfolio of unique tattoos.",
      siteName: "Legassy Studio"
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const ContentTranslations = {
    section_title: t("portfolio:header.section_title"),
    title: t("portfolio:header.title"),
    title_decorator: t("portfolio:header.title_decorator"),
  }

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <Container translations={ContentTranslations} locale={locale} />
      </TranslationsProvider>
    </>
  );
}