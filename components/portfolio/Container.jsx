'use client'

import React, { useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Header from './Header'
import Images from './Images'
import StyleSelectorMobile from './StyleSelectorMobile'
import { imageByStyles } from './data/imagesByStyle'

const tattooStylesEs = ["REALISMO", "SURREALISMO", "LINEA FINA", "MICROREALISMO", "ANIME", "PUNTILLISMO", "LIBRE"];
const tattooStylesEn = ["REALISM", "SURREALISM", "FINE LINE", "MICROREALISM", "ANIME" ,"POINTILLISM", "FREE STYLE"];

const styleTranslation = {
  REALISM: "REALISMO",
  SURREALISM: "SURREALISMO",
  "FINE LINE": "LINEA FINA",
  MICROREALISM: "MICROREALISMO",
  ANIME: "ANIME",
  POINTILLISM: "PUNTILLISMO",
  "FREE STYLE": "LIBRE",
};

// Nombres legibles para el selector móvil (con tildes y en minúscula)
const mobileLabels = {
  es: {
    names: {
      REALISMO: "Realismo",
      SURREALISMO: "Surrealismo",
      "LINEA FINA": "Línea fina",
      MICROREALISMO: "Microrealismo",
      ANIME: "Anime",
      PUNTILLISMO: "Puntillismo",
      LIBRE: "Libre",
    },
    title: "Elige un estilo",
    works: "trabajos",
  },
  en: {
    names: {
      REALISM: "Realism",
      SURREALISM: "Surrealism",
      "FINE LINE": "Fine line",
      MICROREALISM: "Micro-realism",
      ANIME: "Anime",
      POINTILLISM: "Pointillism",
      "FREE STYLE": "Free style",
    },
    title: "Choose a style",
    works: "works",
  },
};

const styleKey = (category) =>
  (styleTranslation[category] || category).toLowerCase().replace(/\s+/g, '_');

function Container({ translations }) {
  // El idioma sale de la URL (/es o /en), no del navegador
  const language = useParams()?.locale === "en" ? "en" : "es";
  const categories = language === "en" ? tattooStylesEn : tattooStylesEs;
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const galleryRef = useRef(null);

  // Número de trabajos por estilo, para mostrarlo en el selector
  const counts = Object.fromEntries(
    categories.map((category) => [category, imageByStyles[styleKey(category)]?.length ?? 0])
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Si el usuario ya bajó por la galería, volver al inicio de las fotos del nuevo estilo
    const gallery = galleryRef.current;
    if (gallery && gallery.getBoundingClientRect().top < 0) {
      gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const translatedCategory = styleTranslation[activeCategory] || activeCategory;

  return (
    <div className='flex flex-col items-center'>
      <Header
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
        categories={categories}
        translations={translations}
      />
      <StyleSelectorMobile
        categories={categories}
        activeCategory={activeCategory}
        onSelect={handleCategoryClick}
        labels={mobileLabels[language]}
        counts={counts}
        title={mobileLabels[language].title}
      />
      <div ref={galleryRef} className='flex flex-col items-center w-full max-w-[1400px] scroll-mt-[150px]'>
        <Images selectedStyle={translatedCategory} />
      </div>
    </div>
  );
}

export default Container;
