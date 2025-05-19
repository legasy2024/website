"use client";

import React from "react";
import Image from "next/image";
import logo from "./assets/logo.svg";
import logoIg from "./assets/instagram.svg";
import logoTiktok from "./assets/tiktok.svg";

function Footer({ translations }) {
  return (
    <footer className="flex flex-col items-center w-full bg-TextBlack py-8 px-5 m-0 desktop:px-24">
      <div className="flex flex-col gap-y-8 items-center justify-around w-full md:flex-row desktop:max-w-[1200px] desktop:flex-row md:border-t-2 border-white/20 py-5">
        <Image src={logo} width={140} height={40} alt="Logo image" />
       
        <span className="flex flex-row gap-x-3">
          <a href="https://www.instagram.com/legassystudio/" target="_blank" className="cursor-pointer" rel="noopener noreferrer">
            <figure className="p-4 bg-white/10 rounded-full">
              <Image src={logoIg} width={20} height={20} alt="social icon" />
            </figure>
          </a>

          <a href="https://www.tiktok.com/@legassystudio" target="_blank" className="cursor-pointer"  rel="noopener noreferrer">
            <figure className="p-4 bg-white/10 rounded-full">
              <Image src={logoTiktok} width={20} height={20} alt="social icon" />
            </figure>
          </a>

        </span>
      </div>
    </footer>
  );
}

export default Footer;
