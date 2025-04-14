
//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";


//Components
import Header from "@/components/vip/Header";
import BookConsult from "@/components/common/BookConsult/BookConsult";

//Diferent namespaces
const i18nNameSpaces = ["home", "about", "navbar", "experience", "help", "projects"];


const metadata = {
  title: "Contáctanos - Legassy Studio",
  description: "Contáctanos en Legassy Studio, tu estudio de tatuajes en Cali. Estamos listos para escuchar tu idea y convertirla en arte corporal único. Agenda tu cita o resuelve tus dudas.",
  keywords: "contacto tatuajes, agendar tatuaje, estudio de tatuajes Cali, consulta tatuaje, reservar cita, artistas tatuadores, información de contacto",
  language: "es",
  subject: "Información de contacto y reservas - Legassy Studio",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/contacto",
      languages: {
          'es': '/contacto'
      }
  },
  openGraph: {
      type: "website",
      locale: "es_CO",
      url: "https://www.legassystudio.com/contacto",
      title: "Contacto - Legassy Studio",
      description: "Contáctanos en Legassy Studio, tu estudio de tatuajes en Cali. Estamos listos para escuchar tu idea y convertirla en arte corporal único.",
      siteName: "Legassy Studio"
  }
};

const metadata_en = {
  title: "Contact - Legassy Studio",
  description: "Contact Legassy Studio, your tattoo studio in Cali. We're ready to listen to your idea and transform it into unique body art. Schedule your appointment or resolve your questions.",
  keywords: "tattoo contact, book tattoo, tattoo studio Cali, tattoo consultation, book appointment, tattoo artists, contact information",
  language: "en",
  subject: "Contact Information and Bookings - Legassy Studio",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
      canonical: "https://www.legassystudio.com/contact",
      languages: {
          'en': '/contact',
          'es': '/es/contacto'
      }
  },
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.legassystudio.com/contact",
      title: "Contact - Legassy Studio",
      description: "Contact Legassy Studio, your tattoo studio in Cali. We're ready to listen to your idea and transform it into unique body art.",
      siteName: "Legassy Studio"
  }
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}
 


export default async function Contact({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const BookConsultTranslations = {
    section_title: t("home:book_consultation.section_title"),
    title: t("home:book_consultation.title"),
    title_decorator: t("home:book_consultation.title_decorator"),
    title_end: t("home:book_consultation.title_end"),
    cta: t("home:book_consultation.cta"),
    contact_text: t("home:book_consultation.contact_text"),
    email_label: t("home:book_consultation.email_label"),
    info_title: t("home:book_consultation.info_title"),
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
        <section className="w-full flex flex-col items-center">
          <BookConsult translations={BookConsultTranslations}></BookConsult>
        </section>
      </TranslationsProvider>
    </div>
  );
}