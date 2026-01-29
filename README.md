# Legassy Studio Website

Website oficial de Legassy Studio - Estudio de tatuajes en Cali, Colombia.

## Estructura del Proyecto

```
/
├── app/                    # Next.js App Router
│   └── [locale]/          # Rutas internacionalizadas (es/en)
│       └── blog/          # Blog con ruta dinámica [slug]
├── components/            # Componentes React
├── content/               # Contenido del sitio
│   └── blog/             # Sistema de blog refactorizado
│       ├── posts-registry.js  # Registry centralizado
│       └── posts/         # JSONs de contenido por post
├── lib/                   # Utilidades y helpers
├── locales/               # Traducciones i18n
└── scripts/              # Scripts de utilidad
```

## Sistema de Blog

El blog utiliza un sistema simplificado basado en JSON y un registry centralizado.

### Crear un Nuevo Post

**Opción 1: Script Interactivo (Recomendado)**
```bash
npm run create:post
```

**Opción 2: Manual**
1. Copia los templates: `content/blog/posts/_template.*.json`
2. Completa los JSONs con el contenido
3. Añade entrada en `content/blog/posts-registry.js`
4. Ejecuta `npm run generate:posts`

### Documentación Completa

- **Guía de creación de posts:** [`docs/BLOG_CONTENT_GUIDE.md`](docs/BLOG_CONTENT_GUIDE.md)
- **Estructura del blog:** [`content/blog/README.md`](content/blog/README.md)
- **Reporte de testing:** [`docs/BLOG_TESTING_REPORT.md`](docs/BLOG_TESTING_REPORT.md)

### Scripts Disponibles

```bash
# Crear un nuevo post (interactivo)
npm run create:post

# Generar archivos posts.json legacy
npm run generate:posts

# Validar sistema de blog completo
npm run validate:blog
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **i18next** - Internacionalización (ES/EN)
- **Framer Motion** - Animaciones
- **Tailwind CSS** - Estilos
- **React Icons** - Iconos

## Estructura de Internacionalización

El sitio soporta dos idiomas:
- Español (`es`) - Idioma principal
- Inglés (`en`) - Idioma secundario

Las rutas se estructuran como: `/[locale]/[ruta]`

## Licencia

Propietario - Legassy Studio
