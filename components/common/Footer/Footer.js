"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import logo from "./assets/logo.svg";
import logoIg from "./assets/instagram.svg";
import logoTiktok from "./assets/tiktok.svg";
import { caliGuides, guideLabels } from "@/lib/localGuides";

function Footer({ translations, locale = "es", navLinks = {} }) {
  const address = translations?.address || "Calle 7 # 56 - 55, Cali, Colombia";
  const hours = translations?.hours || "Lunes a sábados de 8am a 5pm";
  const mapsUrl = translations?.maps_url || "https://maps.app.goo.gl/p3jzZbkTe7SJs1By5";
  const labels = guideLabels[locale] || guideLabels.es;
  const pages = [
    ["portfolio", navLinks.portfolio],
    ["academy", navLinks.academy],
    ["about", navLinks.about],
    ["blog", navLinks.blog],
    ["podcast", navLinks.podcast],
    ["contact", navLinks.contact],
  ].filter(([, label]) => label);

  return (
    <footer className="flex flex-col items-center w-full bg-TextBlack py-8 px-5 m-0 desktop:px-24">
      <nav aria-label={labels.footerNav} className="grid w-full grid-cols-1 gap-8 pb-8 text-sm sm:grid-cols-2 desktop:max-w-[1200px]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">{labels.studio}</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {pages.map(([path, label]) => (
              <li key={path}>
                <Link href={`/${locale}/${path}`} className="capitalize text-gray-300 transition-colors hover:text-white">
                  {label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">{labels.guides}</p>
          <ul className="flex flex-col gap-y-2">
            {caliGuides.slice(0, 4).map((guide) => (
              <li key={guide.slug.es}>
                <Link href={`/${locale}/blog/${guide.slug[locale] || guide.slug.es}`} className="text-gray-300 transition-colors hover:text-white">
                  {guide.title[locale] || guide.title.es}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex flex-col gap-y-6 md:gap-y-0 items-center justify-between w-full md:flex-row desktop:max-w-[1200px] md:border-t border-white/15 py-6">
        <Image src={logo} width={140} height={40} alt="Legassy Studio" />

        {/* NAP: Dirección y Horarios */}
        <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-6 text-xs text-gray-300 text-center md:text-left">
          <a
            href={mapsUrl}
            data-cta="footer_maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Ver en Google Maps"
          >
            <FaMapMarkerAlt className="w-3.5 h-3.5 text-BgOrange shrink-0" />
            <span>{address}</span>
          </a>

          <div className="flex items-center gap-1.5 text-gray-400">
            <FaClock className="w-3.5 h-3.5 text-BgOrange shrink-0" />
            <span>{hours}</span>
          </div>
        </div>

        {/* Redes Sociales */}
        <span className="flex flex-row gap-x-3">
          <a href="https://www.instagram.com/legassystudio/" data-cta="footer_instagram" target="_blank" className="cursor-pointer" rel="noopener noreferrer" aria-label="Instagram Legassy Studio">
            <figure className="p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
              <Image src={logoIg} width={18} height={18} alt="Instagram icon" />
            </figure>
          </a>

          <a href="https://www.tiktok.com/@legassystudio" data-cta="footer_tiktok" target="_blank" className="cursor-pointer" rel="noopener noreferrer" aria-label="TikTok Legassy Studio">
            <figure className="p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full">
              <Image src={logoTiktok} width={18} height={18} alt="TikTok icon" />
            </figure>
          </a>

          <a href="https://www.youtube.com/@LegassyStudioColombia" data-cta="footer_youtube" target="_blank" className="cursor-pointer" rel="noopener noreferrer" aria-label="YouTube Legassy Studio">
            <figure className="p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center">
              <FaYoutube className="w-4 h-4 text-white" />
            </figure>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
