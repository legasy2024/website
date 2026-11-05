/**
 * Categorías del blog
 *
 * Cada post del registry (posts-registry.js) tiene un campo `category` con el `id` de una de estas.
 * Las categorías se muestran en el sidebar de /blog y tienen su propia página:
 *   /{locale}/blog/category/{slug}
 *
 * `seoTitle` es el <title> de esa página (orientado a búsqueda/conversión, ~60 caracteres).
 *
 * IMPORTANTE: el `id` es inmutable. Los slugs y nombres pueden cambiar.
 */

const blogCategories = [
  {
    id: "aftercare",
    name: { es: "Cuidado del tatuaje", en: "Tattoo aftercare" },
    slug: { es: "cuidado-del-tatuaje", en: "tattoo-aftercare" },
    seoTitle: {
      es: "Cuidado del tatuaje: cicatrización y consejos | Legassy",
      en: "Tattoo Aftercare: Healing Tips & Products | Legassy Studio",
    },
    description: {
      es: "Cicatrización, productos, sol, deporte y todo lo que necesitas para que tu tatuaje se mantenga como el primer día.",
      en: "Healing, products, sun, workouts and everything you need to keep your tattoo looking like day one.",
    },
  },
  {
    id: "guides",
    name: { es: "Guías y consejos", en: "Guides & advice" },
    slug: { es: "guias-y-consejos", en: "guides-and-advice" },
    seoTitle: {
      es: "Guía para tu primer tatuaje y consejos | Legassy Studio",
      en: "Tattoo Guides & Tips Before Getting Inked | Legassy Studio",
    },
    description: {
      es: "Primer tatuaje, cómo elegir artista, preguntas clave y decisiones antes de tatuarte.",
      en: "First tattoo, choosing an artist, key questions and decisions before getting tattooed.",
    },
  },
  {
    id: "pain",
    name: { es: "Dolor y experiencia", en: "Pain & experience" },
    slug: { es: "dolor-y-experiencia", en: "pain-and-experience" },
    seoTitle: {
      es: "¿Cuánto duele un tatuaje? Dolor por zonas | Legassy Studio",
      en: "Does a Tattoo Hurt? Pain by Placement | Legassy Studio",
    },
    description: {
      es: "Cuánto duele un tatuaje, cuáles son las zonas más sensibles y cómo vivir mejor tu sesión.",
      en: "How much it hurts, the most sensitive areas and how to get through your session.",
    },
  },
  {
    id: "health",
    name: { es: "Salud y ciencia", en: "Health & science" },
    slug: { es: "salud-y-ciencia", en: "health-and-science" },
    seoTitle: {
      es: "Tatuajes y salud: alergias, piel y embarazo | Legassy Studio",
      en: "Tattoos & Health: Allergies, Skin, Pregnancy | Legassy",
    },
    description: {
      es: "Alergias, condiciones de la piel, embarazo y lo que dice la ciencia sobre los tatuajes.",
      en: "Allergies, skin conditions, pregnancy and what science says about tattoos.",
    },
  },
  {
    id: "styles",
    name: { es: "Técnicas y estilos", en: "Techniques & styles" },
    slug: { es: "tecnicas-y-estilos", en: "techniques-and-styles" },
    seoTitle: {
      es: "Estilos de tatuaje: línea fina, realismo y más | Legassy",
      en: "Tattoo Styles: Fine Line, Realism & More | Legassy Studio",
    },
    description: {
      es: "Línea fina, realismo, microrrealismo, cover-ups y las técnicas detrás de cada estilo.",
      en: "Fine line, realism, micro-realism, cover-ups and the techniques behind each style.",
    },
  },
  {
    id: "tourism",
    name: { es: "Turismo y viajes", en: "Tourism & travel" },
    slug: { es: "turismo-y-viajes", en: "tourism-and-travel" },
    seoTitle: {
      es: "Tatuarte en Cali, Colombia: costos y viaje | Legassy Studio",
      en: "Get Tattooed in Cali, Colombia: Costs & Travel | Legassy",
    },
    description: {
      es: "Viajar para tatuarte: Cali, Colombia, costos reales y cómo planear tu viaje.",
      en: "Travelling for a tattoo: Cali, Colombia, real costs and how to plan your trip.",
    },
  },
  {
    id: "gallery",
    name: { es: "Galerías", en: "Galleries" },
    slug: { es: "galerias", en: "galleries" },
    seoTitle: {
      es: "Ideas de tatuajes: galerías por zona y estilo | Legassy",
      en: "Tattoo Ideas: Galleries by Placement & Style | Legassy",
    },
    description: {
      es: "Ideas y referencias reales de tatuajes por zona, estilo y temática para inspirar tu próximo diseño.",
      en: "Real tattoo ideas and references by placement, style and theme to inspire your next design.",
    },
  },
  {
    id: "academy",
    name: { es: "Academia", en: "Academy" },
    slug: { es: "academia-de-tatuaje", en: "tattoo-academy" },
    seoTitle: {
      es: "Aprender a tatuar en Cali: guías para tatuadores | Legassy",
      en: "Learn to Tattoo in Cali: Guides for New Artists | Legassy",
    },
    description: {
      es: "Cómo ser tatuador, aprender desde cero, elegir academia en Cali y construir tu carrera en el tatuaje.",
      en: "How to become a tattoo artist, learn from scratch, choose an academy in Cali and build your tattoo career.",
    },
  },
];

function getCategoryById(id) {
  return blogCategories.find((c) => c.id === id) || null;
}

function getCategoryBySlug(slug, locale) {
  return blogCategories.find((c) => c.slug[locale] === slug) || null;
}

module.exports = {
  blogCategories,
  getCategoryById,
  getCategoryBySlug,
};
