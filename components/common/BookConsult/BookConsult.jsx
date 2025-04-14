'use client'
import Button from "@/components/common/Button/Button";
import PhoneForm from "@/components/common/PhoneForm/PhoneForm";
import EmailForm from "@/components/common/EmailForm/EmailForm";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

function BookConsult({ translations }) {

  const [currentMethod, setCurrentMethod] = useState("whatsapp");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 flex flex-col item py-16 max-w-[1200px] "
    >
      <motion.h2
        variants={fadeIn}
        className="text-[#585858]"
      >
        {translations.section_title}
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        className="flex flex-col lg:flex-row lg:justify-between gap-y-6"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-TextBlack text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          {translations.title}{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className={`text-BgOrange text-2xl md:text-3xl lg:text-4xl font-normal transition-all duration-300 ease-in-out ${eagleFont.className}`}
          >
            {translations.title_decorator}{" "}
          </motion.span>
          {translations.title_end}
        </motion.h3>
        <motion.a
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          className="md:ml-24"
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/message/XGIYHXPQU2JMA1?text=Hola!%20Vengo%20de%20la%20pagina%20web%2C%20quisiera%20tener%20mas%20informacion"
          target="_blank"
        >
          <Button className="w-full">{translations.cta}</Button>
        </motion.a>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="my-6 mt-20"
      >
        {translations.contact_text}
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row items-center gap-x-3 mt-3"
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentMethod("whatsapp")}
        >
          <button className={currentMethod === "whatsapp" ? `flex py-4 justify-center rounded-lg flex-row items-center text-white bg-TextBlack w-40 max-w-52` : `flex flex-row items-center text-black rounded-lg bg-white py-3 justify-center w-40 max-w-52 border border-[#828282]`}> <FaWhatsapp className="mr-2" /> WhatsApp</button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentMethod("email")}
        >
          <button className={currentMethod === "email" ? `flex py-4 justify-center rounded-lg flex-row items-center text-white bg-TextBlack w-40 max-w-52` : `flex flex-row items-center text-black rounded-lg bg-white py-3 justify-center w-40 max-w-52 border border-[#828282]`}> <MdOutlineEmail className="mr-2" /> {translations.email_label}</button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >

        {
          currentMethod === "whatsapp" ? (
            <PhoneForm confirm_phone_form={translations.confirm_phone_form} error_phone_form={translations.error_phone_form} className={"my-6"} />) : (
            <EmailForm confirm_email_form={translations.confirm_email_form} error_email_form={translations.error_email_form} />
          )
        }

      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-y-4 mt-24 place-self-start text-left md:place-self-end md:text-right"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-[#585858] text-2xl font-medium"
        >
          {translations.info_title}
        </motion.h3>
        <motion.p variants={fadeInUp} className="text-[#111111]">Cali, Colombia</motion.p>
        <motion.p variants={fadeInUp} className="text-[#111111]">+57 (312) 871-7100</motion.p>
        <motion.p variants={fadeInUp} className="text-[#111111]">hola@legassystudio.com</motion.p>
      </motion.div>

    </motion.section>
  );
}
export default BookConsult;