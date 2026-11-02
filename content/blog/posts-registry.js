/**
 * Registro centralizado de todos los posts del blog
 *
 * Este archivo es la única fuente de verdad para:
 * - Slugs en cada idioma
 * - Metadatos básicos (imagen, fecha, label)
 * - Categoría (`category`: id de content/blog/categories.js)
 * - Orden de los posts
 * - Estado de publicación
 *
 * IMPORTANTE: El campo `id` es inmutable y nunca debe cambiar.
 * Los slugs pueden cambiar si es necesario, pero el ID permanece igual.
 */

const blogPostsRegistry = [
  {
    "id": "definitive-guide",
    "category": "guides",
    "slugs": {
      "es": "guia-definitiva-donde-tatuarse-en-cali",
      "en": "definitive-guide-on-where-to-tattoo-en-cali"
    },
    "image": "/img/6.png",
    "date": {
      "es": "08 de abril de 2025",
      "en": "April 08, 2025"
    },
    "label": {
      "es": "Guía Local",
      "en": "Local Guide"
    },
    "published": true,
    "order": 1
  },
  {
    "id": "travel-reasons",
    "category": "tourism",
    "slugs": {
      "es": "razones-para-viajar-a-colombia-por-tu-proximo-tatuaje",
      "en": "reason-to-travel-to-colombia-for-your-next-tattoo"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "14 de abril de 2025",
      "en": "April 14, 2025"
    },
    "label": {
      "es": "Viajes",
      "en": "Travel"
    },
    "published": true,
    "order": 2
  },
  {
    "id": "english-speaking",
    "category": "tourism",
    "slugs": {
      "es": "artistas-de-tatuajes-que-hablan-ingles-en-cali",
      "en": "english-speaking-tattoo-artists-in-cali-colombia"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "17 de abril de 2025",
      "en": "April 17, 2025"
    },
    "label": {
      "es": "Internacional",
      "en": "International"
    },
    "published": true,
    "order": 3
  },
  {
    "id": "cali-creative-city",
    "category": "tourism",
    "slugs": {
      "es": "cali-el-auge-de-una-ciudad-creativa-para-extranjeros",
      "en": "cali-tattoo-scene-for-foreigners"
    },
    "image": "/img/3.png",
    "date": {
      "es": "25 de abril de 2025",
      "en": "April 25, 2025"
    },
    "label": {
      "es": "Turismo",
      "en": "Tourism"
    },
    "published": true,
    "order": 4
  },
  {
    "id": "prices-comparison",
    "category": "tourism",
    "slugs": {
      "es": "precios-de-tatuajes-en-colombia-vs-eeuu",
      "en": "tattoo-prices-colombia-vs-usa"
    },
    "image": "/img/blog/post5.jpg",
    "date": {
      "es": "25 de abril de 2025",
      "en": "April 25, 2025"
    },
    "label": {
      "es": "Precios",
      "en": "Prices"
    },
    "published": true,
    "order": 5
  },
  {
    "id": "inclusive-studios",
    "category": "guides",
    "slugs": {
      "es": "estudios-de-tatuajes-inclusivos-en-colombia",
      "en": "inclusive-tattoo-studios-in-colombia"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "25 de abril de 2025",
      "en": "April 25, 2025"
    },
    "label": {
      "es": "Inclusión",
      "en": "Inclusion"
    },
    "published": true,
    "order": 6
  },
  {
    "id": "remote-process",
    "category": "tourism",
    "slugs": {
      "es": "proceso-de-trabajo-con-artistas-colombianos-a-distancia",
      "en": "remote-tattoo-process-colombia-from-usa"
    },
    "image": "/img/blog/post7.jpg",
    "date": {
      "es": "29 de abril de 2025",
      "en": "April 29, 2025"
    },
    "label": {
      "es": "Proceso",
      "en": "Process"
    },
    "published": true,
    "order": 7
  },
  {
    "id": "history",
    "category": "guides",
    "slugs": {
      "es": "historia-del-arte-del-tatuaje-en-colombia",
      "en": "history-of-tattoo-art-in-colombia"
    },
    "image": "/img/14.png",
    "date": {
      "es": "30 de abril de 2025",
      "en": "April 30, 2025"
    },
    "label": {
      "es": "Historia",
      "en": "History"
    },
    "published": true,
    "order": 8
  },
  {
    "id": "fine-line-durability",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-de-linea-fina-en-cali-durabilidad-del-trazo",
      "en": "fine-line-tattoos-in-cali-durability"
    },
    "image": "/img/blog/post1.png",
    "date": {
      "es": "31 de enero de 2026",
      "en": "January 31, 2026"
    },
    "label": {
      "es": "Línea fina",
      "en": "Fine line"
    },
    "published": true,
    "order": 9
  },
  {
    "id": "tattoo-healing-mistakes",
    "category": "aftercare",
    "slugs": {
      "es": "7-errores-que-arruinan-la-curacion-de-tu-tatuaje",
      "en": "7-mistakes-that-ruin-your-tattoo-healing"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "31 de enero de 2026",
      "en": "January 31, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 10
  },
  {
    "id": "tattoo-healing-time",
    "category": "aftercare",
    "slugs": {
      "es": "cuanto-tarda-en-cicatrizar-un-tatuaje-segun-tamano-y-zona",
      "en": "how-long-does-a-tattoo-take-to-heal-size-and-placement"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "12 de febrero de 2026",
      "en": "February 12, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 11
  },
  {
    "id": "tattoo-care-step-by-step",
    "category": "aftercare",
    "slugs": {
      "es": "cuidados-del-tatuaje-paso-a-paso-guia-completa",
      "en": "tattoo-care-step-by-step-complete-guide"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 12
  },
  {
    "id": "tattoo-healing-signs",
    "category": "aftercare",
    "slugs": {
      "es": "senales-normales-y-senales-de-alerta-durante-la-cicatrizacion",
      "en": "normal-signs-and-warning-signs-during-tattoo-healing"
    },
    "image": "/img/blog/post7.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 13
  },
  {
    "id": "tattoo-aftercare-products",
    "category": "aftercare",
    "slugs": {
      "es": "productos-recomendados-para-cuidar-un-tatuaje-recien-hecho",
      "en": "recommended-products-for-new-tattoo-care"
    },
    "image": "/img/blog/post8.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 14
  },
  {
    "id": "tattoo-sun-protection",
    "category": "aftercare",
    "slugs": {
      "es": "como-proteger-un-tatuaje-del-sol-sin-danar-la-tinta",
      "en": "how-to-protect-tattoo-from-sun-without-damaging-ink"
    },
    "image": "/img/blog/post1.png",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 15
  },
  {
    "id": "tattoo-color-loss",
    "category": "aftercare",
    "slugs": {
      "es": "que-hacer-si-tu-tatuaje-pierde-color-durante-la-cicatrizacion",
      "en": "what-to-do-if-tattoo-loses-color-during-healing"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 16
  },
  {
    "id": "tattoo-sleeping-guide",
    "category": "aftercare",
    "slugs": {
      "es": "como-dormir-despues-de-hacerte-un-tatuaje-sin-danarlo",
      "en": "how-to-sleep-after-getting-tattoo-without-damaging-it"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 17
  },
  {
    "id": "tattoo-exercise-guide",
    "category": "aftercare",
    "slugs": {
      "es": "se-puede-hacer-ejercicio-despues-de-tatuarse",
      "en": "can-you-exercise-after-getting-tattoo"
    },
    "image": "/img/blog/post4.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 18
  },
  {
    "id": "first-tattoo-guide",
    "category": "guides",
    "slugs": {
      "es": "todo-lo-que-debes-saber-antes-de-hacerte-un-tatuaje-por-primera-vez",
      "en": "everything-you-should-know-before-getting-your-first-tattoo"
    },
    "image": "/img/9.png",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 19
  },
  {
    "id": "choosing-tattoo-artist",
    "category": "guides",
    "slugs": {
      "es": "como-elegir-un-buen-tatuador-sin-dejarte-llevar-solo-por-el-precio",
      "en": "how-to-choose-good-tattoo-artist-without-price-only"
    },
    "image": "/img/5.png",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 20
  },
  {
    "id": "first-tattoo-session",
    "category": "guides",
    "slugs": {
      "es": "que-esperar-durante-tu-primera-sesion-de-tatuaje",
      "en": "what-to-expect-during-your-first-tattoo-session"
    },
    "image": "/img/10.png",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 21
  },
  {
    "id": "questions-before-tattoo",
    "category": "guides",
    "slugs": {
      "es": "preguntas-que-deberias-hacer-antes-de-tatuarte",
      "en": "questions-you-should-ask-before-getting-tattoo"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 22
  },
  {
    "id": "tattoo-longevity",
    "category": "guides",
    "slugs": {
      "es": "cuanto-dura-realmente-un-tatuaje-con-los-anos",
      "en": "how-long-does-tattoo-really-last-over-years"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 23
  },
  {
    "id": "professional-vs-amateur-studio",
    "category": "guides",
    "slugs": {
      "es": "diferencias-entre-un-estudio-profesional-de-tatuajes-y-uno-amateur",
      "en": "differences-between-professional-and-amateur-tattoo-studio"
    },
    "image": "/img/blog/post4.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 24
  },
  {
    "id": "tattoo-session-duration",
    "category": "guides",
    "slugs": {
      "es": "cuanto-tiempo-dura-una-sesion-de-tatuaje-segun-el-diseno",
      "en": "how-long-does-tattoo-session-last-depending-on-design"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 25
  },
  {
    "id": "tattoo-pain-guide",
    "category": "pain",
    "slugs": {
      "es": "duele-hacerse-un-tatuaje-guia-realista-sobre-dolor-zonas-y-sensaciones",
      "en": "does-getting-tattoo-hurt-realistic-guide-pain-zones-sensations"
    },
    "image": "/img/blog/post7.jpg",
    "date": {
      "es": "12 de febrero de 2026",
      "en": "February 12, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 26
  },
  {
    "id": "most-painful-tattoo-zones",
    "category": "pain",
    "slugs": {
      "es": "zonas-del-cuerpo-donde-mas-duele-tatuarse-ranking-real",
      "en": "most-painful-body-zones-for-tattoos-real-ranking"
    },
    "image": "/img/blog/post1.png",
    "date": {
      "es": "13 de febrero de 2026",
      "en": "February 13, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 27
  },
  {
    "id": "managing-pain-long-tattoo-session",
    "category": "pain",
    "slugs": {
      "es": "como-manejar-el-dolor-durante-una-sesion-de-tatuajes-larga",
      "en": "how-to-manage-pain-during-long-tattoo-session"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "14 de febrero de 2026",
      "en": "February 14, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 28
  },
  {
    "id": "tattoo-pain-by-skin-type",
    "category": "pain",
    "slugs": {
      "es": "cuanto-duele-tatuarse-segun-el-tipo-de-piel",
      "en": "how-much-does-tattooing-hurt-by-skin-type"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "15 de febrero de 2026",
      "en": "February 15, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 29
  },
  {
    "id": "relaxation-techniques-during-tattoo",
    "category": "pain",
    "slugs": {
      "es": "tecnicas-para-relajarte-mientras-te-estan-tatuando",
      "en": "relaxation-techniques-while-getting-tattooed"
    },
    "image": "/img/blog/post4.jpg",
    "date": {
      "es": "16 de febrero de 2026",
      "en": "February 16, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 30
  },
  {
    "id": "tattoo-pain-duration-after",
    "category": "pain",
    "slugs": {
      "es": "cuanto-dura-el-dolor-despues-de-tatuarse",
      "en": "how-long-does-tattoo-pain-last-after"
    },
    "image": "/img/blog/post8.jpg",
    "date": {
      "es": "17 de febrero de 2026",
      "en": "February 17, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 31
  },
  {
    "id": "tattoo-anesthesia-guide",
    "category": "pain",
    "slugs": {
      "es": "anestesia-para-tatuajes-funciona-realmente",
      "en": "tattoo-anesthesia-does-it-really-work"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "18 de febrero de 2026",
      "en": "February 18, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 32
  },
  {
    "id": "tattoo-design-aging-well",
    "category": "guides",
    "slugs": {
      "es": "como-saber-si-un-diseno-de-tatuaje-envejecera-bien",
      "en": "how-to-know-if-a-tattoo-design-will-age-well"
    },
    "image": "/img/blog/post5.jpg",
    "date": {
      "es": "01 de marzo de 2026",
      "en": "March 01, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 33
  },
  {
    "id": "tattoos-on-dark-skin-myths",
    "category": "guides",
    "slugs": {
      "es": "tatuajes-en-pieles-morenas-mitos-sobre-el-color-y-la-saturacion",
      "en": "tattoos-on-brown-and-dark-skin-myths-color-and-saturation"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "02 de marzo de 2026",
      "en": "March 02, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 34
  },
  {
    "id": "micro-tattoos-vs-small-tattoos",
    "category": "styles",
    "slugs": {
      "es": "micro-tatuajes-vs-tatuajes-pequenos-por-que-el-detalle-extremo-tiene-riesgos",
      "en": "micro-tattoos-vs-small-tattoos-why-extreme-detail-is-risky"
    },
    "image": "/img/blog/post8.jpg",
    "date": {
      "es": "03 de marzo de 2026",
      "en": "March 03, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 35
  },
  {
    "id": "choose-tattoo-style-personality-anatomy",
    "category": "guides",
    "slugs": {
      "es": "como-elegir-el-estilo-de-tatuaje-ideal-segun-tu-personalidad-y-anatomia",
      "en": "how-to-choose-the-right-tattoo-style-for-your-personality-and-anatomy"
    },
    "image": "/img/4.png",
    "date": {
      "es": "04 de marzo de 2026",
      "en": "March 04, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 36
  },
  {
    "id": "blackwork-vs-realism-technical-guide",
    "category": "styles",
    "slugs": {
      "es": "blackwork-vs-realismo-guia-visual-para-entender-las-diferencias-tecnicas",
      "en": "blackwork-vs-realism-a-clear-guide-to-technical-differences"
    },
    "image": "/img/1.png",
    "date": {
      "es": "05 de marzo de 2026",
      "en": "March 05, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 37
  },
  {
    "id": "tattoo-over-stretch-marks-scars-science",
    "category": "health",
    "slugs": {
      "es": "se-pueden-tapar-las-estrias-o-cicatrices-con-un-tatuaje-lo-que-dice-la-ciencia",
      "en": "can-you-cover-stretch-marks-or-scars-with-a-tattoo-what-science-says"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "06 de marzo de 2026",
      "en": "March 06, 2026"
    },
    "label": {
      "es": "Ciencia",
      "en": "Science"
    },
    "published": true,
    "order": 38
  },
  {
    "id": "tattoo-raised-years-later",
    "category": "aftercare",
    "slugs": {
      "es": "por-que-algunos-tatuajes-se-sienten-en-relieve-despues-de-anos",
      "en": "why-some-tattoos-feel-raised-years-later"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "07 de marzo de 2026",
      "en": "March 07, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 39
  },
  {
    "id": "tattoo-allergy-symptoms-causes",
    "category": "health",
    "slugs": {
      "es": "alergia-a-la-tinta-de-tatuaje-sintomas-causas-y-que-hacer-si-sucede",
      "en": "tattoo-ink-allergy-symptoms-causes-and-what-to-do"
    },
    "image": "/img/blog/post3.jpg",
    "date": {
      "es": "08 de marzo de 2026",
      "en": "March 08, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 40
  },
  {
    "id": "tattoo-over-moles-why-avoid",
    "category": "health",
    "slugs": {
      "es": "tatuarse-sobre-lunares-por-que-los-profesionales-siempre-los-evitan",
      "en": "tattooing-over-moles-why-professionals-avoid-it"
    },
    "image": "/img/blog/post4.jpg",
    "date": {
      "es": "09 de marzo de 2026",
      "en": "March 09, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 41
  },
  {
    "id": "tattoo-ink-lymphatic-system",
    "category": "health",
    "slugs": {
      "es": "que-pasa-con-la-tinta-de-los-tatuajes-en-el-sistema-linfatico-realidad-vs-ficcion",
      "en": "what-happens-to-tattoo-ink-in-the-lymphatic-system-reality-vs-fiction"
    },
    "image": "/img/blog/post5.jpg",
    "date": {
      "es": "10 de marzo de 2026",
      "en": "March 10, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 42
  },
  {
    "id": "tattoo-alcohol-caffeine-effects",
    "category": "health",
    "slugs": {
      "es": "el-efecto-del-alcohol-y-la-cafeina-en-la-sangre-durante-una-sesion-de-tatuaje",
      "en": "the-effect-of-alcohol-and-caffeine-on-your-blood-during-a-tattoo-session"
    },
    "image": "/img/blog/post6.jpg",
    "date": {
      "es": "11 de marzo de 2026",
      "en": "March 11, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 43
  },
  {
    "id": "tattoo-dermatitis-psoriasis-safety",
    "category": "health",
    "slugs": {
      "es": "es-seguro-tatuarse-si-tienes-dermatitis-o-psoriasis",
      "en": "is-it-safe-to-get-tattooed-if-you-have-dermatitis-or-psoriasis"
    },
    "image": "/img/blog/post7.jpg",
    "date": {
      "es": "12 de marzo de 2026",
      "en": "March 12, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 44
  },
  {
    "id": "tattoo-laser-hair-removal-same-area",
    "category": "health",
    "slugs": {
      "es": "tatuajes-y-depilacion-laser-por-que-nunca-deben-mezclarse-en-la-misma-zona",
      "en": "tattoos-and-laser-hair-removal-why-they-shouldnt-mix-in-the-same-area"
    },
    "image": "/img/blog/post1.png",
    "date": {
      "es": "13 de marzo de 2026",
      "en": "March 13, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 45
  },
  {
    "id": "pool-chlorine-effect-healed-tattoo",
    "category": "aftercare",
    "slugs": {
      "es": "como-afecta-el-cloro-de-la-piscina-a-un-tatuaje-ya-cicatrizado",
      "en": "how-pool-chlorine-affects-a-fully-healed-tattoo"
    },
    "image": "/img/blog/post2.jpg",
    "date": {
      "es": "13 de marzo de 2026",
      "en": "March 13, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 46
  },
  {
    "id": "flying-after-tattoo-travel-guide",
    "category": "tourism",
    "slugs": {
      "es": "guia-para-viajeros-puedo-volar-en-avion-inmediatamente-despues-de-tatuarme",
      "en": "traveler-guide-can-you-fly-immediately-after-getting-a-tattoo"
    },
    "image": "/img/11.png",
    "date": {
      "es": "13 de marzo de 2026",
      "en": "March 13, 2026"
    },
    "label": {
      "es": "Viajes",
      "en": "Travel"
    },
    "published": true,
    "order": 47
  },
  {
    "id": "blood-donation-after-tattoo-wait-time",
    "category": "health",
    "slugs": {
      "es": "donar-sangre-despues-de-un-tatuaje-cuanto-tiempo-hay-que-esperar-realmente",
      "en": "blood-donation-after-a-tattoo-how-long-should-you-really-wait"
    },
    "image": "/img/2.png",
    "date": {
      "es": "14 de marzo de 2026",
      "en": "March 14, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 48
  },
  {
    "id": "gym-training-with-new-tattoo",
    "category": "aftercare",
    "slugs": {
      "es": "como-entrenar-en-el-gimnasio-sin-estirar-la-piel-de-un-tatuaje-nuevo",
      "en": "how-to-train-at-the-gym-without-stretching-a-new-tattoo"
    },
    "image": "/img/12.png",
    "date": {
      "es": "14 de marzo de 2026",
      "en": "March 14, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 49
  },
  {
    "id": "tattoo-white-ink-yellowing",
    "category": "styles",
    "slugs": {
      "es": "por-que-los-tatuajes-blancos-suelen-volverse-amarillos-o-desaparecer",
      "en": "why-white-tattoos-often-turn-yellow-or-disappear"
    },
    "image": "/img/blog/tatuaje-blanco.jpg",
    "date": {
      "es": "15 de marzo de 2026",
      "en": "March 15, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 50
  },
  {
    "id": "tattoo-aftercare-creams-truth",
    "category": "aftercare",
    "slugs": {
      "es": "la-verdad-sobre-las-cremas-para-tatuajes-son-mejores-las-marcas-especializadas-o-la-vaselina",
      "en": "the-truth-about-tattoo-creams-are-specialized-brands-better-than-petroleum-jelly"
    },
    "image": "/img/blog/crema-tatuajes.jpg",
    "date": {
      "es": "15 de marzo de 2026",
      "en": "March 15, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 51
  },
  {
    "id": "tattoo-blowout-ink-spread",
    "category": "styles",
    "slugs": {
      "es": "que-es-el-blowout-en-un-tatuaje-y-por-que-se-expande-la-tinta-bajo-la-piel",
      "en": "what-is-blowout-in-a-tattoo-and-why-ink-spreads-under-the-skin"
    },
    "image": "/img/blog/blowout.jpg",
    "date": {
      "es": "15 de marzo de 2026",
      "en": "March 15, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 52
  },
  {
    "id": "reading-artist-portfolio-how-to",
    "category": "guides",
    "slugs": {
      "es": "como-leer-el-portafolio-de-un-artista-en-que-fijarse-mas-alla-de-los-seguidores",
      "en": "how-to-read-a-tattoo-artist-portfolio-what-to-look-at-beyond-followers"
    },
    "image": "/img/blog/como-leer-portafolio-artista.jpg",
    "date": {
      "es": "16 de marzo de 2026",
      "en": "March 16, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 53
  },
  {
    "id": "handpoke-vs-machine-tattoos",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-handpoke-vs-maquina-diferencias-en-dolor-duracion-y-estetica",
      "en": "handpoke-vs-machine-tattoos-differences-in-pain-longevity-and-aesthetics"
    },
    "image": "/img/13.png",
    "date": {
      "es": "16 de marzo de 2026",
      "en": "March 16, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 54
  },
  {
    "id": "arm-tattoo-gallery",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-el-brazo-para-hombres",
      "en": "arm-tattoos-gallery-ideas-and-recommendations"
    },
    "image": "/img/portfolio-blog/realismo-1.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 55
  },
  {
    "id": "gallery-tatuajes-para-hombres",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-para-hombres-galeria",
      "en": "mens-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-para-hombres/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 56
  },
  {
    "id": "gallery-tatuajes-para-mujeres",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-para-mujeres-galeria",
      "en": "womens-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-para-mujeres/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 57
  },
  {
    "id": "gallery-tatuajes-cuello",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-el-cuello-galeria",
      "en": "neck-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-cuello/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 58
  },
  {
    "id": "gallery-tatuajes-antebrazo",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-el-antebrazo-galeria",
      "en": "forearm-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-antebrazo/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 59
  },
  {
    "id": "gallery-tatuajes-espalda",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-la-espalda-galeria",
      "en": "back-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-espalda/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 60
  },
  {
    "id": "gallery-tatuajes-pareja",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-pareja-galeria",
      "en": "couple-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pareja/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 61
  },
  {
    "id": "gallery-tatuajes-mujer-brazo",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-para-mujer-en-el-brazo-galeria",
      "en": "womens-arm-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-mujer-brazo/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 62
  },
  {
    "id": "gallery-tatuajes-mano",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-la-mano-galeria",
      "en": "hand-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-mano/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 63
  },
  {
    "id": "gallery-tatuajes-pequenos-hombres",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-pequenos-para-hombres-galeria",
      "en": "small-tattoos-for-men-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-hombres/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 64
  },
  {
    "id": "gallery-tatuajes-pequenos-mujer",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-pequenos-para-mujer-galeria",
      "en": "small-tattoos-for-women-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-mujer/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 65
  },
  {
    "id": "gallery-tatuajes-pierna",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-la-pierna-galeria",
      "en": "leg-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pierna/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 66
  },
  {
    "id": "gallery-tatuajes-espalda-mujer",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-la-espalda-para-mujer-galeria",
      "en": "back-tattoos-for-women-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-espalda-mujer/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 67
  },
  {
    "id": "gallery-tatuajes-minimalistas",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-minimalistas-galeria",
      "en": "minimalist-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-minimalistas/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 68
  },
  {
    "id": "gallery-tatuajes-cuello-hombres",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-el-cuello-para-hombres-galeria",
      "en": "neck-tattoos-for-men-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-cuello-hombres/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 69
  },
  {
    "id": "gallery-tatuajes-hombres-pierna",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-para-hombres-en-la-pierna-galeria",
      "en": "mens-leg-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-hombres-pierna/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 70
  },
  {
    "id": "gallery-tatuajes-elegantes-mujeres",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-elegantes-para-mujeres-galeria",
      "en": "elegant-tattoos-for-women-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-elegantes-mujeres/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 71
  },
  {
    "id": "gallery-tatuajes-bonitos-mujer",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-bonitos-para-mujer-galeria",
      "en": "pretty-tattoos-for-women-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-bonitos-mujer/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 72
  },
  {
    "id": "gallery-tatuajes-mujer-muneca",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-para-mujer-en-la-muneca-galeria",
      "en": "womens-wrist-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-mujer-muneca/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 73
  },
  {
    "id": "gallery-tatuajes-pequenos-amigas",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-pequenos-para-amigas-galeria",
      "en": "small-friendship-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-amigas/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 74
  },
  {
    "id": "gallery-tatuajes-cuello-mujer",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-en-el-cuello-para-mujer-galeria",
      "en": "neck-tattoos-for-women-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-cuello-mujer/01.jpg",
    "date": {
      "es": "15 de abril de 2026",
      "en": "April 15, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 75
  },
  {
    "id": "gallery-manga-completa",
    "category": "gallery",
    "slugs": {
      "es": "tatuaje-manga-completa-galeria",
      "en": "full-sleeve-tattoo-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-manga-completa/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 200
  },
  {
    "id": "gallery-tatuajes-minis",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-minis-galeria",
      "en": "mini-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-minis/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 201
  },
  {
    "id": "gallery-tatuajes-tribal",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-estilo-tribal-galeria",
      "en": "tribal-style-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-tribal/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 202
  },
  {
    "id": "gallery-neo-tradicional",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-neo-tradicional-galeria",
      "en": "neo-traditional-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-neo-tradicional/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 203
  },
  {
    "id": "gallery-realismo",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-realismo-galeria",
      "en": "realism-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-realismo/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 204
  },
  {
    "id": "gallery-sombras-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-sombras-negro-gris-galeria",
      "en": "black-grey-shading-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-sombras-black-grey/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 205
  },
  {
    "id": "gallery-tatuajes-retratos",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-con-retratos-galeria",
      "en": "portrait-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-retratos/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 206
  },
  {
    "id": "gallery-tatuajes-color",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-a-color-galeria",
      "en": "color-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-color/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 207
  },
  {
    "id": "gallery-estilo-puntillismo",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-puntillismo-galeria",
      "en": "dotwork-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-estilo-puntillismo/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 208
  },
  {
    "id": "gallery-tatuajes-anime",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-de-anime-galeria",
      "en": "anime-tattoos-gallery-inspiration"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-anime/01.jpg",
    "date": {
      "es": "16 de mayo de 2026",
      "en": "May 16, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 209
  },
  {
    "id": "hidden-tattoos-work",
    "category": "guides",
    "slugs": {
      "es": "tatuajes-ocultos-mejores-zonas-cuerpo-trabajo",
      "en": "hidden-tattoos-best-body-areas-for-work"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-minimalistas/01.jpg",
    "date": {
      "es": "22 de julio de 2026",
      "en": "July 22, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 300
  },
  {
    "id": "first-large-tattoo-prep",
    "category": "pain",
    "slugs": {
      "es": "como-prepararte-noche-anterior-primer-tatuaje-grande",
      "en": "how-to-prepare-night-before-first-large-tattoo"
    },
    "image": "/img/portfolio-blog/galleries/gallery-manga-completa/01.jpg",
    "date": {
      "es": "23 de julio de 2026",
      "en": "July 23, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 301
  },
  {
    "id": "cover-c-section-scar-botanical",
    "category": "styles",
    "slugs": {
      "es": "tapar-cicatriz-cesarea-apendicitis-tatuaje-botanico",
      "en": "cover-c-section-appendicitis-scar-botanical-tattoo"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-bonitos-mujer/03.jpg",
    "date": {
      "es": "24 de julio de 2026",
      "en": "July 24, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 302
  },
  {
    "id": "micro-tattoos-couples-cali",
    "category": "gallery",
    "slugs": {
      "es": "microtatuajes-parejas-cali-disenos-discretos",
      "en": "micro-tattoos-couples-cali-discreet-designs"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pareja/01.jpg",
    "date": {
      "es": "25 de julio de 2026",
      "en": "July 25, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 303
  },
  {
    "id": "tattoos-couples-friends-valentines",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-novios-amigos-san-valentin-amor-amistad",
      "en": "tattoos-couples-friends-valentines-day"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pareja/02.jpg",
    "date": {
      "es": "26 de julio de 2026",
      "en": "July 26, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 304
  },
  {
    "id": "executive-tattoos-office",
    "category": "guides",
    "slugs": {
      "es": "tatuajes-ejecutivos-estilos-zonas-ropa-oficina",
      "en": "executive-tattoos-styles-areas-office-clothes"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-elegantes-mujeres/01.jpg",
    "date": {
      "es": "27 de julio de 2026",
      "en": "July 27, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 305
  },
  {
    "id": "small-tattoos-hidden-watch-shirt",
    "category": "guides",
    "slugs": {
      "es": "ideas-tatuajes-pequenos-zonas-escondidas",
      "en": "small-tattoo-ideas-hidden-watch-shirt"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-pequenos-hombres/01.jpg",
    "date": {
      "es": "28 de julio de 2026",
      "en": "July 28, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 306
  },
  {
    "id": "invisible-elegant-tattoos",
    "category": "guides",
    "slugs": {
      "es": "tatuajes-invisibles-elegantes-discretos",
      "en": "invisible-elegant-tattoos-discreet-placements"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-minimalistas/01.jpg",
    "date": {
      "es": "29 de julio de 2026",
      "en": "July 29, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 307
  },
  {
    "id": "tattoo-prep-24-hours-checklist",
    "category": "aftercare",
    "slugs": {
      "es": "checklist-24-horas-previas-preparar-sesion-tatuaje",
      "en": "24-hour-prep-checklist-for-long-tattoo-session"
    },
    "image": "/img/portfolio-blog/galleries/gallery-realismo/01.jpg",
    "date": {
      "es": "30 de julio de 2026",
      "en": "July 30, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 308
  },
  {
    "id": "transform-abdominoplasty-scar-botanical",
    "category": "styles",
    "slugs": {
      "es": "transforma-cicatriz-abdominoplastia-tatuaje-botanico",
      "en": "transform-abdominoplasty-scar-into-botanical-art"
    },
    "image": "/img/portfolio-blog/galleries/gallery-tatuajes-elegantes-mujeres/04.jpg",
    "date": {
      "es": "31 de julio de 2026",
      "en": "July 31, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 309
  },
  {
    "id": "gallery-realismo-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-realismo-black-grey-galeria",
      "en": "black-grey-realism-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/00.jpg",
    "date": {
      "es": "1 de agosto de 2026",
      "en": "August 1, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 310
  },
  {
    "id": "gallery-tatuajes-lobo-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-lobo-black-grey-galeria",
      "en": "wolf-black-grey-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/00.jpg",
    "date": {
      "es": "2 de agosto de 2026",
      "en": "August 2, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 311
  },
  {
    "id": "gallery-tatuajes-animales-salvajes",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-animales-salvajes-galeria",
      "en": "wild-animal-tattoos-realism-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/07.jpg",
    "date": {
      "es": "3 de agosto de 2026",
      "en": "August 3, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 312
  },
  {
    "id": "gallery-tatuajes-gorila-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-gorila-calavera-black-grey-galeria",
      "en": "gorilla-skull-black-grey-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/10.jpg",
    "date": {
      "es": "4 de agosto de 2026",
      "en": "August 4, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 313
  },
  {
    "id": "gallery-tatuajes-terror-cine",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-terror-cine-galeria-black-grey",
      "en": "horror-movie-tattoos-black-grey-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/13.jpg",
    "date": {
      "es": "5 de agosto de 2026",
      "en": "August 5, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 314
  },
  {
    "id": "gallery-tatuajes-samurai",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-samurai-galeria-black-grey",
      "en": "samurai-tattoos-black-grey-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/15.jpg",
    "date": {
      "es": "6 de agosto de 2026",
      "en": "August 6, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 315
  },
  {
    "id": "gallery-tatuajes-religiosos-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-religiosos-black-grey-galeria",
      "en": "religious-tattoos-black-grey-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/16.jpg",
    "date": {
      "es": "7 de agosto de 2026",
      "en": "August 7, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 316
  },
  {
    "id": "gallery-tatuajes-nativa-americana",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-mujer-nativa-americana-galeria",
      "en": "native-american-woman-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/18.jpg",
    "date": {
      "es": "8 de agosto de 2026",
      "en": "August 8, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 317
  },
  {
    "id": "gallery-tatuajes-zeus-fenix-sleeve",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-zeus-fenix-sleeve-galeria",
      "en": "zeus-phoenix-sleeve-tattoo-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/19.jpg",
    "date": {
      "es": "9 de agosto de 2026",
      "en": "August 9, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 318
  },
  {
    "id": "gallery-tatuajes-mitologia-griega",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-mitologia-griega-galeria",
      "en": "greek-mythology-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/20.jpg",
    "date": {
      "es": "10 de agosto de 2026",
      "en": "August 10, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 319
  },
  {
    "id": "gallery-tatuajes-egipcios-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-egipcios-black-grey-galeria",
      "en": "egyptian-mythology-tattoos-black-grey-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/21.jpg",
    "date": {
      "es": "11 de agosto de 2026",
      "en": "August 11, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 320
  },
  {
    "id": "gallery-tatuajes-retratos-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-retratos-black-grey-galeria",
      "en": "portrait-tattoos-black-grey-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/14.jpg",
    "date": {
      "es": "12 de agosto de 2026",
      "en": "August 12, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 321
  },
  {
    "id": "gallery-tatuajes-sleeve-black-grey",
    "category": "gallery",
    "slugs": {
      "es": "tatuajes-sleeve-black-grey-galeria",
      "en": "black-grey-sleeve-tattoos-gallery"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/15.jpg",
    "date": {
      "es": "13 de agosto de 2026",
      "en": "August 13, 2026"
    },
    "label": {
      "es": "Galería",
      "en": "Gallery"
    },
    "published": true,
    "order": 322
  },
  {
    "id": "tattoo-tourism-what-is-it",
    "category": "tourism",
    "slugs": {
      "es": "turismo-de-tatuajes-que-es-y-para-quien",
      "en": "tattoo-tourism-explained-what-it-is-and-who-its-for"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/19.jpg",
    "date": {
      "es": "15 de agosto de 2026",
      "en": "August 15, 2026"
    },
    "label": {
      "es": "Turismo",
      "en": "Tourism"
    },
    "published": true,
    "order": 323
  },
  {
    "id": "tattoo-trip-real-cost-breakdown",
    "category": "tourism",
    "slugs": {
      "es": "cuanto-cuesta-viaje-de-tatuajes-vuelos-hotel-tinta",
      "en": "real-cost-breakdown-tattoo-trip-flights-hotel-ink"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/20.jpg",
    "date": {
      "es": "16 de agosto de 2026",
      "en": "August 16, 2026"
    },
    "label": {
      "es": "Precios",
      "en": "Prices"
    },
    "published": true,
    "order": 324
  },
  {
    "id": "tattoo-tourism-red-flags",
    "category": "tourism",
    "slugs": {
      "es": "senales-de-alerta-turismo-tatuajes-estudio-a-evitar",
      "en": "tattoo-tourism-red-flags-studio-you-should-skip"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/15.jpg",
    "date": {
      "es": "18 de agosto de 2026",
      "en": "August 18, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 325
  },
  {
    "id": "best-countries-tattoo-tourism-2026",
    "category": "tourism",
    "slugs": {
      "es": "mejores-paises-turismo-tatuajes-2026-donde-queda-colombia",
      "en": "best-countries-tattoo-tourism-2026-where-colombia-ranks"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/18.jpg",
    "date": {
      "es": "19 de agosto de 2026",
      "en": "August 19, 2026"
    },
    "label": {
      "es": "Turismo",
      "en": "Tourism"
    },
    "published": true,
    "order": 326
  },
  {
    "id": "tattoo-collecting-every-country",
    "category": "tourism",
    "slugs": {
      "es": "coleccionistas-tatuajes-tinta-en-cada-pais",
      "en": "tattoo-collecting-why-people-get-ink-every-country-they-visit"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/21.jpg",
    "date": {
      "es": "21 de agosto de 2026",
      "en": "August 21, 2026"
    },
    "label": {
      "es": "Experiencia",
      "en": "Experience"
    },
    "published": true,
    "order": 327
  },
  {
    "id": "first-time-tattoo-tourist-guide",
    "category": "tourism",
    "slugs": {
      "es": "guia-primer-turista-tatuaje-lee-antes-de-reservar",
      "en": "first-time-tattoo-tourist-read-this-before-booking"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/16.jpg",
    "date": {
      "es": "22 de agosto de 2026",
      "en": "August 22, 2026"
    },
    "label": {
      "es": "Guía",
      "en": "Guide"
    },
    "published": true,
    "order": 328
  },
  {
    "id": "tattoo-trip-duration-planning",
    "category": "tourism",
    "slugs": {
      "es": "cuanto-debe-durar-un-viaje-de-tatuajes-sesiones-vs-turismo",
      "en": "how-long-should-a-tattoo-trip-be-sessions-vs-sightseeing"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/17.jpg",
    "date": {
      "es": "24 de agosto de 2026",
      "en": "August 24, 2026"
    },
    "label": {
      "es": "Planificación",
      "en": "Planning"
    },
    "published": true,
    "order": 329
  },
  {
    "id": "tattoo-tourism-vs-local-studio",
    "category": "tourism",
    "slugs": {
      "es": "turismo-tatuaje-vs-estudio-local-comparacion-honesta",
      "en": "tattoo-tourism-vs-local-studio-honest-comparison"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/07.jpg",
    "date": {
      "es": "25 de agosto de 2026",
      "en": "August 25, 2026"
    },
    "label": {
      "es": "Comparativa",
      "en": "Comparison"
    },
    "published": true,
    "order": 330
  },
  {
    "id": "what-nobody-tells-you-tattoo-on-vacation",
    "category": "tourism",
    "slugs": {
      "es": "lo-que-nadie-te-dice-de-tatuarse-en-vacaciones",
      "en": "what-nobody-tells-you-about-getting-tattooed-on-vacation"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/14.jpg",
    "date": {
      "es": "27 de agosto de 2026",
      "en": "August 27, 2026"
    },
    "label": {
      "es": "Consejos",
      "en": "Advice"
    },
    "published": true,
    "order": 331
  },
  {
    "id": "colombia-tattoo-tourism-destination",
    "category": "tourism",
    "slugs": {
      "es": "turismo-de-tatuajes-que-es-y-porque-colombia-se-volvio-destino",
      "en": "tattoo-tourism-why-colombia-became-a-top-destination"
    },
    "image": "/img/portfolio-blog/galleries/gallery-nuevos-tatuajes/00.jpg",
    "date": {
      "es": "28 de agosto de 2026",
      "en": "August 28, 2026"
    },
    "label": {
      "es": "Turismo",
      "en": "Tourism"
    },
    "published": true,
    "order": 332
  },
  {
    "id": "tattoo-coverup-guide",
    "category": "styles",
    "slugs": {
      "es": "como-tapar-un-tatuaje-viejo-guia-completa-cover-up",
      "en": "tattoo-coverup-complete-guide-how-to-cover-old-tattoo"
    },
    "image": "/img/blog/coverup-guide.jpg",
    "date": {
      "es": "1 de septiembre de 2026",
      "en": "September 1, 2026"
    },
    "label": {
      "es": "Cover-up",
      "en": "Cover-up"
    },
    "published": true,
    "order": 333
  },
  {
    "id": "pet-portrait-tattoo-realism",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-de-mascotas-en-realismo-como-inmortalizar-a-tu-perro-o-gato",
      "en": "pet-portrait-tattoo-realism-how-to-immortalize-your-dog-or-cat"
    },
    "image": "/img/blog/pet-portrait.jpg",
    "date": {
      "es": "3 de septiembre de 2026",
      "en": "September 3, 2026"
    },
    "label": {
      "es": "Realismo",
      "en": "Realism"
    },
    "published": true,
    "order": 335
  },
  {
    "id": "microrealism-tattoo-guide",
    "category": "styles",
    "slugs": {
      "es": "microrealismo-tatuaje-que-es-como-funciona-cuanto-dura",
      "en": "micro-realism-tattoo-guide-what-it-is-how-it-works"
    },
    "image": "/img/blog/microrealism.jpg",
    "date": {
      "es": "4 de septiembre de 2026",
      "en": "September 4, 2026"
    },
    "label": {
      "es": "Técnica",
      "en": "Technique"
    },
    "published": true,
    "order": 336
  },
  {
    "id": "tattoo-touchup-when-needed",
    "category": "aftercare",
    "slugs": {
      "es": "retoque-de-tatuaje-cuando-es-necesario-y-cuanto-cuesta",
      "en": "tattoo-touch-up-when-needed-and-how-to-know"
    },
    "image": "/img/blog/touchup.jpg",
    "date": {
      "es": "5 de septiembre de 2026",
      "en": "September 5, 2026"
    },
    "label": {
      "es": "Cuidado",
      "en": "Aftercare"
    },
    "published": true,
    "order": 337
  },
  {
    "id": "coverup-vs-laser-when-to-use",
    "category": "styles",
    "slugs": {
      "es": "cover-up-vs-laser-cuando-conviene-aclarar-antes-de-tatuarse",
      "en": "cover-up-vs-laser-when-to-clarify-before-tattooing-again"
    },
    "image": "/img/blog/coverup-laser.jpg",
    "date": {
      "es": "6 de septiembre de 2026",
      "en": "September 6, 2026"
    },
    "label": {
      "es": "Cover-up",
      "en": "Cover-up"
    },
    "published": true,
    "order": 338
  },
  {
    "id": "tattoo-weight-change-gym",
    "category": "aftercare",
    "slugs": {
      "es": "que-le-pasa-a-un-tatuaje-si-subes-o-bajas-de-peso-o-aumentas-musculo",
      "en": "what-happens-to-tattoo-weight-change-muscle-gain"
    },
    "image": "/img/blog/weight-gym.jpg",
    "date": {
      "es": "7 de septiembre de 2026",
      "en": "September 7, 2026"
    },
    "label": {
      "es": "Curiosidades",
      "en": "Curiosities"
    },
    "published": true,
    "order": 339
  },
  {
    "id": "tattoo-design-process-reference",
    "category": "guides",
    "slugs": {
      "es": "como-pedir-un-tatuaje-original-referencias-pinterest-vs-diseno-propio",
      "en": "pinterest-vs-original-tattoo-design-how-to-communicate-your-idea"
    },
    "image": "/img/blog/design-reference.jpg",
    "date": {
      "es": "8 de septiembre de 2026",
      "en": "September 8, 2026"
    },
    "label": {
      "es": "Proceso",
      "en": "Process"
    },
    "published": true,
    "order": 340
  },
  {
    "id": "botanical-floral-tattoo-guide",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-botanicos-y-florales-guia-zonas-significado-estilos",
      "en": "botanical-floral-tattoo-guide-styles-areas-meaning"
    },
    "image": "/img/blog/botanical-floral.jpg",
    "date": {
      "es": "9 de septiembre de 2026",
      "en": "September 9, 2026"
    },
    "label": {
      "es": "Floral",
      "en": "Floral"
    },
    "published": true,
    "order": 341
  },
  {
    "id": "tattoo-fingers-hands-durability",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-en-dedos-y-manos-durabilidad-realidad-y-alternativas",
      "en": "finger-hand-tattoos-durability-truth-and-alternatives"
    },
    "image": "/img/blog/finger-hand.jpg",
    "date": {
      "es": "10 de septiembre de 2026",
      "en": "September 10, 2026"
    },
    "label": {
      "es": "Durabilidad",
      "en": "Durability"
    },
    "published": true,
    "order": 342
  },
  {
    "id": "tattoo-pregnancy-breastfeeding",
    "category": "health",
    "slugs": {
      "es": "tatuar-durante-embarazo-o-lactancia-que-dicen-los-expertos",
      "en": "tattoo-during-pregnancy-breastfeeding-expert-advice"
    },
    "image": "/img/blog/pregnancy-tattoo.jpg",
    "date": {
      "es": "11 de septiembre de 2026",
      "en": "September 11, 2026"
    },
    "label": {
      "es": "Salud",
      "en": "Health"
    },
    "published": true,
    "order": 343
  },
  {
    "id": "tattoo-price-cali",
    "category": "guides",
    "slugs": {
      "es": "cuanto-cuesta-un-tatuaje-en-cali",
      "en": "how-much-does-a-tattoo-cost-in-cali-colombia"
    },
    "image": "/img/portfolio-blog/realismo-cali/manga-elefante-tigre-realismo-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Precios",
      "en": "Prices"
    },
    "published": true,
    "order": 344
  },
  {
    "id": "realism-tattoos-cali",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-de-realismo-en-cali",
      "en": "realism-tattoos-in-cali-colombia"
    },
    "image": "/img/portfolio-blog/realismo-cali/manga-leon-realismo-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Realismo",
      "en": "Realism"
    },
    "published": true,
    "order": 345
  },
  {
    "id": "sleeves-large-tattoos-cali",
    "category": "styles",
    "slugs": {
      "es": "mangas-y-tatuajes-grandes-en-cali",
      "en": "sleeves-and-large-tattoos-in-cali-colombia"
    },
    "image": "/img/portfolio-blog/realismo-cali/manga-poseidon-flores-realismo-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Mangas",
      "en": "Sleeves"
    },
    "published": true,
    "order": 346
  },
  {
    "id": "small-minimalist-tattoos-cali",
    "category": "styles",
    "slugs": {
      "es": "tatuajes-pequenos-y-minimalistas-en-cali",
      "en": "small-and-minimalist-tattoos-in-cali-colombia"
    },
    "image": "/img/portfolio-blog/linea-fina-cali/corazon-anatomico-linea-fina-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Línea fina",
      "en": "Fine line"
    },
    "published": true,
    "order": 347
  },
  {
    "id": "first-tattoo-cali",
    "category": "guides",
    "slugs": {
      "es": "tu-primer-tatuaje-en-cali-paso-a-paso",
      "en": "your-first-tattoo-in-cali-step-by-step"
    },
    "image": "/img/portfolio-blog/linea-fina-cali/lettering-brazo-linea-fina-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Primer tatuaje",
      "en": "First tattoo"
    },
    "published": true,
    "order": 348
  },
  {
    "id": "tattoo-care-cali-climate",
    "category": "aftercare",
    "slugs": {
      "es": "como-cuidar-un-tatuaje-en-el-clima-de-cali",
      "en": "how-to-care-for-a-new-tattoo-in-cali-climate"
    },
    "image": "/img/portfolio-blog/realismo-cali/manga-leon-guerrero-realismo-cali.jpg",
    "date": {
      "es": "2 de noviembre de 2026",
      "en": "November 2, 2026"
    },
    "label": {
      "es": "Cuidados",
      "en": "Aftercare"
    },
    "published": true,
    "order": 349
  }
];

/**
 * Obtiene un post del registro por su ID
 * @param {string} id - ID del post
 * @returns {Object|null} - Post o null si no existe
 */
function getPostById(id) {
  return blogPostsRegistry.find((post) => post.id === id) || null;
}

/**
 * Obtiene un post del registro por su slug en un idioma específico
 * @param {string} slug - Slug del post
 * @param {string} locale - Idioma ('es' o 'en')
 * @returns {Object|null} - Post o null si no existe
 */
function getPostBySlug(slug, locale) {
  return blogPostsRegistry.find((post) => post.slugs[locale] === slug) || null;
}

/**
 * Obtiene todos los posts publicados ordenados
 * @returns {Array} - Array de posts ordenados por `order`
 */
function getAllPublishedPosts() {
  return blogPostsRegistry
    .filter((post) => post.published)
    // Mayor order = más reciente (aparece primero en el blog)
    .sort((a, b) => (b.order || 0) - (a.order || 0));
}

/**
 * Obtiene el slug en inglés (carpeta física) desde cualquier slug
 * @param {string} slug - Slug en cualquier idioma
 * @returns {string|null} - Slug en inglés o null si no se encuentra
 */
function getEnglishSlug(slug) {
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
function getSlugForLocale(currentSlug, targetLocale) {
  const post = blogPostsRegistry.find(
    (p) => p.slugs.es === currentSlug || p.slugs.en === currentSlug,
  );
  return post ? post.slugs[targetLocale] : null;
}

module.exports = {
  blogPostsRegistry,
  getPostById,
  getPostBySlug,
  getAllPublishedPosts,
  getEnglishSlug,
  getSlugForLocale
};
