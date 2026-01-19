"use client";

import { motion } from "framer-motion";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const EpisodeList = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <motion.p 
          className="text-center text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No episodes available at the moment.
        </motion.p>
      </div>
    );
  }

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 bg-white"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {episodes.map((episode, index) => (
        <EpisodeCard key={episode.id || episode.number} episode={episode} index={index} />
      ))}
    </motion.div>
  );
};

export default EpisodeList;
