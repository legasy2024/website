'use client'

import "./DoYouWantToBe.css";
import localFont from "next/font/local";
import calendarIcon from "./assets/calendar.svg";
import ticketIcon from "./assets/ticket.svg";
import discountIcon from "./assets/discount.svg";
import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

function DoYouWantToBe({ translations }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const tags = [
    { tag: translations.tag1, id: crypto.randomUUID(), icon: calendarIcon },
    { tag: translations.tag2, id: crypto.randomUUID(), icon: ticketIcon },
    { tag: translations.tag3, id: crypto.randomUUID(), icon: discountIcon },
  ];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      className="bg-[#40403D] flex flex-col items-center w-full"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="Do_you_section relative w-full max-w-[1200px] h-[560px] md:h-[580px] max-h-[580px] p-8 sm:p-14 place-self-center bg-slate-400 max-">
        {/* left */}
        <div className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-[#40403D]/80 via-transparent to-transparent"></div>
        {/* right */}
        <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-[#40403D]/100 via-transparent to-transparent"></div>

        <article className="flex flex-row sm:w-full">
          <motion.h2
            className="text-white font-bold text-2xl md:text-3xl"
            variants={titleVariants}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
          >
            {translations.title}{" "}
            <motion.span
              className={`font-normal text-3xl ml-2 text-[#D8CDBC] ${eagleFont.className}`}
              variants={titleVariants}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              {translations.title_decorator}
            </motion.span>
          </motion.h2>
        </article>

        <section className="w-full flex flex-col md:items-end">
          <motion.article
            className="flex flex-col gap-y-3 bg-white px-5 py-7 mt-36 w-64 min-[380px]:w-full sm:w-[480px]  rounded-md"
            variants={cardVariants}
          >
            {tags.map(({ tag, id, icon }, index) => (
              <motion.span
                className="flex flex-row gap-x-2"
                key={id}
                custom={index}
                variants={tagVariants}
              >
                <Image src={icon} height={18} width={18} alt="icon" />
                <p>{tag}</p>
              </motion.span>
            ))}
            <motion.p
              className="font-bold mt-5 text-left"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.5 }
                }
              }}
            >
              {translations.cta_label}
            </motion.p>
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.7,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 120
                  }
                }
              }}
              href="https://wa.me/message/XGIYHXPQU2JMA1?text=Hola!%20Vengo%20de%20la%20pagina%20web%2C%20quisiera%20tener%20mas%20informacion"
              target="_blank"
            >
              <Button className="px-2  z-10">
                {translations.cta}
              </Button>
            </motion.a>
          </motion.article>
        </section>

      </div>
    </motion.section>
  );
}

export default DoYouWantToBe;