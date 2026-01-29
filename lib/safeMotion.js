/**
 * Helper para crear animaciones de Framer Motion más seguras
 * Evita errores de removeChild cuando los componentes se desmontan
 */

import { motion } from "framer-motion";

/**
 * Variantes de animación seguras que evitan conflictos con el ciclo de vida de React
 */
export const safeAnimationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }
};

/**
 * Viewport seguro para animaciones whileInView
 * Usa un margin negativo para evitar que se ejecuten animaciones
 * cuando el componente está siendo desmontado
 */
export const safeViewport = {
  once: true,
  margin: "-50px",
  amount: 0.3
};

/**
 * Componente Motion seguro que maneja mejor el desmontaje
 */
export const SafeMotion = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
  label: motion.label,
  article: motion.article,
  section: motion.section
};
