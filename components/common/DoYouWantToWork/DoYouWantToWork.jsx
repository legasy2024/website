'use client';

import Button from "@/components/common/Button/Button";
import Image from "next/image";
import emblem from "./assets/emblem.svg";
import { motion } from "framer-motion";

function DoYouWantToWork({ translations }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      className="px-7 w-full py-14 flex flex-col items-center bg-[#141414] place-content-center"
      aria-labelledby="work-with-us-title"
    >
      <motion.div
        className="max-w-[1200px] flex flex-col md:hidden gap-y-5 px-5 py-8 rounded-md bg-gradient-to-b from-[#777777]/30 to-[#838383]/10 border border-[#827B71]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div variants={imageVariants}>
          <Image src={emblem} width={45} height={45} alt="Emblem icon" />
        </motion.div>
        <motion.h2
          className="text-xl font-bold text-white"
          variants={itemVariants}
        >
          {translations.title}
        </motion.h2>
        <motion.p
          className="text-TextSecondary-100"
          variants={itemVariants}
        >
          {translations.paragraph}
        </motion.p>
        <Button color="dark" rightIcon={"arrowR"} className="md:w-44 hover:transform transition-transform duration-200 ease-in-out">
          {translations.cta}
        </Button>

      </motion.div>
      <motion.div
        className="max-w-[1200px] place-self-center hidden md:flex md:flex-row flex-row px-5 py-8 rounded-md bg-gradient-to-b from-[#777777]/30 to-[#838383]/10 border border-[#827B71]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-y-5 w-3/4"
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl font-bold text-white"
            variants={itemVariants}
          >
            {translations.title}
          </motion.h2>
          <motion.p
            className="text-TextSecondary-100"
            variants={itemVariants}
          >
            {translations.paragraph}
          </motion.p>

          <Button color="dark" rightIcon={"arrowR"} className="md:w-48">
            {translations.cta}
          </Button>
        </motion.div>
        <motion.figure
          className="w-1/4 h-full place-self-center"
          variants={imageVariants}
        >
          <Image
            src={emblem}
            width={140}
            height={140}
            alt="Emblem icon"
            className="m-auto"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
}

export default DoYouWantToWork;