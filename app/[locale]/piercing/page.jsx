import Link from "next/link";

const SITE = "https://www.legassystudio.com";
const WA = "573103110611";

const copy = {
  es: {
    meta: {
      title: "Piercing en Cali, sur de la ciudad | Legassy Studio",
      description:
        "Piercing en Cali: perforaciones de oreja, nariz, ceja, labio, lengua, ombligo y más en Legassy Studio, sur de Cali. Asesoría gratis por WhatsApp.",
    },
    h1: "Piercing en Cali",
    intro:
      "En Legassy Studio, en el sur de Cali, hacemos todo tipo de perforaciones. Te asesoramos en la zona y la joya antes de empezar, y la asesoría es gratis por WhatsApp.",
    cta: "Pedir asesoría de piercing",
    waText: "Hola! Vengo de la página de piercing y quisiera una asesoría.",
    typesTitle: "Perforaciones que hacemos",
    types: [
      { zone: "Oreja", list: "Lóbulo, hélix, tragus, conch, daith, rook, industrial y más." },
      { zone: "Nariz", list: "Aleta (nostril) y septum." },
      { zone: "Rostro", list: "Ceja, labio y bridge." },
      { zone: "Boca", list: "Lengua y labio (medusa, labret)." },
      { zone: "Cuerpo", list: "Ombligo, pezón y otras perforaciones corporales." },
    ],
    typesNote: "¿Buscas una perforación que no está en la lista? Escríbenos y te contamos si es posible.",
    stepsTitle: "Cómo es el proceso",
    steps: [
      "Nos escribes por WhatsApp con la zona que quieres perforar y, si tienes, una foto de referencia.",
      "Te asesoramos sobre la ubicación, la joya y los cuidados, según tu anatomía.",
      "Vienes al estudio en el sur de Cali y hacemos la perforación con normas de bioseguridad.",
      "Te explicamos los cuidados y seguimos pendientes de cómo cicatriza.",
    ],
    careTitle: "Cuidados básicos después de perforarte",
    care: [
      "Lava la zona con suero fisiológico o el producto que te indiquemos, con las manos limpias.",
      "No gires ni cambies la joya hasta que la perforación haya cicatrizado.",
      "Evita piscinas, mar y jacuzzi durante las primeras semanas.",
      "Si notas enrojecimiento que aumenta, dolor fuerte o secreción, escríbenos o consulta a un médico.",
    ],
    careNote: "Los tiempos de cicatrización cambian según la zona: el lóbulo suele sanar más rápido que el cartílago.",
    faqTitle: "Preguntas frecuentes sobre piercing",
    faq: [
      {
        q: "¿Dónde hacerse un piercing en Cali?",
        a: "En Legassy Studio, Calle 7 # 56 - 55, Pampa Linda, en el sur de Cali, cerca de Mall Plaza y de la Plaza de Toros. Atendemos de lunes a sábado, de 8am a 5pm.",
      },
      {
        q: "¿Cuánto cuesta un piercing en Cali?",
        a: "Depende de la zona y de la joya que elijas. Escríbenos por WhatsApp y te damos la cotización sin costo.",
      },
      {
        q: "¿Puedo hacerme un tatuaje y un piercing el mismo día?",
        a: "Sí, en el mismo estudio. Cuéntanos qué quieres hacerte y organizamos los tiempos de la cita.",
      },
      {
        q: "¿Atienden en inglés?",
        a: "Sí. Pablo, el fundador del estudio, habla inglés, así que puedes planear tu cita en inglés por WhatsApp.",
      },
    ],
    linksTitle: "También te puede interesar",
    links: [
      { href: "/es/portfolio", label: "Portafolio de tatuajes" },
      { href: "/es/contact", label: "Cómo llegar al estudio" },
      { href: "/es/blog/tu-primer-tatuaje-en-cali-paso-a-paso", label: "Tu primer tatuaje en Cali" },
    ],
  },
  en: {
    meta: {
      title: "Piercing in Cali, Colombia | Legassy Studio",
      description:
        "Body piercing in south Cali, Colombia: ear, nose, eyebrow, lip, tongue, navel and more at Legassy Studio. English spoken. Free consultation on WhatsApp.",
    },
    h1: "Piercing in Cali, Colombia",
    intro:
      "At Legassy Studio, in south Cali, we do all kinds of piercings. We help you choose the placement and jewelry before we start, and the consultation on WhatsApp is free.",
    cta: "Ask about a piercing",
    waText: "Hi! I'm coming from your piercing page and I'd like a consultation.",
    typesTitle: "Piercings we do",
    types: [
      { zone: "Ear", list: "Lobe, helix, tragus, conch, daith, rook, industrial and more." },
      { zone: "Nose", list: "Nostril and septum." },
      { zone: "Face", list: "Eyebrow, lip and bridge." },
      { zone: "Mouth", list: "Tongue and lip (medusa, labret)." },
      { zone: "Body", list: "Navel, nipple and other body piercings." },
    ],
    typesNote: "Looking for a piercing that is not on the list? Message us and we will tell you if it is possible.",
    stepsTitle: "How it works",
    steps: [
      "Message us on WhatsApp with the area you want pierced and, if you have one, a reference photo.",
      "We advise you on placement, jewelry and aftercare based on your anatomy.",
      "You come to the studio in south Cali and we do the piercing following biosafety standards.",
      "We explain the aftercare and keep in touch while it heals.",
    ],
    careTitle: "Basic piercing aftercare",
    care: [
      "Clean the area with sterile saline or the product we recommend, with clean hands.",
      "Do not twist or change the jewelry until the piercing has healed.",
      "Avoid pools, the ocean and hot tubs during the first weeks.",
      "If redness keeps increasing, the pain is strong or there is discharge, message us or see a doctor.",
    ],
    careNote: "Healing time depends on the area: earlobes usually heal faster than cartilage.",
    faqTitle: "Piercing FAQ",
    faq: [
      {
        q: "Where can I get a piercing in Cali?",
        a: "At Legassy Studio, Calle 7 # 56 - 55, Pampa Linda, south Cali, near Mall Plaza and the Plaza de Toros. We are open Monday to Saturday, 8am to 5pm.",
      },
      {
        q: "How much does a piercing cost in Cali?",
        a: "It depends on the area and the jewelry you choose. Message us on WhatsApp for a free quote.",
      },
      {
        q: "Can I get a tattoo and a piercing on the same day?",
        a: "Yes, at the same studio. Tell us what you want and we will plan the appointment times.",
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
      { href: "/en/contact", label: "How to get to the studio" },
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
      canonical: `${SITE}/${lang}/piercing`,
      languages: { en: "/en/piercing", es: "/es/piercing", "x-default": "/es/piercing" },
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "es_CO",
      url: `${SITE}/${lang}/piercing`,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: `/${lang}/opengraph-image.jpg`, width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio",
    },
  };
}

export default function PiercingPage({ params: { locale } }) {
  const t = pick(locale);
  const lang = locale === "en" ? "en" : "es";
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(t.waText)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: t.h1,
        serviceType: "Body piercing",
        description: t.meta.description,
        url: `${SITE}/${lang}/piercing`,
        areaServed: { "@type": "City", name: "Cali" },
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
          data-cta="piercing_whatsapp_top"
          className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {t.cta}
        </a>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.typesTitle}</h2>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.types.map((item) => (
            <div key={item.zone} className="rounded-xl bg-white p-5">
              <dt className="font-semibold">{item.zone}</dt>
              <dd className="mt-1 text-gray-700">{item.list}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-gray-700">{t.typesNote}</p>
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
        <h2 className="text-2xl font-bold md:text-3xl">{t.careTitle}</h2>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          {t.care.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="mt-4 text-gray-700">{t.careNote}</p>
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
          data-cta="piercing_whatsapp_bottom"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {t.cta}
        </a>
      </section>
    </div>
  );
}
