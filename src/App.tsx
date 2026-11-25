import { useEffect, useState } from 'react';
import CertificatesPage from './components/CertificatesPage';
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
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import SpaceBackground from './components/SpaceBackground';
import StoryChapter from './components/story/StoryChapter';
import { navigateTo } from './lib/navigation';

function Shell() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

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
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-void text-ink">
        {isDark ? (
          <SpaceBackground />
        ) : (
          <div className="atelier-bg pointer-events-none fixed inset-0 z-0" />
        )}
        <Header />
        <main className="story-stack relative z-10">
          <StoryChapter z={1}><Hero /></StoryChapter>
          <StoryChapter z={2}><About /></StoryChapter>
          <StoryChapter z={3}><Skills /></StoryChapter>
          <StoryChapter z={4}><Experience /></StoryChapter>
          <StoryChapter z={5} pin><Projects /></StoryChapter>
          <StoryChapter z={6}><Certificates /></StoryChapter>
          <StoryChapter z={7}><Resume /></StoryChapter>
          <StoryChapter z={8}><Contact /></StoryChapter>
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return (
    <ThemeProvider>
      <div hidden={path === '/certificates'}>
        <Shell />
      </div>
      {path === '/certificates' && <CertificatesPage />}
    </ThemeProvider>
  );
}

export default App;
