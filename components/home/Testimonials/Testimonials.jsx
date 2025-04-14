"use client";

import { useState, useEffect, useRef } from "react";
import { testimonialsDataEs, testimonialsDataEn } from "./data/testimonialsData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import { motion, AnimatePresence, useInView } from "framer-motion";

const DURATION = 5000; // 10 segundos por testimonio

function getCookie(name) {
  if (typeof document === "undefined") return "es"; // Default en SSR
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : "es"; // Idioma por defecto: español
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentLocale, setCurrentLocale] = useState("es");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Leer el idioma desde la cookie cuando se carga la página
  useEffect(() => {
    setCurrentLocale(getCookie("NEXT_LOCALE"));
  }, []);

  // Escoger los datos correctos según el idioma
  const testimonialsData = currentLocale === "en" ? testimonialsDataEn : testimonialsDataEs;

  useEffect(() => {
    if (!isInView) return;
    
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 100 / (DURATION / 50));
    }, 50);

    const testimonialInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(testimonialInterval);
    };
  }, [currentIndex, testimonialsData.length, isInView]);

  if (testimonialsData.length === 0) {
    return null;
  }

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      } 
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
  };

  const progressVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.2 } }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="testimonials_container flex flex-col items-center justify-center relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="absolute flex flex-col justify-center items-center inset-0 bg-black bg-opacity-85"></div>
      <motion.div className="z-10 w-full flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialsData[currentIndex].id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col "
          >
            <TestimonialCard
              name={testimonialsData[currentIndex].name}
              pfp={testimonialsData[currentIndex].pfp}
              review={testimonialsData[currentIndex].review}
              date={testimonialsData[currentIndex].date}
            />
          </motion.div>
        </AnimatePresence>
        {/* Barra de progreso */}
        <motion.div 
          className="h-1 w-full rounded-full bg-gray-300 mt-2"
          variants={progressVariants}
        >
          <motion.div
            className="h-full bg-BgOrange transition-all duration-100"
            style={{ width: `${progress}%` }}
            animate={{ 
              width: `${progress}%`,
            }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Testimonials;