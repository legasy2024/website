# CTAs y medición en Google Analytics 4

Todos los clics en CTAs se envían a GA4 (`G-TXNXSBJPZP`) como evento **`cta_click`**, desde un único
listener ([components/common/CtaTracker.jsx](../components/common/CtaTracker.jsx)).

## Parámetros del evento `cta_click`

| Parámetro     | Ejemplo                          | Qué es                                                                  |
|---------------|----------------------------------|-------------------------------------------------------------------------|
| `cta_id`      | `home_hero_whatsapp`             | Qué CTA se pulsó (tabla de abajo)                                       |
| `cta_channel` | `whatsapp`                       | `whatsapp`, `email`, `maps`, `social`, `reviews`, `internal`, `ui`, `none` |
| `page_type`   | `blog_post`                      | `home`, `blog_post`, `blog_list`, `blog_category`, `contact`, `about`…  |
| `page_path`   | `/es/blog/mi-post`               | URL exacta (incluye el idioma)                                          |
| `cta_text`    | `Cotizar mi tatuaje`             | Texto visible del botón                                                 |
| `link_url`    | `https://wa.me/573103110611?...` | Destino del enlace                                                      |

Además, cuando un formulario de contacto se envía bien se registra **`generate_lead`** con
`form_id` = `phone_form` o `email_form`.

## Inventario de CTAs

### Global (todas las páginas)
| `cta_id`            | Dónde                                         | Acción    |
|---------------------|-----------------------------------------------|-----------|
| `whatsapp_floating` | Botón redondo flotante, abajo a la derecha    | WhatsApp  |
| `navbar_contact`    | "Contáctanos" en el menú (escritorio y móvil) | /contact  |
| `footer_maps`       | Dirección en el footer                        | Google Maps |
| `footer_instagram` / `footer_tiktok` / `footer_youtube` | Iconos del footer | Redes |

### Home (`/es`, `/en`)
| `cta_id`                      | Dónde                                              | Acción   |
|-------------------------------|----------------------------------------------------|----------|
| `home_hero_whatsapp`          | Hero: "Reserva tu consulta personalizada"          | WhatsApp |
| `home_portfolio_whatsapp`     | Debajo de la galería del portafolio                | WhatsApp |
| `our_studio_about`            | Sección "Nuestro estudio" (también en /about)      | /about   |
| `home_google_reviews`         | Testimonios: ver reseñas en Google                 | Google   |
| `home_shorts_video`           | Icono "abrir en YouTube" de cada Short             | YouTube  |
| `home_shorts_youtube_channel` | Botón del canal bajo los Shorts                    | YouTube  |
| `home_faq_whatsapp`           | FAQ: "Consultar por WhatsApp"                      | WhatsApp |
| `book_consult_*`              | Bloque "Reserva tu consulta" (ver abajo)           |          |

### Bloque "Reserva tu consulta" (BookConsult)
Aparece en **home, /about, /contact y en cada post**; se distingue con `page_type` / `page_path`.

| `cta_id`                      | Dónde                                       | Acción       |
|-------------------------------|---------------------------------------------|--------------|
| `book_consult_whatsapp`       | Botón principal junto al título             | WhatsApp     |
| `book_consult_tab_whatsapp`   | Pestaña "WhatsApp" del formulario           | UI (interés) |
| `book_consult_tab_email`      | Pestaña "Email" del formulario              | UI (interés) |
| `book_consult_phone_whatsapp` | Teléfono en los datos de contacto           | WhatsApp     |
| `book_consult_email`          | Email en los datos de contacto              | mailto       |
| `book_consult_maps`           | Botón "Ver en Google Maps"                  | Google Maps  |
| _(lead)_ `generate_lead`      | Envío correcto del formulario de teléfono / email | Formspree |

### Posts del blog (`/es/blog/<slug>`)
| `cta_id`                     | Dónde                                                     | Acción   |
|------------------------------|-----------------------------------------------------------|----------|
| `blog_sidebar_whatsapp`      | Caja "¿Quieres tatuarte con nosotros?" del sidebar (fija en escritorio) | WhatsApp |
| `blog_inline_whatsapp`       | Banner a mitad del artículo                               | WhatsApp |
| `blog_mobile_bar_whatsapp`   | Barra flotante inferior (solo móvil/tablet)               | WhatsApp |
| `blog_mobile_bar_close`      | Cerrar la barra flotante                                  | UI       |
| `blog_post_end_whatsapp`     | Botón al final del artículo (definido en el JSON del post) | WhatsApp |
| `blog_post_end_instagram`    | Botón de Instagram al final del artículo                  | Instagram |
| `blog_related_post`          | Tarjetas "Sigue leyendo"                                  | Otro post |
| `do_you_want_to_be_whatsapp` | Sección "¿Quieres ser parte…?" tras el artículo           | WhatsApp |
| `do_you_want_to_work`        | Sección "¿Quieres trabajar con nosotros?" (también /about) | ⚠️ sin enlace |
| `whatsapp_untagged`          | Enlaces de WhatsApp dentro del texto del post             | WhatsApp |

### Otras páginas
| `cta_id`                 | Página     | Dónde                         | Acción   |
|--------------------------|------------|-------------------------------|----------|
| `vip_hero_whatsapp`      | /vip       | Botón del hero (escritorio y móvil) | WhatsApp |
| `academy_hero_primary`   | /academy   | Botón principal del hero      | /contact |
| `academy_hero_secondary` | /academy   | Botón secundario del hero     | /contact |
| `academy_final_cta`      | /academy   | CTA final                     | /contact |

## Añadir un CTA nuevo
Basta con poner `data-cta="<id>"` en el enlace o botón. Los enlaces de WhatsApp, email y teléfono
se registran aunque no lo tengan (como `whatsapp_untagged`, `email_untagged`, `phone_untagged`).
