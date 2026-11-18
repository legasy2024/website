import Link from "next/link";
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


const podcastIntro = {
  es: {
    title: "El podcast de Legassy Studio",
    paragraphs: [
      "En el podcast de Legassy Studio conversamos con tatuadores y personas del mundo del tatuaje sobre su camino, su técnica y las historias detrás de cada pieza. Es una forma de conocer a los artistas antes de tatuarte y de entender cómo se vive este oficio en Cali.",
      "Los episodios completos están en nuestro canal de YouTube y aquí abajo puedes ver todos los capítulos publicados.",
    ],
    links: [
      { href: "https://www.youtube.com/@LegassyStudioColombia", label: "Ver el canal de YouTube", external: true },
      { href: "/es/academy", label: "Academia de tatuaje en Cali" },
      { href: "/es/portfolio", label: "Portafolio del estudio" },
      { href: "/es/blog", label: "Blog de tatuajes" },
    ],
  },
  en: {
    title: "The Legassy Studio podcast",
    paragraphs: [
      "On the Legassy Studio podcast we talk with tattoo artists and people from the tattoo world about their path, their technique and the stories behind each piece. It's a way to get to know the artists before your tattoo and to see what this craft is like in Cali, Colombia.",
      "Full episodes are on our YouTube channel, and you can browse every published episode below.",
    ],
    links: [
      { href: "https://www.youtube.com/@LegassyStudioColombia", label: "Watch on YouTube", external: true },
      { href: "/en/academy", label: "Tattoo academy in Cali" },
      { href: "/en/portfolio", label: "Studio portfolio" },
      { href: "/en/blog", label: "Tattoo blog" },
    ],
  },
};

export default async function Podcast({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const content = locale === "en" ? podcastEn.content : podcastEs.content;
  const intro = locale === "en" ? podcastIntro.en : podcastIntro.es;

  return (
    <div className="bg-white">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <PodcastComponent content={content} />
        <section className="mx-auto w-full max-w-[1200px] px-5 py-10 text-TextBlack desktop:px-0">
          <h2 className="text-2xl font-bold md:text-3xl">{intro.title}</h2>
          {intro.paragraphs.map((text) => (
            <p key={text} className="mt-3 max-w-3xl text-lg">{text}</p>
          ))}
          <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {intro.links.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">{link.label}</a>
                ) : (
                  <Link href={link.href} className="font-semibold underline underline-offset-4">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </section>
        <FirestoreEpisodes />
      </TranslationsProvider>
    </div>
  );
}
