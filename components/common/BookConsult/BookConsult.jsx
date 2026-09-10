'use client'
import Button from "@/components/common/Button/Button";
import PhoneForm from "@/components/common/PhoneForm/PhoneForm";
import EmailForm from "@/components/common/EmailForm/EmailForm";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";


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

function BookConsult({ translations, locale = "es" }) {

  const [currentMethod, setCurrentMethod] = useState("whatsapp");

  const mapsUrl = translations?.maps_url || "https://maps.app.goo.gl/p3jzZbkTe7SJs1By5";
  const addressText = translations?.address_value || "Calle 7 # 56 - 55";
  const cityText = translations?.city_value || "Cali, Colombia";
  const hoursText = translations?.hours_value || "Lunes a sábados de 8am a 5pm";
  const phoneText = translations?.phone_value || "+57 (310) 311 0611";
  const emailText = translations?.email_value || "hola@legassystudio.com";

  const mapEmbedLang = locale === "en" ? "en" : "es";
  const mapEmbedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.946111!2d-76.5473362!3d3.4076593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1e8dcdea0b1%3A0xd2a4746403b31719!2sLegassy%20Tattoo%20Studio!5e0!3m2!1s${mapEmbedLang}!2sco!4v1725960000000!5m2!1s${mapEmbedLang}!2sco`;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 flex flex-col item py-16 max-w-[1200px] w-full"
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
          href="https://wa.me/3103110611?text=Hola!%20Vengo%20de%20la%20página%20web,%20quisiera%20tener%20más%20información"
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

      {/* NAP & Location Card with Embedded Google Map */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-20 w-full rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-xl p-6 md:p-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* NAP Details */}
          <div className="lg:col-span-5 flex flex-col gap-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-BgOrange font-bold mb-1 block">
                {translations?.studio_name || "Legassy Tattoo Studio"}
              </span>
              <motion.h3
                variants={fadeInUp}
                className="text-TextBlack text-2xl md:text-3xl font-bold"
              >
                {translations?.info_title || "Contáctanos y Visítanos"}
              </motion.h3>
            </div>

            <div className="flex flex-col gap-y-4 text-sm md:text-base">
              {/* Dirección Física */}
              <div className="flex items-start gap-x-3.5">
                <div className="w-10 h-10 rounded-full bg-BgOrange/10 text-BgOrange flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">
                    {translations?.address_label || "Dirección:"}
                  </span>
                  <span className="text-TextBlack font-bold text-base">
                    {addressText}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {cityText}
                  </span>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-x-3.5">
                <div className="w-10 h-10 rounded-full bg-BgOrange/10 text-BgOrange flex items-center justify-center shrink-0 mt-0.5">
                  <FaClock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">
                    {translations?.hours_label || "Horario de atención:"}
                  </span>
                  <span className="text-TextBlack font-semibold">
                    {hoursText}
                  </span>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-x-3.5">
                <div className="w-10 h-10 rounded-full bg-BgOrange/10 text-BgOrange flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">WhatsApp / Tel:</span>
                  <a
                    href="https://wa.me/3103110611?text=Hola!%20Vengo%20de%20la%20página%20web,%20quisiera%20tener%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-TextBlack font-semibold hover:text-BgOrange transition-colors"
                  >
                    {phoneText}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-x-3.5">
                <div className="w-10 h-10 rounded-full bg-BgOrange/10 text-BgOrange flex items-center justify-center shrink-0 mt-0.5">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Email:</span>
                  <a
                    href={`mailto:${emailText}`}
                    className="text-TextBlack font-semibold hover:text-BgOrange transition-colors"
                  >
                    {emailText}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-BgOrange hover:bg-[#c35e07] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>{translations?.maps_cta || "Ver en Google Maps"}</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 h-[340px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-md border border-black/10 relative bg-gray-100">
            <iframe
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Legassy Tattoo Studio Cali Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>

    </motion.section>
  );
}
export default BookConsult;