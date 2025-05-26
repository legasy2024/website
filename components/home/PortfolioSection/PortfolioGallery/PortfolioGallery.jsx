'use client'

import { useState } from "react";
import StyleSelector from "../StyleSelector/StyleSelector";
import TattooCarrousel from "../TattooCarrousel/TattooCarrousel";

const styleTranslation = {
  REALISM: "REALISMO",
  SURREALISM: "SURREALISMO",
  "FINE LINE": "LÍNEA FINA",
  MICROREALISM: "MICROREALISMO",
  ANIME: "ANIME",
  POINTILLISM: "PUNTILLISMO",
  "REALISMO": "REALISM",
  "SURREALISMO": "SURREALISM",
  "LÍNEA FINA": "FINE LINE",
  "MICROREALISMO": "MICROREALISM",
  "ANIME": "ANIME",
  "PUNTILLISMO": "POINTILLISM",
  "FREE-STYLE": "LIBRE",
};


function PortfolioGallery({ locale }) {
  const tattooStyles = locale === "en" 
    ? ["REALISM", "SURREALISM", "FINE LINE", "MICROREALISM", "ANIME", "POINTILLISM", "FREE-STYLE"]
    : ["REALISMO", "SURREALISMO", "LÍNEA FINA", "MICROREALISMO", "ANIME", "PUNTILLISMO", "LIBRE"];

  const [selectedStyle, setSelectedStyle] = useState(tattooStyles[0]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center md:items-start">
        <StyleSelector 
          onSelect={setSelectedStyle} 
          selectedStyle={selectedStyle}
          locale={locale}
        />
      </div>
      <TattooCarrousel selectedStyle={selectedStyle} />
    </>
  );
}

export default PortfolioGallery;