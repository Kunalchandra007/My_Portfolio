import React, { useEffect, useMemo, useRef, useState } from 'react';

type AutoScrollRowProps<T> = {
  items: T[];
  direction?: 1 | -1;
  ariaLabel: string;
  pauseDelayMs?: number;
  speedPxPerSecond?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
};

function AutoScrollRow<T>({
  items,
  direction = 1,
  ariaLabel,
  pauseDelayMs = 3000,
  speedPxPerSecond = 34,
  renderItem
}: AutoScrollRowProps<T>) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(row);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    let frameId = 0;
    let previousTime = performance.now();
    let singleSetWidth = track.scrollWidth / 2;
    let offset = direction === 1 ? -singleSetWidth : 0;
    let resizeObserver: ResizeObserver | null = null;

    const applyTransform = () => {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const updateMeasurements = () => {
      singleSetWidth = track.scrollWidth / 2;
      offset = direction === 1 ? -singleSetWidth : 0;
      applyTransform();
    };

    applyTransform();

    const step = (now: number) => {
      const elapsed = now - previousTime;
      previousTime = now;

      if (!isPaused && isInView && singleSetWidth > 0) {
        offset += (speedPxPerSecond * elapsed * direction) / 1000;

        if (direction === 1 && offset >= 0) {
          offset -= singleSetWidth;
        } else if (direction === -1 && offset <= -singleSetWidth) {
          offset += singleSetWidth;
        }

        applyTransform();
      }

      frameId = window.requestAnimationFrame(step);
    };

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(updateMeasurements);
      resizeObserver.observe(track);
    } else {
      window.addEventListener('resize', updateMeasurements);
    }

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', updateMeasurements);
      }
    };
  }, [direction, isPaused, isInView, items.length, speedPxPerSecond]);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        window.clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const handlePointerEnter = () => {
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = window.setTimeout(() => {
      setIsPaused(true);
    }, pauseDelayMs);
  };

  const handlePointerLeave = () => {
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    setIsPaused(false);
  };

  return (
    <div
      ref={rowRef}
      className="marquee-row"
      aria-label={ariaLabel}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      <div ref={trackRef} className="marquee-track">
        {duplicatedItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

export default AutoScrollRow;
