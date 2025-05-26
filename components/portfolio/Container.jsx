'use client'

import React, { useState, useEffect } from 'react'
import Header from './Header'
import Images from './Images'

const tattooStylesEs = ["REALISMO", "SURREALISMO", "LÍNEA FINA", "MICROREALISMO", "ANIME", "PUNTILLISMO", "LIBRE"];
const tattooStylesEn = ["REALISM", "SURREALISM", "FINE LINE", "MICROREALISM", "ANIME" ,"POINTILLISM", "FREE-STYLE"];

const styleTranslation = {
  REALISM: "REALISMO",
  SURREALISM: "SURREALISMO",
  "FINE LINE": "LÍNEA FINA",
  MICROREALISM: "MICROREALISMO",
  ANIME: "ANIME",
  POINTILLISM: "PUNTILLISMO",
  LIBRE: "LIBRE",
};

function getLanguage() {
  if (typeof document !== "undefined") {
    const cookieMatch = document.cookie.match(/(^| )NEXT_LOCALE=([^;]+)/);
    if (cookieMatch) return cookieMatch[2];
  }
  return navigator.language.startsWith("es") ? "es" : "en";
}

function Container({ translations }) {
  const [language, setLanguage] = useState("es");
  const [activeCategory, setActiveCategory] = useState("REALISMO");

  useEffect(() => {
    setLanguage(getLanguage());
  }, []);

  const categories = language === "en" ? tattooStylesEn : tattooStylesEs;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
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
      <div className='flex flex-col items-center w-full max-w-[1400px] '>
        <Images selectedStyle={translatedCategory} />
      </div>
    </div>
  );
}

export default Container;
