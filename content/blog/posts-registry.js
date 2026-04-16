/**
 * Registro centralizado de todos los posts del blog
 *
 * Este archivo es la única fuente de verdad para:
 * - Slugs en cada idioma
 * - Metadatos básicos (imagen, fecha, label)
 * - Orden de los posts
 * - Estado de publicación
 *
 * IMPORTANTE: El campo `id` es inmutable y nunca debe cambiar.
 * Los slugs pueden cambiar si es necesario, pero el ID permanece igual.
 */

export const blogPostsRegistry = [
  {
    id: "definitive-guide",
    slugs: {
      es: "guia-definitiva-donde-tatuarse-en-cali",
      en: "definitive-guide-on-where-to-tattoo-en-cali",
    },
    image: "/img/6.png",
    date: {
      es: "08 de abril de 2025",
      en: "April 08, 2025",
    },
    label: {
      es: "Guía Local",
      en: "Local Guide",
    },
    published: true,
    order: 1,
  },
  {
    id: "travel-reasons",
    slugs: {
      es: "razones-para-viajar-a-colombia-por-tu-proximo-tatuaje",
      en: "reason-to-travel-to-colombia-for-your-next-tattoo",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "14 de abril de 2025",
      en: "April 14, 2025",
    },
    label: {
      es: "Viajes",
      en: "Travel",
    },
    published: true,
    order: 2,
  },
  {
    id: "english-speaking",
    slugs: {
      es: "artistas-de-tatuajes-que-hablan-ingles-en-cali",
      en: "english-speaking-tattoo-artists-in-cali-colombia",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "17 de abril de 2025",
      en: "April 17, 2025",
    },
    label: {
      es: "Internacional",
      en: "International",
    },
    published: true,
    order: 3,
  },
  {
    id: "cali-creative-city",
    slugs: {
      es: "cali-el-auge-de-una-ciudad-creativa-para-extranjeros",
      en: "cali-tattoo-scene-for-foreigners",
    },
    image: "/img/3.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025",
    },
    label: {
      es: "Turismo",
      en: "Tourism",
    },
    published: true,
    order: 4,
  },
  {
    id: "prices-comparison",
    slugs: {
      es: "precios-de-tatuajes-en-colombia-vs-eeuu",
      en: "tattoo-prices-colombia-vs-usa",
    },
    image: "/img/blog/post5.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025",
    },
    label: {
      es: "Precios",
      en: "Prices",
    },
    published: true,
    order: 5,
  },
  {
    id: "inclusive-studios",
    slugs: {
      es: "estudios-de-tatuajes-inclusivos-en-colombia",
      en: "inclusive-tattoo-studios-in-colombia",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "25 de abril de 2025",
      en: "April 25, 2025",
    },
    label: {
      es: "Inclusión",
      en: "Inclusion",
    },
    published: true,
    order: 6,
  },
  {
    id: "remote-process",
    slugs: {
      es: "proceso-de-trabajo-con-artistas-colombianos-a-distancia",
      en: "remote-tattoo-process-colombia-from-usa",
    },
    image: "/img/blog/post7.png",
    date: {
      es: "29 de abril de 2025",
      en: "April 29, 2025",
    },
    label: {
      es: "Proceso",
      en: "Process",
    },
    published: true,
    order: 7,
  },
  {
    id: "history",
    slugs: {
      es: "historia-del-arte-del-tatuaje-en-colombia",
      en: "history-of-tattoo-art-in-colombia",
    },
    image: "/img/14.png",
    date: {
      es: "30 de abril de 2025",
      en: "April 30, 2025",
    },
    label: {
      es: "Historia",
      en: "History",
    },
    published: true,
    order: 8,
  },
  {
    id: "fine-line-durability",
    slugs: {
      es: "tatuajes-de-linea-fina-en-cali-durabilidad-del-trazo",
      en: "fine-line-tattoos-in-cali-durability",
    },
    image: "/img/blog/post1.png",
    date: {
      es: "31 de enero de 2026",
      en: "January 31, 2026",
    },
    label: {
      es: "Línea fina",
      en: "Fine line",
    },
    published: true,
    order: 9,
  },
  {
    id: "tattoo-healing-mistakes",
    slugs: {
      es: "7-errores-que-arruinan-la-curacion-de-tu-tatuaje",
      en: "7-mistakes-that-ruin-your-tattoo-healing",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "31 de enero de 2026",
      en: "January 31, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 10,
  },
  {
    id: "tattoo-healing-time",
    slugs: {
      es: "cuanto-tarda-en-cicatrizar-un-tatuaje-segun-tamano-y-zona",
      en: "how-long-does-a-tattoo-take-to-heal-size-and-placement",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "12 de febrero de 2026",
      en: "February 12, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 11,
  },
  {
    id: "tattoo-care-step-by-step",
    slugs: {
      es: "cuidados-del-tatuaje-paso-a-paso-guia-completa",
      en: "tattoo-care-step-by-step-complete-guide",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 12,
  },
  {
    id: "tattoo-healing-signs",
    slugs: {
      es: "senales-normales-y-senales-de-alerta-durante-la-cicatrizacion",
      en: "normal-signs-and-warning-signs-during-tattoo-healing",
    },
    image: "/img/blog/post7.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 13,
  },
  {
    id: "tattoo-aftercare-products",
    slugs: {
      es: "productos-recomendados-para-cuidar-un-tatuaje-recien-hecho",
      en: "recommended-products-for-new-tattoo-care",
    },
    image: "/img/blog/post8.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 14,
  },
  {
    id: "tattoo-sun-protection",
    slugs: {
      es: "como-proteger-un-tatuaje-del-sol-sin-danar-la-tinta",
      en: "how-to-protect-tattoo-from-sun-without-damaging-ink",
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 15,
  },
  {
    id: "tattoo-color-loss",
    slugs: {
      es: "que-hacer-si-tu-tatuaje-pierde-color-durante-la-cicatrizacion",
      en: "what-to-do-if-tattoo-loses-color-during-healing",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 16,
  },
  {
    id: "tattoo-sleeping-guide",
    slugs: {
      es: "como-dormir-despues-de-hacerte-un-tatuaje-sin-danarlo",
      en: "how-to-sleep-after-getting-tattoo-without-damaging-it",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 17,
  },
  {
    id: "tattoo-exercise-guide",
    slugs: {
      es: "se-puede-hacer-ejercicio-despues-de-tatuarse",
      en: "can-you-exercise-after-getting-tattoo",
    },
    image: "/img/blog/post4.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 18,
  },
  {
    id: "first-tattoo-guide",
    slugs: {
      es: "todo-lo-que-debes-saber-antes-de-hacerte-un-tatuaje-por-primera-vez",
      en: "everything-you-should-know-before-getting-your-first-tattoo",
    },
    image: "/img/9.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 19,
  },
  {
    id: "choosing-tattoo-artist",
    slugs: {
      es: "como-elegir-un-buen-tatuador-sin-dejarte-llevar-solo-por-el-precio",
      en: "how-to-choose-good-tattoo-artist-without-price-only",
    },
    image: "/img/5.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 20,
  },
  {
    id: "first-tattoo-session",
    slugs: {
      es: "que-esperar-durante-tu-primera-sesion-de-tatuaje",
      en: "what-to-expect-during-your-first-tattoo-session",
    },
    image: "/img/10.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 21,
  },
  {
    id: "questions-before-tattoo",
    slugs: {
      es: "preguntas-que-deberias-hacer-antes-de-tatuarte",
      en: "questions-you-should-ask-before-getting-tattoo",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 22,
  },
  {
    id: "tattoo-longevity",
    slugs: {
      es: "cuanto-dura-realmente-un-tatuaje-con-los-anos",
      en: "how-long-does-tattoo-really-last-over-years",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 23,
  },
  {
    id: "professional-vs-amateur-studio",
    slugs: {
      es: "diferencias-entre-un-estudio-profesional-de-tatuajes-y-uno-amateur",
      en: "differences-between-professional-and-amateur-tattoo-studio",
    },
    image: "/img/blog/post4.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 24,
  },
  {
    id: "tattoo-session-duration",
    slugs: {
      es: "cuanto-tiempo-dura-una-sesion-de-tatuaje-segun-el-diseno",
      en: "how-long-does-tattoo-session-last-depending-on-design",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 25,
  },
  {
    id: "tattoo-pain-guide",
    slugs: {
      es: "duele-hacerse-un-tatuaje-guia-realista-sobre-dolor-zonas-y-sensaciones",
      en: "does-getting-tattoo-hurt-realistic-guide-pain-zones-sensations",
    },
    image: "/img/blog/post7.png",
    date: {
      es: "12 de febrero de 2026",
      en: "February 12, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 26,
  },
  {
    id: "most-painful-tattoo-zones",
    slugs: {
      es: "zonas-del-cuerpo-donde-mas-duele-tatuarse-ranking-real",
      en: "most-painful-body-zones-for-tattoos-real-ranking",
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de febrero de 2026",
      en: "February 13, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 27,
  },
  {
    id: "managing-pain-long-tattoo-session",
    slugs: {
      es: "como-manejar-el-dolor-durante-una-sesion-de-tatuajes-larga",
      en: "how-to-manage-pain-during-long-tattoo-session",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "14 de febrero de 2026",
      en: "February 14, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 28,
  },
  {
    id: "tattoo-pain-by-skin-type",
    slugs: {
      es: "cuanto-duele-tatuarse-segun-el-tipo-de-piel",
      en: "how-much-does-tattooing-hurt-by-skin-type",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "15 de febrero de 2026",
      en: "February 15, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 29,
  },
  {
    id: "relaxation-techniques-during-tattoo",
    slugs: {
      es: "tecnicas-para-relajarte-mientras-te-estan-tatuando",
      en: "relaxation-techniques-while-getting-tattooed",
    },
    image: "/img/blog/post4.png",
    date: {
      es: "16 de febrero de 2026",
      en: "February 16, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 30,
  },
  {
    id: "tattoo-pain-duration-after",
    slugs: {
      es: "cuanto-dura-el-dolor-despues-de-tatuarse",
      en: "how-long-does-tattoo-pain-last-after",
    },
    image: "/img/blog/post8.png",
    date: {
      es: "17 de febrero de 2026",
      en: "February 17, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 31,
  },
  {
    id: "tattoo-anesthesia-guide",
    slugs: {
      es: "anestesia-para-tatuajes-funciona-realmente",
      en: "tattoo-anesthesia-does-it-really-work",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "18 de febrero de 2026",
      en: "February 18, 2026",
    },
    label: {
      es: "Experiencia",
      en: "Experience",
    },
    published: true,
    order: 32,
  },
  {
    id: "tattoo-design-aging-well",
    slugs: {
      es: "como-saber-si-un-diseno-de-tatuaje-envejecera-bien",
      en: "how-to-know-if-a-tattoo-design-will-age-well",
    },
    image: "/img/blog/post5.png",
    date: {
      es: "01 de marzo de 2026",
      en: "March 01, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 33,
  },
  {
    id: "tattoos-on-dark-skin-myths",
    slugs: {
      es: "tatuajes-en-pieles-morenas-mitos-sobre-el-color-y-la-saturacion",
      en: "tattoos-on-brown-and-dark-skin-myths-color-and-saturation",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "02 de marzo de 2026",
      en: "March 02, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 34,
  },
  {
    id: "micro-tattoos-vs-small-tattoos",
    slugs: {
      es: "micro-tatuajes-vs-tatuajes-pequenos-por-que-el-detalle-extremo-tiene-riesgos",
      en: "micro-tattoos-vs-small-tattoos-why-extreme-detail-is-risky",
    },
    image: "/img/blog/post8.png",
    date: {
      es: "03 de marzo de 2026",
      en: "March 03, 2026",
    },
    label: {
      es: "Técnica",
      en: "Technique",
    },
    published: true,
    order: 35,
  },
  {
    id: "choose-tattoo-style-personality-anatomy",
    slugs: {
      es: "como-elegir-el-estilo-de-tatuaje-ideal-segun-tu-personalidad-y-anatomia",
      en: "how-to-choose-the-right-tattoo-style-for-your-personality-and-anatomy",
    },
    image: "/img/4.png",
    date: {
      es: "04 de marzo de 2026",
      en: "March 04, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 36,
  },
  {
    id: "blackwork-vs-realism-technical-guide",
    slugs: {
      es: "blackwork-vs-realismo-guia-visual-para-entender-las-diferencias-tecnicas",
      en: "blackwork-vs-realism-a-clear-guide-to-technical-differences",
    },
    image: "/img/1.png",
    date: {
      es: "05 de marzo de 2026",
      en: "March 05, 2026",
    },
    label: {
      es: "Técnica",
      en: "Technique",
    },
    published: true,
    order: 37,
  },
  {
    id: "tattoo-over-stretch-marks-scars-science",
    slugs: {
      es: "se-pueden-tapar-las-estrias-o-cicatrices-con-un-tatuaje-lo-que-dice-la-ciencia",
      en: "can-you-cover-stretch-marks-or-scars-with-a-tattoo-what-science-says",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "06 de marzo de 2026",
      en: "March 06, 2026",
    },
    label: {
      es: "Ciencia",
      en: "Science",
    },
    published: true,
    order: 38,
  },
  {
    id: "tattoo-raised-years-later",
    slugs: {
      es: "por-que-algunos-tatuajes-se-sienten-en-relieve-despues-de-anos",
      en: "why-some-tattoos-feel-raised-years-later",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "07 de marzo de 2026",
      en: "March 07, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 39,
  },
  {
    id: "tattoo-allergy-symptoms-causes",
    slugs: {
      es: "alergia-a-la-tinta-de-tatuaje-sintomas-causas-y-que-hacer-si-sucede",
      en: "tattoo-ink-allergy-symptoms-causes-and-what-to-do",
    },
    image: "/img/blog/post3.png",
    date: {
      es: "08 de marzo de 2026",
      en: "March 08, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 40,
  },
  {
    id: "tattoo-over-moles-why-avoid",
    slugs: {
      es: "tatuarse-sobre-lunares-por-que-los-profesionales-siempre-los-evitan",
      en: "tattooing-over-moles-why-professionals-avoid-it",
    },
    image: "/img/blog/post4.png",
    date: {
      es: "09 de marzo de 2026",
      en: "March 09, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 41,
  },
  {
    id: "tattoo-ink-lymphatic-system",
    slugs: {
      es: "que-pasa-con-la-tinta-de-los-tatuajes-en-el-sistema-linfatico-realidad-vs-ficcion",
      en: "what-happens-to-tattoo-ink-in-the-lymphatic-system-reality-vs-fiction",
    },
    image: "/img/blog/post5.png",
    date: {
      es: "10 de marzo de 2026",
      en: "March 10, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 42,
  },
  {
    id: "tattoo-alcohol-caffeine-effects",
    slugs: {
      es: "el-efecto-del-alcohol-y-la-cafeina-en-la-sangre-durante-una-sesion-de-tatuaje",
      en: "the-effect-of-alcohol-and-caffeine-on-your-blood-during-a-tattoo-session",
    },
    image: "/img/blog/post6.png",
    date: {
      es: "11 de marzo de 2026",
      en: "March 11, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 43,
  },
  {
    id: "tattoo-dermatitis-psoriasis-safety",
    slugs: {
      es: "es-seguro-tatuarse-si-tienes-dermatitis-o-psoriasis",
      en: "is-it-safe-to-get-tattooed-if-you-have-dermatitis-or-psoriasis",
    },
    image: "/img/blog/post7.png",
    date: {
      es: "12 de marzo de 2026",
      en: "March 12, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 44,
  },
  {
    id: "tattoo-laser-hair-removal-same-area",
    slugs: {
      es: "tatuajes-y-depilacion-laser-por-que-nunca-deben-mezclarse-en-la-misma-zona",
      en: "tattoos-and-laser-hair-removal-why-they-shouldnt-mix-in-the-same-area",
    },
    image: "/img/blog/post1.png",
    date: {
      es: "13 de marzo de 2026",
      en: "March 13, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 45,
  },
  {
    id: "pool-chlorine-effect-healed-tattoo",
    slugs: {
      es: "como-afecta-el-cloro-de-la-piscina-a-un-tatuaje-ya-cicatrizado",
      en: "how-pool-chlorine-affects-a-fully-healed-tattoo",
    },
    image: "/img/blog/post2.png",
    date: {
      es: "13 de marzo de 2026",
      en: "March 13, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 46,
  },
  {
    id: "flying-after-tattoo-travel-guide",
    slugs: {
      es: "guia-para-viajeros-puedo-volar-en-avion-inmediatamente-despues-de-tatuarme",
      en: "traveler-guide-can-you-fly-immediately-after-getting-a-tattoo",
    },
    image: "/img/11.png",
    date: {
      es: "13 de marzo de 2026",
      en: "March 13, 2026",
    },
    label: {
      es: "Viajes",
      en: "Travel",
    },
    published: true,
    order: 47,
  },
  {
    id: "blood-donation-after-tattoo-wait-time",
    slugs: {
      es: "donar-sangre-despues-de-un-tatuaje-cuanto-tiempo-hay-que-esperar-realmente",
      en: "blood-donation-after-a-tattoo-how-long-should-you-really-wait",
    },
    image: "/img/2.png",
    date: {
      es: "14 de marzo de 2026",
      en: "March 14, 2026",
    },
    label: {
      es: "Salud",
      en: "Health",
    },
    published: true,
    order: 48,
  },
  {
    id: "gym-training-with-new-tattoo",
    slugs: {
      es: "como-entrenar-en-el-gimnasio-sin-estirar-la-piel-de-un-tatuaje-nuevo",
      en: "how-to-train-at-the-gym-without-stretching-a-new-tattoo",
    },
    image: "/img/12.png",
    date: {
      es: "14 de marzo de 2026",
      en: "March 14, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 49,
  },
  {
    id: "tattoo-white-ink-yellowing",
    slugs: {
      es: "por-que-los-tatuajes-blancos-suelen-volverse-amarillos-o-desaparecer",
      en: "why-white-tattoos-often-turn-yellow-or-disappear",
    },
    image: "/img/blog/tatuaje-blanco.jpg",
    date: {
      es: "15 de marzo de 2026",
      en: "March 15, 2026",
    },
    label: {
      es: "Técnica",
      en: "Technique",
    },
    published: true,
    order: 50,
  },
  {
    id: "tattoo-aftercare-creams-truth",
    slugs: {
      es: "la-verdad-sobre-las-cremas-para-tatuajes-son-mejores-las-marcas-especializadas-o-la-vaselina",
      en: "the-truth-about-tattoo-creams-are-specialized-brands-better-than-petroleum-jelly",
    },
    image: "/img/blog/crema-tatuajes.jpg",
    date: {
      es: "15 de marzo de 2026",
      en: "March 15, 2026",
    },
    label: {
      es: "Cuidado",
      en: "Aftercare",
    },
    published: true,
    order: 51,
  },
  {
    id: "tattoo-blowout-ink-spread",
    slugs: {
      es: "que-es-el-blowout-en-un-tatuaje-y-por-que-se-expande-la-tinta-bajo-la-piel",
      en: "what-is-blowout-in-a-tattoo-and-why-ink-spreads-under-the-skin",
    },
    image: "/img/blog/blowout.jpg",
    date: {
      es: "15 de marzo de 2026",
      en: "March 15, 2026",
    },
    label: {
      es: "Técnica",
      en: "Technique",
    },
    published: true,
    order: 52,
  },
  {
    id: "reading-artist-portfolio-how-to",
    slugs: {
      es: "como-leer-el-portafolio-de-un-artista-en-que-fijarse-mas-alla-de-los-seguidores",
      en: "how-to-read-a-tattoo-artist-portfolio-what-to-look-at-beyond-followers",
    },
    image: "/img/blog/como-leer-portafolio-artista.jpg",
    date: {
      es: "16 de marzo de 2026",
      en: "March 16, 2026",
    },
    label: {
      es: "Guía",
      en: "Guide",
    },
    published: true,
    order: 53,
  },
  {
    id: "handpoke-vs-machine-tattoos",
    slugs: {
      es: "tatuajes-handpoke-vs-maquina-diferencias-en-dolor-duracion-y-estetica",
      en: "handpoke-vs-machine-tattoos-differences-in-pain-longevity-and-aesthetics",
    },
    image: "/img/13.png",
    date: {
      es: "16 de marzo de 2026",
      en: "March 16, 2026",
    },
    label: {
      es: "Técnica",
      en: "Technique",
    },
    published: true,
    order: 54,
  },
  {
    id: "arm-tattoo-gallery",
    slugs: {
      es: "tatuajes-en-el-brazo-para-hombres",
      en: "arm-tattoos-gallery-ideas-and-recommendations",
    },
    image: "/img/portfolio-blog/realismo-1.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 55,
  },
  {
    id: "gallery-tatuajes-para-hombres",
    slugs: {
      es: "tatuajes-para-hombres-galeria",
      en: "mens-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-para-hombres/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 56,
  },
  {
    id: "gallery-tatuajes-para-mujeres",
    slugs: {
      es: "tatuajes-para-mujeres-galeria",
      en: "womens-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-para-mujeres/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 57,
  },
  {
    id: "gallery-tatuajes-cuello",
    slugs: {
      es: "tatuajes-en-el-cuello-galeria",
      en: "neck-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-cuello/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 58,
  },
  {
    id: "gallery-tatuajes-antebrazo",
    slugs: {
      es: "tatuajes-en-el-antebrazo-galeria",
      en: "forearm-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-antebrazo/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 59,
  },
  {
    id: "gallery-tatuajes-espalda",
    slugs: {
      es: "tatuajes-en-la-espalda-galeria",
      en: "back-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-espalda/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 60,
  },
  {
    id: "gallery-tatuajes-pareja",
    slugs: {
      es: "tatuajes-en-pareja-galeria",
      en: "couple-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-pareja/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 61,
  },
  {
    id: "gallery-tatuajes-mujer-brazo",
    slugs: {
      es: "tatuajes-para-mujer-en-el-brazo-galeria",
      en: "womens-arm-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-mujer-brazo/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 62,
  },
  {
    id: "gallery-tatuajes-mano",
    slugs: {
      es: "tatuajes-en-la-mano-galeria",
      en: "hand-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-mano/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 63,
  },
  {
    id: "gallery-tatuajes-pequenos-hombres",
    slugs: {
      es: "tatuajes-pequenos-para-hombres-galeria",
      en: "small-tattoos-for-men-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-hombres/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 64,
  },
  {
    id: "gallery-tatuajes-pequenos-mujer",
    slugs: {
      es: "tatuajes-pequenos-para-mujer-galeria",
      en: "small-tattoos-for-women-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-mujer/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 65,
  },
  {
    id: "gallery-tatuajes-pierna",
    slugs: {
      es: "tatuajes-en-la-pierna-galeria",
      en: "leg-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-pierna/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 66,
  },
  {
    id: "gallery-tatuajes-espalda-mujer",
    slugs: {
      es: "tatuajes-en-la-espalda-para-mujer-galeria",
      en: "back-tattoos-for-women-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-espalda-mujer/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 67,
  },
  {
    id: "gallery-tatuajes-minimalistas",
    slugs: {
      es: "tatuajes-minimalistas-galeria",
      en: "minimalist-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-minimalistas/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 68,
  },
  {
    id: "gallery-tatuajes-cuello-hombres",
    slugs: {
      es: "tatuajes-en-el-cuello-para-hombres-galeria",
      en: "neck-tattoos-for-men-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-cuello-hombres/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 69,
  },
  {
    id: "gallery-tatuajes-hombres-pierna",
    slugs: {
      es: "tatuajes-para-hombres-en-la-pierna-galeria",
      en: "mens-leg-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-hombres-pierna/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 70,
  },
  {
    id: "gallery-tatuajes-elegantes-mujeres",
    slugs: {
      es: "tatuajes-elegantes-para-mujeres-galeria",
      en: "elegant-tattoos-for-women-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-elegantes-mujeres/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 71,
  },
  {
    id: "gallery-tatuajes-bonitos-mujer",
    slugs: {
      es: "tatuajes-bonitos-para-mujer-galeria",
      en: "pretty-tattoos-for-women-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-bonitos-mujer/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 72,
  },
  {
    id: "gallery-tatuajes-mujer-muneca",
    slugs: {
      es: "tatuajes-para-mujer-en-la-muneca-galeria",
      en: "womens-wrist-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-mujer-muneca/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 73,
  },
  {
    id: "gallery-tatuajes-pequenos-amigas",
    slugs: {
      es: "tatuajes-pequenos-para-amigas-galeria",
      en: "small-friendship-tattoos-gallery-inspiration",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-amigas/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 74,
  },
  {
    id: "gallery-tatuajes-cuello-mujer",
    slugs: {
      es: "tatuajes-en-el-cuello-para-mujer-galeria",
      en: "neck-tattoos-for-women-gallery",
    },
    image: "/img/portfolio-blog/galleries/gallery-tatuajes-cuello-mujer/01.jpg",
    date: {
      es: "15 de abril de 2026",
      en: "April 15, 2026",
    },
    label: {
      es: "Galería",
      en: "Gallery",
    },
    published: true,
    order: 75,
  },
];

/**
 * Obtiene un post del registro por su ID
 * @param {string} id - ID del post
 * @returns {Object|null} - Post o null si no existe
 */
export function getPostById(id) {
  return blogPostsRegistry.find((post) => post.id === id) || null;
}

/**
 * Obtiene un post del registro por su slug en un idioma específico
 * @param {string} slug - Slug del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Object|null} - Post o null si no existe
 */
export function getPostBySlug(slug, locale) {
  return blogPostsRegistry.find((post) => post.slugs[locale] === slug) || null;
}

/**
 * Obtiene todos los posts publicados ordenados
 * @returns {Array} - Array de posts ordenados por `order`
 */
export function getAllPublishedPosts() {
  return blogPostsRegistry
    .filter((post) => post.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene el slug en inglés (carpeta física) desde cualquier slug
 * @param {string} slug - Slug en cualquier idioma
 * @returns {string|null} - Slug en inglés o null si no se encuentra
 */
export function getEnglishSlug(slug) {
  const post = blogPostsRegistry.find(
    (p) => p.slugs.es === slug || p.slugs.en === slug,
  );
  return post ? post.slugs.en : null;
}

/**
 * Obtiene el slug correspondiente en el idioma de destino
 * @param {string} currentSlug - Slug actual
 * @param {string} targetLocale - Idioma de destino ('es' o 'en')
 * @returns {string|null} - Slug en el idioma de destino o null
 */
export function getSlugForLocale(currentSlug, targetLocale) {
  const post = blogPostsRegistry.find(
    (p) => p.slugs.es === currentSlug || p.slugs.en === currentSlug,
  );
  return post ? post.slugs[targetLocale] : null;
}
