'use client'

import React from 'react';
import bg_img from './assets/bg_img.jpg';
import localFont from "next/font/local";
import { motion } from 'framer-motion';

const eagleFont = localFont({
  src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});

const PodcastComponent = ({ content }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.8 },
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 },
    },
  };

  const podcastTextVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="bg-black min-h-[400px] py-16 px-4 relative overflow-hidden" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div
        className="absolute inset-0 opacity-30 z-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg_img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
        variants={fadeInVariants}
      />

      <div className="max-w-6xl flex flex-col items-center md:items-start mx-auto relative z-10">
        {/* Un solo encabezado para móvil y escritorio, con un único H1 */}
        <div className="mb-16 mt-24 flex flex-col items-start">
          <motion.p className="text-gray-400 uppercase tracking-widest mb-2 text-sm" variants={itemVariants}>
            {content.section_title}
          </motion.p>

          <motion.h1 className="text-white flex flex-wrap items-center text-4xl md:text-5xl font-bold mb-6 md:mb-8" variants={itemVariants}>
            {content.title}
            <motion.span className={`${eagleFont.className} text-[#D8CDBC] ml-2`} variants={podcastTextVariants}>
              {content.title_decorator}
            </motion.span>
          </motion.h1>

          <motion.p className="text-white text-base md:text-lg max-w-3xl" variants={itemVariants}>
            {content.description}
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
};

export default PodcastComponent;
