import Image from "next/image";
import { imageByStyles } from "../data/imagesByStyle";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import './TattooCarrousel.css';

function TattooCarrousel({ selectedStyle }) {
    // Convert selectedStyle to lowercase to ensure matching with keys
    const normalizedStyle = selectedStyle ? selectedStyle.toLowerCase().replace(/\s+/g, '_') : '';
    const defaultStyle = "realismo"; 
    
    // Try to get images for the selected style, fallback to default if not found
    const images = imageByStyles[normalizedStyle] || imageByStyles[defaultStyle] || [];
    const carouselRef = useRef(null);
    
    // Reset carousel position when style changes
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = 0;
        }
    }, [selectedStyle]);

    return (
      <div 
        ref={carouselRef}
        className="w-full h-full flex mt-8 gap-4 overflow-x-auto py-4 gap-x-8 custom-scrollbar"
      >
        {images.map((src, index) => (
          <motion.div
            key={`${normalizedStyle || defaultStyle}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-[340px] h-[430px] relative rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={src} 
              alt={`${normalizedStyle || defaultStyle} tattoo ${index + 1}`} 
              fill={true}
              sizes="340px"
              priority={index < 3} // Only prioritize first 3 images
              className="object-contain" // Use object-contain to preserve aspect ratio
            />
          </motion.div>
        ))}
      </div>
    );
}

export default TattooCarrousel;