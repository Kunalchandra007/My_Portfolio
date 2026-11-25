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

/** Pure-black field. Planets, meteors and rockets are spread down the page. */
const SpaceBackground = () => {
  const stars = useMemo<Star[]>(() => {
    const rng = (seed: number) => {
      const x = Math.sin(seed * 999.13) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: 260 }, (_, i) => {
      const big = rng(i + 101) > 0.86;
      return {
        left: `${(rng(i + 1) * 100).toFixed(2)}%`,
        top: `${(rng(i + 51) * 100).toFixed(2)}%`,
        size: big ? '2.6px' : `${(rng(i + 7) * 1.5 + 0.8).toFixed(2)}px`,
        dur: `${(rng(i + 13) * 3.5 + 2).toFixed(2)}s`,
        delay: `${(rng(i + 29) * 4).toFixed(2)}s`,
        min: 0.35 + rng(i + 41) * 0.25,
        max: big ? 1 : 0.75 + rng(i + 63) * 0.25,
      };
    });
  }, []);

  return (
    <div className="space-bg" aria-hidden>
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

      <div className="nebula-blob nebula-1" />
      <div className="nebula-blob nebula-2" />
      <div className="nebula-blob nebula-3" />

      <div className="planet planet-saturn" style={{ top: '-6%', right: '-3%' }}>
        <span className="planet-ring" />
        <span className="planet-saturn__body" />
      </div>
      <div className="planet planet-earth" style={{ bottom: '-2%', left: '-2%' }} />
      <div className="planet planet-moon" style={{ bottom: '16%', left: '9%' }} />
      <div className="planet planet-mars" style={{ top: '8%', right: '24%' }} />
      <div className="moon-orbit" style={{ bottom: '4%', right: '14%' }}>
        <span />
      </div>

      {[8, 46, 78].map((top, i) => (
        <span
          key={top}
          className="meteor"
          style={{ top: `${top}%`, animationDelay: `${i * 1.4}s`, animationDuration: `${4.2 + i}s` }}
        />
      ))}

      {[6, 42, 74].map((top, i) => (
        <div key={top} className="rocket" style={{ top: `${top}%`, animationDelay: `${i * 2.8}s`, animationDuration: '9s' }}>
          <svg viewBox="0 0 64 64" width="64" height="64">
            <path d="M10 36c8-2 14-10 16-22 8 6 14 16 16 26-6 2-12 2-18 0l-2 8-6-4 2-8c-4 0-8 0-8 0z" fill="#f7f3ea" />
            <path d="M18 40l-8 10 10-4" fill="#e7b15a" />
            <circle cx="28" cy="28" r="4" fill="#d7e6f4" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SpaceBackground;
