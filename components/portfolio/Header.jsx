'use client'

import React, { useState } from 'react';
import bg_img from './assets/bg_img.png';
import localFont from "next/font/local";

const eagleFont = localFont({
  src: "../../public/fonts/eagle/EagleHorizonP.ttf",
});


const PortfolioHeader = ({activeCategory, handleCategoryClick, categories, translations}) => {
 
  
  return (
    <div className="relative w-full py-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-black  z-0"
        style={{
          backgroundImage: `url(${bg_img.src})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '340px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-12  pt-16 pb-6">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Label */}
          <p className="text-gray-400 text-sm md:text-base tracking-wider mb-1">{translations.section_title}</p>
          
          {/* Main Heading */}
          <h1 className="text-white flex flex-row items-center text-3xl md:text-4xl font-bold mb-12">
            {translations.title}<span className={`font-normal text-[#D8CDBC] text-4xl md:text-5xl -mt-4 ml-2 ${eagleFont.className}`}>{translations.title_decorator}</span>
          </h1>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 md:gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-base md:text-base transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-100 text-gray-900 font-semibold'
                    : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;