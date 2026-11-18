import Link from "next/link";
import { caliGuides } from "@/lib/localGuides";

const copy = {
  es: {
    title: "Tatuajes en Cali: portafolio, guías y academia",
    text: "Legassy Studio es un estudio privado de tatuajes en el sur de Cali, en la Calle 7 # 56 - 55, cerca de Mall Plaza y de la Plaza de Toros. También hacemos piercing. La asesoría y la cotización son gratis, y atendemos en español e inglés.",
    portfolio: "Ver el portafolio",
    academy: "Academia de tatuaje en Cali",
    contact: "Cómo llegar y contacto",
    piercing: "Piercing en Cali",
    trip: "Viaja a Cali a tatuarte",
    guides: "Guías para antes de tatuarte",
  },
  en: {
    title: "Tattoos in Cali: portfolio, guides and academy",
    text: "Legassy Studio is a private tattoo studio in south Cali, Colombia, at Calle 7 # 56 - 55, near Mall Plaza and the Plaza de Toros. We also do piercings. Consultations and quotes are free, and we speak English.",
    portfolio: "See the portfolio",
    academy: "Tattoo academy in Cali",
    contact: "Directions and contact",
    piercing: "Piercing in Cali",
    trip: "Plan a tattoo trip to Cali",
    guides: "Guides before you get tattooed",
  },
};

export default function LocalLinks({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <section className="w-full bg-[#111] px-5 py-14 text-white desktop:px-24">
      <div className="mx-auto w-full desktop:max-w-[1200px]">
        <h2 className="text-2xl font-bold md:text-3xl">{t.title}</h2>
        <p className="mt-3 max-w-3xl text-gray-300">{t.text}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={`/${locale}/portfolio`} data-cta="home_local_portfolio" className="font-semibold text-[#D8CDBC] underline underline-offset-4 hover:text-white">
            {t.portfolio}
          </Link>
          <Link href={`/${locale}/academy`} data-cta="home_local_academy" className="font-semibold text-[#D8CDBC] underline underline-offset-4 hover:text-white">
            {t.academy}
          </Link>
          <Link href={`/${locale}/contact`} data-cta="home_local_contact" className="font-semibold text-[#D8CDBC] underline underline-offset-4 hover:text-white">
            {t.contact}
          </Link>
          <Link href={`/${locale}/piercing`} data-cta="home_local_piercing" className="font-semibold text-[#D8CDBC] underline underline-offset-4 hover:text-white">
            {t.piercing}
          </Link>
          <Link href={`/${locale}/tattoo-trip`} data-cta="home_local_trip" className="font-semibold text-[#D8CDBC] underline underline-offset-4 hover:text-white">
            {t.trip}
          </Link>
        </div>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-gray-400">{t.guides}</h3>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {caliGuides.map((guide) => (
            <li key={guide.slug.es}>
              <Link href={`/${locale}/blog/${guide.slug[locale] || guide.slug.es}`} className="text-gray-200 transition-colors hover:text-white hover:underline">
                {guide.title[locale] || guide.title.es}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
