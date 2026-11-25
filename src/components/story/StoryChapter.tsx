import { useLayoutEffect, useRef, type ReactNode } from 'react';

type StoryChapterProps = {
  z: number;
  /** Vertical scroll walks a horizontal gallery before the next chapter can cover this one. */
  pin?: boolean;
  children: ReactNode;
};

/**
 * The shell sticks to the viewport. If the chapter is taller than the screen,
 * scroll moves through that content first. The next shell then slides up over it.
 */
const StoryChapter = ({ z, pin = false, children }: StoryChapterProps) => {
  const runway = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const runwayEl = runway.current;
    const frameEl = frame.current;
    const sheetEl = sheet.current;
    if (!runwayEl || !frameEl || !sheetEl) return;

    const narrow = window.matchMedia('(max-width: 760px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const released = () => narrow.matches || reduce.matches;

    const measure = () => {
      if (released() || pin) {
        if (!pin) runwayEl.style.height = '';
        if (released()) {
          sheetEl.style.transform = '';
          frameEl.style.transform = '';
        }
        return;
      }
      const view = window.innerHeight;
      const content = Math.max(sheetEl.scrollHeight, view);
      /* Extra screen is the cover: this chapter stays pinned while the next one slides over it. */
      runwayEl.style.height = `${content + view}px`;
    };

    const sync = () => {
      if (released()) return;
      const view = window.innerHeight;
      let ty = 0;
      if (!pin) {
        const extra = Math.max(0, sheetEl.scrollHeight - view);
        const scrolled = Math.max(0, -runwayEl.getBoundingClientRect().top);
        ty = -Math.min(extra, scrolled);
      }
      sheetEl.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0)`;
    };

    measure();
    sync();
    const onScroll = () => sync();
    const onResize = () => {
      measure();
      sync();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    narrow.addEventListener('change', onResize);
    const observer = new ResizeObserver(onResize);
    observer.observe(sheetEl);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      narrow.removeEventListener('change', onResize);
      observer.disconnect();
      if (!pin) runwayEl.style.height = '';
      sheetEl.style.transform = '';
      frameEl.style.transform = '';
    };
  }, [pin]);

  return (
    <div ref={runway} className={`story-chapter${pin ? ' is-pinned' : ''}`} style={{ zIndex: z }}>
      <div className="story-sticky">
        <div ref={frame} className="story-frame">
          <div ref={sheet} className="story-sheet">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChapter;
