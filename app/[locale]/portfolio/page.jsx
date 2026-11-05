
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import Link from "next/link";


//Components
import Container from "@/components/portfolio/Container";
//Diferent namespaces
const i18nNameSpaces = ["home", "portfolio", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Portafolio de tatuajes en Cali | Legassy Studio",
  description: "Portafolio de Legassy Studio en el sur de Cali: tatuajes de realismo, surrealismo, línea fina, microrealismo, anime y puntillismo de nuestros artistas.",
  keywords: "portafolio de tatuajes, tatuajes realistas Cali, tatuajes línea fina Cali, microrealismo, surrealismo, anime, puntillismo, artistas de tatuajes en Cali",
  language: "es",
  subject: "Portafolio de Tatuajes de Legassy Studio - Diversidad Artística y Expresión Creativa",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/es/portfolio",
      languages: {
          en: "/en/portfolio",
          es: "/es/portfolio",
          "x-default": "/es/portfolio",
      }
  },
  openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://www.legassystudio.com/es/portfolio",
      title: "Portafolio - Legassy Studio",
      description: "Explora el viaje artístico de Legassy Studio a través de nuestro diverso portafolio de tatuajes únicos.",
      images: [{ url: "/es/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio"
  }
};

const metadata_en = {
  title: "Tattoo Portfolio in Cali, Colombia | Legassy Studio",
  description: "Legassy Studio's tattoo portfolio from south Cali, Colombia: realism, surrealism, fine line, micro-realism, anime and pointillism by our artists.",
  keywords: "tattoo portfolio, realism tattoos Cali, fine line tattoos Cali, micro-realism, surrealism, anime, pointillism, Cali tattoo artists",
  language: "en",
  subject: "Legassy Studio Tattoo Portfolio - Artistic Diversity and Creative Expression",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/en/portfolio",
      languages: {
          en: "/en/portfolio",
          es: "/es/portfolio",
          "x-default": "/es/portfolio",
      }
  },
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.legassystudio.com/en/portfolio",
      title: "Portfolio - Legassy Studio",
      description: "Explore the artistic journey of Legassy Studio through our diverse portfolio of unique tattoos.",
      images: [{ url: "/en/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio"
  }
};

const localContent = {
  es: {
    title: "Tatuajes hechos en nuestro estudio del sur de Cali",
    paragraphs: [
      "Estas fotos son trabajos de los artistas de Legassy Studio: realismo, surrealismo, línea fina, microrealismo, anime, puntillismo y piezas de estilo libre. Usa el selector de estilos para encontrar referencias cercanas a tu idea.",
      "Cada diseño se conversa antes de agendar. Escríbenos por WhatsApp con tu idea, la zona y el tamaño aproximado: la asesoría y la cotización son gratis. Estamos en la Calle 7 # 56 - 55, cerca de Mall Plaza y de la Plaza de Toros.",
    ],
    guidesTitle: "Guías por estilo",
    guides: [
      { href: "/es/blog/tatuajes-de-realismo-en-cali", label: "Tatuajes de realismo en Cali" },
      { href: "/es/blog/tatuajes-de-linea-fina-en-cali-durabilidad-del-trazo", label: "Línea fina: cómo hacer que dure" },
      { href: "/es/blog/tatuajes-pequenos-y-minimalistas-en-cali", label: "Tatuajes pequeños y minimalistas" },
      { href: "/es/blog/mangas-y-tatuajes-grandes-en-cali", label: "Mangas y tatuajes grandes" },
      { href: "/es/blog/cuanto-cuesta-un-tatuaje-en-cali", label: "Qué define el precio" },
      { href: "/es/contact", label: "Cómo llegar y contacto" },
    ],
  },
  en: {
    title: "Tattoos made at our studio in south Cali",
    paragraphs: [
      "These photos show work by the Legassy Studio artists: realism, surrealism, fine line, micro-realism, anime, pointillism and free-style pieces. Use the style selector to find references close to your idea.",
      "Every design is discussed before booking. Message us on WhatsApp with your idea, placement and approximate size: the consultation and quote are free. We are at Calle 7 # 56 - 55, near Mall Plaza and the Plaza de Toros.",
    ],
    guidesTitle: "Guides by style",
    guides: [
      { href: "/en/blog/realism-tattoos-in-cali-colombia", label: "Realism tattoos in Cali" },
      { href: "/en/blog/fine-line-tattoos-in-cali-durability", label: "Fine line: how to make it last" },
      { href: "/en/blog/small-and-minimalist-tattoos-in-cali-colombia", label: "Small and minimalist tattoos" },
      { href: "/en/blog/sleeves-and-large-tattoos-in-cali-colombia", label: "Sleeves and large tattoos" },
      { href: "/en/blog/how-much-does-a-tattoo-cost-in-cali-colombia", label: "What sets the price" },
      { href: "/en/contact", label: "Directions and contact" },
    ],
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const local = locale === "en" ? localContent.en : localContent.es;

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
        <section className="w-full bg-[#111] px-5 py-14 text-white desktop:px-24">
          <div className="mx-auto w-full desktop:max-w-[1200px]">
            <h2 className="text-2xl font-bold md:text-3xl">{local.title}</h2>
            {local.paragraphs.map((text) => (
              <p key={text} className="mt-3 max-w-3xl text-gray-300">{text}</p>
            ))}
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-400">{local.guidesTitle}</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {local.guides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="text-gray-200 hover:text-white hover:underline">{guide.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </TranslationsProvider>
    </>
  );
}