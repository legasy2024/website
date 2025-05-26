"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { membersDataEs, membersDataEn } from "../data/membersData";

function getCookie(name) {
  if (typeof document === "undefined") return "es";
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : "es"; // Default language
}

function MemberCards() {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const [currentLocale, setCurrentLocale] = useState("es");
  const [isMounted, setIsMounted] = useState(false);

  // read the language from the cookie when it loads
  useEffect(() => {
    setCurrentLocale(getCookie("NEXT_LOCALE"));
    setIsMounted(true);
  }, []);

  const membersData =
    currentLocale === "en"
      ? [...membersDataEn, ...membersDataEn, ...membersDataEn]
      : [...membersDataEs, ...membersDataEs, ...membersDataEs];

  useEffect(() => {
    if (!isMounted) return;
    
    const startAnimation = async () => {
      const container = containerRef.current;
      if (!container) return;

      const contentWidth = container.scrollWidth;
      const oneThirdWidth = contentWidth / 3;

      container.scrollLeft = oneThirdWidth;

      // Animation loop
      const animate = async () => {
        try {
          await controls.start({
            x: -oneThirdWidth,
            transition: {
              duration: oneThirdWidth / 30,
              ease: "linear",
            },
          });
          
          // Only set if component is still mounted
          if (containerRef.current) {
            controls.set({ x: 0 });
            animate();
          }
        } catch (error) {
          console.error("Animation error:", error);
        }
      };
      
      animate();
    };

    const handleResize = () => {
      controls.stop();
      startAnimation();
    };

    startAnimation();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controls, isMounted]);

  // Prevent scroll event handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Function to prevent scroll events
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Function to prevent touch events
    const preventTouch = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add event listeners to prevent scroll/touch interactions
    container.addEventListener('wheel', preventScroll, { passive: false });
    container.addEventListener('touchmove', preventTouch, { passive: false });
    container.addEventListener('touchstart', preventTouch, { passive: false });
    container.addEventListener('touchend', preventTouch, { passive: false });
    
    // Add scroll lock to body when touching on mobile
    const lockBodyScroll = (e) => {
      // Only if the event is inside our container
      if (container.contains(e.target)) {
        document.body.style.overflow = 'hidden';
        e.preventDefault();
      }
    };
    
    const unlockBodyScroll = () => {
      document.body.style.overflow = '';
    };
    
    document.addEventListener('touchstart', lockBodyScroll, { passive: false });
    document.addEventListener('touchend', unlockBodyScroll);

    return () => {
      container.removeEventListener('wheel', preventScroll);
      container.removeEventListener('touchmove', preventTouch);
      container.removeEventListener('touchstart', preventTouch);
      container.removeEventListener('touchend', preventTouch);
      document.removeEventListener('touchstart', lockBodyScroll);
      document.removeEventListener('touchend', unlockBodyScroll);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-full md:max-w-[750px] lg:max-w-[800px] xl:max-w-[900px] mx-auto px-0 overflow-hidden py-5">
      {/* Fades */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#141414]/100 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#141414]/100 to-transparent pointer-events-none z-10"></div>

      <div 
        ref={containerRef} 
        className="overflow-x-hidden"
        style={{ touchAction: 'none', userSelect: 'none' }}
      >
        <motion.div
          animate={controls}
          className="flex flex-row gap-x-3 sm:gap-x-4 md:gap-x-6 flex-nowrap"
          style={{ pointerEvents: 'none' }}
        >
          {membersData.map(({ id, name, art, position, img, alt }, index) => (
            <figure
              key={`${id}-${index}`}
              className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-3 py-2 rounded-md bg-[#222222]/20 bg-gradient-to-t from-[#838383]/10 to-[#777777]/10 border border-[#827B71] w-fit"
            >
              <div className="relative w-[150px] h-56 rounded-sm overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill={true}
                  className="rounded-sm object-contain"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 180px"
                  draggable="false"
                />
              </div>
              <label
                className={`py-1  text-center mt-5 md:mt-1 px-2 text-[10px]  text-TextSecondary-100 border rounded-lg min-h-6 flex items-center justify-center ${
                  art ? "border-[#C4C4C4]" : "border-transparent"
                }`}
              >
                {art || "\u00A0"}
              </label>

              <figcaption className="text-white font-bold text-base sm:text- md:text-lg text-center">
                {name}
              </figcaption>
              <p className="text-slate-400 -mt-3 mb-3 text-xs sm:text-sm md:text-base text-center">
                {position}
              </p>
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MemberCards;