'use client'

import "./OurStudio.css";
import Button from "@/components/common/Button/Button";
import MemberCards from "./MemberCards/MemberCards";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

function OurStudio({ translations }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
  };

  const buttonAnimation = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.6 } }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="our_studio_section h-full lg:h-full relative flex justify-center"
    >
      {/* gradients */}
      <div className=" w-full sm:w-[330px] md:w-[1200px] md:max-w-[1200px]  flex flex-col gap-y-10 py-20 relative z-10 transition-all duration-300 ease-in-out">
        <div className="absolute inset-0 w-full h-full mix-blend-soft-light bg-cover md:bg-auto our_studio_bg opacity-15 bg-bottom md:bg-left">
          {/* left */}
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#141414] via-transparent to-transparent"></div>

          {/* right */}
          <div className="absolute right-0 top-0 h-full w-1/3 md:w-2/3 md:right-1/4 lg:right-2/4 bg-gradient-to-l from-[#141414] via-transparent to-transparent"></div>

          {/* top */}
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#141414] via-transparent to-[#141414]/0"></div>

          {/* bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]/0"></div>
        </div>

        <div className="flex flex-col gap-y-10 w-full">
          <motion.article
            variants={fadeIn}
            className="flex flex-col gap-y-3 px-10"
          >
            <motion.h2
              variants={slideUp}
              className="text-[#828282] text-lg md:text-xl place-self-center"
            >
              {translations.label_title}
            </motion.h2>
            <div className="flex flex-col items-center text-center md:text-start">
              <motion.h1
                variants={slideUp}
                className="text-white place-self-center text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ease-in-out"
              >
                {translations.title}{" "}
                <span
                  className={`text-[#D8CDBC] text-6xl md:text-3xl ml-0 md:ml-1 lg:text-4xl font-normal transition-all duration-300 ease-in-out ${eagleFont.className}`}
                >
                  {translations.title_decorator}
                </span>
              </motion.h1>
            </div>

          </motion.article>
          <div className="flex flex-col gap-x-10 desktop:flex-row">
            <motion.article
              variants={slideInLeft}
              className="max-w-[600px] flex flex-col gap-y-10 mt-5 px-10"
            >
              <motion.p
                variants={fadeIn}
                className="text-TextSecondary-100 text-center md:text-left "
              >
                {translations.paragraph_1}
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-TextSecondary-100 text-center md:text-left"
              >
                {translations.paragraph_2}
              </motion.p>
            </motion.article>
            <motion.aside
              className="w-full px-0 mt-10 md:mt-0 desktop:w-1/2"
            >
              <MemberCards />
            </motion.aside>
          </div>
        </div>
        <motion.a
          variants={buttonAnimation}
          className="flex flex-col md:-ml-4 items-center md:-mt-44 w-full md:w-fit xl:-mt-36 px-14 z-30"
          href="./about"
        >
          <Button rightIcon={"arrowR"} color="dark">
            {translations.cta}
          </Button>
        </motion.a>

      </div>
    </motion.section>
  );
}
export default OurStudio;