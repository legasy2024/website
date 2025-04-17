'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg1 from "@/components/home/LandingSection/assets/heroImg7.png";
import heroImg2 from "@/components/home/LandingSection/assets/heroImg2.png";
import heroImg4 from "@/components/home/LandingSection/assets/heroimg4.png";
import heroImg5 from "@/components/home/LandingSection/assets/heroImg5.png";
import heroImg6 from "@/components/home/LandingSection/assets/heroImg6.png";
import heroImg7 from "@/components/home/LandingSection/assets/heroImg7.png";
import heroImg8 from "@/components/home/LandingSection/assets/heroImage8.png";
import heroImg10 from "@/components/home/LandingSection/assets/heroImg10.png";
import heroImg9 from "@/components/home/LandingSection/assets/heroImg9.png";

//Mobile changes
import heroImg8Mobile from "@/components/home/LandingSection/assets/heroImg8Mobile.png";
import heroImg5Mobile from "@/components/home/LandingSection/assets/heroImg5Mobile.png";
import mobileImgOne from "@/components/home/LandingSection/assets/mobileImgone.png";

const herosImgs = [
  {
    img: heroImg9,
    pos: "absolute right-8 top-32 rounded-xl hidden lg:block",
    width: 140,
    height: 130,
    id: crypto.randomUUID(),
    alt: "Tattoo Dios griego",
    custom: 3, // Animation order
  },
  {
    img: heroImg8,
    pos: "absolute right-8 top-[350px] rounded-xl",
    width: 130,
    height: 170,
    id: crypto.randomUUID(),
    alt: "Tattoo saint seya ",
    custom: 5, // Animation order
  },
  {
    img: heroImg4,
    pos: "absolute right-48 top-[480px] rounded-xl z-10",
    width: 90,
    height: 120,
    id: crypto.randomUUID(),
    alt: "Tattoo pierna",
    custom: 7, // Animation order
  },
  {
    img: heroImg6,
    pos: "absolute right-48 top-[630px] rounded-xl hidden lg:block",
    width: 70,
    height: 100,
    id: crypto.randomUUID(),
    alt: "Tattoo perro",
    custom: 8, // Animation order
  },
  {
    img: heroImg10,
    pos: "absolute left-8 top-44 rounded-xl hidden lg:block",
    width: 110,
    height: 140,
    id: crypto.randomUUID(),
    alt: "Tattoo Itachi",
    custom: 2, // Animation order
  },
  {
    img: heroImg1,
    pos: "absolute left-6 top-96 rounded-xl hidden lg:block",
    width: 130,
    height: 200,
    id: crypto.randomUUID(),
    alt: "Tattoo leon",
    custom: 4, // Animation order
  },
  {
    img: heroImg5,
    pos: "absolute left-48 top-[490px] rounded-xl",
    width: 130,
    height: 140,
    id: crypto.randomUUID(),
    alt: "Tattoo Code Geass",
    custom: 6, // Animation order
  },
  {
    img: heroImg2,
    pos: "absolute object-cover left-48 top-[675px] w-[150px] h-[60px] rounded-xl overflow-hidden hidden lg:block",
    width: 130,
    height: 140,
    id: crypto.randomUUID(),
    alt: "Tattoo Zeus",
    custom: 9, // Animation order
  },
];

function HeroBgImages() {

  const commit = ''
  // Enhanced animation variants for a professional falling effect
  const imageVariants = {
    initial: {
      opacity: 0,
      y: -200,
      rotate: Math.random() * 10 - 5, // Slight random rotation
      scale: 0.8,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring", 
        stiffness: 60,
        damping: 12,
        mass: 1,
        delay: custom * 0.2, // Sequential delays based on custom order
        duration: 1.8,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Mobile variants with slightly different parameters
  const mobileImageVariants = {
    initial: {
      opacity: 0,
      y: -100,
      rotate: Math.random() * 6 - 3,
      scale: 0.9,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.9,
        delay: custom * 0.15,
        duration: 1.5,
      },
    }),
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {herosImgs.map(({ img, pos, width, height, id, alt, custom }) => (
          <motion.div
            key={id}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={imageVariants}
            custom={custom}
            className="origin-center"
          >
            <Image
              src={img}
              width={width}
              height={height}
              className={pos}
              alt={`Hero background image ${alt}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none block lg:hidden m-auto w-80 sm:w-[500px] h-[400px] transform transition-all duration-200 mt-96">
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={mobileImageVariants}
          custom={3}
        >
          <Image
            src={heroImg5Mobile}
            width={110}
            height={140}
            className={'absolute top-60 left-28 sm:left-44 rounded-xl z-10'}
            alt={`Hero image`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={mobileImageVariants}
          custom={1}
        >
          <Image
            src={mobileImgOne}
            width={150}
            height={150}
            className={'object-contain absolute left-0 top-28 sm:left-16 rounded-xl'}
            alt={`Hero image Zoro`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={mobileImageVariants}
          custom={2}
        >
          <Image
            src={heroImg8Mobile}
            height={170}
            className={'absolute object-contain right-0 top-32 sm:right-24 h-48 rounded-xl'}
            alt={`Hero image Zoro`}
          />
        </motion.div>
      </div>
    </>
  );
}

export default HeroBgImages;