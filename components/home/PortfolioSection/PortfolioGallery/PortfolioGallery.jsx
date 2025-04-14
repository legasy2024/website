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
};

function PortfolioGallery({locale}) {
    const [selectedStyle, setSelectedStyle] = useState(locale == 'es' ? "REALISMO" : "REALISM");
    
    const translatedStyle = styleTranslation[selectedStyle] || selectedStyle;
    
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center md:items-start">
                <StyleSelector onSelect={setSelectedStyle} selectedStyle={selectedStyle} />
            </div>
            <TattooCarrousel selectedStyle={translatedStyle} />
        </>
    )
}
export default PortfolioGallery;