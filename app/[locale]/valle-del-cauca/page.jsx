import Image from "next/image";
import Link from "next/link";

const SITE = "https://www.legassystudio.com";
const WA = "573103110611";
const MAPS = "https://maps.app.goo.gl/p3jzZbkTe7SJs1By5";
const TOWNS = ["Jamundí", "Palmira", "Yumbo", "Candelaria", "Florida"];

const R = "/img/portfolio-blog/realismo-cali";
const L = "/img/portfolio-blog/linea-fina-cali";

const HERO = {
  src: `${R}/manga-leon-realismo-cali.jpg`,
  alt: { es: "Manga de león en realismo negro y gris hecha en Legassy Studio, Cali", en: "Black and grey realism lion sleeve tattooed at Legassy Studio, Cali" },
};

// Fotos de las tarjetas de servicios, en el mismo orden que copy.services (null = tarjeta sin foto)
const SERVICE_IMAGES = [
  { src: `${R}/rostro-ojo-verde-pantorrilla-cali.jpg`, alt: { es: "Rostro en realismo con ojo verde en la pantorrilla", en: "Realism face with a green eye on the calf" } },
  { src: `${R}/manga-leon-guerrero-realismo-cali.jpg`, alt: { es: "Manga de león y guerrero en realismo", en: "Lion and warrior realism sleeve" } },
  { src: "/img/portfolio-blog/galleries/gallery-tatuajes-minis/01.jpg", alt: { es: "Tatuaje mini de palabra en línea fina en la muñeca", en: "Fine line mini word tattoo on the wrist" } },
  null,
  { src: "/img/academy/mentoria-1-a-1-academia-tatuaje-cali.jpg", alt: { es: "Mentoría uno a uno en la academia de tatuaje de Legassy en Cali", en: "One-on-one mentoring at the Legassy tattoo academy in Cali" } },
];

const WORKS = [
  { src: `${R}/manga-poseidon-flores-realismo-cali.jpg`, alt: { es: "Manga de Poseidón con flores en realismo", en: "Poseidon and flowers realism sleeve" } },
  { src: `${L}/colibri-linea-fina-cali.jpg`, alt: { es: "Colibrí en línea fina", en: "Fine line hummingbird" } },
  { src: `${R}/espalda-hannya-black-grey-cali.jpg`, alt: { es: "Espalda con máscara Hannya en negro y gris", en: "Hannya mask back piece in black and grey" } },
  { src: `${R}/ganesha-pantorrilla-realismo-cali.jpg`, alt: { es: "Ganesha en realismo en la pantorrilla", en: "Ganesha realism tattoo on the calf" } },
  { src: `${L}/corazon-anatomico-linea-fina-cali.jpg`, alt: { es: "Corazón anatómico en línea fina", en: "Fine line anatomical heart" } },
  { src: `${R}/manga-elefante-tigre-realismo-cali.jpg`, alt: { es: "Manga de elefante y tigre en realismo", en: "Elephant and tiger realism sleeve" } },
  { src: `${R}/espalda-poseidon-catrina-realismo-cali.jpg`, alt: { es: "Espalda con Poseidón y catrina en realismo", en: "Poseidon and catrina realism back piece" } },
  { src: `${L}/lettering-columna-linea-fina-cali.jpg`, alt: { es: "Lettering en línea fina sobre la columna", en: "Fine line lettering along the spine" } },
];

const STUDIO = {
  src: "/img/academy/sede-legassy-studio-cali.jpg",
  alt: { es: "Entrada de Legassy Studio en Pampa Linda, sur de Cali", en: "Entrance of Legassy Studio in Pampa Linda, south Cali" },
};

const copy = {
  es: {
    meta: {
      title: "Tatuajes y piercing en el Valle del Cauca | Legassy Studio",
      description:
        "Estudio de tatuajes y piercing en el sur de Cali para todo el Valle del Cauca: Jamundí, Palmira, Yumbo, Candelaria y más. Asesoría y cotización gratis por WhatsApp.",
    },
    h1: "Tatuajes y piercing para todo el Valle del Cauca",
    intro:
      "Legassy Studio está en el sur de Cali, en la Calle 7 # 56 - 55, Pampa Linda, cerca de Mall Plaza y de la Plaza de Toros. Si vives fuera de Cali, el viaje cuenta: por eso hacemos la asesoría y la cotización por WhatsApp, sin costo, para que llegues al estudio con la idea, el tamaño y la cita ya definidos.",
    cta: "Pedir asesoría por WhatsApp",
    waText: "Hola! Vivo en el Valle del Cauca y quisiera una asesoría para un tatuaje o piercing.",
    townsTitle: "Si vienes desde otro municipio del Valle",
    townsText:
      "Si vives en {towns} u otro municipio del Valle del Cauca, escríbenos antes de viajar. Así resolvemos por chat todo lo que se puede resolver a distancia y usas la visita al estudio para lo importante: tatuarte o perforarte.",
    servicesTitle: "Qué puedes hacerte en el estudio",
    services: [
      {
        name: "Tatuajes de realismo",
        text: "Retratos, animales y piezas en negro y gris o a color.",
        href: "/es/blog/tatuajes-de-realismo-en-cali",
        link: "Guía de realismo en Cali",
      },
      {
        name: "Mangas y piezas grandes",
        text: "Proyectos de varias sesiones, planeados para que cada viaje rinda.",
        href: "/es/blog/mangas-y-tatuajes-grandes-en-cali",
        link: "Guía de mangas en Cali",
      },
      {
        name: "Tatuajes pequeños y minis",
        text: "Línea fina, palabras, símbolos y piezas discretas.",
        href: "/es/blog/tatuajes-pequenos-y-minimalistas-en-cali",
        link: "Guía de tatuajes pequeños",
      },
      {
        name: "Piercing",
        text: "Perforaciones de oreja, nariz, rostro, boca y cuerpo.",
        href: "/es/piercing",
        link: "Ver piercing en Cali",
      },
      {
        name: "Academia de tatuaje",
        text: "Formación presencial uno a uno para quien quiere aprender a tatuar.",
        href: "/es/academy",
        link: "Conocer la academia",
      },
    ],
    worksTitle: "Trabajos hechos en el estudio",
    worksText: "Algunas piezas de nuestros artistas. Hay muchas más en el portafolio.",
    worksLink: "Ver el portafolio completo",
    stepsTitle: "Cómo aprovechar el viaje a Cali",
    steps: [
      "Escríbenos por WhatsApp con tu idea, la zona del cuerpo, el tamaño aproximado y fotos de referencia si las tienes.",
      "Te asesoramos y te enviamos la cotización sin costo, antes de que tengas que viajar.",
      "Agendamos la cita en un horario que te sirva. Si es una pieza grande, planeamos las sesiones desde el inicio.",
      "Después de la cita te explicamos los cuidados y seguimos pendientes por WhatsApp mientras cicatriza.",
    ],
    visitTitle: "Dirección y horario",
    visit: [
      "Calle 7 # 56 - 55, Pampa Linda, sur de Cali.",
      "Cerca de Mall Plaza y de la Plaza de Toros.",
      "Lunes a sábado, de 8am a 5pm.",
    ],
    mapsLabel: "Abrir en Google Maps",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Puedo hacer la asesoría sin ir al estudio?",
        a: "Sí. La asesoría y la cotización son gratis por WhatsApp, así que puedes resolverlas desde tu casa y venir solo el día de la cita.",
      },
      {
        q: "¿Puedo hacerme un tatuaje y un piercing en el mismo viaje?",
        a: "Sí, ambos se hacen en el mismo estudio. Cuéntanos qué quieres y organizamos los tiempos de la cita.",
      },
      {
        q: "¿Cuánto cuesta un tatuaje?",
        a: "Depende del tamaño, la zona y el nivel de detalle. Escríbenos con tu idea y te damos la cotización sin costo.",
      },
      {
        q: "¿Tatúan a menores de edad?",
        a: "Sí, con el consentimiento de un adulto responsable.",
      },
    ],
    linksTitle: "También te puede interesar",
    links: [
      { href: "/es/portfolio", label: "Portafolio de tatuajes" },
      { href: "/es/blog/como-cuidar-un-tatuaje-en-el-clima-de-cali", label: "Cuidar un tatuaje en el clima de Cali" },
      { href: "/es/contact", label: "Contacto" },
    ],
  },
  en: {
    meta: {
      title: "Tattoos and Piercing in Valle del Cauca, Colombia | Legassy Studio",
      description:
        "Tattoo and piercing studio in south Cali serving all of Valle del Cauca: Jamundí, Palmira, Yumbo, Candelaria and more. English spoken. Free consultation on WhatsApp.",
    },
    h1: "Tattoos and piercing for all of Valle del Cauca",
    intro:
      "Legassy Studio is in south Cali, at Calle 7 # 56 - 55, Pampa Linda, near Mall Plaza and the Plaza de Toros. If you live outside Cali, the trip matters: that is why we do the consultation and the quote on WhatsApp, free of charge, so you arrive with the idea, the size and the appointment already set.",
    cta: "Ask for a consultation on WhatsApp",
    waText: "Hi! I live in Valle del Cauca and I'd like a consultation for a tattoo or piercing.",
    townsTitle: "Coming from another town in Valle del Cauca",
    townsText:
      "If you live in {towns} or another town in Valle del Cauca, message us before you travel. We sort out everything that can be done remotely over chat, so your visit to the studio is for what matters: getting tattooed or pierced.",
    servicesTitle: "What you can get at the studio",
    services: [
      {
        name: "Realism tattoos",
        text: "Portraits, animals and pieces in black and grey or color.",
        href: "/en/blog/realism-tattoos-in-cali-colombia",
        link: "Realism in Cali guide",
      },
      {
        name: "Sleeves and large pieces",
        text: "Multi-session projects, planned so every trip counts.",
        href: "/en/blog/sleeves-and-large-tattoos-in-cali-colombia",
        link: "Sleeves in Cali guide",
      },
      {
        name: "Small and mini tattoos",
        text: "Fine line, words, symbols and discreet pieces.",
        href: "/en/blog/small-and-minimalist-tattoos-in-cali-colombia",
        link: "Small tattoos guide",
      },
      {
        name: "Piercing",
        text: "Ear, nose, face, mouth and body piercings.",
        href: "/en/piercing",
        link: "Piercing in Cali",
      },
      {
        name: "Tattoo academy",
        text: "In-person, one-on-one training for people who want to learn to tattoo.",
        href: "/en/academy",
        link: "See the academy",
      },
    ],
    worksTitle: "Work done at the studio",
    worksText: "A few pieces by our artists. There are many more in the portfolio.",
    worksLink: "See the full portfolio",
    stepsTitle: "How to make the most of your trip to Cali",
    steps: [
      "Message us on WhatsApp with your idea, the body area, the approximate size and reference photos if you have them.",
      "We advise you and send you a free quote before you have to travel.",
      "We book the appointment at a time that works for you. For a large piece, we plan the sessions from the start.",
      "After the appointment we explain the aftercare and keep in touch on WhatsApp while it heals.",
    ],
    visitTitle: "Address and hours",
    visit: [
      "Calle 7 # 56 - 55, Pampa Linda, south Cali.",
      "Near Mall Plaza and the Plaza de Toros.",
      "Monday to Saturday, 8am to 5pm.",
    ],
    mapsLabel: "Open in Google Maps",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Can I do the consultation without visiting the studio?",
        a: "Yes. The consultation and the quote are free on WhatsApp, so you can sort them out from home and come in only on the day of your appointment.",
      },
      {
        q: "Can I get a tattoo and a piercing on the same trip?",
        a: "Yes, both are done at the same studio. Tell us what you want and we will plan the appointment times.",
      },
      {
        q: "How much does a tattoo cost?",
        a: "It depends on the size, the placement and the level of detail. Message us with your idea for a free quote.",
      },
      {
        q: "Do you speak English?",
        a: "Yes. Pablo, the studio's founder, speaks English, so you can plan your appointment in English on WhatsApp.",
      },
    ],
    linksTitle: "You may also like",
    links: [
      { href: "/en/tattoo-trip", label: "Plan a tattoo trip to Cali" },
      { href: "/en/portfolio", label: "Tattoo portfolio" },
      { href: "/en/contact", label: "Contact" },
    ],
  },
};

const pick = (locale) => (locale === "en" ? copy.en : copy.es);

export async function generateMetadata({ params: { locale } }) {
  const t = pick(locale);
  const lang = locale === "en" ? "en" : "es";
  return {
    title: t.meta.title,
    description: t.meta.description,
    robots: "index, follow",
    alternates: {
      canonical: `${SITE}/${lang}/valle-del-cauca`,
      languages: { en: "/en/valle-del-cauca", es: "/es/valle-del-cauca", "x-default": "/es/valle-del-cauca" },
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "es_CO",
      url: `${SITE}/${lang}/valle-del-cauca`,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: `/${lang}/opengraph-image.jpg`, width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio",
    },
  };
}

export default function ValleDelCaucaPage({ params: { locale } }) {
  const t = pick(locale);
  const lang = locale === "en" ? "en" : "es";
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(t.waText)}`;
  const townsList = TOWNS.slice(0, -1).join(", ") + (lang === "en" ? " or " : " o ") + TOWNS[TOWNS.length - 1];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: t.h1,
        serviceType: lang === "en" ? "Tattoo and body piercing" : "Tatuajes y piercing",
        description: t.meta.description,
        url: `${SITE}/${lang}/valle-del-cauca`,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Valle del Cauca" },
          { "@type": "City", name: "Cali" },
          ...TOWNS.map((name) => ({ "@type": "City", name })),
        ],
        provider: { "@id": `${SITE}/#business` },
        availableLanguage: ["es", "en"],
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#EDEDED] text-TextBlack">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="h-16 bg-black md:h-20" />

      <section className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 pt-12 desktop:px-0 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-3xl font-bold md:text-5xl">{t.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg">{t.intro}</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="valle_whatsapp_top"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
          >
            {t.cta}
          </a>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black md:max-h-[560px]">
          <Image
            src={HERO.src}
            alt={HERO.alt[lang]}
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.townsTitle}</h2>
        <p className="mt-4 max-w-3xl">{t.townsText.replace("{towns}", townsList)}</p>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.servicesTitle}</h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s, i) => {
            const img = SERVICE_IMAGES[i];
            return (
              <li
                key={s.name}
                className={`flex flex-col overflow-hidden rounded-xl ${img ? "bg-white" : "bg-black text-white"}`}
              >
                {img && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt[lang]}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className={`flex flex-1 flex-col p-5 ${img ? "" : "justify-center"}`}>
                  <h3 className={img ? "font-semibold" : "text-2xl font-bold"}>{s.name}</h3>
                  <p className={`mt-1 ${img ? "text-gray-700" : "text-gray-300"}`}>{s.text}</p>
                  <Link href={s.href} className="mt-3 inline-block font-semibold underline underline-offset-4">
                    {s.link}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.worksTitle}</h2>
        <p className="mt-2 text-gray-700">{t.worksText}</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {WORKS.map((w) => (
            <li key={w.src} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
              <Image
                src={w.src}
                alt={w.alt[lang]}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>
        <Link
          href={`/${lang}/portfolio`}
          data-cta="valle_portfolio"
          className="mt-5 inline-block font-semibold underline underline-offset-4"
        >
          {t.worksLink}
        </Link>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.stepsTitle}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {t.steps.map((step, i) => (
            <li key={i} className="flex gap-4 rounded-xl bg-white p-5">
              <span className="text-2xl font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 pt-12 desktop:px-0 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{t.visitTitle}</h2>
          <ul className="mt-4 space-y-1">
            {t.visit.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="valle_maps"
            className="mt-4 inline-block font-semibold underline underline-offset-4"
          >
            {t.mapsLabel}
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black">
          <Image
            src={STUDIO.src}
            alt={STUDIO.alt[lang]}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.faqTitle}</h2>
        <div className="mt-6 divide-y divide-gray-300 border-y border-gray-300">
          {t.faq.map(({ q, a }) => (
            <div key={q} className="py-5">
              <h3 className="text-lg font-semibold">{q}</h3>
              <p className="mt-2 text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-12 desktop:px-0">
        <h2 className="text-xl font-bold">{t.linksTitle}</h2>
        <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-semibold underline underline-offset-4">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="valle_whatsapp_bottom"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {t.cta}
        </a>
      </section>
    </div>
  );
}
