"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    cta,
    contactInfo
  } = content;

  // Animaciones mínimas - solo contenedores principales
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full m-auto px-5 py-16 md:py-28 bg-[#212121] text-white">
      <motion.div
        className="w-full max-w-[1200px] m-auto flex flex-col"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Label */}
        {content.label && (
          <motion.label
            className="w-32 flex flex-col items-center place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4"
            variants={itemVariants}
          >
            {content.label}
          </motion.label>
        )}

        {/* Título */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {/* Fecha */}
        <motion.p
          className="text-sm text-center text-[#888] mb-10"
          variants={itemVariants}
        >
          {date}
        </motion.p>

        {/* Imagen principal */}
        {image && (
          <motion.div
            className="relative w-full h-[200px] md:h-[420px] mb-10"
            variants={itemVariants}
          >
            <Image
              src={image}
              alt={title}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>
        )}

        {/* Contenido HTML */}
        <motion.article
          className={`${styles.blogContent} flex flex-col gap-y-8 text-base leading-7 text-[#e0e0e0]`}
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTAs */}
        {cta && (
          <motion.div
            className="mt-6 mb-4 w-full flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
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
          </motion.div>
        )}

        {/* Información de contacto */}
        {contactInfo && (
          <motion.div
            className="bg-[#2a2a2a] p-4 rounded-md mt-4"
            variants={itemVariants}
          >
            {contactInfo.title && (
              <p className="font-medium mb-2">{contactInfo.title}</p>
            )}
            {contactInfo.location && <p>{contactInfo.location}</p>}
            {contactInfo.phone && <p>{contactInfo.phone}</p>}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
