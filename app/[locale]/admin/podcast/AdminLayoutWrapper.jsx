'use client'

import { useEffect } from 'react';

export default function AdminLayoutWrapper({ children }) {
  useEffect(() => {
    // Hide navbar and footer on admin pages
    const hideNavbarFooter = () => {
      const nav = document.querySelector('nav');
      const footer = document.querySelector('footer');
      if (nav) nav.style.display = 'none';
      if (footer) footer.style.display = 'none';
    };

    hideNavbarFooter();
    
    // Cleanup function to restore on unmount
    return () => {
      const nav = document.querySelector('nav');
      const footer = document.querySelector('footer');
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return <>{children}</>;
}
