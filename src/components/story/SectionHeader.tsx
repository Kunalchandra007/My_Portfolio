import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeaderProps = {
  /** Chapter number, e.g. "02" */
  index: string;
  /** Telemetry label, e.g. "THE NAVIGATOR" */
  label: string;
  /** Optional coordinate/telemetry suffix, e.g. "20.59°N" */
  coord?: string;
  /** Serif display title */
  title: ReactNode;
  /** Optional supporting line */
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/**
 * Consistent "waypoint" header: Space Mono telemetry line + Instrument Serif title.
 * Used by every section for cohesive mission-log framing.
 */
const SectionHeader = ({
  index,
  label,
  coord,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) => {
  const reduceMotion = useReducedMotion();
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = reduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <motion.div
      variants={container}
      initial={reduceMotion ? undefined : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      className={`flex max-w-3xl flex-col ${alignCls} ${className}`}
    >
      <motion.div
        variants={item}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="telemetry text-nebula-soft">{index}</span>
        <span className="h-px w-8 bg-hairline" />
        <span className="telemetry">{label}</span>
        {coord && (
          <>
            <span className="h-px w-8 bg-hairline hidden sm:block" />
            <span className="telemetry text-ink-faint hidden sm:inline">{coord}</span>
          </>
        )}
      </motion.div>

      <motion.h2
        variants={item}
        className="mt-4 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
