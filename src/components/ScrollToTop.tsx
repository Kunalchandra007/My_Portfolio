import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const toggleVisibility = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setIsVisible(window.pageYOffset > 300);
        rafId = 0;
      });
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn-primary fixed bottom-24 right-6 z-50 !rounded-full !p-3 md:bottom-8"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
