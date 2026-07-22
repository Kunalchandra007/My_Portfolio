import React, { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  onFinish?: () => void;
};

const PRELOADER_END_MS = 2600;
const NAME_REVEAL_MS = 1500;
const FADE_START_MS = 2200;

const Preloader: React.FC<Props> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const rafRef = useRef(0);
  const reducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100);
      setShowName(true);
      const finishTimer = window.setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 900);
      return () => window.clearTimeout(finishTimer);
    }

    const start = performance.now();
    let disposed = false;
    let nameTriggered = false;
    let fadeTriggered = false;

    const frame = (now: number) => {
      if (disposed) return;
      const t = now - start;
      const pct = Math.min((t / (FADE_START_MS - 200)) * 100, 100);
      setProgress(pct);

      if (t >= NAME_REVEAL_MS && !nameTriggered) {
        nameTriggered = true;
        setShowName(true);
      }
      if (t >= FADE_START_MS && !fadeTriggered) {
        fadeTriggered = true;
        setIsFading(true);
      }
      if (t >= PRELOADER_END_MS) {
        disposed = true;
        setIsVisible(false);
        onFinish?.();
        return;
      }
      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, [onFinish, reducedMotion]);

  useEffect(() => {
    if (!isVisible) return;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`preloader-root fixed inset-0 z-[999] flex items-center justify-center bg-void ${
        isFading ? 'preloader-fade-out' : ''
      }`}
    >
      {/* Cosmic backdrop */}
      <div className="absolute inset-0">
        <div className="nebula-blob nebula-1" />
        <div className="nebula-blob nebula-3" />
      </div>
      <div className="absolute inset-0 bg-void/40" />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        {/* Orbital loader */}
        <div className="relative flex h-36 w-36 items-center justify-center">
          <div className="pl-arc absolute inset-0" />
          <div className="pl-arc absolute inset-4 opacity-60" style={{ animationDuration: '1.7s', animationDirection: 'reverse' }} />
          <div className="pl-core h-16 w-16" />
          {/* Orbiting satellite */}
          {!reducedMotion && (
            <div className="absolute inset-0 animate-[pl-spin_2.4s_linear_infinite]">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice shadow-[0_0_10px_rgba(124,199,255,0.9)]" />
            </div>
          )}
        </div>

        {/* Telemetry + name */}
        <div className="flex flex-col items-center gap-4">
          <span className="telemetry text-[0.62rem] text-ink-faint">
            Initializing flight systems
          </span>

          <p
            className={`preloader-name transition-opacity duration-500 ${
              showName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Hola, Amigo
          </p>

          {/* Progress bar */}
          <div className="mt-2 h-px w-56 overflow-hidden rounded-full bg-hairline">
            <div className="pl-bar-fill h-full" style={{ width: `${progress}%` }} />
          </div>
          <span className="telemetry text-[0.6rem] text-ink-faint">
            {String(Math.round(progress)).padStart(3, '0')} %
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
