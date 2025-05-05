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

// Reverse mapping for translating from Spanish to English
const reverseStyleTranslation = {
  "REALISMO": "REALISM",
  "SURREALISMO": "SURREALISM",
  "LÍNEA FINA": "FINE LINE",
  "MICROREALISMO": "MICROREALISM",
  "ANIME": "ANIME",
  "PUNTILLISMO": "POINTILLISM",
};

function PortfolioGallery({ locale }) {
    // Set initial selected style based on locale
    const [selectedStyle, setSelectedStyle] = useState(locale === 'es' ? "REALISMO" : "REALISM");
    
    // Handle style selection with proper translation
    const handleStyleSelect = (style) => {
        setSelectedStyle(style);
    };
    
    // Get the translated style for the carousel
    // If we're in English locale but selectedStyle is in Spanish, translate it to English
    // If we're in Spanish locale but selectedStyle is in English, translate it to Spanish
    let translatedStyle;
    if (locale === 'es') {
        translatedStyle = styleTranslation[selectedStyle] || selectedStyle;
    } else {
        translatedStyle = reverseStyleTranslation[selectedStyle] || selectedStyle;
    }
    
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center md:items-start">
                <StyleSelector 
                    onSelect={handleStyleSelect} 
                    selectedStyle={selectedStyle}
                    locale={locale} // Pass locale to StyleSelector
                />
            </div>
            <TattooCarrousel selectedStyle={translatedStyle} />
        </>
    )
}

export default PortfolioGallery;