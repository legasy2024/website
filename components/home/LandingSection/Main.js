"use client";

import React from "react";
import HeroContent from "./HeroContent/HeroContent";
import "./landing.css";

function LandingSection({ translations }) {
  return (
    <section className="relative">
      <div className="hero relative">
        <div className="hero_container">
          {/* Side Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-20 md:w-44 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-20 md:w-44 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
          </div>
          <HeroContent translations = {translations} />
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
