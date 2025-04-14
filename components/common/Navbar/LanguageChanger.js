import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LanguageChanger({ isScrolled }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const flagSrc = {
    en: "/img/en.svg",
    es: "/img/es.svg",
  };

  const handleChange = (lang) => {
    setIsOpen(false);
    document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=${30 * 24 * 60 * 60}`;

    const newPath =
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? `/${lang}${currentPathname}`
        : currentPathname.replace(`/${currentLocale}`, `/${lang}`);

    router.push(newPath);
    window.location.reload(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center relative" ref={dropdownRef}>
        {/* Botón de cambio de idioma */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center transition-all rounded-full px-4 py-1 
`}
        >
          <Image
            src={flagSrc[currentLocale]}
            alt="Flag"
            width={24}
            height={16}
            className="mr-2"
          />
          <p className="text-white text-xl md:text-base">{currentLocale.toUpperCase()}</p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <BiCaretDown className="h-3 text-white" />
            ) : (
              <BiCaretDown className="h-3 text-white" />
            )}
          </motion.div>
        </motion.button>

        {/* Menú desplegable */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute mt-10 bg-[#121212] rounded-lg py-3 px-7 flex flex-col items-center 
              "desktop:text-white"`}
          >
            <div
              onClick={() => handleChange("en")}
              className="flex items-center justify-center w-full py-2 cursor-pointer hover:font-semibold"
            >
              <Image
                src={flagSrc.en}
                alt="English Flag"
                width={24}
                height={16}
                className="mr-2"
              />
              <p className="text-white">English</p>
            </div>
            <div className="bg-gray-500 h-0.5 w-3/4 my-2" />
            <div
              onClick={() => handleChange("es")}
              className="flex items-center justify-center w-full py-2 cursor-pointer hover:font-semibold"
            >
              <Image
                src={flagSrc.es}
                alt="Spanish Flag"
                width={24}
                height={16}
                className="mr-2"
              />
              <p className="text-white">Español</p>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
