//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import vipEs from "@/locales/es/vip.json";
import vipEn from "@/locales/en/vip.json";

//Components
import Header from "@/components/vip/Header";
import VipClubComponent from "@/components/vip/Header";

//Diferent namespaces
const i18nNameSpaces = [
  "home",
  "vip",
  "about",
  "navbar",
  "experience",
  "help",
  "projects",
];

const metadata = {
  title: "Club VIP - Legassy Studio",
  description:
    "Únete al Club VIP de Legassy Studio y desbloquea beneficios exclusivos, descuentos especiales, servicio prioritario y experiencias únicas para entusiastas de tatuajes y perforaciones.",
  keywords:
    "club VIP de tatuajes, beneficios exclusivos de tatuajes, servicio prioritario de tatuajes, membresía de estudio de tatuajes, promociones especiales de tatuajes, estudio de tatuajes en Cali",
  language: "es",
  subject: "Club VIP de Legassy Studio - Beneficios Exclusivos de Membresía",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://legassystudio.com/es/vip",
    languages: {
      en: "/vip",
      es: "/es/vip",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://legassystudio.com/es/vip",
    title: "Club VIP - Legassy Studio",
    description:
      "Únete al Club VIP de Legassy Studio y desbloquea beneficios exclusivos, descuentos especiales, servicio prioritario y experiencias únicas para entusiastas de tatuajes y perforaciones.",
    siteName: "Legassy Studio",
  },
};

const metadata_en = {
  title: "VIP Club - Legassy Studio",
  description:
    "Join the Legassy Studio VIP Club and unlock exclusive benefits, special discounts, priority service, and unique experiences for tattoo and piercing enthusiasts.",
  keywords:
    "tattoo VIP club, exclusive tattoo benefits, priority tattoo service, tattoo studio membership, special tattoo promotions, Cali tattoo studio",
  language: "en",
  subject: "Legassy Studio VIP Club - Exclusive Membership Benefits",
  coverage: "Global",
  robots: "index, follow",
  author: "Legassy Studio",
  publisher: "Legassy Studio",
  alternates: {
    canonical: "https://legassystudio.com/vip",
    languages: {
      en: "/vip",
      es: "/es/vip",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legassystudio.com/vip",
    title: "VIP Club - Legassy Studio",
    description:
      "Join the Legassy Studio VIP Club and unlock exclusive benefits, special discounts, priority service, and unique experiences for tattoo and piercing enthusiasts.",
    siteName: "Legassy Studio",
  },
};

export async function generateMetadata({ params: { locale } }) {
  return locale === "en" ? metadata_en : metadata;
}

export default async function Portfolio({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);
  const content = locale === "en" ? vipEn.content : vipEs.content;
  const benefits = locale === "en" ? vipEn.benefits : vipEs.benefits;
  

  const headerTranslations = {
    section_title: t("about:header.section_title"),
    title: t("about:header.title"),
    title_decorator: t("about:header.title_decorator"),
    description: t("about:header.description"),
  };

  return (
    <div className="bg-[#EDEDED] ">
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <VipClubComponent content={content} benefits={benefits} />
      </TranslationsProvider>
    </div>
  );
}
