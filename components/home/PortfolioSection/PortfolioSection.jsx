import PortfolioGallery from "./PortfolioGallery/PortfolioGallery";
import CtaButton from "@/components/common/CtaButton/CtaButton";
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../../public/fonts/eagle/EagleHorizonP.ttf",
});

function PortfolioSection({ translations, locale }) {
  return (
    <section className="flex flex-col py-20 bg-BgSlate w-full h-full px-4 md:px-16">
      <div className="w-full max-w-[1200px] place-self-center">
        <h2 className="text-[#585858]">{translations.title}</h2>

        {/* Texto Desktop */}

        <div className="hidden md:flex flex-row items-center">
          <span className="text-TextBlack  font-bold text-xl sm:text-2xl md:text-3xl">
            {translations.start_text}{" "}
          </span>
          <span className={`font-normal text-BgOrange text-2xl md:text-4xl -mt-4 ml-2 ${eagleFont.className}`}>
            {translations.style_text}
          </span>
          <span className="text-TextBlack ml-2 font-bold text-xl sm:text-2xl md:text-3xl">
            {translations.middle_text}{" "}
          </span>
          <span className={`font-normal text-BgOrange text-2xl md:text-4xl -mt-4 ml-2 ${eagleFont.className}`}>
            {translations.style_text_2}
          </span>
          <span className="text-TextBlack ml-2 font-bold text-xl sm:text-2xl md:text-3xl">
            {translations.end_text}
          </span>
        </div>

        {/* Texto Mobile */}
        <div className="flex md:hidden flex-col items-center">

          {/* First Row */}
          <div className="flex flex-row items-center">
            <span className="text-TextBlack  font-bold text-2xl ">
              {translations.start_text}{" "}
            </span>
            <span className={`font-normal text-BgOrange text-2xl md:text-4xl -mt-2 ml-2 ${eagleFont.className}`}>
              {translations.style_text}
            </span>
            <span className="text-TextBlack ml-2 font-bold text-2xl ">
              {translations.middle_text}{" "}
            </span>
          </div>

          {/* Second Row */}

          <div className="flex flex-row items-center">
            <span className={`font-normal text-BgOrange text-2xl md:text-4xl -mt-2 ml-2 ${eagleFont.className}`}>
              {translations.style_text_2}
            </span>
            <span className="text-TextBlack ml-2 font-bold text-2xl ">
              {translations.end_text}
            </span>
          </div>


        </div>

        <div className="my-10">
          <PortfolioGallery locale={locale} />
        </div>

        <a
          className="mt-20"
          href="https://wa.me/message/XGIYHXPQU2JMA1?text=Hola!%20Vengo%20de%20la%20pagina%20web%2C%20quisiera%20tener%20mas%20informacion"
          target="_blank"
        >
          <CtaButton text={translations.cta_label} buttonText={translations.cta} />
        </a>
      </div>
    </section>
  );
}
export default PortfolioSection;
