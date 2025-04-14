'use client'

import React, { useState, useEffect } from 'react';
import { FaTag, FaInfoCircle, FaFireAlt, FaStar, FaCalendarCheck } from 'react-icons/fa';
import bg_img from './assets/bg_img.png';
import localFont from "next/font/local";
import { motion } from 'framer-motion';

const eagleFont = localFont({
  src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});

const VipClubComponent = ({ content, benefits }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const iconMap = {
    discounts: <FaTag />,
    priority: <FaInfoCircle />,
    promotions: <FaFireAlt />,
    exclusivity: <FaStar />,
    events: <FaCalendarCheck />,
  };

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

  const iconVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const vipTextVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="bg-black min-h-[800px] py-16 px-4 relative overflow-hidden" initial="hidden" animate="visible" variants={containerVariants}>
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
        {/* Header section - Desktop */}
        <div className="mb-16 hidden md:flex mt-24 flex-col items-start">
          <motion.p className="text-gray-400 uppercase tracking-widest mb-2 text-sm" variants={itemVariants}>
            {content.section_title}
          </motion.p>

          <motion.h2 className="text-white flex items-center justify-center text-4xl md:text-5xl font-bold mb-8" variants={itemVariants}>
            {content.title}
            <motion.span className={`${eagleFont.className} text-[#D8CDBC] ml-2`} variants={vipTextVariants}>
              {content.title_decorator}
            </motion.span>
          </motion.h2>

          <motion.p className="text-white text-base md:text-lg max-w-3xl mx-auto" variants={itemVariants}>
            {content.description}
          </motion.p>

          <motion.a
            className="mt-8 px-6 py-3 bg-[#A14E05] hover:bg-orange-800 transition-colors text-white rounded-md font-medium cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/message/XGIYHXPQU2JMA1"
            target="_blank"
          >
            {content.cta}
          </motion.a>
        </div>

        {/* Header section - Mobile */}
        <div className="mb-16 flex md:hidden mt-24 flex-col items-start">
          <motion.p className="text-gray-400 uppercase tracking-widest mb-2 text-sm" variants={itemVariants}>
            {content.section_title}
          </motion.p>

          <motion.p className="text-white flex items-center justify-center text-4xl font-bold mb-4" variants={itemVariants}>
            {content.title}
          </motion.p>

          <motion.div className="flex flex-row items-center -mt-4 mb-6">
            <motion.span className={`${eagleFont.className} text-[#D8CDBC] text-4xl ml-2`} variants={vipTextVariants}>
              {content.title_decorator.replace('?', '')}
            </motion.span>
            <motion.p className="text-white text-4xl font-bold ml-1">?</motion.p>
          </motion.div>

          <motion.p className="text-white text-base max-w-3xl mx-auto" variants={itemVariants}>
            {content.description}
          </motion.p>

          <motion.a
            className="mt-8 px-6 py-3 bg-[#A14E05] hover:bg-orange-800 transition-colors text-white rounded-md font-medium cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/message/XGIYHXPQU2JMA1"
            target="_blank"
          >
            {content.cta}
          </motion.a>
        </div>

        {/* Benefits grid */}
        <motion.div className="grid grid-cols-1 md:-ml-24 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0" variants={containerVariants}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={`relative bg-black/10 backdrop-blur-lg border border-[#6B6760] rounded-lg overflow-hidden transition-all duration-300 h-52 ${isMobile ? 'h-auto' : hoveredBenefit === benefit.id ? 'w-72 ml-10' : 'w-44 ml-24'}`}
              onMouseEnter={() => !isMobile && setHoveredBenefit(benefit.id)}
              onMouseLeave={() => !isMobile && setHoveredBenefit(null)}
              variants={itemVariants}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeOut" } }}
            >
              <div className="flex flex-col md:flex-row items-start p-6">
                <section className='h-full'>
                  <motion.div
                    className="bg-[#6B6760] rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white"
                    whileHover="hover"
                    initial="initial"
                    variants={iconVariants}
                  >
                    {React.cloneElement(iconMap[benefit.id], { className: "w-6 h-6" })}
                  </motion.div>
                  <motion.h3 className="text-white text-xl font-medium mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index, duration: 0.5 }}>
                    {benefit.title}
                  </motion.h3>
                </section>
                <motion.p
                  className={`text-gray-400 md:ml-4 text-base transition-opacity duration-300 ${isMobile || hoveredBenefit === benefit.id ? 'opacity-100' : 'opacity-0 h-0'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isMobile || hoveredBenefit === benefit.id ? 1 : 0, x: isMobile || hoveredBenefit === benefit.id ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VipClubComponent;