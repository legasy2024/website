"use client";

import localFont from "next/font/local";
import Image from "next/image";
import roomImg from "../assets/room.png";
import bullseye from "../assets/bullseye.svg";
import design from "../assets/design.svg";
import userCrown from "../assets/usercrown.svg";
import diamond from "../assets/diamond.svg";
import ValueCard from "./ValueCard/ValueCard";

import carr1 from "../assets/carrousel1.png";
import carr2 from "../assets/carrousel2.png";
import carr3 from "../assets/carrousel3.png";
import carr4 from "../assets/carrousel4.png";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

// Assuming you'll add this font to your project
const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

const carrouselImages = [
  { id: crypto.randomUUID(), src: carr1, alt: "carrousel image 1" },
  { id: crypto.randomUUID(), src: carr2, alt: "carrousel image 2" },
  { id: crypto.randomUUID(), src: carr3, alt: "carrousel image 3" },
  { id: crypto.randomUUID(), src: carr4, alt: "carrousel image 4" },
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

const valueCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const valueCardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const roomImageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut"
    }
  }
};

const carouselContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6
    }
  }
};

const WhyGetTattoo = ({ translations }) => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, { once: true, amount: 0.5 });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.5 });

  const carouselRef = useRef(null);
  const carouselInView = useInView(carouselRef, { once: true, amount: 0.2 });

  const values = [
    {
      id: crypto.randomUUID(),
      icon: bullseye,
      title: translations.quality,
      description: translations.quality_description,
    },
    {
      id: crypto.randomUUID(),
      icon: design,
      title: translations.design,
      description: translations.design_description,
    },
    {
      id: crypto.randomUUID(),
      icon: userCrown,
      title: translations.process,
      description: translations.process_description,
    },
    {
      id: crypto.randomUUID(),
      icon: diamond,
      title: translations.experience,
      description: translations.experience_description,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full h-full max-w-[1200px] m-auto flex flex-col px-5 py-20 gap-y-9"
    >
      <motion.h1
        ref={titleRef}
        variants={titleVariants}

        className="text-TextBlack  hidden md:flex flex-row items-center text-2xl m md:text-4xl font-bold"
      >
        {translations.section_title}
        <motion.span

          className={`font-normal text-BgOrange text-4xl -mt-3 md:text-5xl ml-3 ${eagleFont.className}`}
        >
          {translations.section_title_decorator}
        </motion.span>
      </motion.h1>

      {/* Mobile Title */}
      <div  >
        <motion.p

          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-TextBlack md:hidden flex flex-row items-center text-2xl m md:text-4xl font-bold"
        >
          {translations.section_title}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`font-normal text-BgOrange text-5xl -mt-3 md:text-5xl ml-3 ${eagleFont.className}`}
        >
          {translations.section_title_decorator}
        </motion.span>
      </div>


      <motion.p
        ref={paragraphRef}
        variants={paragraphVariants}
        initial="hidden"
        animate={paragraphInView ? "visible" : "visible"}
        className="p-0 mt-0 md:-mt-16 lg:pr-20 "
      >
        {translations.paragraph}
      </motion.p>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-y-12">
          <motion.p
            ref={paragraphRef}
            variants={paragraphVariants}
            initial="hidden"
            animate={paragraphInView ? "visible" : "hidden"}
            className="hidden lg:block p-0 lg:pr-20"
          >
            {translations.paragraph}
          </motion.p>

          <motion.div
            ref={valuesRef}
            variants={valueCardsContainerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-y-6 gap-x-8"
          >
            {values.map(({ id, icon, title, description }) => {
              return (
                <motion.div key={id} variants={valueCardVariants}>
                  <ValueCard
                    icon={icon}
                    title={title}
                    description={description}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.figure
          ref={imageRef}
          variants={roomImageVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          className="w-1/2"
        >
          <Image
            src={roomImg}
            width={480}
            height={580}
            alt="room image"
            className="hidden md:block"
          />
        </motion.figure>
      </div>

      <motion.div
        ref={carouselRef}
        variants={carouselContainerVariants}
        initial="hidden"
        animate={carouselInView ? "visible" : "hidden"}
        className="w-full overflow-hidden"
      >
        <motion.div
          className="flex gap-4 animate-slide-infinite"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {[...carrouselImages, ...carrouselImages].map(
            ({ id, src, alt }, index) => (
              <motion.div
                key={id + index}
                className="rounded-lg flex-shrink-0"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width='auto'
                  height='auto'
                  loading="lazy"
                  className="w-[290px] md:w-[342px] object-contain rounded-lg"
                />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyGetTattoo;