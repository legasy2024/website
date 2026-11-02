"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../BlogCard/BlogCard";

const POSTS_PER_PAGE = 12;

const item = {
  hidden: { y: 12, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      // Escalonado solo dentro de cada tanda que se carga
      delay: 0.05 + (index % POSTS_PER_PAGE) * 0.05
    }
  })
};

const BlogList = ({ posts, locale }) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="flex flex-col w-full min-w-0 items-center gap-y-6">
      <div className="flex flex-col w-full divide-y divide-[#EDEDED]">
        {posts.map((post, index) => index >= visibleCount ? (
          // Los posts aún no cargados van en el HTML (ocultos) para que Google descubra todos los enlaces
          <div key={post.slug || post.title} hidden>
            <BlogCard post={post} locale={locale} />
          </div>
        ) : (
          <motion.div
            key={post.slug || post.title}
            variants={item}
            custom={index}
            initial="hidden"
            animate="visible"
            className="w-full py-2 first:pt-0 last:pb-0"
          >
            <BlogCard post={post} locale={locale} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
          className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-TextBlack border border-TextBlack hover:bg-TextBlack hover:text-white transition-colors duration-200"
        >
          {locale === "en" ? "Load more" : "Cargar más"}
        </button>
      )}

      <p className="text-xs text-TextSecondary-200 -mt-2">
        {locale === "en"
          ? `Showing ${visiblePosts.length} of ${posts.length} articles`
          : `Mostrando ${visiblePosts.length} de ${posts.length} artículos`}
      </p>
    </div>
  );
};

export default BlogList;
