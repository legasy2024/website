"use client";

import Button from "@/components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <Link key={post.title}
    href={`/blog/${post.slug}`}
    className="flex flex-col sm:flex-row bg-white w-80 sm:w-full h-auto border border-[#827B71] rounded-lg overflow-hidden shadow-md transition-transform duration-300"
    style={{
      background: `linear-gradient(to bottom, #7777774D 60%, #8383834D 60%)`,
    }}
  >
    <Image
      src={post.image}
      alt={post.title}
      width={300}
      height={100}
      className="w-full sm:w-[40%] h-[200px] sm:h-auto object-cover p-3"
    />
    <div className="flex flex-col gap-y-4 p-4 w-full sm:w-[60%]">
      <label className="border border-[#C4C4C4] text-TextSecondary-100 pt-1 px-3 rounded-full w-fit">{post.label}</label>
      <h3 className="text-xl font-bold text-white">{post.title}</h3>
      <p className="text-base text-TextSecondary-100 mt-2">{post.description}</p>
      <span className="flex flex-row items-end justify-between">
        <Button color="dark" rightIcon={"arrowR"}>
          {post.cta}
        </Button>
        <p className="text-xs text-[#828282]">{post.date}</p>
      </span>
    </div>
  </Link>
  );
};

export default BlogCard;
