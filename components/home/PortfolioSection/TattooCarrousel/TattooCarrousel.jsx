import Image from "next/image";
import { imageByStyles } from "../data/imagesByStyle";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import './TattooCarrousel.css';

// ✅ Función para eliminar tildes
function normalizeText(text) {
  return text
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
    .toLowerCase()
    .replace(/\s+/g, "_"); // Reemplaza espacios por guiones bajos
}

// ✅ Mapeo de todos los estilos posibles a sus claves en imageByStyles
const styleKeyMap = {
  realism: "realismo",
  surrealism: "surrealismo",
  fine_line: "linea_fina",
  microrealism: "microrealismo",
  anime: "anime",
  pointillism: "puntillismo",
  realismo: "realismo",
  surrealismo: "surrealismo",
  linea_fina: "linea_fina",
  microrealismo: "microrealismo",
  puntillismo: "puntillismo",
  free_style: "libre",
  libre: "libre",
};

function TattooCarrousel({ selectedStyle }) {
  const defaultStyle = "realismo";

  // ✅ Normalizamos y mapeamos el estilo
  const normalizedInput = normalizeText(selectedStyle);
  const normalizedStyle = styleKeyMap[normalizedInput] || defaultStyle;

  const images = imageByStyles[normalizedStyle] || [];
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [normalizedStyle]);

  return (
    <div
      ref={carouselRef}
      className="w-full h-full flex mt-8 gap-4 overflow-x-auto py-4 gap-x-8 custom-scrollbar"
    >
      {images.map((src, index) => (
        <motion.div
          key={`${normalizedStyle}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 w-[340px] h-[430px] relative rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={src}
            alt={`${normalizedStyle} tattoo ${index + 1}`}
            fill={true}
            sizes="340px"
            priority={index < 3}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default TattooCarrousel;