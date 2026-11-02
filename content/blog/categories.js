/**
 * Categorías del blog
 *
 * Cada post del registry (posts-registry.js) tiene un campo `category` con el `id` de una de estas.
 * Las categorías se muestran en el sidebar de /blog y tienen su propia página:
 *   /{locale}/blog/category/{slug}
 *
 * IMPORTANTE: el `id` es inmutable. Los slugs y nombres pueden cambiar.
 */

const blogCategories = [
  {
    id: "aftercare",
    name: { es: "Cuidado del tatuaje", en: "Tattoo aftercare" },
    slug: { es: "cuidado-del-tatuaje", en: "tattoo-aftercare" },
    description: {
      es: "Cicatrización, productos, sol, deporte y todo lo que necesitas para que tu tatuaje se mantenga como el primer día.",
      en: "Healing, products, sun, workouts and everything you need to keep your tattoo looking like day one.",
    },
  },
  {
    id: "guides",
    name: { es: "Guías y consejos", en: "Guides & advice" },
    slug: { es: "guias-y-consejos", en: "guides-and-advice" },
    description: {
      es: "Primer tatuaje, cómo elegir artista, preguntas clave y decisiones antes de tatuarte.",
      en: "First tattoo, choosing an artist, key questions and decisions before getting tattooed.",
    },
  },
  {
    id: "pain",
    name: { es: "Dolor y experiencia", en: "Pain & experience" },
    slug: { es: "dolor-y-experiencia", en: "pain-and-experience" },
    description: {
      es: "Cuánto duele, las zonas más sensibles y cómo vivir mejor tu sesión.",
      en: "How much it hurts, the most sensitive areas and how to get through your session.",
    },
  },
  {
    id: "health",
    name: { es: "Salud y ciencia", en: "Health & science" },
    slug: { es: "salud-y-ciencia", en: "health-and-science" },
    description: {
      es: "Alergias, condiciones de la piel, embarazo y lo que dice la ciencia sobre los tatuajes.",
      en: "Allergies, skin conditions, pregnancy and what science says about tattoos.",
    },
  },
  {
    id: "styles",
    name: { es: "Técnicas y estilos", en: "Techniques & styles" },
    slug: { es: "tecnicas-y-estilos", en: "techniques-and-styles" },
    description: {
      es: "Línea fina, realismo, microrrealismo, cover-ups y las técnicas detrás de cada estilo.",
      en: "Fine line, realism, micro-realism, cover-ups and the techniques behind each style.",
    },
  },
  {
    id: "tourism",
    name: { es: "Turismo y viajes", en: "Tourism & travel" },
    slug: { es: "turismo-y-viajes", en: "tourism-and-travel" },
    description: {
      es: "Viajar para tatuarte: Cali, Colombia, costos reales y cómo planear tu viaje.",
      en: "Travelling for a tattoo: Cali, Colombia, real costs and how to plan your trip.",
    },
  },
  {
    id: "gallery",
    name: { es: "Galerías", en: "Galleries" },
    slug: { es: "galerias", en: "galleries" },
    description: {
      es: "Ideas y referencias reales de tatuajes por zona, estilo y temática.",
      en: "Real tattoo ideas and references by placement, style and theme.",
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
