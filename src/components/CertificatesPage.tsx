'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { certificates } from '../data/certificates';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitch from './ThemeSwitch';
import SpaceBackground from './SpaceBackground';

const CertificatesPage = () => {
  const { isDark } = useTheme();
  const router = useRouter();
  const back = () => router.push('/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-void text-ink">
      {isDark ? <SpaceBackground /> : <div className="atelier-bg pointer-events-none fixed inset-0 z-0" />}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <button type="button" onClick={back} className="brand-name font-serif text-2xl text-ink">
            Kunal <span className="text-cosmic">Chandra</span>
          </button>
          <div className="flex items-center gap-4">
            <button type="button" onClick={back} className="cert-back">
              Back
            </button>
            <ThemeSwitch />
          </div>
        </header>

        <div className="mt-14 max-w-3xl">
          <p className="telemetry text-[0.62rem]">06 — Certificates</p>
          <h1 className="mt-3 font-serif text-5xl text-ink sm:text-6xl">Certificates</h1>
          <p className="mt-4 max-w-xl text-lg text-ink-dim">
            Courses, workshops, and the contests that sit behind the achievements.
          </p>
        </div>

        <div className="cert-grid mt-12">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-tile panel"
            >
              <img src={cert.image} alt="" />
              <div className="p-5">
                <h2 className="font-serif text-xl text-ink">{cert.name}</h2>
                <p className="mt-1 text-sm font-medium text-ice">{cert.organization}</p>
                <p className="telemetry mt-1 text-[0.55rem] text-ink-faint">{cert.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{cert.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
