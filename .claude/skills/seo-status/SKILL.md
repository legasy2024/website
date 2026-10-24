---
name: seo-status
description: Evalúa el "status" de calidad SEO de un artículo del blog de Legassy Studio contra 30 factores (EEAT, intención de búsqueda, interlinking, on-page, contenido, conversión, técnico) y devuelve un score 0-100 con veredicto y correcciones. Usar cuando el usuario pida "status", "auditar", "revisar SEO" o "¿cumple?" de un post del blog, o antes de publicar uno nuevo.
---

# SEO Status — Auditoría de calidad de artículos del blog

Determina si un post cumple al 100% con el estándar SEO de Legassy Studio (estudio de tatuajes en Cali, Colombia; público local + turistas de tatuaje; sitio bilingüe es/en).

## Dónde vive el contenido

- Posts: `content/blog/posts/<id>.json` → `translations.es` y `translations.en` (`title`, `slug`, `date`, `dateModified`, `excerpt`, `seo.{title,description,keywords,canonical}`, `contentHtml`, `faq`, `author`, `cta`, `gallery`).
- `faq`: array `[{ "q", "a" }]`. Se renderiza al final del artículo y genera el schema `FAQPage`. No pongas FAQs dentro de `contentHtml`.
- `author` (opcional): `{ "name", "jobTitle", "url" }`. Si existe, se muestra junto a la fecha y se usa como `Person` en el schema; si no, el autor es la organización.
- Respuesta directa: el primer párrafo va marcado con `<!-- answer -->` al inicio de `contentHtml`.
- Interlinking: bloque `<!-- related:start -->…<!-- related:end -->` generado por `node scripts/blog-interlinking.js` (idempotente). Re-ejecútalo al publicar o editar posts.
- Schema JSON-LD: `lib/blogSchema.js` (BlogPosting + BreadcrumbList + FAQPage).
- Registro: `content/blog/posts-registry.js` (slugs, publicado, orden).
- Render/metadata: `app/[locale]/blog/[slug]/page.jsx`.
- URL pública: `https://www.legassystudio.com/{es|en}/blog/{slug}`.

## Flujo

1. Identifica el post (por id, slug o título). Si el usuario dice "todos", audita cada post y entrega una tabla resumen ordenada por score ascendente.
2. Ejecuta las métricas automáticas:
   ```bash
   node .claude/skills/seo-status/scripts/seo-metrics.js <id> [es|en]
   ```
   Sin idioma evalúa ambos. Esto da conteos objetivos (palabras, enlaces, headings, alts, longitudes meta, keyword en primeras 100 palabras, etc.). No adivines lo que el script mide.
3. Lee el `contentHtml` completo y evalúa los factores cualitativos (EEAT, intención, calidad) con criterio de editor SEO.
4. Puntúa los 30 factores y entrega el reporte en el formato de salida.
5. Si el usuario lo pide, aplica las correcciones directamente en el JSON (ambos idiomas, manteniendo paridad).

## Puntuación

Cada factor vale **0 (no cumple), 1 (parcial) o 2 (cumple)** × su peso. Peso: **Crítico ×3, Alto ×2, Normal ×1**.
Score = puntos obtenidos / puntos posibles × 100.

| Status | Condición |
|---|---|
| 🟢 **100% — Aprobado** | Score ≥ 95 **y** ningún factor crítico en 0 o 1 |
| 🟡 **Mejorable** | Score 75–94, o algún crítico en 1 |
| 🔴 **No cumple** | Score < 75, o cualquier crítico en 0 |

Un post solo está "al 100%" con status 🟢.

## Los 30 factores

### A. Intención de búsqueda (respuesta inmediata)
1. **Keyword principal definida** (Crítico) — Existe una keyword foco clara (primer elemento de `seo.keywords` o la deducible del título) y coincide con lo que el post resuelve.
2. **Respuesta en las primeras palabras** (Crítico) — El primer párrafo (≤ 60 palabras) responde directamente la pregunta/intención de búsqueda. Nada de introducciones genéricas ("En el mundo del tatuaje…"). Si alguien solo lee el primer párrafo, ya obtiene la respuesta.
3. **Keyword en las primeras 100 palabras** (Alto) — La keyword foco (o variante cercana: `keywordTermsInFirst100`) aparece en las primeras 100 palabras.
4. **Tipo de intención correcto** (Alto) — El formato coincide con la intención: informacional → guía/explicación; comercial → comparativa/criterios; transaccional → precio/reserva; local → Cali, ubicación, cómo llegar.
5. **Cobertura de subintenciones / People Also Ask** (Normal) — Responde las preguntas relacionadas típicas (precio, dolor, duración, cuidados, riesgos, según aplique).

### B. EEAT (Experiencia, Expertise, Autoridad, Confianza)
6. **Experiencia de primera mano** (Crítico) — Contiene evidencia de experiencia real del estudio: casos, "en nuestro estudio vemos…", procesos propios, fotos de trabajos reales (galería o imágenes propias), detalles que solo un tatuador sabe.
7. **Autor identificable con credenciales** (Alto) — Se nombra al artista/autor con su experiencia (años, especialidad) o hay bloque de autor. "Legassy Studio" genérico = parcial.
8. **Expertise técnico preciso** (Alto) — Información técnica correcta y específica (agujas, tintas, tiempos de cicatrización, capas de piel), sin errores ni vaguedades.
9. **Fuentes y citas externas autorizadas** (Normal) — En temas de salud/seguridad (cicatrización, donación de sangre, láser, embarazo) cita fuentes fiables (OMS, dermatología, Cruz Roja, estudios). Enlaces externos con `rel` apropiado.
10. **Señales de confianza** (Alto) — Datos NAP coherentes (Cali, teléfono), normas de bioseguridad/higiene, testimonios o reseñas, disclaimers médicos cuando aplique.
11. **Fecha y frescura** (Normal) — Fecha presente; datos, precios y años vigentes (sin referencias desactualizadas; si dice "2025" y estamos en 2026, revisar).
12. **Honestidad y equilibrio** (Normal) — Menciona limitaciones, riesgos o cuándo NO conviene algo (no solo venta). Contenido "people-first", no escrito para buscadores.

### C. Interlinking y enlaces
13. **Enlaces internos a otros posts** (Crítico) — Mínimo 3 enlaces contextuales a otros artículos del blog relevantes, con URLs del mismo idioma (`/es/blog/...` en es, `/en/blog/...` en en) y slugs que existan en el registro.
14. **Enlace a páginas de dinero** (Alto) — Al menos 1 enlace a página comercial (servicios, estilos, artistas, contacto/reserva, galería) del sitio.
15. **Anchor text descriptivo** (Alto) — Anchors con palabras clave/descriptivos; cero "clic aquí", "aquí", "este artículo". Anchors variados, no todos exact-match.
16. **Sin enlaces rotos ni cruzados de idioma** (Crítico) — Todos los enlaces internos resuelven a slugs existentes y publicados; ningún post en español enlaza a /en/ ni viceversa (salvo intencional).
17. **Post enlazado desde otros (backlinks internos)** (Normal) — Al menos 2 posts del blog enlazan a este (no huérfano). El script lo cuenta.

### D. On-page y metadatos
18. **SEO title optimizado** (Alto) — 30–60 caracteres, keyword al inicio, atractivo para CTR, único en el sitio.
19. **Meta description** (Alto) — 120–160 caracteres, incluye keyword, beneficio y llamada implícita a la acción.
20. **Slug limpio** (Normal) — Corto (≤ 6–7 palabras), con keyword, sin stopwords innecesarias, sin fechas, en el idioma correspondiente. **Solo para posts nuevos**: no cambies el slug de un post publicado (rompe URLs indexadas y enlaces externos); márcalo como parcial y sigue.
21. **Estructura de encabezados** (Alto) — Sin H1 dentro de `contentHtml` (lo pone la plantilla); ≥ 3 H2; jerarquía H2→H3 sin saltos; keyword o variantes en al menos un H2.
22. **Canonical correcto** (Crítico) — `seo.canonical` coincide exactamente con `https://www.legassystudio.com/{lang}/blog/{slug}`.
23. **Imágenes optimizadas** (Normal) — Todas las imágenes con `alt` descriptivo (keyword donde sea natural); imagen principal presente; formatos ligeros.

### E. Calidad y profundidad del contenido
24. **Extensión y profundidad** (Alto) — ≥ 900 palabras para guías/informativos (≥ 400 para galerías, contando descripciones de la galería y FAQ: usa `wordCountWithFaqAndGallery`), cubriendo el tema mejor que el top 3 de Google; sin relleno.
25. **Legibilidad y escaneabilidad** (Normal) — Párrafos ≤ 4 líneas, listas, tablas o negritas para datos clave; frases claras.
26. **Bloque FAQ** (Normal) — Campo `faq` con 3–6 preguntas y respuestas directas, apto para fragmentos destacados/AI Overviews.
27. **SEO local** (Alto) — Menciona Cali/Colombia (y barrio/zona si aplica) de forma natural; relevante para búsquedas locales y de turistas.

### F. Conversión, internacional y técnico
28. **CTA claro y contextual** (Alto) — CTA de WhatsApp con mensaje prellenado específico del tema + CTA secundario (Instagram/galería); CTA intermedio en el cuerpo para posts largos.
29. **Paridad bilingüe / hreflang** (Alto) — Existen versiones es y en equivalentes en contenido (no traducción literal pobre), keywords adaptadas a cada mercado, slugs propios por idioma.
30. **Datos estructurados (Schema)** (Alto) — La página emite JSON-LD `BlogPosting` (autor, `datePublished`/`dateModified`, imagen, publisher), `BreadcrumbList` y `FAQPage` si hay `faq`. Lo genera `lib/blogSchema.js`; verifica que la fecha del post sea parseable a ISO y, si se edita el contenido, actualiza `dateModified`.

## Formato de salida

```
# SEO Status: <título> (<id>) — <lang>
Status: 🟢/🟡/🔴  |  Score: NN/100  |  Críticos fallidos: N

| # | Factor | Peso | Nota (0-2) | Evidencia / Problema |
|---|--------|------|-----------|----------------------|
...30 filas...

## Correcciones prioritarias
1. [Crítico] … (qué cambiar exactamente, con texto propuesto si aplica)
2. …

## Quick wins (< 5 min)
- …
```

Reglas del reporte:
- Cada nota debe tener evidencia concreta (cita corta del texto, número del script). Sin evidencia → no puntúes 2.
- Ordena las correcciones por impacto (críticos primero).
- Para el factor 2, propone un primer párrafo reescrito si no cumple.
- Para el factor 13, sugiere los posts concretos (id + slug del registro) a enlazar y el anchor.
- Si se audita es y en, entrega un reporte por idioma o una tabla con dos columnas de nota.
