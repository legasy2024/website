import BlogList from "@/components/blog/BlogList/BlogList";
import BlogCategories from "@/components/blog/BlogCategories/BlogCategories";
import Header from "@/components/blog/Header";
import { blogCategories } from "@/content/blog/categories";
import { getThumbSrc } from "@/lib/blogImages";

/**
 * Layout compartido de /blog y /blog/category/[category]:
 * cabecera + contenedor blanco con sidebar de categorías y listado.
 */
const BlogIndex = ({ posts, locale, headerTranslations, activeCategoryId = null }) => {
  const categories = blogCategories
    .map((category) => ({
      id: category.id,
      name: category.name[locale],
      slug: category.slug[locale],
      count: posts.filter((post) => post.category?.id === category.id).length,
    }))
    .filter((category) => category.count > 0);

  // Solo los campos que usa la tarjeta (evita serializar contentHtml al cliente)
  const visiblePosts = (activeCategoryId
    ? posts.filter((post) => post.category?.id === activeCategoryId)
    : posts
  ).map(({ id, slug, title, excerpt, image, date, label, category }) => ({
    id, slug, title, excerpt, image: getThumbSrc(image), date, label, category,
  }));

  return (
    <>
      <Header translations={headerTranslations} />
      <div className="px-4 pb-24">
        <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10">
          <aside>
            <BlogCategories
              categories={categories}
              totalCount={posts.length}
              activeCategoryId={activeCategoryId}
              locale={locale}
            />
          </aside>
          <BlogList key={activeCategoryId || "all"} posts={visiblePosts} locale={locale} />
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
