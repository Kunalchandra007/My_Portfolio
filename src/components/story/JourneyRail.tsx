import { useEffect, useState } from 'react';
import { navigateTo } from '../../lib/navigation';

type Chapter = {
  id: string;
  num: string;
  label: string;
};

const CHAPTERS: Chapter[] = [
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
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Journey progress"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-4">
        {CHAPTERS.map((c) => {
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
