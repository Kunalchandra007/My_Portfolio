import { useMemo } from 'react';

type Star = {
  left: string;
  top: string;
  size: string;
  dur: string;
  delay: string;
  min: number;
  max: number;
};

/**
 * Lightweight, pure-CSS cosmic backdrop: drifting nebula clouds +
 * a deterministic twinkling starfield + vignette. Replaces the heavy
 * per-section WebGL. Mounted once, fixed behind all content.
 */
const SpaceBackground = () => {
  const stars = useMemo<Star[]>(() => {
    // Deterministic pseudo-random so SSR/hydration and re-renders are stable.
    const rng = (seed: number) => {
      const x = Math.sin(seed * 999.13) * 10000;
      return x - Math.floor(x);
    };
    const count = 140;
    return Array.from({ length: count }, (_, i) => {
      const s = rng(i + 1);
      const s2 = rng(i + 51);
      const s3 = rng(i + 101);
      const big = s3 > 0.93;
      return {
        left: `${(s * 100).toFixed(2)}%`,
        top: `${(s2 * 100).toFixed(2)}%`,
        size: big ? '2.2px' : `${(rng(i + 7) * 1.2 + 0.6).toFixed(2)}px`,
        dur: `${(rng(i + 13) * 4 + 2.5).toFixed(2)}s`,
        delay: `${(rng(i + 29) * 5).toFixed(2)}s`,
        min: 0.08 + rng(i + 41) * 0.15,
        max: big ? 1 : 0.5 + rng(i + 63) * 0.4,
      };
    });
  }, []);

  return (
    <div className="space-bg" aria-hidden>
      <div className="nebula-blob nebula-1" />
      <div className="nebula-blob nebula-2" />
      <div className="nebula-blob nebula-3" />
      <div className="starfield">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={
              {
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                '--dur': star.dur,
                '--delay': star.delay,
                '--min': star.min,
                '--max': star.max,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="space-vignette" />
    </div>
  );
};

export default SpaceBackground;
