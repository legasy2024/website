'use client'

import bg_img from './assets/bg_img.png';
import React from 'react';
import { motion } from 'framer-motion';
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});

const Header = ({ 
translations}) => {
  
  // Animation variants
  const headerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.15 
      }
    }
  };
  
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full">
      {/* Background with overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `url(${bg_img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px'
        }}
      />
      
      {/* Main content */}
      <motion.div 
        className="relative h-[450px] z-10 px-4 md:px-12 pt-16 pb-12"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-6xl mt-8 md:mt-32 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Title section */}
          <div>
            {/* Section identifier */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base tracking-wider mb-2"
            >
              {translations.section_title}
            </motion.p>
            
            {/* Main heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-white flex flex-wrap items-end text-4xl md:text-5xl font-bold"
            >
              <p className='min-w-[200px] '></p>
              {translations.title}{" "}
              <motion.span 
                className={`font-normal text-[#D8CDBC] text-6xl ml-2 ${eagleFont.className}`}
                style={{ marginBottom: "-0.2em" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } 
                }}
              >
                {translations.title_decorator}
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Right column - Description text */}
          <motion.div
            variants={itemVariants}
            className="text-white text-sm md:text-base leading-relaxed mt-6 md:mt-16"
          >
            {translations.description}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;