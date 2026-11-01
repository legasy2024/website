import Link from "next/link";

const BlogCategories = ({ categories, totalCount, activeCategoryId, locale }) => {
  const items = [
    {
      id: null,
      name: locale === "en" ? "All articles" : "Todos los artículos",
      href: `/${locale}/blog`,
      count: totalCount,
    },
    ...categories.map((category) => ({
      id: category.id,
      name: category.name,
      href: `/${locale}/blog/category/${category.slug}`,
      count: category.count,
    })),
  ];

  return (
    <nav aria-label={locale === "en" ? "Blog categories" : "Categorías del blog"} className="md:sticky md:top-28">
      <p className="hidden md:block text-xs font-semibold tracking-wider uppercase text-TextSecondary-200 mb-3 px-3">
        {locale === "en" ? "Categories" : "Categorías"}
      </p>
      {/* Móvil: chips con scroll horizontal. md+: lista vertical */}
      <ul className="flex md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0">
        {items.map((item) => {
          const isActive = item.id === (activeCategoryId || null);
          return (
            <li key={item.id || "all"} className="shrink-0">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between gap-3 whitespace-nowrap rounded-full md:rounded-lg px-3 py-1.5 md:py-2 text-sm border md:border-0 transition-colors duration-200 ${
                  isActive
                    ? "bg-TextBlack text-white border-TextBlack font-semibold"
                    : "text-Subtitle border-[#E0E0E0] hover:bg-BgSlate"
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-xs ${isActive ? "text-[#C4C4C4]" : "text-TextSecondary-300"}`}>
                  {item.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BlogCategories;
