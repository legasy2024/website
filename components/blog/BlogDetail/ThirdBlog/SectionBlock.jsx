import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function SectionBlock({
  section,
  image,
  index,
  highlightIndex,
}) {
  return (
    <>
      <motion.h2
        className="text-2xl font-bold mt-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {section.title}
      </motion.h2>

      {section.subtitle && (
        <motion.h3
          className="text-xl font-bold mt-0 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {section.subtitle}
        </motion.h3>
      )}

      {image && (
        <motion.div
          className="relative w-full h-[200px] md:h-[460px] mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={section.image_alt}
            loading="lazy"
            fill
            className="object-cover rounded-md"
            sizes="100vw"
          />
        </motion.div>
      )}

      {section.paragraphs?.map((para, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={
            highlightIndex !== undefined && idx === highlightIndex
              ? "italic border-l-4 border-[#A14E05] pl-4 my-4"
              : ""
          }
        >
          {para}
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
            href="https://wa.me/573128717100?text=Hi!%20I'm%20coming%20from%20the%20blog,%20I%20would%20like%20more%20information%20about%20tattoos"
            className="bg-[#A14E05] text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            {section.cta_button}
          </Link>
        </motion.div>
      )}

      {section.cta_button_portfolio && (
        <motion.div
          className="-mt-6 w-full flex justify-center"
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
            View Portfolio
          </Link>
        </motion.div>
      )}
    </>
  );
}
