"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import headerImg from "./assets/header.png";
import talentImg from "./assets/talentImg.png";
import experienceImg from "./assets/experinceImg.png";
import caliImg from "./assets/caliUno.jpg";
import salsaImg from "./assets/partyImg.jpg";
import hygieneImg from "./assets/imgDos.png";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const sectionImages = [
  headerImg,
  talentImg,
  salsaImg,
  caliImg,
  experienceImg,
  hygieneImg,
];

export default function ClientBlogDetail({ content }) {
  return (
    <section className="w-full m-auto px-5 py-16 md:py-28 bg-[#212121] text-white">
      <motion.div
        className="w-full max-w-[1200px] m-auto flex flex-col"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.label
          className="w-28 flex flex-col items-center place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {content.label}
        </motion.label>

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.title}
        </motion.h1>

        <motion.p
          className="text-sm text-center text-[#888] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.date}
        </motion.p>

        {content.sections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-y-8 text-base leading-7 text-[#e0e0e0]"
            variants={staggerChildren}
          >
            <motion.h2
              className="text-2xl font-bold mt-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {section.title}
            </motion.h2>

            {section.image_alt && (
              <motion.div
                className="relative w-full h-[200px] md:h-[460px] mb-10"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={sectionImages[index] || headerImg}
                  alt={section.image_alt}
                  loading="lazy"
                  fill
                  className="object-cover rounded-md"
                  sizes="100vw"
                />
              </motion.div>
            )}

            {section.subtitle && (
              <motion.h3
                className="text-xl font-bold mt-4 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {section.subtitle}
              </motion.h3>
            )}

            {section.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={text.includes("\u2014") || text.includes("\"My tattoo") ? "italic border-l-4 border-[#A14E05] pl-4 my-4" : ""}
              >
                {text}
              </motion.p>
            ))}

            {section.cta_button && (
              <motion.div
                className="my-4 w-full flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos"
                  className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  {section.cta_button}
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}

        <motion.h2
          className="text-2xl font-bold mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {content.conclusion_title}
        </motion.h2>

        {content.conclusion_paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.p>
        ))}

        <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <motion.div
            className="my-4 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://wa.me/573128717100?text=Hi!%20I%27m%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos"
              className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {content.final_cta_buttons.whatsapp}
            </Link>
          </motion.div>

          <motion.div
            className="mt-0 w-full flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://www.instagram.com/legassystudio?igsh=ZWg5NXF1Nmd6eHJt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <FaInstagram size={18} />
              {content.final_cta_buttons.instagram}
            </Link>
          </motion.div>
        </section>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-[#888] italic"
        >
          {content.footer_paragraphs[0]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#2a2a2a] p-4 rounded-md mt-4"
        >
          <p className="font-medium mb-2">{content.contact_info.title}</p>
          <p>{content.contact_info.location}</p>
          <p>{content.contact_info.phone}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
