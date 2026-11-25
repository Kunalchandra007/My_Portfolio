import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { navigateTo } from '../lib/navigation';
import { useTheme } from '../contexts/ThemeContext';
import SocialLink from './SocialLink';

function PortraitNote({
  text,
  className,
  point = 'right',
}: {
  text: ReactNode;
  className: string;
  point?: 'right' | 'left' | 'down' | 'up';
}) {
  const vertical = point === 'down' || point === 'up';
  const arrow = (
    <span className={`portrait-arrow-slot is-${point}`}>
      <svg className="portrait-arrow" viewBox={vertical ? '0 0 36 72' : '0 0 88 36'} aria-hidden>
        {point === 'right' && (
          <>
            <path d="M4 22C18 26 28 6 48 12C62 16 70 26 80 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M66 6L84 14L64 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {point === 'left' && (
          <>
            <path d="M84 22C70 26 60 6 40 12C26 16 18 26 8 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M22 6L4 14L24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {point === 'down' && (
          <>
            <path d="M18 4C22 22 8 34 14 54" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M4 50L14 66L26 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {point === 'up' && (
          <>
            <path d="M18 68C14 50 28 38 16 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M6 26L16 8L28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </span>
  );

  const arrowFirst = point === 'left' || point === 'up';

  return (
    <div className={`portrait-callout portrait-callout--${point} ${className}`}>
      {arrowFirst ? arrow : null}
      <span>{text}</span>
      {arrowFirst ? null : arrow}
    </div>
  );
}

const ROLE_LINES = [
  'who builds things that work',
  'who turns ideas into products',
  'who cuts hours into minutes',
  'who solves real problems',
  'who ships, not just demos',
  'who never stops learning',
];

function RoleCycle() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ROLE_LINES.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <span className="role-cycle" aria-live="polite">
      {ROLE_LINES.map((line, i) => (
        <span
          key={line}
          className={`role-cycle__line text-cosmic${i === index ? ' is-on' : ''}`}
          aria-hidden={i !== index}
        >
          {line}
        </span>
      ))}
    </span>
  );
}

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { isDark } = useTheme();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="text-left">
            <motion.h1
              {...rise(0.08)}
              className="font-serif text-6xl text-ink sm:text-7xl lg:text-[6.4rem]"
            >
              Kunal
              <br />
              <span className="italic text-cosmic">Chandra</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="role-row mt-6 max-w-xl font-serif text-3xl text-ink sm:text-4xl"
            >
              <span>Software Engineer</span>
              <RoleCycle />
            </motion.p>

            <motion.p
              {...rise(0.22)}
              className="mt-3 max-w-xl font-serif text-2xl leading-snug text-ink sm:text-3xl"
            >
              Curious by nature. <span className="italic text-cosmic">Builder by habit.</span>
            </motion.p>

            <motion.p
              {...rise(0.28)}
              className="mt-4 max-w-xl text-base leading-7 text-ink-dim sm:text-lg"
            >
              Driven by problems, inspired by possibilities, and happiest when turning ideas
              into things that work.
            </motion.p>

            <motion.div {...rise(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => navigateTo('contact')} className="btn-primary">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigateTo('projects')} className="btn-ghost">
                Selected work
              </button>
            </motion.div>

            <motion.div {...rise(0.42)} className="mt-8 flex items-center gap-3">
              <SocialLink
                href="https://www.linkedin.com/in/kunal-chandra007"
                side="up"
                label="LinkedIn"
                handle="in/kunal-chandra007"
                role="Software Engineer"
                cta="Connect on LinkedIn"
                icon={() => <Linkedin className="h-5 w-5" />}
                className="bg-surface/70 backdrop-blur-md group-hover:text-nebula"
              />
              <SocialLink
                href="https://github.com/Kunalchandra007"
                side="up"
                label="GitHub"
                handle="Kunalchandra007"
                role="Software Engineer"
                cta="Follow on GitHub"
                icon={() => <Github className="h-5 w-5" />}
                className="bg-surface/70 backdrop-blur-md group-hover:text-nebula"
              />
              <SocialLink
                onClick={() => navigateTo('contact')}
                side="up"
                label="Email"
                handle="kunalchandra2506@gmail.com"
                role="I reply to every message"
                cta="Write to me"
                icon={() => <Mail className="h-5 w-5" />}
                className="bg-surface/70 backdrop-blur-md group-hover:text-nebula"
              />
              <SocialLink
                href="https://leetcode.com/u/Kunal_chandra007/"
                side="up"
                label="LeetCode"
                handle="Kunal_chandra007"
                role="500+ problems · rating 1776"
                cta="See the profile"
                icon={() => (
                  <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" aria-hidden>
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
                )}
                className="bg-surface/70 backdrop-blur-md group-hover:text-nebula"
              />
            </motion.div>
          </div>

          <div className="portrait-wrap relative mx-auto w-full max-w-[23.5rem] lg:mx-0">
            <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                })}
            className="portrait-stage relative mx-auto aspect-square w-full max-w-[23.5rem]"
          >
            <motion.div
              className="portrait-classic h-full w-full overflow-hidden"
              whileHover={reduceMotion ? undefined : { rotate: 0, y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <img
                src={isDark ? '/fordarktheme.jpg' : '/forlighttheme.jpg'}
                alt="Kunal Chandra"
                className={`portrait-photo h-full w-full rounded-full object-cover ${isDark ? 'object-[center_18%]' : 'object-[center_30%]'}`}
              />
            </motion.div>

            <div className="orbit-stage" aria-hidden>
              <motion.div
                className="orbit-ring orbit-ring--outer"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
              >
                <span className="orbit-dot orbit-dot--ice" />
              </motion.div>
              <motion.div
                className="orbit-ring orbit-ring--inner"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              >
                <span className="orbit-dot orbit-dot--ember" />
              </motion.div>
            </div>
            <div className="portrait-notes">
              <PortraitNote text="hello, world" className="portrait-callout--hey" point="down" />
              <PortraitNote text="it works on my machine" className="portrait-callout--hi" point="down" />
              <PortraitNote text="sudo make me coffee" className="portrait-callout--coffee" point="right" />
              <PortraitNote text="ships > talks" className="portrait-callout--builder" point="left" />
              <PortraitNote text="while(curious)" className="portrait-callout--curious" point="left" />
              <PortraitNote text="localhost: Delhi" className="portrait-callout--me" point="up" />
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
