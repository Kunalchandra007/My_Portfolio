const PATH_TO_SECTION: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/skills': 'skills',
  '/experience': 'experience',
  '/projects': 'projects',
  '/certificates': 'certificates',
  '/resume': 'resume',
  '/contact': 'contact'
};

const getSectionId = (target: string) => PATH_TO_SECTION[target] ?? target.replace(/^#/, '');

export const openCertificates = () => {
  window.history.pushState({}, '', '/certificates');
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
};

export const closeCertificates = () => {
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const navigateTo = (target: string) => {
  const sectionId = getSectionId(target);
  const element = document.getElementById(sectionId);

  if (!element) return;

  const nextUrl = sectionId === 'home' ? '/' : `/#${sectionId}`;
  window.history.replaceState({}, '', nextUrl);

  const chapter = element.closest('.story-chapter') as HTMLElement | null;
  const narrow = window.matchMedia('(max-width: 760px)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* scrollIntoView lands on the section inside a sticky, overlapping chapter.
     Going backward, that box is still covered by the chapter you are on, so
     the scroll distance comes out as zero. Scroll the chapter shell instead. */
  const anchor = chapter && !narrow && !reduce ? chapter : element;
  const top = anchor.getBoundingClientRect().top + window.scrollY - (anchor === element ? 72 : 0);
  window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
};
