import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "573103110611";
const WHATSAPP_MESSAGE = "Hola, quisiera mas informacion.";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
