import React from "react";
import Button from "../Button/Button";
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

function CtaButton({ simple = true, text, buttonText}) {
  return (
    <div className="flex flex-col items-center gap-y-5 lg:flex-row justify-between">
      {simple ? (
        <h2 className="text-TextBlack text-center md:text-start text-xl md:text-2xl">{text}</h2>
      ) : (
        <h2 className="text-TextBlack font-bold text-3xl">
          El{" "}
          <span
            className={`font-normal text-BgOrange text-4xl ${eagleFont.className}`}
          >
            estilo
          </span>{" "}
          que quieras, para la{" "}
          <span
            className={`font-normal text-BgOrange text-4xl ${eagleFont.className}`}
          >
            visión
          </span>{" "}
          que tienes
        </h2>
      )}
      <Button>{buttonText}</Button>
    </div>
  );
}

export default CtaButton;
