import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

type Props = {
  onFinish?: () => void;
};

const GREETINGS = ['Hello', 'नमस्ते', 'Bonjour', 'Hola', 'こんにちは', '你好', '안녕하세요', 'Ciao', 'Hallo'];
const STEP_MS = 170;
const HOLD_MS = GREETINGS.length * STEP_MS;
const LEAVE_MS = 480;
const TOTAL_MS = HOLD_MS + LEAVE_MS;

const Preloader = ({ onFinish }: Props) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useMemo(
    () => (typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)').matches),
    []
  );

  useEffect(() => {
    if (reducedMotion) {
      const done = window.setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 700);
      return () => window.clearTimeout(done);
    }

    const flip = window.setInterval(() => {
      setIndex((value) => Math.min(value + 1, GREETINGS.length - 1));
    }, STEP_MS);
    const leave = window.setTimeout(() => setLeaving(true), HOLD_MS);
    const done = window.setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, TOTAL_MS);

    return () => {
      window.clearInterval(flip);
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, [onFinish, reducedMotion]);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('is-preloading', visible);
    if (!visible) return;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.classList.remove('is-preloading');
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`preloader-root${leaving ? ' preloader-leave' : ''}`} role="status" aria-live="polite">
      <p className="preloader-greeting" key={GREETINGS[index]}>
        <span className="preloader-dot" aria-hidden />
        {GREETINGS[index]}
      </p>
    </div>
  );
};

export default Preloader;
