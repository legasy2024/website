"use client";

import { useState, useEffect } from "react";
import { testimonialsDataEs, testimonialsDataEn, GOOGLE_REVIEWS_URL } from "./data/testimonialsData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import { motion } from "framer-motion";
import Image from "next/image";
import emblem from "./assets/googleEmblem.png";
import starSvg from "./assets/star.svg";

function getCurrentLocale() {
  if (typeof window === "undefined") return "es"; // Default en SSR

  const pathname = window.location.pathname;
  if (pathname.startsWith('/en')) return "en";
  if (pathname.startsWith('/es')) return "es";

  const cookies = document.cookie.split(';');
  const localeCookie = cookies.find(cookie =>
    cookie.trim().startsWith('NEXT_LOCALE=')
  );
  if (localeCookie) {
    return localeCookie.split('=')[1].trim();
  }

  const commonCookies = ['locale', 'lang', 'language'];
  for (const cookieName of commonCookies) {
    const cookie = cookies.find(c => c.trim().startsWith(`${cookieName}=`));
    if (cookie) {
      const value = cookie.split('=')[1].trim();
      if (value === 'en' || value === 'es') return value;
    }
  }

  try {
    const storedLocale = localStorage.getItem('locale') || localStorage.getItem('language');
    if (storedLocale === 'en' || storedLocale === 'es') return storedLocale;
  } catch (e) {
    // localStorage might not be available
  }

  return "es";
}

const copy = {
  es: {
    eyebrow: "Reseñas verificadas",
    heading: "Lo que dicen en Google",
    subheading: "131 reseñas reales de clientes en Google, con una calificación promedio de 5.0",
    verified: "Reseña verificada en Google",
    cta: "Ver todas las reseñas en Google"
  },
  en: {
    eyebrow: "Verified reviews",
    heading: "What people say on Google",
    subheading: "131 real customer reviews on Google, averaging a 5.0 rating",
    verified: "Review verified on Google",
    cta: "See all reviews on Google"
  }
};

function Testimonials() {
  const [currentLocale, setCurrentLocale] = useState("es");

  useEffect(() => {
    const detectLocale = () => setCurrentLocale(getCurrentLocale());
    detectLocale();

    window.addEventListener('popstate', detectLocale);
    window.addEventListener('localeChange', detectLocale);
    return () => {
      window.removeEventListener('popstate', detectLocale);
      window.removeEventListener('localeChange', detectLocale);
    };
  }, []);

  const testimonialsData = currentLocale === "en" ? testimonialsDataEn : testimonialsDataEs;
  const t = copy[currentLocale] ?? copy.es;

  if (testimonialsData.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="testimonials_container relative w-full py-16 px-4 md:px-10">
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-BgOrange uppercase tracking-widest text-sm font-medium">{t.eyebrow}</span>
        <h2 className="text-white text-3xl md:text-4xl font-semibold mt-2 text-center">{t.heading}</h2>

        <div className="flex items-center gap-x-2 mt-4">
          <Image src={emblem} width={24} height={24} alt="Google" />
          <span className="text-white font-medium">5.0</span>
          <span className="flex gap-x-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image key={i} src={starSvg} width={16} height={16} alt="star-icon" />
            ))}
          </span>
        </div>
        <p className="text-TextSecondary-100/80 text-sm md:text-base mt-2 text-center max-w-xl">
          {t.subheading}
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <TestimonialCard
                name={testimonial.name}
                avatar={testimonial.avatar}
                review={testimonial.review}
                date={testimonial.date}
                rating={testimonial.rating}
                photos={testimonial.photos}
                googleUrl={testimonial.googleUrl}
                verifiedLabel={t.verified}
              />
            </motion.div>
          ))}
        </motion.div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-x-2 text-white border border-[#827B71] rounded-full px-6 py-3 hover:border-BgOrange hover:text-BgOrange transition-colors"
        >
          <Image src={emblem} width={18} height={18} alt="" />
          {t.cta}
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
