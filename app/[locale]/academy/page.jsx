import localFont from "next/font/local";
import Image from "next/image";
import heroImg from "../../../public/img/academy/artista-tatuando-estudio-legassy.jpg";
import mentorshipImg from "../../../public/img/academy/mentoria-1-a-1-academia-tatuaje-cali.jpg";
import designClassImg from "../../../public/img/academy/clase-diseno-procreate-academia.jpg";
import drawingImg from "../../../public/img/academy/alumno-dibujando-academia.jpg";
import syntheticImg from "../../../public/img/academy/estudiante-practica-piel-sintetica.jpg";
import studentFinalImg from "../../../public/img/academy/estudiante-luisa-proyecto-final.jpg";
import workSleeveImg from "../../../public/img/academy/manga-cristo-realismo-legassy.jpg";
import workPortraitImg from "../../../public/img/academy/retrato-ozzy-realismo-legassy.jpg";
import workFineLineImg from "../../../public/img/academy/floral-linea-fina-mano-legassy.jpg";
import { membersDataEs, membersDataEn } from "../../../components/home/OurStudio/data/membersData";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

const SITE = "https://www.legassystudio.com";
const WHATSAPP = "573103110611";

const whatsappUrl = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const metadataEs = {
  title: "Academia de tatuaje en Cali | Legassy Tattoo Academy",
  description:
    "Curso de tatuaje 100% personalizado en Cali: 65 horas, 22 clases en 2 meses, kit profesional Royal y práctica en piel real dentro de un estudio activo.",
  alternates: {
    canonical: `${SITE}/es/academy`,
    languages: { en: "/en/academy", es: "/es/academy", "x-default": "/en/academy" },
  },
  openGraph: {
    url: `${SITE}/es/academy`,
    locale: "es_CO",
    siteName: "Legassy Studio",
    type: "website",
    images: [{ url: "/img/academy/mentoria-1-a-1-academia-tatuaje-cali.jpg", width: 800, height: 452, alt: "Mentoría 1 a 1 en Legassy Tattoo Academy, Cali" }],
  },
};

const metadataEn = {
  title: "Tattoo Academy in Cali, Colombia | Legassy Tattoo Academy",
  description:
    "A 100% personalized tattoo course in Cali: 65 hours, 22 classes over 2 months, a Royal professional kit and real-skin practice inside a working studio.",
  alternates: {
    canonical: `${SITE}/en/academy`,
    languages: { en: "/en/academy", es: "/es/academy", "x-default": "/en/academy" },
  },
  openGraph: {
    url: `${SITE}/en/academy`,
    locale: "en_US",
    siteName: "Legassy Studio",
    type: "website",
    images: [{ url: "/img/academy/mentoria-1-a-1-academia-tatuaje-cali.jpg", width: 800, height: 452, alt: "One-on-one mentoring at Legassy Tattoo Academy, Cali" }],
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadataEn : metadataEs;
}

// Contenido tomado del documento oficial «Legassy Tattoo Academy 2026»
const pageContent = {
  es: {
    sectionTag: "LEGASSY TATTOO ACADEMY · CALI",
    heroTitle: "No formamos aficionados.",
    heroTitleAccent: "Entrenamos a la próxima élite del tatuaje.",
    heroSubtitle:
      "Un curso de tatuaje 100% personalizado, dentro de un estudio activo en el sur de Cali, con artistas que tatúan a diario.",
    heroPrimaryCta: "Quiero información",
    heroSecondaryCta: "Ver plan de estudios",
    whatsappText: "Hola! Vengo de la página de la academia y quisiera información sobre el curso de tatuaje",
    stats: [
      { value: "65", label: "horas de formación" },
      { value: "22", label: "clases" },
      { value: "2", label: "meses" },
      { value: "+15", label: "años de experiencia en el arte" },
    ],
    methodTag: "MÉTODO LEGASSY",
    methodTitle: "Aprendes en un estudio real, no en un salón de clases",
    methodDescription:
      "A diferencia de las academias donde eres un alumno más en un salón de 30 personas, aquí la formación es 1 a 1. Condensamos más de 15 años de experiencia de nuestros artistas residentes en un modelo enfocado en técnica milimétrica y en cómo construir una carrera.",
    methodCards: [
      { id: "01", title: "100% personalizado", text: "Formación 1 a 1: el artista te acompaña y te corrige trazo a trazo.", image: mentorshipImg },
      { id: "02", title: "Dentro de un estudio activo", text: "Te formas en las mismas estaciones donde nuestros artistas atienden a sus clientes.", image: heroImg },
      { id: "03", title: "Kit Profesional Royal", text: "Máquina inalámbrica, cartuchos clínicos e insumos premium incluidos.", image: designClassImg },
      { id: "04", title: "De piel sintética a piel real", text: "Practicas sobre piel sintética y terminas con un proyecto en piel real bajo supervisión.", image: syntheticImg },
      { id: "05", title: "Marca y ventas", text: "Aprendes a posicionar tu marca, defender tus precios y registrar tu trabajo en foto y video.", image: drawingImg },
    ],
    planTag: "PLAN DE ESTUDIOS",
    planTitle: "4 módulos, de la hoja en blanco a tu primer cliente",
    modules: [
      {
        title: "Dibujo, diseño digital y estándar clínico",
        text: "Dibujo, visión espacial y diseño digital en Procreate. Composición anatómica para gran formato y protocolos internacionales de bioseguridad.",
      },
      {
        title: "Física del trazo y dominio sintético",
        text: "Técnica milímetro a milímetro: cómo penetra la aguja en la piel para lograr líneas sólidas, empaque de color sin dañar el tejido y transiciones en greywash, todo antes de tocar a un cliente.",
      },
      {
        title: "Ejecución clínica en piel real",
        text: "La prueba definitiva bajo supervisión: proyectos completos controlando el estiramiento, la saturación y la inflamación para lograr resultados sólidos y una buena cicatrización.",
      },
      {
        title: "Mentalidad empresarial y ventas",
        text: "La estructura para posicionar tu marca, defender tus precios, cerrar clientes por chat y registrar tus proyectos en foto y video. Entras como aprendiz y sales preparado para el mercado.",
      },
    ],
    planFooter: "65 horas de formación · 22 clases · 2 meses",
    authorityTag: "¿QUÉ NOS HACE DIFERENTES?",
    authorityTitle: "La autoridad de un estudio que tatúa todos los días",
    authorityText:
      "No enseñamos desde la teoría de un salón de clases, sino desde la ejecución diaria de un estudio. Te formamos en las mismas estaciones donde nuestros artistas residentes e invitados atienden a sus clientes, con el método que usan hoy.",
    royalBadge: "Único estudio en Colombia patrocinado por Royal Three Elements",
    teachersTag: "DOCENTES",
    teachersTitle: "Aprende con el equipo de Legassy",
    teachersDescription: "Los mismos artistas que puedes ver en nuestro portafolio te acompañan durante el curso.",
    includesTag: "QUÉ INCLUYE",
    includesTitle: "Tu carrera profesional no es un gasto, es una inversión",
    includes: [
      "Kit Profesional Royal: máquina inalámbrica, cartuchos clínicos e insumos premium",
      "Todo el material de práctica en piel sintética",
      "Práctica final en piel real bajo supervisión",
      "65 horas de formación 1 a 1 en 22 clases",
    ],
    pricingNote: "Tenemos beneficios con descuentos y diferentes métodos de pago. Escríbenos y te contamos el valor y las opciones disponibles.",
    pricingCta: "Consultar valor y beneficios",
    worksTitle: "El nivel que vas a aprender",
    worksImages: [
      { image: workSleeveImg, alt: "Manga en realismo black and grey hecha en Legassy Studio" },
      { image: workPortraitImg, alt: "Retrato en realismo hecho en Legassy Studio" },
      { image: workFineLineImg, alt: "Tatuaje floral en línea fina en la mano, Legassy Studio" },
    ],
    testimonialsTag: "ESTUDIANTES",
    testimonialsTitle: "Lo que dicen nuestros alumnos",
    videosTitle: "Escúchalo de nuestros estudiantes",
    videosDescription: "Alumnos de la academia cuentan cómo vivieron el curso.",
    videoLabel: "Testimonio en vídeo",
    studentFallback: "Estudiante de la academia",
    testimonials: [
      {
        quote:
          "Lo que más me impactó de Legassy no fue solo la técnica que enseñan, sino el entorno. No estás en un salón de clases genérico, vas a aprender en un estudio de tatuajes real. Terminas tu proyecto en piel real con una seguridad increíble porque tienes docentes experimentados al lado tuyo corrigiéndote cada trazo.",
        author: "Luisa",
        image: studentFinalImg,
        alt: "Luisa, estudiante de Legassy Tattoo Academy, con su proyecto final",
      },
    ],
    faqTag: "PREGUNTAS FRECUENTES",
    faqTitle: "Resolvemos tus dudas sobre el curso",
    faqs: [
      { q: "¿Necesito experiencia previa?", a: "No. Todos los grandes artistas empezaron desde cero: el curso arranca con dibujo y diseño, y avanza hasta tu primer proyecto en piel real." },
      { q: "¿Es presencial u online?", a: "Es presencial y 100% personalizado, en nuestro estudio del sur de Cali. La formación es 1 a 1 con nuestros artistas." },
      { q: "¿Cuánto dura el curso?", a: "65 horas de formación repartidas en 22 clases durante 2 meses." },
      { q: "¿Qué incluye?", a: "El Kit Profesional Royal (máquina inalámbrica, cartuchos clínicos e insumos premium), todo el material de práctica en piel sintética y la práctica final en piel real." },
      { q: "¿Cuánto cuesta y qué formas de pago hay?", a: "Tenemos beneficios con descuentos y diferentes métodos de pago. Escríbenos por WhatsApp y te contamos el valor y las opciones disponibles." },
      { q: "¿Dónde queda la academia?", a: "En Legassy Studio, en el sur de Cali: Calle 7 # 56-55, cerca de Mall Plaza y de la Plaza de Toros de Cañaveralejo." },
    ],
    finalCtaTitle: "Todos los grandes artistas empezaron desde cero.",
    finalCtaText: "Déjanos guiar tu primer trazo.",
    finalCtaButton: "Quiero información",
  },
  en: {
    sectionTag: "LEGASSY TATTOO ACADEMY · CALI",
    heroTitle: "We don’t train hobbyists.",
    heroTitleAccent: "We train the next elite of tattooing.",
    heroSubtitle:
      "A 100% personalized tattoo course inside a working studio in south Cali, Colombia, with artists who tattoo every day.",
    heroPrimaryCta: "Get information",
    heroSecondaryCta: "See the curriculum",
    whatsappText: "Hi! I'm coming from the academy page and would like information about the tattoo course",
    stats: [
      { value: "65", label: "hours of training" },
      { value: "22", label: "classes" },
      { value: "2", label: "months" },
      { value: "15+", label: "years of experience in the craft" },
    ],
    methodTag: "THE LEGASSY METHOD",
    methodTitle: "You learn in a real studio, not a classroom",
    methodDescription:
      "Unlike academies where you are one of 30 students in a room, here training is one-on-one. We condense more than 15 years of our resident artists’ experience into a model focused on precise technique and on building a career.",
    methodCards: [
      { id: "01", title: "100% personalized", text: "One-on-one training: the artist guides and corrects you line by line.", image: mentorshipImg },
      { id: "02", title: "Inside a working studio", text: "You train at the same stations where our artists tattoo their clients.", image: heroImg },
      { id: "03", title: "Royal Professional Kit", text: "Wireless machine, clinical cartridges and premium supplies included.", image: designClassImg },
      { id: "04", title: "From synthetic to real skin", text: "You practice on synthetic skin and finish with a real-skin project under supervision.", image: syntheticImg },
      { id: "05", title: "Brand and sales", text: "You learn to position your brand, defend your prices and document your work in photo and video.", image: drawingImg },
    ],
    planTag: "CURRICULUM",
    planTitle: "4 modules, from a blank page to your first client",
    modules: [
      {
        title: "Drawing, digital design and clinical standards",
        text: "Drawing, spatial vision and digital design in Procreate. Anatomical composition for large pieces and international biosafety protocols.",
      },
      {
        title: "Line physics and synthetic mastery",
        text: "Technique millimeter by millimeter: how the needle enters the skin to get solid lines, color packing without damaging tissue and smooth greywash transitions, all before touching a client.",
      },
      {
        title: "Clinical execution on real skin",
        text: "The ultimate test under supervision: complete projects controlling stretching, saturation and inflammation for solid results and good healing.",
      },
      {
        title: "Business mindset and sales",
        text: "The structure to position your brand, defend your prices, close clients over chat and document your projects in photo and video. You come in as an apprentice and leave ready for the market.",
      },
    ],
    planFooter: "65 hours of training · 22 classes · 2 months",
    authorityTag: "WHAT MAKES US DIFFERENT?",
    authorityTitle: "The authority of a studio that tattoos every day",
    authorityText:
      "We don’t teach from classroom theory but from a studio’s daily work. You train at the same stations where our resident and guest artists see their clients, with the method they use today.",
    royalBadge: "The only studio in Colombia sponsored by Royal Three Elements",
    teachersTag: "INSTRUCTORS",
    teachersTitle: "Learn with the Legassy team",
    teachersDescription: "The same artists you can see in our portfolio guide you throughout the course.",
    includesTag: "WHAT’S INCLUDED",
    includesTitle: "Your career is not an expense, it’s an investment",
    includes: [
      "Royal Professional Kit: wireless machine, clinical cartridges and premium supplies",
      "All synthetic-skin practice materials",
      "Final real-skin practice under supervision",
      "65 hours of one-on-one training in 22 classes",
    ],
    pricingNote: "We offer discount benefits and different payment methods. Message us and we will share the price and available options.",
    pricingCta: "Ask about price and benefits",
    worksTitle: "The level you will learn",
    worksImages: [
      { image: workSleeveImg, alt: "Black and grey realism sleeve done at Legassy Studio" },
      { image: workPortraitImg, alt: "Realism portrait done at Legassy Studio" },
      { image: workFineLineImg, alt: "Fine-line floral hand tattoo, Legassy Studio" },
    ],
    testimonialsTag: "STUDENTS",
    testimonialsTitle: "What our students say",
    videosTitle: "Hear it from our students",
    videosDescription: "Academy students share how they experienced the course.",
    videoLabel: "Video testimonial",
    studentFallback: "Academy student",
    testimonials: [
      {
        quote:
          "What impressed me most about Legassy wasn’t only the technique they teach, but the environment. You’re not in a generic classroom, you learn in a real tattoo studio. You finish your project on real skin with incredible confidence because experienced teachers are right next to you correcting every line.",
        author: "Luisa",
        image: studentFinalImg,
        alt: "Luisa, a Legassy Tattoo Academy student, holding her final project",
      },
    ],
    faqTag: "FAQ",
    faqTitle: "Your questions about the course",
    faqs: [
      { q: "Do I need previous experience?", a: "No. Every great artist started from zero: the course begins with drawing and design and builds up to your first real-skin project." },
      { q: "Is it in person or online?", a: "It is in person and 100% personalized, at our studio in south Cali. Training is one-on-one with our artists." },
      { q: "How long is the course?", a: "65 hours of training across 22 classes over 2 months." },
      { q: "What is included?", a: "The Royal Professional Kit (wireless machine, clinical cartridges and premium supplies), all synthetic-skin practice materials and the final real-skin practice." },
      { q: "How much does it cost and how can I pay?", a: "We offer discount benefits and different payment methods. Message us on WhatsApp and we will share the price and available options." },
      { q: "Where is the academy?", a: "At Legassy Studio in south Cali: Calle 7 # 56-55, near Mall Plaza and the Cañaveralejo Bullring." },
    ],
    finalCtaTitle: "Every great artist started from zero.",
    finalCtaText: "Let us guide your first line.",
    finalCtaButton: "Get information",
  },
};

// Vídeos de testimonios (H.264 540x960, ~1.1 Mbps). Sin nombre confirmado → «Estudiante de la academia».
const videoTestimonials = [
  { src: "/video/academy/testimonio-luisa.mp4", poster: "/img/academy/testimonios/testimonio-luisa.jpg", name: "Luisa" },
  { src: "/video/academy/testimonio-estudiante-2.mp4", poster: "/img/academy/testimonios/testimonio-estudiante-2.jpg", name: "Miguel Ángel" },
  { src: "/video/academy/testimonio-estudiante-4.mp4", poster: "/img/academy/testimonios/testimonio-estudiante-4.jpg", name: "" },
  { src: "/video/academy/testimonio-estudiante-5.mp4", poster: "/img/academy/testimonios/testimonio-estudiante-5.jpg", name: "" },
  { src: "/video/academy/testimonio-estudiante-final.mp4", poster: "/img/academy/testimonios/testimonio-estudiante-final.jpg", name: "" },
];

function buildCourseSchema(locale, content) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Legassy Tattoo Academy",
        description: locale === "en" ? metadataEn.description : metadataEs.description,
        inLanguage: locale === "en" ? "en" : "es",
        url: `${SITE}/${locale}/academy`,
        provider: { "@type": "Organization", "@id": `${SITE}/#business`, name: "Legassy Studio", sameAs: SITE },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Onsite",
          courseWorkload: "PT65H",
          location: {
            "@type": "Place",
            name: "Legassy Studio",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle 7 # 56-55",
              addressLocality: "Cali",
              addressRegion: "Valle del Cauca",
              addressCountry: "CO",
            },
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

const sectionTagClass = "text-xs tracking-[0.3em] text-[#D8CDBC] md:text-sm";

export default function AcademyPage({ params: { locale } }) {
  const content = locale === "en" ? pageContent.en : pageContent.es;
  const teachers = locale === "en" ? membersDataEn : membersDataEs;
  const ctaUrl = whatsappUrl(content.whatsappText);

  return (
    <div className="bg-[#0B0B0B] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCourseSchema(locale, content)).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
        <Image src={heroImg} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0B0B0B]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.sectionTag}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {content.heroTitle}{" "}
            <span className="text-[#D8CDBC]">{content.heroTitleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">{content.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="academy_hero_whatsapp"
              className="rounded-full bg-[#D8CDBC] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c7b8a3]"
            >
              {content.heroPrimaryCta}
            </a>
            <a
              href="#plan"
              className="rounded-full border border-[#D8CDBC] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#D8CDBC] transition hover:bg-[#D8CDBC] hover:text-black"
            >
              {content.heroSecondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* Cifras del programa */}
      <section className="border-y border-white/10 bg-[#121212] px-6 py-10 md:px-12">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className={`text-5xl leading-[1.15] text-[#D8CDBC] md:text-6xl ${eagleFont.className}`}>{stat.value}</dd>
              <dd className="mt-3 text-sm uppercase tracking-wide text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.testimonialsTag}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{content.testimonialsTitle}</h2>
          <div className="mt-10 grid gap-6">
            {content.testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="grid items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] md:grid-cols-[280px_1fr]"
              >
                <div className="relative aspect-[3/4] md:h-full">
                  <Image src={testimonial.image} alt={testimonial.alt} fill sizes="(max-width: 768px) 100vw, 280px" className="object-cover" />
                </div>
                <div className="p-6 md:p-10">
                  <blockquote className="text-lg text-gray-200 md:text-xl">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-4 font-semibold text-[#D8CDBC]">— {testimonial.author}</figcaption>
                </div>
              </figure>
            ))}
          </div>

          <h3 className="mt-14 text-2xl font-semibold md:text-3xl">{content.videosTitle}</h3>
          <p className="mt-2 text-gray-400">{content.videosDescription}</p>
          {/* Fila deslizable en móvil, cuadrícula en escritorio. Cada vídeo solo se descarga al darle play. */}
          <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
            {videoTestimonials.map((video) => (
              <li key={video.src} className="w-[62vw] max-w-[260px] shrink-0 snap-start md:w-auto md:max-w-none">
                <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
                  <video
                    className="aspect-[9/16] w-full bg-black object-cover"
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="none"
                    aria-label={`${content.videoLabel}: ${video.name || content.studentFallback}`}
                    data-cta="academy_video_testimonial"
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold text-[#D8CDBC]">
                    {video.name || content.studentFallback}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Método */}
      <section className="bg-[#121212] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.methodTag}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">{content.methodTitle}</h2>
          <p className="mt-4 max-w-3xl text-base text-gray-300 md:text-lg">{content.methodDescription}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.methodCards.map((card) => (
              <article
                key={card.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition hover:border-[#D8CDBC]/50"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                </div>
                <div className="px-5 pb-6">
                  <p className={`text-4xl text-[#D8CDBC] ${eagleFont.className}`}>/{card.id}</p>
                  <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-gray-300">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plan de estudios */}
      <section id="plan" className="scroll-mt-24 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.planTag}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">{content.planTitle}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {content.modules.map((module, index) => (
              <li key={module.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="text-sm tracking-[0.2em] text-[#D8CDBC]">
                  {locale === "en" ? "MODULE" : "MÓDULO"} {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{module.title}</h3>
                <p className="mt-3 text-gray-300">{module.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm uppercase tracking-[0.2em] text-gray-400">{content.planFooter}</p>
        </div>
      </section>

      {/* Diferencial */}
      <section className="bg-[#121212] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src={mentorshipImg}
              alt={locale === "en" ? "One-on-one mentoring at the academy" : "Mentoría 1 a 1 en la academia"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className={sectionTagClass}>{content.authorityTag}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{content.authorityTitle}</h2>
            <p className="mt-4 text-gray-300 md:text-lg">{content.authorityText}</p>
            <p className="mt-6 inline-block rounded-full border border-[#D8CDBC]/60 px-4 py-2 text-sm font-semibold text-[#D8CDBC]">
              {content.royalBadge}
            </p>
          </div>
        </div>
      </section>

      {/* Docentes */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.teachersTag}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{content.teachersTitle}</h2>
          <p className="mt-4 max-w-2xl text-gray-300">{content.teachersDescription}</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <li key={teacher.name} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div className="relative aspect-[3/4] bg-[#1a1a1a]">
                  <Image
                    src={teacher.img}
                    alt={teacher.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain object-bottom"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{teacher.name}</p>
                  <p className="text-sm text-gray-400">{teacher.art || teacher.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-[#121212] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className={sectionTagClass}>{content.includesTag}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">{content.includesTitle}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <ul className="space-y-4">
                {content.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-200 md:text-lg">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D8CDBC]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-400">{content.pricingNote}</p>
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="academy_pricing_whatsapp"
                className="mt-6 inline-block rounded-full bg-[#D8CDBC] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c7b8a3]"
              >
                {content.pricingCta}
              </a>
            </div>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-400">{content.worksTitle}</p>
              <div className="grid grid-cols-3 gap-3">
                {content.worksImages.map((item) => (
                  <div key={item.alt} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 33vw, 200px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className={sectionTagClass}>{content.faqTag}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{content.faqTitle}</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {content.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {faq.q}
                  <span aria-hidden="true" className="text-2xl text-[#D8CDBC] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#121212] px-6 py-24 text-center md:px-12">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">{content.finalCtaTitle}</h2>
        <p className={`mt-4 text-4xl text-[#D8CDBC] md:text-5xl ${eagleFont.className}`}>{content.finalCtaText}</p>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="academy_final_whatsapp"
          className="mt-10 inline-block rounded-full bg-[#D8CDBC] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c7b8a3]"
        >
          {content.finalCtaButton}
        </a>
      </section>
    </div>
  );
}
