"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaInstagram, FaFacebook, FaExternalLinkAlt, FaCalendarAlt, FaHashtag } from 'react-icons/fa';

const EpisodeCard = ({ episode, index = 0, translations }) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row bg-white w-full border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Episode Image - 16:9 Aspect Ratio */}
      <div className="w-full md:w-[400px] aspect-[16/9] md:aspect-[16/9] flex-shrink-0 relative bg-gray-100 overflow-hidden">
        <Image
          src={episode.image}
          alt={episode.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Episode Content */}
        <div className="flex-1 flex flex-col justify-between p-4 md:p-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-2 md:mb-3">
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                <p className="text-xs md:text-sm text-gray-500 font-medium">{episode.date}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <FaHashtag className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                <p className="text-xs md:text-sm text-gray-500 font-semibold">EP - {episode.number}</p>
              </div>
            </div>
            <h3 className="text-lg md:text-2xl  mb-2 md:mb-3 leading-tight text-[#A14E05] transition-colors">
              {episode.title}
            </h3>
            {episode.description && (
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3 md:line-clamp-3 leading-relaxed">
                {episode.description}
              </p>
            )}
            {episode.readMore && (
              <a 
                href={episode.readMore} 
                className="inline-flex items-center gap-1 text-[#A14E05] hover:text-orange-800 hover:underline text-xs md:text-sm font-medium transition-colors mb-3 md:mb-4"
              >
                {episode.readMoreText || "READ MORE"}
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row md:flex-col gap-3 items-center justify-center md:items-end md:justify-end p-4 md:p-6 md:pr-6 border-t md:border-t-0 md:border-l border-gray-200 md:min-w-[180px]">
          {episode.watchLink && (
            <motion.a
              href={episode.watchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FF0000] text-white px-4 md:px-5 py-2.5 rounded-full font-medium hover:bg-[#CC0000] transition-colors shadow-lg hover:shadow-xl w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/20 rounded-full p-1.5">
                <FaPlay className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
              </div>
              <span className="text-xs md:text-sm font-semibold">{translations?.watch || 'WATCH'}</span>
            </motion.a>
          )}
        
        </div>
      </div>
    </motion.div>
  );
};

export default EpisodeCard;
