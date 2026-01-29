# Backlog de Refactorización del Blog - Por Fases

## Objetivo General
Simplificar la arquitectura del blog para que crear un nuevo post requiera solo:
1. Crear 2 archivos JSON (es/en) con el contenido
2. Añadir una entrada en el índice centralizado
3. Sin tocar componentes, rutas ni configuraciones adicionales

---

## FASE 1: Preparación e Infraestructura Base
**Objetivo:** Crear la nueva estructura de carpetas y el sistema de índice centralizado sin romper nada existente.

### Tareas

#### 1.1 Crear estructura de carpetas para contenido
- [ ] Crear carpeta `content/blog/` en la raíz del proyecto
- [ ] Crear subcarpetas `content/blog/posts/` para los JSONs individuales
- [ ] Documentar la estructura esperada en un README dentro de `content/blog/`

#### 1.2 Crear índice centralizado de posts
- [ ] Crear archivo `content/blog/index.js` o `content/blog/posts-registry.js`
- [ ] Definir estructura del registro:
  ```js
  {
    id: string,           // ID único e inmutable
    slugs: { es: string, en: string },
    image: string,        // Imagen para el card
    date: { es: string, en: string },
    label: { es: string, en: string }, // Categoría/tag
    published: boolean,   // Para ocultar posts en desarrollo
    order: number         // Para ordenar en el listado
  }
  ```
- [ ] Migrar los 9 posts existentes al nuevo formato de registro
- [ ] Validar que todos los slugs coinciden con los actuales

#### 1.3 Crear utilidades para leer contenido
- [ ] Crear `lib/blogContentLoader.js` con funciones:
  - `getBlogPostById(id, locale)` → carga el JSON del post
  - `getAllBlogPosts(locale)` → lista todos los posts desde el registro
  - `getBlogPostBySlug(slug, locale)` → busca por slug y devuelve contenido completo
- [ ] Manejar errores cuando un post no existe o falta traducción

#### 1.4 Crear componente genérico de artículo
- [ ] Crear `components/blog/BlogArticle/BlogArticle.jsx`
- [ ] Componente debe aceptar props:
  - `content` (objeto con title, date, contentHtml, etc.)
  - `locale`
- [ ] Renderizar con estructura mínima:
  - Header (label, título, fecha)
  - Imagen principal (si existe)
  - Contenido HTML (usar `dangerouslySetInnerHTML` o un parser)
  - CTAs al final (WhatsApp, Instagram)
- [ ] Aplicar animaciones mínimas (solo 1-2 `<motion.div>` contenedores)
- [ ] Usar clases Tailwind para estilos, sin JSX excesivo

#### 1.5 Crear template de JSON para nuevos posts
- [ ] Crear `content/blog/posts/_template.es.json`
- [ ] Crear `content/blog/posts/_template.en.json`
- [ ] Incluir todos los campos necesarios con ejemplos y comentarios
- [ ] Documentar cómo estructurar el `contentHtml`

---

## FASE 2: Migración de Posts Existentes
**Objetivo:** Convertir los posts actuales al nuevo formato JSON sin romper URLs existentes.

### Tareas

#### 2.1 Migrar posts que ya usan JSON
- [ ] Migrar `firstblog.json` → `content/blog/posts/definitive-guide.es.json` y `.en.json`
  - Convertir estructura anidada a `contentHtml` o mantener estructura si el componente genérico la soporta
- [ ] Migrar `secondblog.json` → `content/blog/posts/travel-reasons.es.json` y `.en.json`
- [ ] Verificar que los componentes `FirstBlog` y `SecondBlog` siguen funcionando (compatibilidad temporal)

#### 2.2 Migrar posts con contenido hardcodeado
- [ ] Extraer contenido de `ThirdBlog.jsx` → `content/blog/posts/english-speaking.es.json` y `.en.json`
- [ ] Extraer contenido de `SixthBlog.jsx` → `content/blog/posts/prices-comparison.es.json` y `.en.json`
- [ ] Extraer contenido de `SevenBlog.jsx` → `content/blog/posts/remote-process.es.json` y `.en.json`
- [ ] Extraer contenido de `EightBlog.jsx` → `content/blog/posts/history.es.json` y `.en.json`
- [ ] Extraer contenido de `FifithBlog.jsx` → `content/blog/posts/inclusive-studios.es.json` y `.en.json`
- [ ] Extraer contenido de `NinthBlog.jsx` → `content/blog/posts/fine-line-durability.es.json` y `.en.json`
- [ ] Extraer contenido de otros componentes si existen

#### 2.3 Validar contenido migrado
- [ ] Revisar que todos los textos están correctos en ambos idiomas
- [ ] Verificar que las imágenes referenciadas existen
- [ ] Validar que los links (WhatsApp, Instagram) están correctos
- [ ] Asegurar que el HTML generado es válido y seguro

---

## FASE 3: Ruta Dinámica y Componente Genérico
**Objetivo:** Crear la nueva ruta dinámica que use el sistema JSON y el componente genérico.

### Tareas

#### 3.1 Crear ruta dinámica única
- [ ] Crear `app/[locale]/blog/[slug]/page.jsx` (nueva ruta dinámica)
- [ ] Implementar `generateStaticParams()` para pre-renderizar todos los posts
- [ ] Implementar `generateMetadata()` usando datos del JSON
- [ ] Cargar contenido usando `getBlogPostBySlug(slug, locale)`
- [ ] Renderizar con `BlogArticle` + componentes comunes (DoYouWantToBe, BookConsult, etc.)

#### 3.2 Actualizar rewrites en next.config.mjs
- [ ] Generar rewrites dinámicamente desde `blogPosts` registry
- [ ] Mantener compatibilidad con URLs antiguas durante la transición
- [ ] Documentar cómo se generan los rewrites automáticamente

#### 3.3 Actualizar blogSlugMapping.js
- [ ] Refactorizar para que lea desde `blogPosts` registry en lugar de tener mapeos hardcodeados
- [ ] Mantener las mismas funciones públicas (`getSlugForLocale`, `getEnglishSlug`, `mapBlogUrl`)
- [ ] Eliminar duplicación de datos

#### 3.4 Actualizar BlogList y BlogCard
- [ ] Modificar `BlogList` para leer desde `getAllBlogPosts(locale)` en lugar de `posts.json`
- [ ] Actualizar `BlogCard` para usar los slugs del registro centralizado
- [ ] Mantener la misma UI/UX

---

## FASE 4: Actualizar Sistema de Traducciones
**Objetivo:** Integrar el nuevo sistema con el cambio de idioma existente.

### Tareas

#### 4.1 Actualizar LanguageChanger
- [ ] Verificar que `mapBlogUrl` funciona correctamente con el nuevo sistema
- [ ] Probar cambio de idioma en todas las URLs de blog
- [ ] Asegurar que los rewrites funcionan correctamente

#### 4.2 Actualizar posts.json (legacy)
- [ ] Generar `locales/es/posts.json` y `locales/en/posts.json` automáticamente desde el registro
- [ ] Crear script `scripts/generate-posts-json.js` que lea el registry y genere los JSONs
- [ ] Añadir script a `package.json` como `"generate:posts": "node scripts/generate-posts-json.js"`
- [ ] Documentar que estos archivos son generados automáticamente

---

## FASE 5: Testing y Validación
**Objetivo:** Asegurar que todo funciona correctamente antes de eliminar código legacy.

### Tareas

#### 5.1 Testing funcional
- [ ] Probar que todos los posts se renderizan correctamente en `/es/blog/[slug]`
- [ ] Probar que todos los posts se renderizan correctamente en `/en/blog/[slug]`
- [ ] Verificar que el listado de blog muestra todos los posts
- [ ] Probar cambio de idioma desde cualquier post
- [ ] Validar que los rewrites funcionan (slug ES → carpeta EN)
- [ ] Verificar que las imágenes se cargan correctamente
- [ ] Probar que los CTAs (WhatsApp, Instagram) funcionan

#### 5.2 Testing de SEO
- [ ] Verificar que los metadatos (title, description, canonical) son correctos
- [ ] Validar que las URLs canónicas apuntan correctamente
- [ ] Revisar que los alternates (hreflang) están bien configurados
- [ ] Probar con herramientas de SEO (Google Search Console, etc.)

#### 5.3 Testing de rendimiento
- [ ] Verificar que los posts se pre-renderizan correctamente (SSG)
- [ ] Medir tiempos de carga de páginas
- [ ] Validar que no hay regresiones de rendimiento

---

## FASE 6: Limpieza y Documentación
**Objetivo:** Eliminar código legacy y documentar el nuevo sistema.

### Tareas

#### 6.1 Eliminar código legacy
- [ ] Eliminar componentes de blog individuales (`FirstBlog`, `SecondBlog`, `ThirdBlog`, etc.)
- [ ] Eliminar carpetas de rutas individuales (`app/[locale]/blog/definitive-guide-on-where-to-tattoo-en-cali/`, etc.)
- [ ] Eliminar archivos JSON legacy (`locales/es/firstblog.json`, `secondblog.json`, etc.) si ya no se usan
- [ ] Limpiar imports no utilizados

#### 6.2 Documentación
- [ ] Crear `docs/BLOG_CONTENT_GUIDE.md` con:
  - Cómo crear un nuevo post paso a paso
  - Estructura del JSON esperado
  - Ejemplos de `contentHtml`
  - Cómo añadir imágenes
  - Buenas prácticas
- [ ] Actualizar README principal con referencia a la guía del blog
- [ ] Documentar la estructura del registry de posts

#### 6.3 Scripts de utilidad
- [ ] Crear script `scripts/create-blog-post.js` que:
  - Pide ID del post
  - Crea los archivos JSON template
  - Añade entrada al registry
  - Genera los `posts.json` actualizados
- [ ] Añadir script a `package.json`: `"create:post": "node scripts/create-blog-post.js"`

---

## FASE 7: Optimizaciones y Mejoras Futuras (Opcional)
**Objetivo:** Mejoras adicionales que pueden hacerse después de la migración.

### Tareas

#### 7.1 Mejoras de contenido
- [ ] Considerar usar Markdown en lugar de HTML para `contentHtml` (más fácil de escribir)
- [ ] Implementar parser de Markdown → HTML
- [ ] Añadir soporte para bloques especiales (citas, imágenes con caption, etc.)

#### 7.2 Mejoras de UI/UX
- [ ] Añadir tabla de contenidos (TOC) automática para posts largos
- [ ] Implementar lectura estimada (tiempo de lectura)
- [ ] Añadir breadcrumbs en posts
- [ ] Mejorar animaciones si es necesario (pero mantenerlas mínimas)

#### 7.3 Mejoras técnicas
- [ ] Implementar caché para contenido de blog (si es necesario)
- [ ] Añadir validación de schema JSON para posts (usar JSON Schema)
- [ ] Considerar migrar a CMS headless si el volumen de posts crece mucho

---

## Consideraciones Importantes

### Migración Gradual
- Las fases están diseñadas para permitir migración incremental
- Los posts antiguos seguirán funcionando hasta que se migren completamente
- No hay necesidad de hacer "big bang" - se puede migrar post por post

### Compatibilidad con URLs
- Las URLs existentes deben seguir funcionando durante y después de la migración
- Los rewrites aseguran que `/es/blog/slug-es` → `/es/blog/slug-en` (carpeta física)
- No se perderá SEO ni enlaces externos

### Rollback Plan
- Mantener commits pequeños y bien documentados
- Crear branch separado para la refactorización
- Poder revertir fácilmente si algo falla

### Testing Continuo
- Probar después de cada fase antes de continuar
- No avanzar a la siguiente fase si la actual tiene problemas
- Validar en desarrollo antes de mergear a main

---

## Estimación de Tiempo (Aproximada)

- **Fase 1:** 4-6 horas
- **Fase 2:** 6-8 horas
- **Fase 3:** 4-6 horas
- **Fase 4:** 2-3 horas
- **Fase 5:** 3-4 horas
- **Fase 6:** 2-3 horas
- **Fase 7:** Opcional, según necesidades

**Total estimado:** 21-30 horas de desarrollo

---

## Notas Finales

- Este backlog es un plan de trabajo sugerido
- Puede ajustarse según prioridades y necesidades específicas
- Se recomienda hacer code review después de cada fase
- Documentar decisiones importantes durante el proceso
