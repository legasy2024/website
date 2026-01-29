# Guía Completa: Cómo Crear un Nuevo Post en el Blog

Esta guía te explica paso a paso cómo crear un nuevo post para el blog usando el nuevo sistema simplificado.

## Requisitos Previos

- Conocimiento básico de JSON
- Acceso al proyecto
- Editor de texto o IDE

## Proceso Completo (3 Pasos)

### Paso 1: Crear los Archivos JSON de Contenido

1. **Copia los templates:**
   ```bash
   cp content/blog/posts/_template.es.json content/blog/posts/mi-nuevo-post.es.json
   cp content/blog/posts/_template.en.json content/blog/posts/mi-nuevo-post.en.json
   ```

2. **Completa ambos archivos** con el contenido en cada idioma:
   - `mi-nuevo-post.es.json` → Contenido en español
   - `mi-nuevo-post.en.json` → Contenido en inglés

#### Estructura del JSON

```json
{
  "id": "mi-nuevo-post",
  "slug": "mi-nuevo-post-en-espanol",
  "title": "Título del Post",
  "date": "01 de enero de 2025",
  "image": "/img/blog/post1.png",
  "excerpt": "Descripción corta del post...",
  "seo": {
    "title": "Título SEO",
    "description": "Descripción SEO",
    "keywords": ["keyword1", "keyword2"],
    "canonical": "https://www.legassystudio.com/es/blog/mi-nuevo-post"
  },
  "contentHtml": "<p>Contenido HTML del post...</p>",
  "cta": {
    "whatsapp": {
      "text": "Pedir una Asesoría",
      "url": "https://wa.me/..."
    },
    "instagram": {
      "text": "Ver Instagram",
      "url": "https://www.instagram.com/..."
    }
  },
  "contactInfo": {
    "title": "Información de contacto:",
    "location": "Ubicación: Cali, Colombia",
    "phone": "Teléfono: +57 (310) 311-0611"
  }
}
```

#### Campo `contentHtml`

Este campo contiene el HTML del contenido del post. Puedes usar:

- `<p>` para párrafos
- `<h2>`, `<h3>` para títulos
- `<ul>`, `<ol>`, `<li>` para listas
- `<strong>` para texto en negrita
- `<blockquote class="quote">` para citas
- `<a href="...">` para enlaces

**Ejemplo:**
```html
<p>Este es un párrafo de introducción.</p>

<h2>Título de Sección</h2>

<p>Contenido de la sección con <strong>texto importante</strong>.</p>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<blockquote class="quote">
  Esta es una cita destacada.
</blockquote>
```

### Paso 2: Añadir Entrada al Registry

Edita `content/blog/posts-registry.js` y añade una nueva entrada al array `blogPostsRegistry`:

```javascript
{
  id: "mi-nuevo-post",
  slugs: {
    es: "mi-nuevo-post-en-espanol",
    en: "my-new-post-in-english"
  },
  image: "/img/blog/post1.png",
  date: {
    es: "01 de enero de 2025",
    en: "January 01, 2025"
  },
  label: {
    es: "Categoría",
    en: "Category"
  },
  published: true,
  order: 10  // Número para ordenar (mayor = más reciente)
}
```

**Importante:**
- El `id` debe coincidir con el nombre de los archivos JSON (sin extensión)
- El `id` es **inmutable** - nunca lo cambies después de crear el post
- Los `slugs` pueden cambiar si es necesario
- `published: false` oculta el post del listado
- `order` determina el orden en el listado (mayor = más arriba)

### Paso 3: Generar Archivos Legacy (Opcional)

Si necesitas mantener compatibilidad con componentes legacy:

```bash
npm run generate:posts
```

Este comando genera automáticamente `locales/es/posts.json` y `locales/en/posts.json`.

## Usando el Script de Creación (Recomendado)

Para facilitar el proceso, puedes usar el script interactivo:

```bash
npm run create:post
```

Este script:
1. Te pide el ID del post
2. Crea los archivos JSON desde los templates
3. Te ayuda a añadir la entrada al registry
4. Genera los archivos legacy automáticamente

## Validación

Después de crear un post, valida que todo esté correcto:

```bash
npm run validate:blog
```

Este script verifica:
- ✅ Que los archivos JSON existen
- ✅ Que la estructura es correcta
- ✅ Que los slugs coinciden
- ✅ Que los rewrites se generan correctamente

## Estructura de Carpetas

```
content/blog/
├── posts-registry.js          # Registry centralizado
└── posts/
    ├── _template.es.json      # Template para español
    ├── _template.en.json      # Template para inglés
    ├── mi-nuevo-post.es.json  # Tu nuevo post (ES)
    └── mi-nuevo-post.en.json  # Tu nuevo post (EN)
```

## Buenas Prácticas

### IDs de Posts
- ✅ Usa lowercase
- ✅ Usa guiones en lugar de espacios
- ✅ Sé descriptivo pero conciso
- ✅ Ejemplos: `fine-line-durability`, `travel-reasons`, `definitive-guide`

### Slugs
- ✅ En español: usa guiones, sin acentos, lowercase
- ✅ En inglés: usa guiones, lowercase
- ✅ Sé descriptivo para SEO
- ✅ Ejemplos ES: `tatuajes-linea-fina-cali`, `guia-estudios-cali`
- ✅ Ejemplos EN: `fine-line-tattoos-cali`, `guide-tattoo-studios-cali`

### Contenido HTML
- ✅ Usa HTML semántico (`<h2>`, `<p>`, `<ul>`, etc.)
- ✅ Escapa caracteres especiales (`&`, `<`, `>`, etc.)
- ✅ Mantén el HTML limpio y bien formateado
- ✅ Usa clases CSS globales cuando sea necesario

### SEO
- ✅ Títulos únicos y descriptivos
- ✅ Descripciones de 150-160 caracteres
- ✅ Keywords relevantes (5-10 máximo)
- ✅ URLs canónicas correctas

### Imágenes
- ✅ Usa rutas relativas desde `/public`
- ✅ Formato: `/img/blog/post[N].png`
- ✅ Tamaño recomendado: 1200x630px para cards
- ✅ Optimiza imágenes antes de subirlas

## Ejemplos Completos

### Ejemplo 1: Post Simple

**Archivo:** `content/blog/posts/ejemplo-simple.es.json`
```json
{
  "id": "ejemplo-simple",
  "slug": "ejemplo-de-post-simple",
  "title": "Ejemplo de Post Simple",
  "date": "15 de enero de 2025",
  "image": "/img/blog/post1.png",
  "excerpt": "Este es un ejemplo de un post simple con contenido básico.",
  "seo": {
    "title": "Ejemplo de Post Simple - Legassy Studio",
    "description": "Descripción SEO del post simple",
    "keywords": ["ejemplo", "blog", "tatuajes"],
    "canonical": "https://www.legassystudio.com/es/blog/ejemplo-de-post-simple"
  },
  "contentHtml": "<p>Este es el contenido del post.</p><h2>Sección 1</h2><p>Contenido de la sección.</p>",
  "cta": {
    "whatsapp": {
      "text": "Contactar",
      "url": "https://wa.me/573128717100"
    },
    "instagram": {
      "text": "Ver Instagram",
      "url": "https://www.instagram.com/legassystudio"
    }
  },
  "contactInfo": {
    "title": "Información de contacto:",
    "location": "Ubicación: Cali, Colombia",
    "phone": "Teléfono: +57 (310) 311-0611"
  }
}
```

**Registry:**
```javascript
{
  id: "ejemplo-simple",
  slugs: {
    es: "ejemplo-de-post-simple",
    en: "simple-post-example"
  },
  image: "/img/blog/post1.png",
  date: {
    es: "15 de enero de 2025",
    en: "January 15, 2025"
  },
  label: {
    es: "Ejemplo",
    en: "Example"
  },
  published: true,
  order: 1
}
```

## Troubleshooting

### El post no aparece en el listado
- ✅ Verifica que `published: true` en el registry
- ✅ Ejecuta `npm run generate:posts`
- ✅ Verifica que los slugs son correctos

### Error 404 al acceder al post
- ✅ Verifica que los archivos JSON existen
- ✅ Verifica que el slug en el JSON coincide con el del registry
- ✅ Ejecuta `npm run validate:blog` para ver errores

### Los rewrites no funcionan
- ✅ Verifica que los slugs ES y EN son diferentes
- ✅ Verifica que ambos slugs existen en el registry
- ✅ Reinicia el servidor de desarrollo

### Metadatos incorrectos
- ✅ Verifica que el bloque `seo` está completo en el JSON
- ✅ Verifica que las URLs canónicas son correctas
- ✅ Verifica que los alternates están bien configurados

## Recursos Adicionales

- **Registry:** `content/blog/posts-registry.js`
- **Templates:** `content/blog/posts/_template.*.json`
- **Documentación del sistema:** `content/blog/README.md`
- **Reporte de testing:** `docs/BLOG_TESTING_REPORT.md`

## Soporte

Si tienes problemas o preguntas:
1. Ejecuta `npm run validate:blog` para ver errores
2. Revisa la documentación en `content/blog/README.md`
3. Consulta los ejemplos en posts existentes
