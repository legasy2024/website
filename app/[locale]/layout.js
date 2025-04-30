import dynamic from 'next/dynamic';
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import localFont from 'next/font/local';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

//Font
import { DM_Sans } from 'next/font/google';

// Styles
import "@/globals.css";

// Fonts
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

// Components
const Navbar = dynamic(() => import("@/components/common/Navbar/Main"));

// Lazy load Footer component
const FooterLazyLoading = dynamic(() => import("@/components/common/Footer/Footer"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10">Loading Footer...</p>
});

// Namespaces for i18n
const i18nNameSpaces = ["home"];

export default async function Layout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const navbarTranslations = {
    home: t("home:nav_items.home"),
    portfolio: t("home:nav_items.portfolio"),
    about: t("home:nav_items.about"),
    blog: t("home:nav_items.blog"),
    courses: t("home:nav_items.courses"),
    vip: t("home:nav_items.vip"),
    contact: t("home:nav_items.contact"),
  }

  const footerTranslations = {
    terms: t("home:footer.terms"),
    privacy: t("home:footer.privacy"),
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Ahrefs Site Verification */}
        <meta 
          name="ahrefs-site-verification" 
          content="3d7eba9b40dbc368d69901cb93dc90d497e3fa66558cdc3120ccc8f2da6c29bf"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','WGV3D58Z');
            `,
          }}
        />
        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="eKnA0CCNRBrH8RuXrQ94Ug"
          strategy="afterInteractive"
        />
      </head>
      <body className={dm_sans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=WGV3D58Z"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNameSpaces}
        >
          <Navbar translations={navbarTranslations} />
          {children}
          <FooterLazyLoading translations={footerTranslations} />
          <Analytics />
        </TranslationsProvider>
      </body>
    </html>
  );
}