import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import heroBgImage from "../../../public/img/portfolio-blog/realismo-3.jpg";
import methodImg1 from "../../../public/img/portfolio-blog/anime-1.jpg";
import methodImg2 from "../../../public/img/portfolio-blog/realismo-2.jpg";
import methodImg3 from "../../../public/img/portfolio-blog/surrealismo-1.jpg";
import methodImg4 from "../../../public/img/portfolio-blog/surrealismo-2.jpg";
import methodImg5 from "../../../public/img/portfolio-blog/realismo-3.jpg";
import methodImg6 from "../../../public/img/portfolio-blog/galleries/gallery-tatuajes-antebrazo/03.jpg";
import specializationAnimeImg from "../../../public/img/portfolio-blog/anime-1.jpg";
import specializationBlackworkImg from "../../../public/img/portfolio-blog/galleries/gallery-tatuajes-mano/05.jpg";
import specializationRealismImg from "../../../public/img/portfolio-blog/realismo-2.jpg";
import { membersDataEs, membersDataEn } from "../../../components/home/OurStudio/data/membersData";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

const methodCardVisuals = {
  "01": {
    image: methodImg1,
    chipEs: "Ruta flexible",
    chipEn: "Flexible path",
    widget: "100% online",
  },
  "02": {
    image: methodImg2,
    chipEs: "Setup pro",
    chipEn: "Pro setup",
    widget: "Kit sugerido",
  },
  "03": {
    image: methodImg3,
    chipEs: "Enfoque práctico",
    chipEn: "Practical focus",
    widget: "60+ prácticas",
  },
  "04": {
    image: methodImg4,
    chipEs: "Acompañamiento",
    chipEn: "Mentorship",
    widget: "Feedback 1:1",
  },
  "05": {
    image: methodImg5,
    chipEs: "Especialización",
    chipEn: "Specialization",
    widget: "Tracks PRO",
  },
  "06": {
    image: methodImg6,
    chipEs: "Salida profesional",
    chipEn: "Career launch",
    widget: "Portafolio final",
  },
};

const metadataEs = {
  title: "Academy - Legassy Studio",
  description:
    "Formación intensiva en tatuaje con enfoque práctico, mentoría personalizada y rutas de especialización en Legassy Academy.",
  alternates: {
    canonical: "https://www.legassystudio.com/es/academy",
    languages: {
      en: "/en/academy",
      es: "/es/academy",
      "x-default": "/es/academy",
    },
  },
};

const metadataEn = {
  title: "Academy - Legassy Studio",
  description:
    "Intensive tattoo training with practical focus, personalized mentorship, and specialization tracks at Legassy Academy.",
  alternates: {
    canonical: "https://www.legassystudio.com/en/academy",
    languages: {
      en: "/en/academy",
      es: "/es/academy",
      "x-default": "/es/academy",
    },
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadataEn : metadataEs;
}

const pageContent = {
  es: {
    sectionTag: "LEGASSY ACADEMY",
    heroTitle: "Vive de tu talento",
    heroSubtitle:
      "Conviértete en tatuador profesional con un programa intensivo diseñado para llevarte de cero a resultados reales.",
    heroPrimaryCta: "Aplica ahora",
    heroSecondaryCta: "Hablar con un mentor",
    methodTitle: "Aprende con un método pensado para el mundo real",
    methodDescription:
      "Combinamos teoría clara, práctica intensiva y mentoría personalizada para que avances con estructura y resultados medibles desde el inicio.",
    methodCards: [
      {
        id: "01",
        title: "Online y a tu ritmo",
        text: "Contenido estructurado para avanzar paso a paso desde cualquier ciudad.",
      },
      {
        id: "02",
        title: "Kit de práctica",
        text: "Material recomendado para entrenar técnica, precisión e higiene profesional.",
      },
      {
        id: "03",
        title: "Práctica guiada",
        text: "Más de 60 ejercicios diseñados para construir criterio, trazo y seguridad.",
      },
      {
        id: "04",
        title: "Mentoría 1 a 1",
        text: "Feedback directo de artistas activos para corregir y acelerar tu progreso.",
      },
      {
        id: "05",
        title: "Especialización por estilos",
        text: "Rutas de enfoque para llevar tu talento hacia el estilo que más te represente.",
      },
      {
        id: "06",
        title: "Portafolio y proyección",
        text: "Construye piezas finales y una presentación sólida para mostrar tu trabajo de forma profesional.",
      },
    ],
    stageOne: "PRIMERA ETAPA",
    stageOneTitle: "Fundamentos del tatuaje",
    stageOneProgram: "Bootcamp Legassy Iniciación",
    stageOneDescription:
      "Base técnica, higiene, diseño y criterio artístico para preparar tu evolución hacia una especialización profesional.",
    stageTwo: "SEGUNDA ETAPA",
    stageTwoTitle: "3 especializaciones profesionales",
    stageTwoDescription:
      "Elige una ruta avanzada para profundizar en técnica, propuesta visual y ejecución de piezas de alto nivel.",
    stageTwoPrograms: [
      {
        name: "Bootcamp PRO Anime",
        focus: "Línea dinámica, composición narrativa y color vibrante.",
        badge: "ALTA DEMANDA",
        duration: "12 semanas",
        level: "Nivel PRO",
      },
      {
        name: "Bootcamp PRO Blackwork",
        focus: "Contraste sólido, texturas y lectura visual contundente.",
        badge: "PRECISIÓN TÉCNICA",
        duration: "12 semanas",
        level: "Nivel PRO",
      },
      {
        name: "Bootcamp PRO Realismo",
        focus: "Volumen, profundidad y detalle para piezas hiperrealistas.",
        badge: "MAESTRÍA DE SOMBRA",
        duration: "14 semanas",
        level: "Nivel PRO+",
      },
    ],
    teachersTitle: "Aprende con artistas referentes de la industria",
    teachersDescription:
      "Nuestro equipo combina experiencia técnica, dirección artística y acompañamiento académico para acelerar tu curva de aprendizaje.",
    teachers: [
      {
        name: "Alejandro Navia",
        role: "Tatuador",
        style: "Realismo",
        badge: "Mentor senior",
      },
      {
        name: "Miguel Raigoza",
        role: "Tatuador",
        style: "Realismo",
        badge: "Clínica de detalle",
      },
      {
        name: "Nathalia Perez",
        role: "Tatuadora",
        style: "Puntillismo",
        badge: "Dirección de trazo",
      },
      {
        name: "Ángel",
        role: "Tatuador",
        style: "Realismo sombra",
        badge: "Sombra avanzada",
      },
      {
        name: "Jeff",
        role: "Tatuador",
        style: "Black and Gray",
        badge: "Composición pro",
      },
      {
        name: "Artista Residente",
        role: "Tatuador",
        style: "Experimental",
        badge: "Laboratorio creativo",
      },
    ],
    statsTitle: "Los resultados hablan",
    stats: [
      { value: "+5.000", label: "Alumnos formados en programas intensivos" },
      { value: "9.2/10", label: "Satisfacción promedio en la experiencia" },
      { value: "+15", label: "Países con estudiantes activos de la academia" },
    ],
    testimonialsTitle: "Lo que dicen nuestros alumnos",
    testimonialsDescription:
      "Historias reales de alumnos que transformaron su proceso creativo con acompañamiento, práctica y método.",
    testimonials: [
      {
        quote:
          "Entré sin experiencia y en pocos meses ya estaba construyendo un portafolio sólido. Lo que más me ayudó fue la combinación entre práctica guiada y mentoría constante: cada corrección era puntual, clara y aplicable en la siguiente sesión. Hoy tengo más seguridad técnica, mejor criterio para diseñar piezas y una ruta real para crecer como tatuadora.",
        author: "Laura M.",
      },
      {
        quote:
          "La mentoría fue clave: corregí errores técnicos que no había notado por mi cuenta.",
        author: "Andrés C.",
      },
      {
        quote:
          "El enfoque práctico me dio confianza para empezar a tatuar con criterio profesional.",
        author: "Valentina R.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Necesito experiencia previa?",
        a: "No. El programa inicia desde fundamentos y escala progresivamente a práctica aplicada.",
      },
      {
        q: "¿Hay acompañamiento real?",
        a: "Sí. Cada alumno recibe seguimiento y revisión de prácticas con recomendaciones accionables.",
      },
      {
        q: "¿Qué incluye la certificación?",
        a: "Al completar y aprobar las prácticas, obtienes diploma de finalización y guía de próximos pasos profesionales.",
      },
      {
        q: "¿Puedo especializarme en un estilo?",
        a: "Sí. Tras la etapa base puedes tomar una ruta PRO enfocada en tu estilo principal.",
      },
    ],
    finalCtaTitle: "Dale a tu carrera el siguiente nivel",
    finalCtaText:
      "Agenda una llamada con el equipo académico y recibe una ruta recomendada según tu perfil.",
    finalCtaButton: "Quiero información",
  },
  en: {
    sectionTag: "LEGASSY ACADEMY",
    heroTitle: "Turn your talent into a career",
    heroSubtitle:
      "Become a professional tattoo artist with an intensive program built to take you from zero to real outcomes.",
    heroPrimaryCta: "Apply now",
    heroSecondaryCta: "Talk to a mentor",
    methodTitle: "Learn with a real-world training method",
    methodDescription:
      "We combine clear theory, intensive practice, and personalized mentorship so you progress with structure and measurable outcomes from day one.",
    methodCards: [
      {
        id: "01",
        title: "Online at your pace",
        text: "Structured content so you can progress step by step from anywhere.",
      },
      {
        id: "02",
        title: "Practice kit",
        text: "Recommended materials to train technique, precision, and hygiene.",
      },
      {
        id: "03",
        title: "Guided practice",
        text: "60+ exercises designed to build consistency, linework, and confidence.",
      },
      {
        id: "04",
        title: "1-on-1 mentorship",
        text: "Direct feedback from active artists to improve faster and avoid bad habits.",
      },
      {
        id: "05",
        title: "Style specialization",
        text: "Focused tracks to develop your voice in the style that fits you best.",
      },
      {
        id: "06",
        title: "Portfolio and positioning",
        text: "Build final pieces and a solid showcase to present your work with a professional standard.",
      },
    ],
    stageOne: "STAGE ONE",
    stageOneTitle: "Tattoo fundamentals",
    stageOneProgram: "Legassy Fundamentals Bootcamp",
    stageOneDescription:
      "Technical base, hygiene, design, and artistic criteria to prepare your transition into a professional specialization path.",
    stageTwo: "STAGE TWO",
    stageTwoTitle: "3 professional specializations",
    stageTwoDescription:
      "Choose an advanced track to deepen your technical execution, visual direction, and high-level tattoo outcomes.",
    stageTwoPrograms: [
      {
        name: "PRO Anime Bootcamp",
        focus: "Dynamic linework, narrative composition, and vibrant color.",
        badge: "HIGH DEMAND",
        duration: "12 weeks",
        level: "PRO level",
      },
      {
        name: "PRO Blackwork Bootcamp",
        focus: "Solid contrast, textures, and bold visual readability.",
        badge: "TECHNICAL PRECISION",
        duration: "12 weeks",
        level: "PRO level",
      },
      {
        name: "PRO Realism Bootcamp",
        focus: "Volume, depth, and detail for hyper-realistic pieces.",
        badge: "SHADING MASTERY",
        duration: "14 weeks",
        level: "PRO+ level",
      },
    ],
    teachersTitle: "Train with industry-leading artists",
    teachersDescription:
      "Our team combines technical expertise, artistic direction, and academic support to accelerate your learning curve.",
    teachers: [
      {
        name: "Alejandro Navia",
        role: "Tattoo Artist",
        style: "Realism",
        badge: "Senior mentor",
      },
      {
        name: "Miguel Raigoza",
        role: "Tattoo Artist",
        style: "Realism",
        badge: "Detail clinic",
      },
      {
        name: "Nathalia Perez",
        role: "Tattoo Artist",
        style: "Pointillism",
        badge: "Line direction",
      },
      {
        name: "Angel",
        role: "Tattoo Artist",
        style: "Shadow realism",
        badge: "Advanced shading",
      },
      {
        name: "Jeff",
        role: "Tattoo Artist",
        style: "Black and Gray",
        badge: "Pro composition",
      },
      {
        name: "Resident Artist",
        role: "Tattoo Artist",
        style: "Experimental",
        badge: "Creative lab",
      },
    ],
    statsTitle: "The numbers speak",
    stats: [
      { value: "+5,000", label: "Students trained in intensive programs" },
      { value: "9.2/10", label: "Average student satisfaction score" },
      { value: "+15", label: "Countries with active academy students" },
    ],
    testimonialsTitle: "What our students say",
    testimonialsDescription:
      "Real stories from students who transformed their creative process through mentorship, practice, and structure.",
    testimonials: [
      {
        quote:
          "I started with zero experience and within a few months I was already building a portfolio I felt truly proud of. What made the biggest difference was the mix of guided practice and constant mentorship: every correction was precise, clear, and immediately applicable in the next session. Now I have stronger technical confidence, better design judgment, and a real path to grow as a tattoo artist.",
        author: "Laura M.",
      },
      {
        quote:
          "Mentorship made the difference: I fixed technical mistakes I could not see on my own.",
        author: "Andres C.",
      },
      {
        quote:
          "The practical approach gave me confidence to start tattooing with professional criteria.",
        author: "Valentina R.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do I need previous experience?",
        a: "No. The program starts with fundamentals and scales progressively into practical work.",
      },
      {
        q: "Will I get real support?",
        a: "Yes. Every student gets ongoing follow-up and detailed practice reviews.",
      },
      {
        q: "What does the certification include?",
        a: "After completing and passing all practices, you receive a completion diploma and next-step guidance.",
      },
      {
        q: "Can I specialize in a specific style?",
        a: "Yes. After the foundational stage, you can enroll in a PRO track aligned with your preferred style.",
      },
    ],
    finalCtaTitle: "Take your career to the next level",
    finalCtaText:
      "Book a call with the academic team and get a training path tailored to your profile.",
    finalCtaButton: "I want more info",
  },
};

export default function AcademyPage({ params: { locale } }) {
  const content = locale === "en" ? pageContent.en : pageContent.es;
  const specializationImages = [
    specializationAnimeImg,
    specializationBlackworkImg,
    specializationRealismImg,
  ];
  const sourceMembers = locale === "en" ? membersDataEn : membersDataEs;
  const academyTeachers = content.teachers.map((teacher) => {
    const matchingMember = sourceMembers.find((member) =>
      member.name.toLowerCase().includes(teacher.name.toLowerCase().split(" ")[0])
    );
    return {
      ...teacher,
      img: matchingMember?.img ?? sourceMembers[0]?.img,
      alt: matchingMember?.alt ?? teacher.name,
    };
  });

  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#1A1A1A] to-[#262016] px-6 py-24 md:px-12">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-black/65" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 text-sm tracking-[0.25em] text-[#D8CDBC]">{content.sectionTag}</p>
          <h1 className="max-w-3xl text-4xl font-semibold md:text-6xl">{content.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">{content.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="rounded-full bg-[#D8CDBC] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c7b8a3]"
            >
              {content.heroPrimaryCta}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-[#D8CDBC] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#D8CDBC] transition hover:bg-[#D8CDBC] hover:text-black"
            >
              {content.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121212] px-6 py-20 md:px-12">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#D8CDBC]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D8CDBC]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.methodTitle}</h2>
          <p className="mt-4 max-w-3xl text-base text-gray-300 md:text-lg">{content.methodDescription}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.methodCards.map((card) => {
              const visuals = methodCardVisuals[card.id];
              const chip = locale === "en" ? visuals.chipEn : visuals.chipEs;

              return (
                <article
                  key={card.id}
                  className="group rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition hover:border-[#D8CDBC]/50"
                >
                  <div className="relative h-40 overflow-hidden rounded-xl">
                    <Image
                      src={visuals.image}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute left-3 top-3 rounded-full border border-[#D8CDBC]/60 bg-black/40 px-3 py-1 text-xs tracking-wide text-[#D8CDBC]">
                      {chip}
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-md bg-[#D8CDBC] px-2 py-1 text-[11px] font-semibold uppercase text-black">
                      {visuals.widget}
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <p className={`text-4xl text-[#D8CDBC] ${eagleFont.className}`}>/{card.id}</p>
                    <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-gray-300">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#D8CDBC]/40 bg-[#151515] p-8 md:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D8CDBC]/30" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[#D8CDBC]/10 blur-3xl" />
            <p className="text-sm tracking-[0.2em] text-[#D8CDBC]">{content.stageOne}</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{content.stageOneTitle}</h3>
            <p className="mt-3 text-lg text-gray-300">{content.stageOneProgram}</p>
            <p className="mt-3 max-w-3xl text-gray-400">{content.stageOneDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#D8CDBC]/50 bg-black/40 px-3 py-1 text-xs tracking-wide text-[#D8CDBC]">
                {locale === "en" ? "Foundation block" : "Bloque base"}
              </span>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs tracking-wide text-gray-300">
                {locale === "en" ? "Technique + hygiene" : "Técnica + higiene"}
              </span>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs tracking-wide text-gray-300">
                {locale === "en" ? "Portfolio mindset" : "Mentalidad de portafolio"}
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#101010] p-8 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm tracking-[0.2em] text-[#D8CDBC]">{content.stageTwo}</p>
                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{content.stageTwoTitle}</h3>
                <p className="mt-3 max-w-3xl text-gray-400">{content.stageTwoDescription}</p>
              </div>
              <div className="rounded-2xl border border-[#D8CDBC]/40 bg-black/40 px-5 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  {locale === "en" ? "Tracks available" : "Rutas disponibles"}
                </p>
                <p className={`text-4xl leading-none text-[#D8CDBC] ${eagleFont.className}`}>03</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {content.stageTwoPrograms.map((program, index) => (
                <article
                  key={program.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-[#D8CDBC]/50"
                >
                  <div className="relative h-44 overflow-hidden rounded-xl">
                    <Image
                      src={specializationImages[index]}
                      alt={program.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-[#D8CDBC]/60 bg-black/50 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#D8CDBC]">
                      {program.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[11px] uppercase tracking-wide text-white">
                      {program.level}
                    </span>
                  </div>

                  <div className="px-2 pb-2 pt-4">
                    <h4 className="text-xl font-semibold">{program.name}</h4>
                    <p className="mt-2 text-sm text-gray-300">{program.focus}</p>

                    <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#141414] px-3 py-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        {locale === "en" ? "Duration" : "Duración"}
                      </span>
                      <span className="text-sm font-semibold text-[#D8CDBC]">{program.duration}</span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D8CDBC] to-[#A89278]"
                        style={{ width: `${78 + index * 8}%` }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#121212] px-6 py-20 md:px-12">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D8CDBC]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#D8CDBC]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.teachersTitle}</h2>
          <p className="mt-4 max-w-3xl text-gray-300">{content.teachersDescription}</p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            {academyTeachers.map((teacher, index) => (
              <article
                key={teacher.name}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-sm ${
                  index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div className="flex h-full min-h-[170px]">
                  <div className="relative w-28 shrink-0 md:w-36">
                    <Image src={teacher.img} alt={teacher.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-lg font-semibold">{teacher.name}</p>
                        <p className={`text-2xl leading-none text-[#D8CDBC]/70 ${eagleFont.className}`}>
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gray-400">{teacher.role}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#D8CDBC]/50 bg-black/40 px-2.5 py-1 text-[11px] text-[#D8CDBC]">
                        {teacher.style}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] text-gray-300">
                        {teacher.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.statsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/10 bg-[#151515] p-6">
                <p className={`text-5xl text-[#D8CDBC] ${eagleFont.className}`}>{stat.value}</p>
                <p className="mt-4 text-gray-300">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.testimonialsTitle}</h2>
          <p className="mt-4 max-w-3xl text-gray-300">{content.testimonialsDescription}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-3xl border border-[#D8CDBC]/40 bg-gradient-to-br from-[#1A1A1A] to-black p-7 md:col-span-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D8CDBC]/10 blur-2xl" />
              <p className={`text-5xl leading-none text-[#D8CDBC]/70 ${eagleFont.className}`}>"</p>
              <p className="mt-3 text-lg leading-relaxed text-gray-100">"{content.testimonials[0].quote}"</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#D8CDBC]/50 bg-black/40 px-3 py-1 text-xs tracking-wide text-[#D8CDBC]">
                  {content.testimonials[0].author}
                </span>
                <span className="text-sm text-gray-400">★★★★★</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {locale === "en" ? "Verified review" : "Reseña verificada"}
                </span>
              </div>
            </article>

            <div className="grid gap-5 md:col-span-5">
              {content.testimonials.slice(1).map((item, index) => (
                <article key={item.author} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D8CDBC]">{item.author}</p>
                    <p className={`text-2xl leading-none text-[#D8CDBC]/60 ${eagleFont.className}`}>
                      0{index + 2}
                    </p>
                  </div>
                  <p className="mt-3 text-gray-200">"{item.quote}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">★★★★★</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                      {locale === "en" ? "Student" : "Alumno"}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.faqTitle}</h2>
          <div className="mt-10 space-y-4">
            {content.faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-white/15 bg-[#151515] p-5">
                <summary className="cursor-pointer text-lg font-semibold">{faq.q}</summary>
                <p className="mt-3 text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1D1B18] to-[#262016] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">{content.finalCtaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-300">{content.finalCtaText}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-block rounded-full bg-[#D8CDBC] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c7b8a3]"
          >
            {content.finalCtaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
