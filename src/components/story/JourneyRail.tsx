import { useEffect, useState } from 'react';
import { navigateTo } from '../../lib/navigation';
import { useTheme } from '../../contexts/ThemeContext';

type Chapter = {
  id: string;
  num: string;
  label: string;
};

const LIGHT: Chapter[] = [
  { id: 'home', num: '01', label: 'Intro' },
  { id: 'about', num: '02', label: 'Profile' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'projects', num: '05', label: 'Work' },
  { id: 'certificates', num: '06', label: 'Honors' },
  { id: 'resume', num: '07', label: 'Resume' },
  { id: 'contact', num: '08', label: 'Contact' },
];

const SPACE: Chapter[] = [
  { id: 'home', num: '01', label: 'Launch' },
  { id: 'about', num: '02', label: 'Navigator' },
  { id: 'skills', num: '03', label: 'Systems' },
  { id: 'experience', num: '04', label: 'Mission Log' },
  { id: 'projects', num: '05', label: 'Expeditions' },
  { id: 'certificates', num: '06', label: 'Commendations' },
  { id: 'resume', num: '07', label: 'Dossier' },
  { id: 'contact', num: '08', label: 'Open Channel' },
];

/**
 * Fixed right-side chapter progress rail (desktop only).
 * Uses IntersectionObserver to highlight the active waypoint.
 */
const JourneyRail = () => {
  const { isDark } = useTheme();
  const chapters = isDark ? SPACE : LIGHT;
  const [active, setActive] = useState('home');

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      let current = chapters[0]?.id ?? 'home';
      chapters.forEach((chapter) => {
        const el = document.getElementById(chapter.id);
        if (el && el.getBoundingClientRect().top <= 96) current = chapter.id;
      });
      setActive(current);
      rafId = 0;
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [chapters]);

  return (
    <nav
      aria-label="Journey progress"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-4">
        {chapters.map((c) => {
          const isActive = active === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => navigateTo(c.id)}
                className="group flex items-center justify-end gap-3"
                aria-current={isActive ? 'true' : undefined}
                aria-label={`${c.num} ${c.label}`}
              >
                <span
                  className={`telemetry origin-right whitespace-nowrap text-[0.6rem] transition-all duration-300 ${
                    isActive
                      ? 'text-ice opacity-100'
                      : 'text-ink-faint opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {c.num} · {c.label}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? 'w-8 bg-gradient-to-r from-nebula to-ice'
                      : 'w-4 bg-ink-faint/40 group-hover:w-6 group-hover:bg-nebula-soft/60'
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default JourneyRail;
