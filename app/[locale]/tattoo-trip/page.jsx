import Link from "next/link";

const SITE = "https://www.legassystudio.com";
const WA = "573103110611";

const copy = {
  en: {
    meta: {
      title: "Get Tattooed in Cali, Colombia: Plan Your Tattoo Trip",
      description:
        "Planning a tattoo trip to Colombia? Legassy Studio is a private studio in south Cali. English spoken, free consultation on WhatsApp, real reviews from travelers.",
    },
    h1: "Get tattooed in Cali, Colombia",
    intro:
      "Legassy Studio is a private tattoo studio in south Cali. Clients travel from abroad for custom realism, fine line, anime and more. Pablo, our founder, speaks English, so you can plan everything in English on WhatsApp.",
    cta: "Plan my tattoo trip on WhatsApp",
    waText: "Hi! I'm planning a trip to Cali and I'd like a free consultation for a tattoo. My travel dates are: ",
    stepsTitle: "How a tattoo trip to Cali works",
    steps: [
      { t: "Send your idea", p: "Message us on WhatsApp with references, placement, size and your travel dates. The consultation and the quote are free." },
      { t: "Plan it together", p: "We help you choose the right artist for your style and organize your session around the days you'll be in Cali." },
      { t: "Get tattooed in Cali", p: "A private studio in south Cali, near Mall Plaza. Open Monday to Saturday, 8am to 5pm." },
      { t: "Heal and fly home", p: "We explain the aftercare for your trip and Cali's warm, humid climate before you leave." },
    ],
    factsTitle: "Good to know before you travel",
    facts: [
      { k: "Language", v: "English and Spanish. Pablo, our founder, speaks English." },
      { k: "Airport", v: "Alfonso Bonilla Aragón International Airport (CLO) serves Cali." },
      { k: "Time zone", v: "Cali is on GMT-5 all year." },
      { k: "Address", v: "Calle 7 # 56 - 55, Pampa Linda, south Cali, near Mall Plaza and the Plaza de Toros." },
      { k: "Hours", v: "Monday to Saturday, 8am to 5pm." },
      { k: "Also at the studio", v: "Piercing, so you can plan both in the same visit." },
    ],
    reviewsTitle: "What travelers say",
    reviews: [
      { q: "I'm from Canada and I came all the way here to have my tattoo at this place! … I trust this place like family.", by: "Jasmin Brisson, Google review" },
      { q: "Having started out with a virtual appointment to propose my idea for my tattoo, I was able to ask questions and get set up with the right artist for my project.", by: "Javier Gallego, Google review" },
      { q: "Very professional, his artwork is outstanding, keeps all hygiene measures at top priority … surely will travel again back to get another art design.", by: "Felipe Rodriguez, Google review" },
    ],
    guidesTitle: "Guides for planning your trip",
    guides: [
      { href: "/en/blog/first-time-tattoo-tourist-read-this-before-booking", label: "First-time tattoo tourist? Read this before you book" },
      { href: "/en/blog/how-long-should-a-tattoo-trip-be-sessions-vs-sightseeing", label: "How long should a tattoo trip be?" },
      { href: "/en/blog/real-cost-breakdown-tattoo-trip-flights-hotel-ink", label: "The real cost of a tattoo trip" },
      { href: "/en/blog/how-much-does-a-tattoo-cost-in-cali-colombia", label: "Tattoo prices in Cali" },
      { href: "/en/blog/traveler-guide-can-you-fly-immediately-after-getting-a-tattoo", label: "Can you fly after getting a tattoo?" },
      { href: "/en/blog/how-to-care-for-a-new-tattoo-in-cali-climate", label: "Tattoo aftercare in Cali's climate" },
    ],
    faqTitle: "Tattoo trip FAQ",
    faq: [
      { q: "Do you speak English?", a: "Yes. Pablo, the studio's founder, speaks English, so you can plan your tattoo in English on WhatsApp." },
      { q: "How much does a tattoo cost in Cali?", a: "Every piece is quoted individually: size, detail and placement change the price. The consultation and the quote are free." },
      { q: "Can I fly right after getting tattooed?", a: "Usually yes, but large pieces or long flights may need a few days. Read our guide on flying after a tattoo before you book your return flight." },
      { q: "Can I also get a piercing?", a: "Yes. We do all kinds of piercings at the same studio." },
    ],
    more: [
      { href: "/en/portfolio", label: "See the portfolio" },
      { href: "/en/piercing", label: "Piercing in Cali" },
      { href: "/en/contact", label: "Directions and contact" },
    ],
  },
  es: {
    meta: {
      title: "Viaja a Cali a tatuarte: planea tu tatuaje | Legassy",
      description:
        "¿Vienes a Cali desde otra ciudad o país? Legassy Studio es un estudio privado en el sur de Cali. Asesoría gratis por WhatsApp, también en inglés.",
    },
    h1: "Viaja a Cali a tatuarte",
    intro:
      "Legassy Studio es un estudio privado de tatuajes en el sur de Cali. Hay clientes que viajan desde otras ciudades y países por piezas de realismo, línea fina, anime y más. También atendemos en inglés: Pablo, el fundador, habla inglés.",
    cta: "Planear mi tatuaje por WhatsApp",
    waText: "¡Hola! Voy a viajar a Cali y quiero una asesoría gratis para un tatuaje. Mis fechas de viaje son: ",
    stepsTitle: "Cómo es viajar a Cali para tatuarte",
    steps: [
      { t: "Envíanos tu idea", p: "Escríbenos por WhatsApp con tus referencias, la zona, el tamaño y las fechas de tu viaje. La asesoría y la cotización son gratis." },
      { t: "Lo planeamos juntos", p: "Te ayudamos a elegir el artista indicado para tu estilo y organizamos tu sesión según los días que vas a estar en Cali." },
      { t: "Tatúate en Cali", p: "Un estudio privado en el sur de Cali, cerca de Mall Plaza. Abierto de lunes a sábado, de 8am a 5pm." },
      { t: "Cicatriza y vuelve a casa", p: "Antes de que te vayas te explicamos los cuidados para tu viaje y para el clima cálido y húmedo de Cali." },
    ],
    factsTitle: "Lo que debes saber antes de viajar",
    facts: [
      { k: "Idioma", v: "Español e inglés. Pablo, el fundador, habla inglés." },
      { k: "Aeropuerto", v: "Aeropuerto Internacional Alfonso Bonilla Aragón (CLO)." },
      { k: "Dirección", v: "Calle 7 # 56 - 55, Pampa Linda, sur de Cali, cerca de Mall Plaza y de la Plaza de Toros." },
      { k: "Horario", v: "Lunes a sábado, de 8am a 5pm." },
      { k: "También en el estudio", v: "Piercing, para que planees ambos en la misma visita." },
    ],
    reviewsTitle: "Lo que dicen quienes viajaron",
    reviews: [
      { q: "Soy de Canadá y vine hasta aquí para hacerme mi tatuaje en este lugar. … Confío en este lugar como en mi familia.", by: "Jasmin Brisson, reseña de Google (traducida del inglés)" },
      { q: "Viajé a Colombia de vacaciones y había visto en redes sociales muchos de los tatuajes realizados en Legassy, así que no podía perder la oportunidad de tatuarme.", by: "Fernanda Marín, reseña de Google" },
      { q: "Muy profesional, su arte es sobresaliente, mantiene todas las medidas de higiene como máxima prioridad … sin duda volveré a viajar para hacerme otro diseño.", by: "Felipe Rodriguez, reseña de Google (traducida del inglés)" },
    ],
    guidesTitle: "Guías para planear tu viaje",
    guides: [
      { href: "/es/blog/guia-primer-turista-tatuaje-lee-antes-de-reservar", label: "¿Primer viaje para tatuarte? Lee esto antes de reservar" },
      { href: "/es/blog/cuanto-debe-durar-un-viaje-de-tatuajes-sesiones-vs-turismo", label: "¿Cuánto debe durar un viaje de tatuajes?" },
      { href: "/es/blog/cuanto-cuesta-viaje-de-tatuajes-vuelos-hotel-tinta", label: "Cuánto cuesta un viaje de tatuajes" },
      { href: "/es/blog/cuanto-cuesta-un-tatuaje-en-cali", label: "Cuánto cuesta un tatuaje en Cali" },
      { href: "/es/blog/guia-para-viajeros-puedo-volar-en-avion-inmediatamente-despues-de-tatuarme", label: "¿Puedo volar después de tatuarme?" },
      { href: "/es/blog/como-cuidar-un-tatuaje-en-el-clima-de-cali", label: "Cuidar un tatuaje en el clima de Cali" },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Atienden en inglés?", a: "Sí. Pablo, el fundador del estudio, habla inglés." },
      { q: "¿Cuánto cuesta un tatuaje en Cali?", a: "Cada pieza se cotiza por separado: el tamaño, el detalle y la zona cambian el precio. La asesoría y la cotización son gratis." },
      { q: "¿Puedo volar justo después de tatuarme?", a: "Por lo general sí, pero las piezas grandes o los vuelos largos pueden necesitar unos días. Lee nuestra guía antes de comprar tu vuelo de regreso." },
      { q: "¿También hacen piercing?", a: "Sí. Hacemos todo tipo de perforaciones en el mismo estudio." },
    ],
    more: [
      { href: "/es/portfolio", label: "Ver el portafolio" },
      { href: "/es/piercing", label: "Piercing en Cali" },
      { href: "/es/contact", label: "Cómo llegar y contacto" },
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
      canonical: `${SITE}/${lang}/tattoo-trip`,
      languages: { en: "/en/tattoo-trip", es: "/es/tattoo-trip", "x-default": "/en/tattoo-trip" },
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "es_CO",
      url: `${SITE}/${lang}/tattoo-trip`,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: `/${lang}/opengraph-image.jpg`, width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio",
    },
  };
}

export default function TattooTripPage({ params: { locale } }) {
  const t = pick(locale);
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(t.waText)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
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
          data-cta="tattoo_trip_whatsapp_top"
          className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {t.cta}
        </a>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.stepsTitle}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {t.steps.map((step, i) => (
            <li key={step.t} className="rounded-xl bg-white p-5">
              <span className="text-sm font-semibold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-lg font-bold">{step.t}</h3>
              <p className="mt-1 text-gray-700">{step.p}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.factsTitle}</h2>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          {t.facts.map((f) => (
            <div key={f.k}>
              <dt className="font-semibold">{f.k}</dt>
              <dd className="mt-1 text-gray-700">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.reviewsTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.reviews.map((r) => (
            <figure key={r.by} className="rounded-xl bg-white p-5">
              <blockquote className="text-gray-800">“{r.q}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-gray-500">{r.by}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 desktop:px-0">
        <h2 className="text-2xl font-bold md:text-3xl">{t.guidesTitle}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="font-semibold underline underline-offset-4">
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
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
        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {t.more.map((link) => (
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
          data-cta="tattoo_trip_whatsapp_bottom"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
        >
          {t.cta}
        </a>
      </section>
    </div>
  );
}
