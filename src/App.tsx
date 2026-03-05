import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import { ThemeProvider } from './contexts/ThemeContext';
import { getAdjacentRoute, navigateTo } from './lib/navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onRouteChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onRouteChange);
    return () => window.removeEventListener('popstate', onRouteChange);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    let wheelAccum = 0;
    let touchStartY = 0;
    let lastRouteAt = 0;
    const threshold = 140;
    const cooldownMs = 650;

    const canRouteNow = () => performance.now() - lastRouteAt > cooldownMs;

    const isAtTop = () => window.scrollY <= 8;
    const isAtBottom = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      return scrollBottom >= fullHeight - 8;
    };

    const tryRoute = (direction: 'next' | 'prev') => {
      if (!canRouteNow()) return;
      if (direction === 'next' && !isAtBottom()) return;
      if (direction === 'prev' && !isAtTop()) return;

      const target = getAdjacentRoute(pathname, direction);
      if (!target) return;
      lastRouteAt = performance.now();
      wheelAccum = 0;
      navigateTo(target);
    };

    const onWheel = (event: WheelEvent) => {
      wheelAccum += event.deltaY;
      if (wheelAccum > threshold) {
        tryRoute('next');
        wheelAccum = 0;
      } else if (wheelAccum < -threshold) {
        tryRoute('prev');
        wheelAccum = 0;
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!event.touches[0]) return;
      touchStartY = event.touches[0].clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!event.touches[0]) return;
      const deltaY = touchStartY - event.touches[0].clientY;
      if (deltaY > 70) {
        tryRoute('next');
      } else if (deltaY < -70) {
        tryRoute('prev');
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [isLoading, pathname]);

  const renderPage = () => {
    switch (pathname) {
      case '/':
        return <Hero />;
      case '/about':
        return <div className="pt-20"><About /></div>;
      case '/skills':
        return <div className="pt-20"><Skills /></div>;
      case '/experience':
        return <div className="pt-20"><Experience /></div>;
      case '/projects':
        return <div className="pt-20"><Projects /></div>;
      case '/certificates':
        return <div className="pt-20"><Certificates /></div>;
      case '/resume':
        return <div className="pt-20"><Resume /></div>;
      case '/contact':
        return <div className="pt-20"><Contact /></div>;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-black transition-colors duration-300">
        <Header />
        <div key={pathname} className="route-page">
          {renderPage()}
        </div>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
