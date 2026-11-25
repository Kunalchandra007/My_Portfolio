import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  UserRound,
  Cpu,
  Briefcase,
  FolderKanban,
  Award,
  FileText,
  Mail
} from 'lucide-react';
import Dock from './Dock';
import ThemeSwitch from './ThemeSwitch';
import SiteViews from './SiteViews';
import { navigateTo } from '../lib/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('home');

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        const sections = navItems
          .map((item) => ({ href: item.href, element: document.getElementById(item.href) }))
          .filter((item): item is { href: string; element: HTMLElement } => item.element !== null);
        const mark = window.innerHeight * 0.28;
        let current = sections[0]?.href ?? 'home';
        sections.forEach((section) => {
          const chapter = section.element.closest('.story-chapter') ?? section.element;
          const box = chapter.getBoundingClientRect();
          if (box.top <= mark && box.bottom > mark) current = section.href;
        });
        setActiveHref(current);
        rafId = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: 'home', icon: <Home size={18} /> },
    { name: 'About', href: 'about', icon: <UserRound size={18} /> },
    { name: 'Skills', href: 'skills', icon: <Cpu size={18} /> },
    { name: 'Experience', href: 'experience', icon: <Briefcase size={18} /> },
    { name: 'Projects', href: 'projects', icon: <FolderKanban size={18} /> },
    { name: 'Achievements', href: 'achievements', icon: <Award size={18} /> },
    { name: 'Resume', href: 'resume', icon: <FileText size={18} /> },
    { name: 'Contact', href: 'contact', icon: <Mail size={18} /> },
  ];

  const goToPage = (href: string) => {
    setActiveHref(href);
    navigateTo(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header fixed top-0 left-0 right-0 z-50${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="header-bar relative flex items-center justify-between py-3">
            <button
              onClick={() => goToPage('home')}
              className="brand-name font-serif text-2xl text-ink"
            >
              Kunal <span className="text-cosmic">Chandra</span>
            </button>

            <div className="ml-auto flex items-center gap-3 md:mr-0">
              <ThemeSwitch />
              <SiteViews />
              <div className="md:hidden relative z-20">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-ink-dim transition-colors hover:bg-surface-2 hover:text-ice"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-hairline">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => goToPage(item.href)}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-left text-ink-dim transition-all duration-300 hover:bg-surface-2 hover:text-ice"
                  >
                    <span className="text-ice/70">{item.icon}</span>
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop dock fixed to viewport, outside blurred header */}
      <nav className="hidden md:flex fixed left-1/2 bottom-6 -translate-x-1/2 z-[70]">
        <Dock
          items={navItems.map((item) => ({
            icon: item.icon,
            label: item.name,
            onClick: () => goToPage(item.href)
          }))}
          className="header-dock"
          panelHeight={62}
          baseItemSize={50}
          magnification={74}
          distance={170}
          dockHeight={120}
          activeIndex={navItems.findIndex((item) => item.href === activeHref)}
        />
      </nav>
    </>
  );
};

export default Header;
