import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplies the base delay */
  delay?: number;
  /** Vertical offset in px the element rises from */
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'span';
  /** Trigger once (default) or every time it enters the viewport */
  once?: boolean;
};

/**
 * framer-motion whileInView wrapper — the single reveal primitive.
 * Replaces all AOS data-aos-* attributes. Respects prefers-reduced-motion.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  once = true,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, delay: delay * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
