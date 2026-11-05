import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post, locale }) => {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-row gap-4 sm:gap-5 rounded-xl p-2 sm:p-3 -mx-2 sm:-mx-3 hover:bg-BgSlate transition-colors duration-200"
    >
      <div className="relative w-24 h-24 sm:w-44 sm:h-28 shrink-0 overflow-hidden rounded-lg bg-[#2a2a2a]">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 96px, 176px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
            <Image src="/img/logo.svg" alt={post.title} width={48} height={48} className="opacity-30" />
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-x-2 text-xs">
          <span className="font-semibold text-BgOrange">{post.category?.name || post.label}</span>
          <span className="text-TextSecondary-300">·</span>
          <span className="text-TextSecondary-200">{post.date}</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold leading-snug text-TextBlack group-hover:underline underline-offset-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="max-sm:hidden text-sm text-Subtitle line-clamp-2">{post.description || post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
