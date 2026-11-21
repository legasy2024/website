import Link from "next/link";

const SITE = "https://www.legassystudio.com";
const WA = "573103110611";
const MAPS = "https://maps.app.goo.gl/p3jzZbkTe7SJs1By5";
const TOWNS = ["Jamundí", "Palmira", "Yumbo", "Candelaria", "Florida"];

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

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
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
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.townsTitle}</h2>
        <p className="mt-4 max-w-3xl">{t.townsText.replace("{towns}", townsList)}</p>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.servicesTitle}</h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s) => (
            <li key={s.name} className="rounded-xl bg-white p-5">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-1 text-gray-700">{s.text}</p>
              <Link href={s.href} className="mt-3 inline-block font-semibold underline underline-offset-4">
                {s.link}
              </Link>
            </li>
          ))}
        </ul>
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

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
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
