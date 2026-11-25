'use client';

import type { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

function PracticeDial({
  value,
  label,
  progress,
  tone,
}: {
  value: string;
  label: string;
  progress: number;
  tone: 'ember' | 'sage';
}) {
  const radius = 32;
  const circ = 2 * Math.PI * radius;
  const draw = circ * progress;

  return (
    <div className={`practice-dial practice-dial--${tone}`}>
      <svg viewBox="0 0 84 84" aria-hidden>
        <circle cx="42" cy="42" r={radius} className="practice-dial__track" />
        <circle
          cx="42"
          cy="42"
          r={radius}
          className="practice-dial__arc"
          style={{ '--draw': `${draw}`, '--circ': `${circ}` } as CSSProperties}
        />
      </svg>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

const achievements = [
  ['270', 'Global rank, TCS CodeVita Round 2, among 146,922 participants'],
  ['Top 10', 'AI Manthan 2025 at IIIT Delhi, from 300+ teams'],
  ['Top 25', 'Trwizardthon, from 1,300+ teams'],
  ['Top 5', 'UTU Uttarakhand, among 150+ teams'],
  ['OCI 2025', 'Oracle Cloud DevOps and Data Science professional certificates'],
];

const Certificates = () => {
  const router = useRouter();

  return (
    <section id="achievements" className="relative pt-24 pb-36">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title={<>Achievements <span className="italic text-cosmic">and certification</span></>}
            subtitle="Contests, hackathons, and the courses that filled the gaps."
            align="center"
          />
        </Reveal>

        <div className="achieve-split">
          <aside className="dsa-board panel" aria-label="DSA ratings across platforms">
            <p className="telemetry text-[0.62rem]">DSA ratings</p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-ink">
              Across <span className="italic text-cosmic">platforms</span>
            </h3>
            <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-dim">
              Highest LeetCode contest rating, and problems solved across the platforms I practise on.
            </p>
            <div className="dsa-dials">
              <PracticeDial value="1776" label="highest rating" progress={1776 / 2000} tone="ember" />
              <PracticeDial value="500+" label="problems solved" progress={0.94} tone="sage" />
            </div>
            <a
              className="dsa-platform"
              href="https://leetcode.com/u/Kunal_chandra007/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LeetCode</span>
              <span>Kunal_chandra007</span>
            </a>
          </aside>

          <div className="achieve-grid">
            {achievements.map(([stat, label], index) => (
              <div key={stat} className={`panel achieve-card achieve-card--${index + 1} px-4 py-4`}>
                <p className="font-serif text-3xl text-cosmic">{stat}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="cert-open panel mt-6 w-full"
          onClick={() => {
            document.cookie = 'kc-introduced=1; path=/; max-age=31536000; SameSite=Lax';
            router.push('/certificates');
          }}
        >
          <span>Interested in viewing certificates?</span>
          <svg className="theme-hint__arrow" viewBox="0 0 92 40" aria-hidden>
            <path
              d="M4 30C28 32 46 10 78 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M66 8L80 16L66 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Certificates;
