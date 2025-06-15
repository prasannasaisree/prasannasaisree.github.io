
import { useEffect } from 'react';

export const useScrollPosition = (storageKey: string) => {
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(storageKey, window.scrollY.toString());
    };

    const handleScroll = () => {
      sessionStorage.setItem(storageKey, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', saveScrollPosition);

    // Restore scroll position
    const savedPosition = sessionStorage.getItem(storageKey);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: 'smooth'
        });
      }, 100);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [storageKey]);

  const saveCurrentPosition = () => {
    sessionStorage.setItem(storageKey, window.scrollY.toString());
  };

  return { saveCurrentPosition };
};
