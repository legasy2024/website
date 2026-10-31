const SITE_URL = "https://www.legassystudio.com";

/**
 * Schema.org TattooParlor (LocalBusiness) para la home y el layout.
 * Datos tomados de locales/*/home.json (book_consultation / footer).
 */
export function buildLocalBusinessSchema(locale) {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": `${SITE_URL}/#business`,
    name: "Legassy Studio",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/${locale}/opengraph-image.png`,
    logo: `${SITE_URL}/img/logo.svg`,
    telephone: "+573103110611",
    email: "hola@legassystudio.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 7 # 56 - 55",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    hasMap: "https://maps.app.goo.gl/p3jzZbkTe7SJs1By5",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: ["Cali", "Colombia", "United States"],
    availableLanguage: ["es", "en"],
    sameAs: [
      "https://www.instagram.com/legassystudio/",
      "https://www.tiktok.com/@legassystudio",
      "https://www.youtube.com/@LegassyStudioColombia",
    ],
  };
}
