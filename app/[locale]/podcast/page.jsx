//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import podcastEs from "@/locales/es/podcast.json";
import podcastEn from "@/locales/en/podcast.json";

//Components
import PodcastComponent from "@/components/podcast/Header";
import FirestoreEpisodes from "@/components/podcast/FirestoreEpisodes";

//Diferent namespaces
const i18nNameSpaces = [
  "home",
  "podcast",
  "about",
  "navbar",
  "experience",
  "help",
  "projects",
];

const metadata = {
  title: "Podcast de tatuajes en Cali | Legassy Studio",
  description:
    "Podcast de Legassy Studio, estudio de tatuajes en Cali: conversaciones con artistas y clientes sobre tatuajes, arte y cultura.",
  keywords:
    "podcast de tatuajes, cultura del tatuaje, entrevistas con artistas, historias de tatuajes, consejos de tatuajes, estudio de tatuajes en Cali, podcast tatuajes Cali Colombia, mejor podcast tatuajes Colombia",
  language: "es",
  subject: "Podcast de Legassy Studio - Historias y Conversaciones sobre Tatuajes",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/es/podcast",
    languages: {
      en: "/en/podcast",
      es: "/es/podcast",
      "x-default": "/es/podcast",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.legassystudio.com/es/podcast",
    title: "Podcast de tatuajes en Cali | Legassy Studio",
    description:
      "Podcast de Legassy Studio, estudio de tatuajes en Cali: conversaciones con artistas y clientes sobre tatuajes, arte y cultura.",
    images: [{ url: "/es/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
    siteName: "Legassy Studio",
  },
};

const metadata_en = {
  title: "Tattoo Podcast from Cali, Colombia | Legassy Studio",
  description:
    "The Legassy Studio podcast from Cali, Colombia: conversations with artists and clients about tattoos, art and culture.",
  keywords:
    "tattoo podcast, tattoo culture, artist interviews, tattoo stories, tattoo tips, Cali tattoo studio, tattoo podcast Cali Colombia, best tattoo podcast Colombia",
  language: "en",
  subject: "Legassy Studio Podcast - Tattoo Stories and Conversations",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://www.legassystudio.com/en/podcast",
    languages: {
      en: "/en/podcast",
      es: "/es/podcast",
      "x-default": "/es/podcast",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.legassystudio.com/en/podcast",
    title: "Tattoo Podcast from Cali, Colombia | Legassy Studio",
    description:
      "The Legassy Studio podcast from Cali, Colombia: conversations with artists and clients about tattoos, art and culture.",
    images: [{ url: "/en/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
    siteName: "Legassy Studio",
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}

export default async function Podcast({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const content = locale === "en" ? podcastEn.content : podcastEs.content;

  return (
    <div className="bg-white">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <PodcastComponent content={content} />
        <FirestoreEpisodes />
      </TranslationsProvider>
    </div>
  );
}
