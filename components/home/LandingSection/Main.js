"use client";

import React from "react";
import Image from "next/image";
import HeroContent from "./HeroContent/HeroContent";
import backPoseidon from "./assets/hero-espalda-poseidon.jpg";
import backPoseidonMobile from "./assets/hero-espalda-poseidon-movil.jpg";
import backHannya from "./assets/hero-espalda-hannya.jpg";
import "./landing.css";

function LandingSection({ translations }) {
  return (
    <section className="relative">
      <div className="hero relative">
        <div className="hero_container">
          {/* Fondo: dos espaldas en escritorio, Poseidón en móvil y tablet */}
          <div className="absolute inset-0 flex">
            <div className="relative h-full w-full lg:w-1/2">
              {/* Móvil y tablet reciben un recorte más liviano (71 KB); escritorio, la foto completa */}
              <picture>
                <source media="(min-width: 1024px)" srcSet={backPoseidon.src} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={backPoseidonMobile.src}
                  alt={translations.bg_alt_1 || ""}
                  width={backPoseidonMobile.width}
                  height={backPoseidonMobile.height}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_25%] lg:object-[50%_28%]"
                />
              </picture>
            </div>
            <div className="relative hidden h-full lg:block lg:w-1/2">
              <Image
                src={backHannya}
                alt={translations.bg_alt_2 || ""}
                fill
                sizes="50vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>

          {/* Sombras para que el texto se lea */}
          <div className="hero_shade_mobile absolute inset-0 pointer-events-none lg:hidden" />
          <div className="hero_shade_desktop absolute inset-0 pointer-events-none hidden lg:block" />

          <div className="relative z-10 flex flex-col items-center gap-y-6 lg:gap-y-14">
            <HeroContent translations={translations} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
