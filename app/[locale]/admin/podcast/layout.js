import AdminLayoutWrapper from './AdminLayoutWrapper';

export const metadata = {
  title: "Admin - Podcast Management",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminPodcastLayout({ children }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}
