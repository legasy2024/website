
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import Link from "next/link";


//Components
import BookConsult from "@/components/common/BookConsult/BookConsult";

//Diferent namespaces
const i18nNameSpaces = ["home", "about", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Contacto y ubicación en el sur de Cali | Legassy Studio",
  description: "Legassy Studio: Calle 7 # 56 - 55, sur de Cali, cerca de Mall Plaza. Lunes a sábado de 8am a 5pm. Asesoría y cotización gratis por WhatsApp.",
  keywords: "contacto tatuajes, agendar tatuaje, estudio de tatuajes Cali, consulta tatuaje, reservar cita, artistas tatuadores, información de contacto",
  language: "es",
  subject: "Información de contacto y reservas - Legassy Studio",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/es/contact",
      languages: {
          en: "/en/contact",
          es: "/es/contact",
          "x-default": "/es/contact",
      }
  },
  openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://www.legassystudio.com/es/contact",
      title: "Contacto - Legassy Studio",
      description: "Contáctanos en Legassy Studio, tu estudio de tatuajes en Cali. Estamos listos para escuchar tu idea y convertirla en arte corporal único.",
      images: [{ url: "/es/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio"
  }
};

const metadata_en = {
  title: "Contact & Location in South Cali | Legassy Studio",
  description: "Legassy Studio: Calle 7 # 56 - 55, south Cali, near Mall Plaza. Monday to Saturday, 8am to 5pm. Free consultation and quote on WhatsApp.",
  keywords: "tattoo contact, book tattoo, tattoo studio Cali, tattoo consultation, book appointment, tattoo artists, contact information",
  language: "en",
  subject: "Contact Information and Bookings - Legassy Studio",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/en/contact",
      languages: {
          en: "/en/contact",
          es: "/es/contact",
          "x-default": "/es/contact",
      }
  },
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.legassystudio.com/en/contact",
      title: "Contact - Legassy Studio",
      description: "Contact Legassy Studio, your tattoo studio in Cali. We're ready to listen to your idea and transform it into unique body art.",
      images: [{ url: "/en/opengraph-image.jpg", width: 1200, height: 600, alt: "Legassy Studio" }],
      siteName: "Legassy Studio"
  }
};

const localInfo = {
  es: {
    title: "Contacto: estudio de tatuajes en el sur de Cali",
    intro: "Cuéntanos tu idea por WhatsApp y te ayudamos con el diseño, la zona y la cotización. La asesoría es gratis.",
    items: [
      { label: "Dónde estamos", text: "Calle 7 # 56 - 55, Pampa Linda, en el sur de Cali, cerca de Mall Plaza y de la Plaza de Toros." },
      { label: "Horario", text: "Lunes a sábado, de 8am a 5pm." },
      { label: "WhatsApp", text: "+57 310 311 0611. Es nuestro único número." },
      { label: "Menores de edad", text: "Tatuamos a menores de edad solo con el consentimiento de un adulto responsable." },
    ],
    links: [
      { href: "/es/portfolio", label: "Ver el portafolio" },
      { href: "/es/blog/cuanto-cuesta-un-tatuaje-en-cali", label: "Qué define el precio de un tatuaje" },
      { href: "/es/blog/tu-primer-tatuaje-en-cali-paso-a-paso", label: "Tu primer tatuaje, paso a paso" },
      { href: "/es/academy", label: "Academia de tatuaje en Cali" },
    ],
  },
  en: {
    title: "Contact: tattoo studio in south Cali, Colombia",
    intro: "Tell us your idea on WhatsApp and we will help you with the design, placement and quote. The consultation is free.",
    items: [
      { label: "Where we are", text: "Calle 7 # 56 - 55, Pampa Linda, south Cali, near Mall Plaza and the Plaza de Toros." },
      { label: "Hours", text: "Monday to Saturday, 8am to 5pm." },
      { label: "WhatsApp", text: "+57 310 311 0611. This is our only number." },
      { label: "Minors", text: "We tattoo minors only with the consent of a responsible adult." },
    ],
    links: [
      { href: "/en/portfolio", label: "See the portfolio" },
      { href: "/en/blog/how-much-does-a-tattoo-cost-in-cali-colombia", label: "What sets the price of a tattoo" },
      { href: "/en/blog/your-first-tattoo-in-cali-step-by-step", label: "Your first tattoo, step by step" },
      { href: "/en/academy", label: "Tattoo academy in Cali" },
    ],
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Contact({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const info = locale === "en" ? localInfo.en : localInfo.es;

  const BookConsultTranslations = {
    section_title: t("home:book_consultation.section_title"),
    title: t("home:book_consultation.title"),
    title_decorator: t("home:book_consultation.title_decorator"),
    title_end: t("home:book_consultation.title_end"),
    cta: t("home:book_consultation.cta"),
    contact_text: t("home:book_consultation.contact_text"),
    email_label: t("home:book_consultation.email_label"),
    info_title: t("home:book_consultation.info_title"),
    studio_name: t("home:book_consultation.studio_name"),
    address_label: t("home:book_consultation.address_label"),
    address_value: t("home:book_consultation.address_value"),
    city_value: t("home:book_consultation.city_value"),
    hours_label: t("home:book_consultation.hours_label"),
    hours_value: t("home:book_consultation.hours_value"),
    phone_value: t("home:book_consultation.phone_value"),
    email_value: t("home:book_consultation.email_value"),
    maps_cta: t("home:book_consultation.maps_cta"),
    maps_url: t("home:book_consultation.maps_url"),
    confirm_phone_form: t("home:book_consultation.confirm_phone_form"),
    error_phone_form: t("home:book_consultation.error_phone_form"),
    confirm_email_form: t("home:book_consultation.confirm_email_form"),
    error_email_form: t("home:book_consultation.error_email_form"),
  }

  return (
    <div className="bg-[#EDEDED] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <div className="h-16 md:h-20 bg-black">

        </div>
        <section className="mx-auto w-full max-w-[1200px] px-5 pt-12 text-TextBlack desktop:px-0">
          <h1 className="text-3xl font-bold md:text-4xl">{info.title}</h1>
          <p className="mt-3 max-w-3xl text-lg">{info.intro}</p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            {info.items.map((item) => (
              <div key={item.label}>
                <dt className="font-semibold">{item.label}</dt>
                <dd className="mt-1">{item.text}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {info.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold underline underline-offset-4">{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full flex flex-col items-center">
          <BookConsult translations={BookConsultTranslations} locale={locale}></BookConsult>
        </section>
      </TranslationsProvider>
    </div>
  );
}