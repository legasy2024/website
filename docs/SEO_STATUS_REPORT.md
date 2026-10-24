# SEO Status: auditoría del blog (2026-10-12)

Skill: `.claude/skills/seo-status`. 128 posts × 2 idiomas = 256 páginas. Score parcial sobre los 18 factores medibles por script (3, 13–24, 26–30).

## Antes / después
| | Antes | Después |
|---|---|---|
| Score medio | 53 | **92** |
| 🟢 Aprobados (≥95 sin críticos) | 0 | **84** |
| 🔴 No cumplen | 256 | **0** |

## Cambios aplicados
1. **Schema**: `lib/blogSchema.js` emite BlogPosting + BreadcrumbList + FAQPage en cada post (`app/[locale]/blog/[slug]/page.jsx`).
2. **Interlinking**: `scripts/blog-interlinking.js` añade 3–4 enlaces a posts relacionados + 1 a página comercial (portfolio/contact). 0 huérfanos, 260 URLs internas verificadas con 200.
3. **On-page**: 273 SEO titles reescritos o sin sufijo (todos 30–60 car., sin duplicados) y 131 meta descriptions reescritas (todas 120–160 car.). Keyword principal genérica ("tatuajes técnica") corregida en 15 posts.
4. **Contenido**: párrafo de respuesta directa en 73 posts × 2 idiomas, FAQ (3+ preguntas) en las 256 páginas (las 11 FAQs que estaban en el HTML se migraron al campo `faq`), `dateModified` actualizado.

## Fallos que quedan (páginas / 256)
| # | Factor | Fallan | Nota |
|---|---|---|---|
| 24 | Extensión mínima | 148 | Sobre todo galerías (100–260 palabras vs 400) |
| 20 | Slug corto | 117 | No se cambian slugs publicados a propósito |
| 21 | ≥3 H2 | 88 | Galerías: solo tienen el H2 de "Sigue leyendo" |
| 27 | Menciona Cali | 82 | Guías genéricas, sobre todo en EN |
| 3 | Keyword en primeras 100 | 67 | |
| 17 | ≥2 enlaces entrantes | 57 | Tienen 1 |
| 28 | CTA WhatsApp prellenado + IG | 20 | |

Pendiente de criterio humano (no medible por script): EEAT (autor con credenciales, factor 7) — ningún post tiene `author` todavía.

## Ranking por post
| Post | ES | EN | Palabras (es, con FAQ/galería) | Enlaces internos (es) | Enlaces entrantes |
|---|---|---|---|---|---|
| gallery-realismo-black-grey | 83 | 83 | 161 | 3 | 5 |
| gallery-tatuajes-egipcios-black-grey | 83 | 89 | 176 | 3 | 4 |
| gallery-tatuajes-elegantes-mujeres | 83 | 86 | 120 | 3 | 5 |
| gallery-tatuajes-lobo-black-grey | 83 | 89 | 164 | 3 | 8 |
| gallery-tatuajes-mitologia-griega | 83 | 83 | 160 | 3 | 2 |
| gallery-tatuajes-samurai | 83 | 83 | 171 | 3 | 5 |
| gallery-tatuajes-zeus-fenix-sleeve | 83 | 83 | 177 | 3 | 4 |
| gallery-tatuajes-hombres-pierna | 84 | 80 | 115 | 3 | 1 |
| gallery-tatuajes-pequenos-amigas | 84 | 86 | 112 | 3 | 1 |
| gallery-tatuajes-mujer-brazo | 86 | 80 | 118 | 3 | 8 |
| gallery-tatuajes-pequenos-hombres | 86 | 84 | 117 | 3 | 4 |
| gallery-tatuajes-anime | 86 | 86 | 109 | 3 | 3 |
| gallery-tatuajes-cuello-hombres | 86 | 86 | 123 | 3 | 2 |
| gallery-tatuajes-minis | 86 | 86 | 114 | 3 | 2 |
| gallery-tatuajes-bonitos-mujer | 87 | 86 | 120 | 3 | 1 |
| gallery-tatuajes-pareja | 87 | 86 | 120 | 3 | 1 |
| gallery-tatuajes-tribal | 87 | 86 | 123 | 3 | 1 |
| cali-creative-city | 87 | 89 | 420 | 4 | 2 |
| gallery-manga-completa | 87 | 89 | 124 | 3 | 1 |
| gallery-tatuajes-animales-salvajes | 87 | 87 | 167 | 3 | 1 |
| inclusive-studios | 87 | 87 | 321 | 3 | 1 |
| remote-process | 87 | 94 | 422 | 4 | 3 |
| tattoo-over-stretch-marks-scars-science | 87 | 91 | 789 | 3 | 1 |
| tattoo-prep-24-hours-checklist | 87 | 87 | 514 | 3 | 1 |
| gallery-tatuajes-mujer-muneca | 89 | 80 | 118 | 3 | 3 |
| gallery-tatuajes-para-hombres | 89 | 83 | 152 | 4 | 6 |
| gallery-tatuajes-para-mujeres | 89 | 83 | 149 | 4 | 7 |
| gallery-sombras-black-grey | 89 | 84 | 124 | 3 | 2 |
| gallery-neo-tradicional | 89 | 86 | 113 | 3 | 2 |
| gallery-tatuajes-antebrazo | 89 | 86 | 119 | 3 | 4 |
| gallery-tatuajes-color | 89 | 86 | 112 | 3 | 3 |
| gallery-tatuajes-cuello-mujer | 89 | 86 | 112 | 3 | 5 |
| gallery-tatuajes-espalda-mujer | 89 | 86 | 118 | 3 | 2 |
| gallery-tatuajes-espalda | 89 | 86 | 130 | 3 | 2 |
| gallery-tatuajes-mano | 89 | 86 | 117 | 3 | 5 |
| gallery-tatuajes-pierna | 89 | 86 | 116 | 3 | 2 |
| gallery-tatuajes-retratos | 89 | 86 | 116 | 3 | 2 |
| choose-tattoo-style-personality-anatomy | 89 | 89 | 729 | 3 | 3 |
| first-large-tattoo-prep | 89 | 93 | 543 | 3 | 2 |
| gallery-realismo | 89 | 89 | 112 | 3 | 2 |
| gallery-tatuajes-cuello | 89 | 89 | 137 | 3 | 7 |
| gallery-tatuajes-gorila-black-grey | 89 | 89 | 173 | 3 | 2 |
| gallery-tatuajes-nativa-americana | 89 | 89 | 167 | 3 | 3 |
| gallery-tatuajes-religiosos-black-grey | 89 | 89 | 176 | 3 | 2 |
| gallery-tatuajes-retratos-black-grey | 89 | 89 | 182 | 4 | 6 |
| gallery-tatuajes-sleeve-black-grey | 89 | 89 | 165 | 3 | 2 |
| gallery-tatuajes-terror-cine | 89 | 89 | 170 | 3 | 7 |
| hidden-tattoos-work | 89 | 89 | 566 | 3 | 6 |
| invisible-elegant-tattoos | 89 | 94 | 551 | 3 | 3 |
| small-tattoos-hidden-watch-shirt | 89 | 89 | 502 | 3 | 5 |
| gallery-tatuajes-minimalistas | 90 | 86 | 132 | 4 | 1 |
| flying-after-tattoo-travel-guide | 90 | 87 | 878 | 3 | 1 |
| tattoo-dermatitis-psoriasis-safety | 90 | 89 | 789 | 3 | 3 |
| tattoo-trip-duration-planning | 90 | 91 | 793 | 3 | 1 |
| gallery-tatuajes-pequenos-mujer | 91 | 86 | 114 | 3 | 3 |
| managing-pain-long-tattoo-session | 91 | 99 | 1996 | 4 | 2 |
| tattoo-alcohol-caffeine-effects | 91 | 94 | 820 | 3 | 5 |
| tattoo-coverup-guide | 91 | 91 | 969 | 3 | 1 |
| tattoo-fingers-hands-durability | 91 | 93 | 1104 | 3 | 1 |
| tattoo-touchup-when-needed | 91 | 91 | 980 | 3 | 1 |
| tattoo-trip-real-cost-breakdown | 91 | 93 | 805 | 3 | 1 |
| tattoo-design-aging-well | 93 | 89 | 900 | 4 | 2 |
| gallery-estilo-puntillismo | 93 | 90 | 112 | 3 | 1 |
| tattoos-on-dark-skin-myths | 93 | 91 | 797 | 3 | 1 |
| history | 93 | 93 | 332 | 3 | 1 |
| most-painful-tattoo-zones | 93 | 99 | 2047 | 4 | 3 |
| prices-comparison | 93 | 94 | 386 | 3 | 1 |
| tattoo-collecting-every-country | 93 | 94 | 815 | 3 | 1 |
| tattoo-pregnancy-breastfeeding | 93 | 94 | 1134 | 3 | 5 |
| tattoo-tourism-red-flags | 93 | 99 | 818 | 3 | 3 |
| travel-reasons | 93 | 99 | 2549 | 4 | 7 |
| transform-abdominoplasty-scar-botanical | 94 | 93 | 502 | 3 | 3 |
| blackwork-vs-realism-technical-guide | 94 | 96 | 734 | 3 | 4 |
| cover-c-section-scar-botanical | 94 | 94 | 514 | 3 | 7 |
| executive-tattoos-office | 94 | 94 | 577 | 4 | 5 |
| micro-tattoos-couples-cali | 94 | 94 | 511 | 3 | 7 |
| micro-tattoos-vs-small-tattoos | 94 | 94 | 782 | 3 | 3 |
| questions-before-tattoo | 94 | 100 | 1704 | 4 | 3 |
| tattoo-allergy-symptoms-causes | 94 | 96 | 740 | 3 | 2 |
| tattoo-over-moles-why-avoid | 94 | 97 | 737 | 3 | 6 |
| tattoos-couples-friends-valentines | 94 | 94 | 476 | 3 | 4 |
| pet-portrait-tattoo-realism | 96 | 89 | 1173 | 3 | 1 |
| english-speaking | 96 | 94 | 478 | 3 | 5 |
| tattoo-aftercare-creams-truth | 96 | 94 | 822 | 3 | 1 |
| tattoo-ink-lymphatic-system | 96 | 94 | 820 | 3 | 1 |
| coverup-vs-laser-when-to-use | 96 | 97 | 916 | 3 | 1 |
| pool-chlorine-effect-healed-tattoo | 96 | 96 | 953 | 3 | 1 |
| tattoo-design-process-reference | 96 | 96 | 1123 | 3 | 1 |
| tattoo-laser-hair-removal-same-area | 96 | 97 | 942 | 3 | 1 |
| tattoo-raised-years-later | 96 | 99 | 937 | 3 | 1 |
| tattoo-weight-change-gym | 96 | 96 | 1129 | 3 | 1 |
| gym-training-with-new-tattoo | 97 | 89 | 878 | 4 | 3 |
| tattoo-healing-time | 97 | 91 | 1211 | 3 | 3 |
| first-tattoo-guide | 97 | 93 | 1860 | 4 | 8 |
| tattoo-color-loss | 97 | 93 | 1901 | 4 | 4 |
| arm-tattoo-gallery | 97 | 94 | 189 | 3 | 9 |
| blood-donation-after-tattoo-wait-time | 97 | 94 | 893 | 3 | 3 |
| handpoke-vs-machine-tattoos | 97 | 94 | 882 | 3 | 2 |
| reading-artist-portfolio-how-to | 97 | 94 | 867 | 3 | 3 |
| tattoo-blowout-ink-spread | 97 | 94 | 909 | 3 | 2 |
| tattoo-white-ink-yellowing | 97 | 96 | 867 | 3 | 2 |
| botanical-floral-tattoo-guide | 97 | 97 | 912 | 3 | 1 |
| choosing-tattoo-artist | 97 | 99 | 1843 | 4 | 2 |
| colombia-tattoo-tourism-destination | 97 | 99 | 832 | 3 | 4 |
| fine-line-durability | 97 | 97 | 1222 | 3 | 1 |
| microrealism-tattoo-guide | 97 | 97 | 963 | 3 | 1 |
| professional-vs-amateur-studio | 97 | 100 | 1791 | 4 | 3 |
| tattoo-healing-mistakes | 97 | 100 | 1093 | 3 | 1 |
| tattoo-pain-guide | 97 | 99 | 1940 | 3 | 6 |
| tattoo-session-duration | 97 | 99 | 1771 | 4 | 6 |
| tattoo-sun-protection | 97 | 99 | 1930 | 4 | 2 |
| what-nobody-tells-you-tattoo-on-vacation | 97 | 99 | 816 | 3 | 1 |
| best-countries-tattoo-tourism-2026 | 99 | 93 | 872 | 3 | 4 |
| first-time-tattoo-tourist-guide | 99 | 93 | 848 | 4 | 5 |
| tattoo-longevity | 99 | 93 | 1927 | 5 | 5 |
| tattoo-aftercare-products | 99 | 94 | 1883 | 4 | 5 |
| tattoo-tourism-vs-local-studio | 99 | 97 | 820 | 3 | 1 |
| tattoo-tourism-what-is-it | 99 | 97 | 831 | 4 | 8 |
| first-tattoo-session | 99 | 99 | 1849 | 4 | 3 |
| tattoo-care-step-by-step | 99 | 100 | 1867 | 3 | 10 |
| tattoo-healing-signs | 99 | 99 | 1580 | 4 | 2 |
| tattoo-pain-by-skin-type | 99 | 99 | 1969 | 4 | 4 |
| tattoo-sleeping-guide | 99 | 99 | 1931 | 4 | 7 |
| definitive-guide | 100 | 93 | 1951 | 3 | 4 |
| relaxation-techniques-during-tattoo | 100 | 100 | 1946 | 4 | 2 |
| tattoo-anesthesia-guide | 100 | 100 | 2070 | 4 | 2 |
| tattoo-exercise-guide | 100 | 100 | 2056 | 4 | 8 |
| tattoo-pain-duration-after | 100 | 100 | 1975 | 4 | 5 |
