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
import { navigateTo } from '../lib/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
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
    { name: 'Certificates', href: 'certificates', icon: <Award size={18} /> },
    { name: 'Resume', href: 'resume', icon: <FileText size={18} /> },
    { name: 'Contact', href: 'contact', icon: <Mail size={18} /> },
  ];

  const goToPage = (href: string) => {
    navigateTo(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/85 backdrop-blur-md border-b border-hairline'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4">
            <button
              onClick={() => goToPage('home')}
              className="font-serif text-2xl text-cosmic"
            >
              Kunal Chandra
            </button>

            {/* Mobile Menu Button */}
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
        />
      </nav>
    </>
  );
};

export default Header;
