import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useReducedMotion } from 'framer-motion';
import { navigateTo } from '../lib/navigation';
import LightPillar from './LightPillar';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Earlier cinematic light-beam — retuned to the nebula palette, sits behind content */}
      {!reduceMotion && (
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-50">
          <LightPillar
            topColor="#8b5cf6"
            bottomColor="#5f8fd6"
            intensity={0.7}
            rotationSpeed={0.22}
            glowAmount={0.005}
            pillarWidth={3.2}
            pillarHeight={0.42}
            noiseIntensity={0.45}
            pillarRotation={-14}
            quality="medium"
            mixBlendMode="screen"
          />
        </div>
      )}

      {/* Subtle cinematic glow layered over the beam */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-1/2 top-1/3 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-[32vh] w-[32vh] rounded-full bg-[radial-gradient(circle,rgba(124,199,255,0.08),transparent_68%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Left — editorial name block */}
          <div className="text-left">
            <motion.h1
              {...rise(0)}
              className="font-serif text-6xl leading-[1.06] text-ink sm:text-7xl lg:text-[6.5rem] lg:leading-[1.04]"
            >
              Kunal
              <br />
              <span className="text-cosmic">Chandra</span>
            </motion.h1>

            <motion.div
              {...rise(0.18)}
              className="mt-6 flex items-center gap-3 font-mono text-lg text-ink-dim sm:text-xl"
            >
              <span className="h-2 w-2 rounded-full bg-ice shadow-[0_0_12px_rgba(124,199,255,0.9)]" />
              <TypeAnimation
                sequence={[
                  'Data Science Enthusiast',
                  2000,
                  'ML Explorer',
                  2000,
                  'B.Tech CSE Student',
                  2000,
                  'DSA Practitioner',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block', color: '#a6d8ff', fontWeight: 400 }}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              {...rise(0.26)}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg"
            >
              Charting a course through data science and machine learning — building
              intelligent systems, one expedition at a time.
            </motion.p>

            <motion.div {...rise(0.34)} className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('contact')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-nebula to-nebula-soft px-7 py-3 font-medium text-white shadow-[0_0_28px_-6px_rgba(139,92,246,0.7)] transition-all duration-300 hover:shadow-[0_0_36px_-4px_rgba(139,92,246,0.9)] hover:brightness-110"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-2 px-7 py-3 font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:border-nebula-soft/50 hover:text-white"
              >
                View My Work
              </button>
            </motion.div>

            <motion.div {...rise(0.42)} className="mt-10 flex items-center gap-4">
              {[
                {
                  href: 'https://www.linkedin.com/in/kunal-chandra007',
                  label: 'LinkedIn',
                  icon: <Linkedin className="h-5 w-5" />,
                },
                {
                  href: 'https://github.com/Kunalchandra007',
                  label: 'GitHub',
                  icon: <Github className="h-5 w-5" />,
                },
                {
                  onClick: () => navigateTo('contact'),
                  label: 'Email',
                  icon: <Mail className="h-5 w-5" />,
                },
                {
                  href: 'https://leetcode.com/u/Kunal_chandra007/',
                  label: 'LeetCode',
                  icon: (
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 6.5L8.5 16L19.5 25.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.5 6.5L12.5 16L23.5 25.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-hairline bg-surface-2 p-3 text-ink-dim backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-soft/50 hover:text-ice"
                  >
                    {s.icon}
                  </a>
                ) : (
                  <button
                    key={s.label}
                    onClick={s.onClick}
                    aria-label={s.label}
                    className="rounded-full border border-hairline bg-surface-2 p-3 text-ink-dim backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-soft/50 hover:text-ice"
                  >
                    {s.icon}
                  </button>
                )
              )}
            </motion.div>
          </div>

          {/* Right — avatar as a small solar system */}
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                })}
            className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
            style={{ perspective: '1100px' }}
          >
            {/* Soft breathing aura behind the whole system */}
            <motion.div
              className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_70%)] blur-2xl"
              animate={reduceMotion ? undefined : { opacity: [0.5, 0.85, 0.5], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 3D-tilted orbital plane — rings sit on an inclined disc like a real system */}
            <div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(62deg) rotateZ(-8deg)' }}
            >
              {/* Orbit 1 — outermost, faint dashed, ice satellite */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-nebula-soft/25"
                style={{ transformStyle: 'preserve-3d' }}
                animate={reduceMotion ? undefined : { rotateZ: 360 }}
                transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
              >
                <span
                  className="absolute left-1/2 top-0 h-3 w-3 rounded-full bg-ice shadow-[0_0_18px_rgba(124,199,255,0.95)]"
                  style={{ transform: 'translate(-50%, -50%) rotateX(-62deg)' }}
                />
              </motion.div>

              {/* Orbit 2 — mid ring, counter-rotating, violet planet + tiny moon-dot */}
              <motion.div
                className="absolute inset-5 rounded-full border border-nebula-soft/20"
                style={{ transformStyle: 'preserve-3d' }}
                animate={reduceMotion ? undefined : { rotateZ: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              >
                <span
                  className="absolute right-0 top-1/2 h-3.5 w-3.5 rounded-full bg-nebula-soft shadow-[0_0_18px_rgba(167,139,250,0.95)]"
                  style={{ transform: 'translate(50%, -50%) rotateX(-62deg)' }}
                />
              </motion.div>

              {/* Orbit 3 — inner ring, faster, warm ember body */}
              <motion.div
                className="absolute inset-10 rounded-full border border-nebula-soft/15"
                style={{ transformStyle: 'preserve-3d' }}
                animate={reduceMotion ? undefined : { rotateZ: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              >
                <span
                  className="absolute bottom-0 left-1/2 h-2.5 w-2.5 rounded-full bg-ember shadow-[0_0_14px_rgba(255,181,112,0.95)]"
                  style={{ transform: 'translate(-50%, 50%) rotateX(-62deg)' }}
                />
              </motion.div>
            </div>

            {/* The "sun" — avatar core, floats above the tilted plane */}
            <motion.div
              className="absolute inset-12 overflow-hidden rounded-full border border-hairline bg-surface shadow-[0_0_70px_-10px_rgba(139,92,246,0.7)]"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/pfp.jpg"
                alt="Kunal Chandra"
                className="h-full w-full object-cover"
              />
              {/* subtle inner light rim */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_28px_rgba(167,139,250,0.35)]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll telemetry cue */}
      <button
        onClick={() => navigateTo('about')}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ice"
        aria-label="Scroll to About"
      >
        <span className="telemetry text-[0.6rem]">Scroll</span>
        <motion.span
          className="h-8 w-px bg-gradient-to-b from-nebula-soft to-transparent"
          animate={reduceMotion ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </button>
    </section>
  );
};

export default Hero;
