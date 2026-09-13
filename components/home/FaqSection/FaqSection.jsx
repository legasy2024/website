"use client";

import { useState, useRef } from "react";
import localFont from "next/font/local";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaChevronDown, FaWhatsapp, FaQuestionCircle, FaPlaneDeparture, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

export default function FaqSection({ translations }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const categories = translations?.categories || {
    all: "Todas",
    cali: "Estudio en Cali",
    usa: "Turismo & Clientes USA",
    sessions: "Cuidados & Precios",
  };

  const rawItems = translations?.items || [];

  const filteredItems = selectedCategory === "all"
    ? rawItems
    : rawItems.filter((item) => item.category === selectedCategory);

  const handleToggle = (index) => {
    // Single active accordion: if already open, close it; otherwise open the clicked one and close the previous
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleCategoryChange = (catKey) => {
    setSelectedCategory(catKey);
    setOpenIndex(0); // Open the first item of the newly selected category
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "cali":
        return <FaMapMarkerAlt className="w-3 h-3 text-BgOrange" />;
      case "usa":
        return <FaPlaneDeparture className="w-3 h-3 text-BgOrange" />;
      case "sessions":
        return <FaShieldAlt className="w-3 h-3 text-BgOrange" />;
      default:
        return <FaQuestionCircle className="w-3 h-3 text-BgOrange" />;
    }
  };

  // Google FAQPage Schema Markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rawItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      ref={sectionRef}
      id="faqs"
      className="w-full flex flex-col items-center bg-[#EDEDED] py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* FAQ Schema for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1000px] w-full flex flex-col items-center">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#585858] text-sm md:text-base font-semibold tracking-wider uppercase mb-2"
        >
          {translations?.section_title || "PREGUNTAS FRECUENTES"}
        </motion.span>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-TextBlack text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 leading-tight"
        >
          {translations?.title_start || "Resolvemos"}{" "}
          <span className={`text-BgOrange font-normal ${eagleFont.className}`}>
            {translations?.title_decorator || "Tus Dudas"}
          </span>{" "}
          {translations?.title_end || "Antes de Tatuarte"}
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#585858] text-center max-w-2xl text-sm md:text-base mb-10"
        >
          {translations?.description ||
            "Todo lo que necesitas saber sobre nuestro estudio en Cali, atención para clientes internacionales y el proceso para crear tu próximo tatuaje."}
        </motion.p>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 w-full"
        >
          {Object.entries(categories).map(([key, label]) => {
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-TextBlack text-white border-TextBlack shadow-md scale-105"
                    : "bg-white/80 text-gray-700 border-black/10 hover:bg-white hover:border-black/20"
                }`}
              >
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Accordion Container */}
        <div className="w-full flex flex-col gap-y-3.5 mb-12">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            const categoryLabel = categories[item.category] || item.category;

            return (
              <motion.div
                key={`${item.category}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-2xl bg-white transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "border-BgOrange/50 shadow-md ring-1 ring-BgOrange/20"
                    : "border-black/10 hover:border-black/20 shadow-sm"
                }`}
              >
                {/* Accordion Header / Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full py-4 md:py-5 px-5 md:px-7 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-BgOrange/10 text-BgOrange border border-BgOrange/20 w-fit shrink-0">
                      {getCategoryIcon(item.category)}
                      {categoryLabel}
                    </span>
                    <h3 className="text-TextBlack font-bold text-sm md:text-base lg:text-lg leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-BgOrange text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-5 md:pb-6 pt-1 text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed border-t border-gray-100 font-light">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full rounded-2xl bg-white/70 border border-black/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-TextBlack font-bold text-base md:text-lg">
              {translations?.more_questions_text || "¿Tienes otra duda o quieres validar tu idea?"}
            </h4>
            <p className="text-gray-500 text-xs md:text-sm">
              {translations?.more_questions_subtext || "Estamos en línea para responder tus preguntas y darte asesoría sin compromiso."}
            </p>
          </div>

          <a
            href={translations?.whatsapp_url || "https://wa.me/3103110611?text=Hola!%20Tengo%20una%20pregunta%20sobre%20los%20tatuajes%20en%20Legassy%20Studio"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-TextBlack hover:bg-black text-white font-semibold text-xs md:text-sm transition-all shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-400" />
            <span>{translations?.cta_whatsapp || "Consultar por WhatsApp"}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
