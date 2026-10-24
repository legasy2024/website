"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "./BlogArticle.module.css";

/**
 * Componente genérico para renderizar artículos del blog
 *
 * @param {Object} props
 * @param {Object} props.content - Contenido del post con metadata y HTML
 * @param {string} props.locale - Idioma actual ('es' o 'en')
 */
// Agrega ids a los H2 y devuelve el índice de contenido (excluye el bloque "Sigue leyendo")
function buildToc(html = "") {
  const toc = [];
  const used = new Set();
  const withIds = html.replace(/<h2>(.*?)<\/h2>/g, (match, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    let id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "seccion";
    while (used.has(id)) id += "-2";
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: withIds, toc };
}

const WHATSAPP_NUMBER = "573103110611";
const WHATSAPP_MESSAGES = {
  es: "Hola, vengo del sitio web (blog) y quisiera agendar una cita para tatuarme.",
  en: "Hi, I'm coming from your website (blog) and I'd like to book a tattoo appointment.",
};

export default function BlogArticle({ content, locale, relatedPosts = [] }) {
  const {
    id,
    title,
    date,
    contentHtml,
    gallery,
    faq,
    author,
    cta,
    contactInfo
  } = content;

  const { html, toc } = buildToc(contentHtml);
  // El último H2 "Sigue leyendo / Keep reading" es el bloque de interlinking, no va en el índice
  const tocItems = html.includes("<!-- related:start -->")
    ? toc.slice(0, -1)
    : toc;
  const tocTitle = locale === "es" ? "Contenido del post" : "In this post";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[locale] || WHATSAPP_MESSAGES.en)}`;

  // Divide el contenido en la mitad (por H2) para insertar el CTA horizontal
  const h2Positions = [...html.matchAll(/<h2 id="/g)].map((m) => m.index);
  const contentH2Count = tocItems.length;
  const splitAt = contentH2Count >= 3 ? h2Positions[Math.ceil(contentH2Count / 2)] : -1;
  const firstHalf = splitAt > 0 ? html.slice(0, splitAt) : html;
  const secondHalf = splitAt > 0 ? html.slice(splitAt) : "";

  return (
    <section className="w-full m-auto px-5 py-16 md:py-28 bg-[#212121] text-white">
      <div className="w-full max-w-[1200px] m-auto flex flex-col">
        {/* Label */}
        {content.label && (
          <label className="w-32 flex flex-col items-center place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4">
            {content.label}
          </label>
        )}

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          {title}
        </h1>

        {/* Fecha y autor */}
        <p className="text-sm text-center text-[#888] mb-10">
          {date}
          {author?.name && (
            <>
              {" · "}
              {locale === "es" ? "Por" : "By"} {author.name}
              {author.jobTitle && `, ${author.jobTitle}`}
            </>
          )}
        </p>

        {/* Tarjeta blanca de lectura */}
        <div className="bg-white text-[#1a1a1a] rounded-xl p-5 md:p-10">
        {/* Índice + contenido HTML */}
        <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          {tocItems.length > 1 && (
            <aside className="lg:sticky lg:top-28 lg:w-64 lg:shrink-0 mb-8 lg:mb-0 flex flex-col gap-4">
            <nav
              aria-label={tocTitle}
              className="hidden lg:block rounded-md border border-[#e5e5e5] bg-[#fafafa] p-4"
            >
              <p className="font-bold text-[#111] mb-3">{tocTitle}</p>
              <ol className="flex flex-col gap-2 text-sm">
                {tocItems.map(({ id, text }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-[#444] hover:text-[#A14E05] transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="rounded-md bg-[#212121] p-4 text-center">
              <p className="font-bold text-white mb-1">
                {locale === "es" ? "¿Quieres tatuarte con nosotros?" : "Ready to get tattooed?"}
              </p>
              <p className="text-sm text-[#d5d5d5] mb-3">
                {locale === "es"
                  ? "Agenda una valoración con nuestros artistas en Cali."
                  : "Book a consultation with our artists in Cali."}
              </p>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#A14E05] text-white font-medium py-2 px-4 rounded-lg transition-colors hover:bg-[#8a3f04]"
              >
                {locale === "es" ? "Agendar mi cita" : "Book my appointment"}
              </Link>
            </div>
            </aside>
          )}
          <div className="min-w-0 flex-1 max-w-[760px]">
            <article
              className={`${styles.blogContent} text-base leading-relaxed text-[#2a2a2a]`}
              dangerouslySetInnerHTML={{ __html: firstHalf }}
            />
            {secondHalf && (
              <>
                <div className="my-8 flex flex-col md:flex-row md:items-center gap-4 rounded-lg bg-[#212121] p-5 md:p-6">
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg">
                      {locale === "es"
                        ? "¿Listo para tu próximo tatuaje?"
                        : "Ready for your next tattoo?"}
                    </p>
                    <p className="text-sm text-[#d5d5d5]">
                      {locale === "es"
                        ? "Solicita tu valoración y agenda tu cita con nuestros artistas en Cali."
                        : "Request your consultation and book your appointment with our artists in Cali."}
                    </p>
                  </div>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-center bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors hover:bg-[#8a3f04]"
                  >
                    {locale === "es" ? "Agendar valoración" : "Book consultation"}
                  </Link>
                </div>
                <article
                  className={`${styles.blogContent} text-base leading-relaxed text-[#2a2a2a]`}
                  dangerouslySetInnerHTML={{ __html: secondHalf }}
                />
              </>
            )}
          </div>
        </div>

        {/* Preguntas frecuentes */}
        {faq?.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#111]">
              {locale === "es" ? "Preguntas frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="flex flex-col gap-3">
              {faq.map(({ q, a }, index) => (
                <details key={index} className="bg-[#f5f5f5] rounded-md p-4" open={index === 0}>
                  <summary className="font-semibold cursor-pointer text-[#111]">{q}</summary>
                  <p className="mt-3 text-[#333] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Galería */}
        {gallery?.items?.length > 0 && (
          <section className="mt-12">
            {gallery.title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#111]">
                {gallery.title}
              </h2>
            )}
            {gallery.description && (
              <p className="text-[#444] mb-8">{gallery.description}</p>
            )}

            <div className={styles.galleryGrid}>
              {gallery.items.map((item, index) => (
                <article key={`${item.image}-${index}`} className={styles.galleryCard}>
                  <div className={styles.galleryImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.alt || item.title || `Referencia de tatuaje ${index + 1}`}
                      loading="lazy"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.galleryBody}>
                    {item.title && (
                      <h3 className="text-lg font-semibold text-[#111] mb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-sm leading-6 text-[#333]">{item.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <section className="mt-14" aria-labelledby="related-posts-title">
            <h2 id="related-posts-title" className="text-2xl md:text-3xl font-bold mb-6 text-[#111]">
              {locale === "es" ? "Artículos relacionados" : "Related articles"}
            </h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrap}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    {post.label && (
                      <span className="text-xs uppercase tracking-wide text-[#A14E05]">{post.label}</span>
                    )}
                    <h3 className="mt-1 text-base font-semibold text-[#111] leading-snug">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        </div>

        {/* CTAs */}
        {cta && (
          <div className="mt-6 mb-4 w-full flex flex-wrap gap-4 justify-center">
            {cta.whatsapp && (
              <Link
                href={cta.whatsapp.url}
                className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors hover:bg-[#8a3f04]"
              >
                {cta.whatsapp.text}
              </Link>
            )}

            {cta.instagram && (
              <Link
                href={cta.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FaInstagram size={18} />
                {cta.instagram.text}
              </Link>
            )}
          </div>
        )}

        {/* Información de contacto */}
        {contactInfo && (
          <div className="bg-[#2a2a2a] p-4 rounded-md mt-4">
            {contactInfo.title && (
              <p className="font-medium mb-2">{contactInfo.title}</p>
            )}
            {contactInfo.location && <p>{contactInfo.location}</p>}
            {contactInfo.phone && <p>{contactInfo.phone}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

