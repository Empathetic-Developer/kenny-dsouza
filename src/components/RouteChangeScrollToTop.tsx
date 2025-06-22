// src/components/RouteChangeScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteChangeScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the window with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]); // Re-run when pathname changes

  return null; // Does not render any UI
};

export default RouteChangeScrollToTop;