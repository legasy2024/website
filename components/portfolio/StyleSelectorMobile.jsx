'use client'

import React, { useEffect, useRef } from 'react';

// Selector de estilos para móvil: una sola fila deslizable que queda fija bajo el navbar
const StyleSelectorMobile = ({ categories, activeCategory, onSelect, labels, counts, title }) => {
  const scrollerRef = useRef(null);
  const activeRef = useRef(null);

  // Mantener el estilo activo visible dentro de la fila
  useEffect(() => {
    const scroller = scrollerRef.current;
    const chip = activeRef.current;
    if (!scroller || !chip) return;
    const left = chip.offsetLeft - (scroller.clientWidth - chip.clientWidth) / 2;
    scroller.scrollTo({ left, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <div className="md:hidden sticky top-[73px] z-40 w-full bg-[#141414]/95 backdrop-blur-md border-y border-white/10">
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">{title}</span>
        <span className="text-[11px] text-gray-500">
          {counts[activeCategory] ?? 0} {labels.works}
        </span>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          role="tablist"
          aria-label={title}
          className="flex gap-2 overflow-x-auto px-4 py-3 scroll-px-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                ref={isActive ? activeRef : null}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelect(category)}
                className={`snap-start shrink-0 flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'border-[#D8CDBC] bg-[#D8CDBC] text-[#141414] font-semibold'
                    : 'border-white/15 bg-white/[0.04] text-gray-200 active:bg-white/10'
                }`}
              >
                {labels.names[category] || category}
                <span
                  className={`rounded-full px-1.5 text-[11px] leading-5 ${
                    isActive ? 'bg-[#141414]/10 text-[#141414]' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {counts[category] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
        {/* Degradado en el borde derecho: indica que la fila se puede deslizar */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#141414] to-transparent" />
      </div>
    </div>
  );
};

export default StyleSelectorMobile;
