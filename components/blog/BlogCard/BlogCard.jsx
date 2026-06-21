"use client";

import Button from "@/components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post, locale }) => {
  // Usar el slug según el idioma (en español usamos el slug en español)
  // Los rewrites en next.config.mjs mapearán estos slugs a las carpetas correctas
  return (
    <Link
    key={post.id || post.slug}
    href={`/${locale}/blog/${post.slug}`}
    className="relative flex w-80 flex-col bg-white sm:w-full border border-[#827B71] rounded-lg overflow-hidden shadow-md transition-transform duration-300"
    style={{
      background: `linear-gradient(to bottom, #7777774D 60%, #8383834D 60%)`,
    }}
    >
    {/*
      Móvil: imagen en flujo, 200px.
      sm+: imagen position absolute top/bottom 0 (altura = la del bloque de texto); el texto define la altura de la tarjeta.
      Así no dependemos de height:100% en flex, que a menudo no resuelve.
    */}
    <div className="relative h-[200px] w-full shrink-0 sm:absolute sm:inset-y-0 sm:left-0 sm:z-0 sm:h-auto sm:w-[40%]">
      <div className="absolute inset-3 overflow-hidden rounded-md bg-[#2a2a2a]">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
            <Image src="/img/logo.svg" alt={post.title} width={100} height={100} className="opacity-30" />
          </div>
        )}
      </div>
    </div>
    <div className="relative z-10 flex min-w-0 flex-col gap-y-4 p-4 sm:box-border sm:ml-[40%] sm:w-[60%]">
      <label className="border border-[#C4C4C4] text-TextSecondary-100 pt-1 px-3 rounded-full w-fit">{post.label}</label>
      <h3 className="text-xl font-bold text-white">{post.title}</h3>
      <p className="text-base text-TextSecondary-100 mt-2">{post.description || post.excerpt}</p>
      <span className="mt-auto flex flex-row items-end justify-between pt-2">
        <Button color="dark" rightIcon={"arrowR"}>
          {typeof post.cta === "string"
            ? post.cta
            : locale === "es"
            ? "Leer más"
            : "Read more"}
        </Button>
        <p className="text-xs text-[#828282]">{post.date}</p>
      </span>
    </div>
  </Link>
  );
};

export default BlogCard;
