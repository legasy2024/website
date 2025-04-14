"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { motion, AnimatePresence, useInView } from "framer-motion";

import californiaImg1 from "./assets/california1.png";
import californiaImg2 from "./assets/california2.png";
import pensilvaniaImg1 from "./assets/pensilvania1.png";
import pensilvaniaImg2 from "./assets/pensilvania2.png";
import luisianaImg1 from "./assets/luisiana1.png";
import luisianaImg2 from "./assets/luisiana2.png";

import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

function OurStories({ translations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stories = [
    {
      img1: californiaImg1,
      img2: californiaImg2,
      id: crypto.randomUUID(),
      city: translations.city_california,
      paragraph1: translations.paragraph_1_california,
      paragraph2: translations.paragraph_2_california,
    },
    {
      img1: pensilvaniaImg1,
      img2: pensilvaniaImg2,
      id: crypto.randomUUID(),
      city: translations.city_pensilvania,
      paragraph1: translations.paragraph_1_pensilvania,
      paragraph2: translations.paragraph_2_pensilvania,
    },
    {
      img1: luisianaImg1,
      img2: luisianaImg2,
      id: crypto.randomUUID(),
      city: translations.city_luisiana,
      paragraph1: translations.paragraph_1_luisiana,
      paragraph2: translations.paragraph_2_luisiana,
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    whileTap: {
      scale: 0.95
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    })
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Set up automatic carousel with useEffect
  useEffect(() => {
    let interval;

    if (autoplayEnabled) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
      }, 20000); // Change slide every 20 seconds
    }

    // Clean up interval on component unmount or when autoplay is disabled
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayEnabled, stories.length]);

  const handleNext = () => {
    // Temporarily pause autoplay when manually navigating
    setAutoplayEnabled(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);

    // Resume autoplay after manual navigation
    setTimeout(() => setAutoplayEnabled(true), 10000);
  };

  const handlePrev = () => {
    // Temporarily pause autoplay when manually navigating
    setAutoplayEnabled(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );

    // Resume autoplay after manual navigation
    setTimeout(() => setAutoplayEnabled(true), 20000);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    // Temporarily pause autoplay on touch start
    setAutoplayEnabled(false);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      handleNext(); // Swipe left (next)
    } else if (touchEndX - touchStartX > swipeThreshold) {
      handlePrev(); // Swipe right (previous)
    } else {
      setAutoplayEnabled(true);
    }
  };

  const handleDotClick = (index) => {
    setAutoplayEnabled(false);
    setCurrentIndex(index);
    setTimeout(() => setAutoplayEnabled(true), 20000);
  };

  return (
    <motion.section
      className="w-full flex flex-col items-center bg-[#EDEDED] py-12 md:py-20"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-[1200px] w-full md:h-full bg-[#EDEDED] place-self-center relative">
        <motion.h2
          className="text-[#585858] px-8"
          variants={titleVariants}
        >
          {translations.section_title}
        </motion.h2>

        {/* Navigation buttons for large screens */}
        <motion.button
          className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-[#7D7D7D] p-2 rounded-full z-10"
          onClick={handlePrev}
          aria-label="Previous story"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.05)" }}
          whileTap={{ scale: 0.9 }}
        >
          &lt;
        </motion.button>

        {/* Story title with animated city name */}
        <motion.h1
          className="text-TextBlack text-2xl md:text-3xl lg:text-4xl font-bold px-8 mb-6"
          variants={titleVariants}
        >
          {translations.title_start}{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={`city-${currentIndex}`}
              className={`text-BgOrange text-2xl md:text-3xl lg:text-4xl font-normal ${eagleFont.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {stories[currentIndex].city}{" "}
            </motion.span>
          </AnimatePresence>
          {translations.title_end}
        </motion.h1>

        {/* Content container with touch events for mobile */}
        <div
          className="flex flex-col md:flex-row gap-y-8 px-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image container */}
          <motion.figure
            className="w-[340px] -ml-8 md:ml-0 md:w-1/2 h-80 md:h-full px-7 relative"
            variants={imageContainerVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`img1-${currentIndex}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
              >
                <Image
                  src={stories[currentIndex].img1}
                  width={270}
                  height={280}
                  alt={`${stories[currentIndex].city} primary image`}
                  className="h-[280px] md:w-full md:h-full rounded-md drop-shadow-lg"
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`img2-${currentIndex}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                className="absolute top-32 left-44 min-[500px]:top-2/4 min-[500px]:left-3/4"
              >
                <Image
                  src={stories[currentIndex].img2}
                  width={130}
                  height={185}
                  alt={`${stories[currentIndex].city} secondary image`}
                  className="h-[185px] md:h-[400px] ml-16 md:ml-0 object-contain rounded-md drop-shadow-lg"
                />
              </motion.div>
            </AnimatePresence>
          </motion.figure>

          {/* Text content */}
          <div className="flex flex-col gap-y-4 mb-8 md:w-1/2 md:pl-28 md:pr-10 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                <p className="mb-4">{stories[currentIndex].paragraph1}</p>
                <p>{stories[currentIndex].paragraph2}</p>
              </motion.div>
            </AnimatePresence>

            <motion.a
              variants={buttonVariants}
              className="w-full flex flex-col items-center md:items-start mt-5"
              whileHover="whileHover"
              whileTap="whileTap"
              href="./about"
            >
              <Button
                className="bg-transparent border border-BgOrange !text-[#292929] font-bold"
                rightIcon={"arrowR"}
              >
                {translations.cta}
              </Button>
            </motion.a>
          </div>
        </div>

        {/* Navigation button for large screens */}
        <motion.button
          className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-[#7D7D7D] p-2 rounded-full z-10"
          onClick={handleNext}
          aria-label="Next story"
          whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.05)" }}
          whileTap={{ scale: 0.9 }}
        >
          &gt;
        </motion.button>

        {/* Progress indicator (dots) with click functionality */}
        <div className="flex flex-row justify-center mt-4 md:mt-14 lg:mt-20 place-self-center gap-2">
          {stories.map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              custom={index}
              variants={dotVariants}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-BgOrange" : "bg-gray-400"
                }`}
              whileHover={{ scale: 1.3 }}
              aria-label={`Go to story ${index + 1}`}
            ></motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default OurStories;