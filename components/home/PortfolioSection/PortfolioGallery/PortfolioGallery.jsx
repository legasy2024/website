'use client'

import { useState } from "react";
import StyleSelector from "../StyleSelector/StyleSelector";
import TattooCarrousel from "../TattooCarrousel/TattooCarrousel";

function PortfolioGallery({ locale }) {
  const tattooStyles = locale === "en" 
    ? ["REALISM", "SURREALISM", "FINE LINE", "MICROREALISM", "ANIME", "POINTILLISM", "FREE STYLE"]
    : ["REALISMO", "SURREALISMO", "LÍNEA FINA", "MICROREALISMO", "ANIME", "PUNTILLISMO", "LIBRE"];

  const [selectedStyle, setSelectedStyle] = useState(tattooStyles[0]);

  console.log(selectedStyle)

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