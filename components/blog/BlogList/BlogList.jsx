"use client";

import { motion } from "framer-motion";
import BlogCard from "../BlogCard/BlogCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const BlogList = ({ posts }) => {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-[1200px] m-auto pb-24 items-center gap-y-8 p-4"
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "50px" }}
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.title}
          variants={item}
          custom={index}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogList;