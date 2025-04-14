'use client'

import bgImg from './assets/bgImage.png';
import React from 'react';
import { motion } from 'framer-motion';
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});

const Header = ({
  translations }) => {

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
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px'
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative h-[350px] z-10 px-4 md:px-12 pt-16 pb-12"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-6xl mt-16 md:mt-20 mx-auto flex justify-center text-center">

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
            <div className='flex flex-col  md:flex-row items-start md:items-center'>
              <motion.h1
                variants={itemVariants}
                className="text-white flex flex-wrap items-center text-4xl md:text-5xl font-bold"
              >
                {translations.title}{" "}

              </motion.h1>
              <motion.h1
                className={`font-normal text-[#D8CDBC] md:-mt-8 text-6xl ml-4 ${eagleFont.className}`}
                style={{ marginBottom: "-0.2em" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 0.6, ease: "easeOut" }
                }}
              >
                {translations.title_decorator}
              </motion.h1>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;