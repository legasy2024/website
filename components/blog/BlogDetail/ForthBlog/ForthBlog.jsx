"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import headerImg from "./assets/header.png";
import talentImg from "./assets/talentImg.png";

import { FaInstagram } from "react-icons/fa";
import pricesImg from "./assets/moneyImg.png";
import experienceImg from "./assets/experinceImg.png";
import gastronomyImg from "./assets/empanadas.png";

import caliImg from "./assets/caliUno.jpg";
import salsaImg from "./assets/partyImg.jpg";
import hygieneImg from "./assets/imgDos.png";
import empanadasImg from "./assets/empanadas.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ClientBlogDetail({ content }) {
  // Datos estáticos del post
  const post = {
    label: "Turismo",
    title:
      "Tatuajes en Colombia: Cali, El Auge de una Ciudad Creativa para Extranjeros",
    date: "25 de abril de 2025",
    image: "/img/blog/tatuajes-cali-english.png",
  };

  return (
    <section className="w-full m-auto px-5 py-16 md:py-28 bg-[#212121] text-white">
      <motion.div
        className="w-full max-w-[1200px] m-auto flex flex-col "
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.label
          className=" w-28 flex flex-col items-center place-self-center border border-[#C4C4C4] text-TextSecondary-100 py-1 px-3 rounded-full mb-4"
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

        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={headerImg}
            alt={post.title}
            loading="lazy"
            fill
            className="w-full object-contain rounded-md"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-8 text-base leading-7 text-[#e0e0e0]"
          variants={staggerChildren}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.intro}
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].title}
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={talentImg}
              alt={content.sections[0].image_alt}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].paragraphs[0]}
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].subtitle}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].paragraphs[2]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].paragraphs[3]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[0].paragraphs[4]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            {content.sections[0].paragraphs[5]}
          </motion.p>

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
              {content.sections[0].cta_button}
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].title}
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={salsaImg}
              alt={content.sections[1].image_alt}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.h3
            className="text-xl font-bold mt-0 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraph_list[0]}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[2]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[3]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[4]}
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraph_list[1]}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[5]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[6]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[7]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[8]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[9]}
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraph_list[2]}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[10]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[11]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[12]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[1].paragraphs[13]}
          </motion.p>

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
              {content.sections[1].cta_button}
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].title}
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={caliImg}
              alt={content.sections[2].image_alt}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].paragraphs[2]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].paragraphs[3]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[2].paragraphs[4]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          {content.sections[2].paragraphs[5]}
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].title}
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[560px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={experienceImg}
              alt={content.sections[3].image_alt}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].paragraphs[0]}
          </motion.p>

          <motion.h3
            className="text-xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          {content.sections[3].subtitle}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].paragraphs[2]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].paragraphs[3]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[3].paragraphs[4]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="italic border-l-4 border-[#A14E05] pl-4 my-4"
          >
            {content.sections[3].paragraphs[5]}
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].title}
          </motion.h2>

          <motion.div
            className="relative w-full h-[200px] md:h-[460px] mb-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={hygieneImg}
              alt={content.sections[4].image_alt}
              loading="lazy"
              fill
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[2]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[3]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[4]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.sections[4].paragraphs[5]}
          </motion.p>

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
              {content.sections[4].cta_button}
            </Link>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.conclusion_title}
            </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.conclusion_paragraphs[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.conclusion_paragraphs[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.conclusion_paragraphs[2]}
          </motion.p>

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
      </motion.div>
    </section>
  );
}
