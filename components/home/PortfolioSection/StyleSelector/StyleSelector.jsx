"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tattooStylesEs = ["REALISMO", "SURREALISMO", "LINEA FINA", "MICROREALISMO", "ANIME", "PUNTILLISMO", "LIBRE"];
const tattooStylesEn = ["REALISM", "SURREALISM", "FINE LINE", "MICROREALISM", "ANIME", "POINTILLISM", "FREE STYLE"];

function StyleSelector({ onSelect, selectedStyle, locale }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use the locale prop directly instead of trying to detect it
  const tattooStyles = locale === "en" ? tattooStylesEn : tattooStylesEs;

  return (
    <div className="flex justify-center max-w-[400px] md:max-w-[1200px] items-center md:items-start">
      <div className="flex flex-row w-full overflow-x-auto items-center gap-x-0 md:gap-x-12 gap-y-3">
        {tattooStyles.map((style) => (
          <motion.button
            key={style}
            onClick={() => onSelect(style)}
            className={`px-3 py-2 w-full text-base md:text-sm font-bold rounded-lg min-w-[150px] md:min-w-[150px] transition-all duration-300 ease-in-out
              ${selectedStyle === style ? "bg-TextBlack text-white" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {style}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;