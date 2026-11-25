'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates';
import Resume from './Resume';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Preloader from './Preloader';
import { useTheme } from '../contexts/ThemeContext';
import SpaceBackground from './SpaceBackground';
import StoryChapter from './story/StoryChapter';
import { navigateTo } from '../lib/navigation';

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

const Portfolio = () => <Shell />;

export default Portfolio;
