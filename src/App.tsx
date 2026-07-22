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
import SpaceBackground from './components/SpaceBackground';
import TechMarquee from './components/TechMarquee';
import JourneyRail from './components/story/JourneyRail';
import { navigateTo } from './lib/navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Keep the browser from restoring a previous scroll position on reload.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const target = window.location.hash || window.location.pathname;
    if (target && target !== '/' && target !== '') {
      window.requestAnimationFrame(() => navigateTo(target));
    } else {
      // No deep-link → always land at the top after the preloader.
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-void">
        {/* Custom lightweight cosmic backdrop (fixed, behind everything) */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <SpaceBackground />
        </div>
        <Header />
        <JourneyRail />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <TechMarquee />
          <Experience />
          <Projects />
          <Certificates />
          <Resume />
          <Contact />
        </div>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
