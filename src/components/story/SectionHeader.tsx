import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeaderProps = {
  /** Serif display title */
  title: ReactNode;
  /** Optional supporting line */
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

const SectionHeader = ({
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
  const item: Variants = reduceMotion
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
      <motion.h2
        variants={item}
        className="font-serif text-4xl text-ink sm:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base leading-8 tracking-[0.012em] text-ink-dim sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
