"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, useInView } from "framer-motion";
import { FaPlay, FaYoutube, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import Button from "@/components/common/Button/Button";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

const DEFAULT_VIDEOS = [
  {
    id: "qDQAN-RIJV8",
    tag: "Canadá → Cali",
    title: "2 Días de Tatuaje! De Canadá a Colombia",
    subtitle: "Sesión intensiva transformando ideas en arte corporal único.",
  },
  {
    id: "q8ri1Vmrmwo",
    tag: "Top Studio",
    title: "El mejor estudio de Cali según ChatGPT",
    subtitle: "¿Por qué la IA y nuestros clientes nos eligen como el referente #1?",
  },
  {
    id: "UVnVEv55UmA",
    tag: "New York → Cali",
    title: "Viajaron de NY a Cali para tatuarse con nosotros",
    subtitle: "Conexión, técnica y propósito en cada trazo desde la Gran Manzana.",
  },
];

export default function ShortsGallery({ translations }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const videos = translations?.videos || DEFAULT_VIDEOS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center bg-[#EDEDED] py-14 md:py-24 px-4 overflow-hidden relative"
      id="historias"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#585858] text-sm md:text-base font-semibold tracking-wider uppercase mb-2"
        >
          {translations?.section_title || "NUESTRAS HISTORIAS EN VIDEO"}
        </motion.span>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-TextBlack text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 max-w-2xl leading-tight"
        >
          {translations?.title_start || "Historias que"}{" "}
          <span className={`text-BgOrange font-normal ${eagleFont.className}`}>
            {translations?.title_decorator || "Trascienden Fronteras"}
          </span>{" "}
          {translations?.title_end || ""}
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#585858] text-center max-w-2xl text-sm md:text-base mb-12"
        >
          {translations?.description ||
            "Clientes de todo el mundo viajan a Cali para inmortalizar sus momentos más significativos. Dale play y vive la experiencia Legassy."}
        </motion.p>

        {/* Shorts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full justify-items-center mb-12"
        >
          {videos.map((video, index) => {
            const isPlaying = activeVideo === video.id;
            const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
            const shortUrl = `https://www.youtube.com/shorts/${video.id}`;

            return (
              <motion.div
                key={video.id || index}
                variants={itemVariants}
                className="w-full max-w-[320px] sm:max-w-[340px]"
              >
                <div
                  className={`group relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-[#161616] shadow-2xl transition-all duration-300 ${
                    isPlaying
                      ? "ring-2 ring-BgOrange shadow-BgOrange/20"
                      : "hover:-translate-y-2 hover:shadow-2xl"
                  }`}
                >
                  {isPlaying ? (
                    // Active iframe player
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={video.title}
                        className="w-full h-full rounded-3xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      {/* Close player button */}
                      <button
                        onClick={() => setActiveVideo(null)}
                        aria-label="Cerrar video"
                        className="absolute top-3 right-3 z-30 p-2 bg-black/70 hover:bg-black text-white rounded-full backdrop-blur-md transition-colors"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    // Thumbnail & Preview Card
                    <div
                      onClick={() => setActiveVideo(video.id)}
                      className="relative w-full h-full cursor-pointer flex flex-col justify-between p-5"
                    >
                      {/* Poster Image */}
                      <Image
                        src={thumbnailUrl}
                        alt={video.title}
                        fill
                        sizes="(max-width: 640px) 320px, 340px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={index === 0}
                      />

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 transition-opacity group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-BgOrange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Card Header: Tag & Shorts Badge */}
                      <div className="relative z-10 flex items-center justify-between w-full">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/15">
                          <span className="w-2 h-2 rounded-full bg-BgOrange animate-pulse" />
                          {video.tag}
                        </span>

                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold shadow-md">
                          <SiYoutubeshorts className="w-3.5 h-3.5" />
                          <span>Short</span>
                        </div>
                      </div>

                      {/* Card Center: Play Button */}
                      <div className="relative z-10 self-center my-auto">
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-BgOrange text-white flex items-center justify-center shadow-lg shadow-BgOrange/40 group-hover:bg-[#c35e07] transition-colors"
                        >
                          <FaPlay className="w-6 h-6 ml-1 text-white" />
                        </motion.div>
                      </div>

                      {/* Card Footer: Titles & Direct Link */}
                      <div className="relative z-10 flex flex-col gap-y-2 text-white">
                        <h3 className="font-bold text-base md:text-lg leading-snug line-clamp-2 text-white drop-shadow-sm group-hover:text-amber-200 transition-colors">
                          {video.title}
                        </h3>
                        {video.subtitle && (
                          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light">
                            {video.subtitle}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs text-gray-300">
                          <span className="font-medium flex items-center gap-1.5 text-white/90">
                            {translations?.watch_label || "Reproducir Short"}
                          </span>
                          <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors p-1"
                            title="Abrir en YouTube"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://www.youtube.com/@LegassyStudioColombia"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button
              className="bg-TextBlack hover:bg-black text-white font-medium px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg"
            >
              <FaYoutube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>{translations?.cta || "Ver más en YouTube"}</span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
