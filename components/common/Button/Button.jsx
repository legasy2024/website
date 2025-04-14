"use client";

import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";

function Button({
  children,
  color = "default",
  className = "",
  showIcons = true,
  rightIcon = null,
  leftIcon = null,
}) {
  const baseStyles =
    "flex flex-row items-center gap-2 px-6 py-3 rounded-md hover:transform hover:scale-105 transition-transform duration-200 ease-in-out max-w-96 place-content-center cursor-pointer";

  const colors = {
    default: "bg-BgOrange text-white",
    dark: "bg-TextBlack text-white border border-[#D8CDBC]",
  };

  const icons = {
    arrowR: <MdKeyboardArrowRight />,
    whatsapp: <RiWhatsappFill color="#2EB943" />,
    mail: <CiMail/>
  };

  return (
    <button className={`${baseStyles} ${colors[color]} ${className}`}>
      {showIcons && <span className="text-lg">{icons[leftIcon]}</span>}
      <span>{children}</span>
      {showIcons && <span className="text-lg">{icons[rightIcon]}</span>}
    </button>
  );
}
export default Button;
