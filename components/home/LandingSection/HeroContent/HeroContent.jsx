'use client';

import Button from "@/components/common/Button/Button";
import Image from "next/image";
import emblemImg from "../assets/emblem.svg";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const eagleFont = localFont({
  src: '../../../../public/fonts/eagle/EagleHorizonP.ttf'
});

function HeroContent( { translations } ) {
  // Variants para las animaciones de texto
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3, // Primer elemento en aparecer
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.1, // Aparece después del título principal
      },
    },
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.8, // Aparece después del subtítulo
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.3, // Último elemento en aparecer
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        className=""
      >
        <Image src={emblemImg} width={80} height={80} alt="Emblema" />
      </motion.div>
      
      <div className="flex flex-col items-center justify-center p-5 mb-52 -mt-10 lg:mb-0">
        <motion.h1 
          className="bg-gradient-to-b from-white to-[#989898] text-transparent bg-clip-text text-2xl   md:text-5xl p-1"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {translations.hero_title}
        </motion.h1>
        

        <motion.h2 
          className={`text-[#D8CDBC]  text-[40px]  md:text-8xl mb-4 ${eagleFont.className}`}
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          {translations.hero_subtitle}
        </motion.h2>
        
        <motion.p 
          className="text-TextSecondary-100 max-w-96 mt-5 text-center text-lg"
          initial="hidden"
          animate="visible"
          variants={descriptionVariants}
        >
          {translations.hero_text}{" "}
        </motion.p>
        
        <motion.a
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          href="https://wa.me/3128717100?text=Hola!%20Vengo%20de%20la%20pagina%20web%2C%20quisiera%20tener%20mas%20informacion"
          target="_blank"
        >
          <Button className="mt-6" color="default">
          {translations.cta}
          </Button>
        </motion.a>
      </div>
    </>
  );
}

export default HeroContent;