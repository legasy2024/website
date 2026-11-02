"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const WHATSAPP_NUMBER = "573103110611";
const SHOW_AFTER_PX = 400;
const DISMISS_KEY = "blogWhatsAppBarDismissed";

const COPY = {
  es: {
    title: "¿Listo para llevarlo a tu piel?",
    text: "Cuéntanos tu idea y recibe tu cotización por WhatsApp.",
    button: "Cotizar mi tatuaje",
    close: "Cerrar",
    message: (title) => `Hola, leí el artículo "${title}" en su blog y quiero cotizar mi tatuaje.`,
  },
  en: {
    title: "Ready to wear it on your skin?",
    text: "Tell us your idea and get your quote on WhatsApp.",
    button: "Get my quote",
    close: "Close",
    message: (title) => `Hi, I read "${title}" on your blog and I'd like a quote for my tattoo.`,
  },
};

/**
 * CTA flotante de WhatsApp para los posts del blog (solo móvil/tablet, < lg).
 * Aparece tras hacer scroll y, mientras está visible, oculta el botón flotante
 * global de WhatsApp (ver globals.css: body[data-wa-bar="on"]).
 */
export default function BlogWhatsAppBar({ locale, postTitle }) {
  const copy = COPY[locale] || COPY.en;
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = scrolled && !dismissed;

  useEffect(() => {
    if (visible) document.body.dataset.waBar = "on";
    else delete document.body.dataset.waBar;
    return () => delete document.body.dataset.waBar;
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.message(postTitle))}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="lg:hidden fixed inset-x-3 z-50 bottom-[max(0.75rem,env(safe-area-inset-bottom))]"
          role="complementary"
          aria-label="WhatsApp"
        >
          <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-[#212121]/95 backdrop-blur-md p-3 pr-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="min-w-0 flex-1 pl-1">
              <p className="text-sm font-bold leading-tight text-white">{copy.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-[#C4C4C4]">{copy.text}</p>
            </div>
            <a
              href={whatsappUrl}
              data-cta="blog_mobile_bar_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-sm font-bold text-[#0b3d1f] shadow-md transition active:scale-95 hover:bg-[#1ebe5d]"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span className="whitespace-nowrap">{copy.button}</span>
            </a>
            <button
              type="button"
              onClick={dismiss}
              data-cta="blog_mobile_bar_close"
              aria-label={copy.close}
              className="absolute -top-2.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-[#212121] text-[#C4C4C4] hover:text-white"
            >
              <IoClose className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
