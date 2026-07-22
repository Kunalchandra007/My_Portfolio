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
          className="fixed bottom-8 right-8 z-50 rounded-full border border-hairline bg-gradient-to-r from-nebula to-nebula-soft p-3 text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.7)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_32px_-4px_rgba(139,92,246,0.9)]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
