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
export default function BlogArticle({ content, locale }) {
  const {
    id,
    title,
    date,
    image,
    contentHtml,
    gallery,
    hideHeroImage,
    cta,
    contactInfo
  } = content;

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

        {/* Fecha */}
        <p className="text-sm text-center text-[#888] mb-10">
          {date}
        </p>

        {/* Imagen principal */}
        {image && !hideHeroImage && (
          <div className="relative w-full h-[200px] md:h-[420px] mb-10">
            <Image
              src={image}
              alt={title}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </div>
        )}

        {/* Contenido HTML */}
        <article
          className={`${styles.blogContent} flex flex-col gap-y-8 text-base leading-7 text-[#e0e0e0]`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Galería */}
        {gallery?.items?.length > 0 && (
          <section className="mt-12">
            {gallery.title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                {gallery.title}
              </h2>
            )}
            {gallery.description && (
              <p className="text-[#cfcfcf] mb-8">{gallery.description}</p>
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
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.galleryBody}>
                    {item.title && (
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-sm leading-6 text-[#d5d5d5]">{item.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

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

