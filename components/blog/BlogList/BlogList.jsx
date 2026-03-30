"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "../BlogCard/BlogCard";

const POSTS_PER_PAGE = 10;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16
    }
  }
};

const BlogList = ({ posts, locale }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (i === left - 1 || i === right + 1) {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col w-full max-w-[1200px] m-auto pb-24 items-center gap-y-8 p-4">
      <div ref={topRef} className="w-full" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="flex flex-col w-full items-center gap-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug || post.title}
              variants={item}
              custom={index}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="w-full"
            >
              <BlogCard post={post} locale={locale} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <nav className="flex items-center gap-2 mt-4" aria-label="Paginación">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg text-sm font-medium text-[#C4C4C4] border border-[#827B71] hover:border-white hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Página anterior"
          >
            ←
          </button>

          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={`dots-${idx}`} className="px-2 text-[#828282]">
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? "bg-white text-[#212121] font-bold"
                    : "text-[#C4C4C4] border border-[#827B71] hover:border-white hover:text-white"
                }`}
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg text-sm font-medium text-[#C4C4C4] border border-[#827B71] hover:border-white hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Página siguiente"
          >
            →
          </button>
        </nav>
      )}

      <p className="text-xs text-[#828282] -mt-2">
        {locale === "en"
          ? `Page ${currentPage} of ${totalPages} · ${posts.length} articles`
          : `Página ${currentPage} de ${totalPages} · ${posts.length} artículos`}
      </p>
    </div>
  );
};

export default BlogList;