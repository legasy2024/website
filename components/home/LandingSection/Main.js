"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent/HeroContent";
import "./landing.css";
import HeroBgImages from "./HeroBgImages/HeroBgImages";

function LandingSection({ translations }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <div className="hero relative">
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            type: "tween",
            ease: "easeOut",
          }}
          className="hero_container"
        >
          {/* Side Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-20 md:w-44 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-20 md:w-44 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
          </div>
          <HeroContent translations = {translations} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            <HeroBgImages />
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default LandingSection;
