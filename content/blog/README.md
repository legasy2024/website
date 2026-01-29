# Blog Content Structure

Esta carpeta contiene todo el contenido de los posts del blog en formato JSON.

## Estructura

```
content/blog/
├── README.md (este archivo)
├── posts-registry.js (índice centralizado de todos los posts)
└── posts/
    ├── _template.es.json (template para nuevos posts en español)
    ├── _template.en.json (template para nuevos posts en inglés)
    └── [post-id].es.json (contenido de cada post por idioma)
    └── [post-id].en.json
```

## Cómo crear un nuevo post

1. Copia `_template.es.json` y `_template.en.json` y renómbralos con el ID del post (ej: `mi-nuevo-post.es.json`)
2. Completa ambos archivos con el contenido en cada idioma
3. Añade una entrada en `posts-registry.js` con los slugs y metadatos
4. Ejecuta `npm run generate:posts` para actualizar los JSONs legacy (`locales/es/posts.json` y `locales/en/posts.json`)

## Archivos Legacy: posts.json

Los archivos `locales/es/posts.json` y `locales/en/posts.json` son **generados automáticamente** desde el registry centralizado.

⚠️ **IMPORTANTE:** No edites estos archivos manualmente. Cualquier cambio será sobrescrito la próxima vez que ejecutes `npm run generate:posts`.

### Generar posts.json automáticamente

```bash
npm run generate:posts
```

Este script:
- Lee el registry (`posts-registry.js`)
- Carga el contenido de cada post desde los JSONs individuales
- Genera los archivos `posts.json` en el formato esperado por componentes legacy
- Mantiene compatibilidad con el sistema anterior mientras migramos completamente

### Cuándo ejecutar el script

Ejecuta `npm run generate:posts` cuando:
- Agregues un nuevo post al registry
- Modifiques metadatos en el registry (slugs, fechas, labels)
- Actualices el contenido de un post y quieras que se refleje en el listado

## ID del Post

El ID debe ser:
- En inglés, lowercase, con guiones
- Único e inmutable (no cambiar nunca)
- Ejemplos: `fine-line-durability`, `definitive-guide`, `travel-reasons`

## Slugs

Los slugs se definen en `posts-registry.js` y pueden cambiar sin afectar el ID del post.

## Documentación Adicional

- **Guía completa de creación:** [`../../docs/BLOG_CONTENT_GUIDE.md`](../../docs/BLOG_CONTENT_GUIDE.md)
- **Reporte de testing:** [`../../docs/BLOG_TESTING_REPORT.md`](../../docs/BLOG_TESTING_REPORT.md)

## Scripts Útiles

```bash
# Crear un nuevo post (interactivo)
npm run create:post

# Generar archivos posts.json legacy
npm run generate:posts

# Validar sistema completo
npm run validate:blog
```
