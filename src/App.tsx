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
// @ts-expect-error - imported from local JS component
import Particles from './components/Particles';
import { navigateTo } from './lib/navigation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const target = window.location.hash || window.location.pathname;
    if (target !== '/' && target !== '') {
      window.requestAnimationFrame(() => navigateTo(target));
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-black transition-colors duration-300">
        <div className="fixed inset-0 pointer-events-none z-0">
          <Particles
            particleColors={['#ffffff', '#e5e7eb', '#d1d5db']}
            particleCount={120}
            particleSpread={10}
            speed={0.02}
            particleBaseSize={88}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/10 to-gray-900/20" />
        </div>
        <Header />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
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
