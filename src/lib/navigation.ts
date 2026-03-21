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

export const navigateTo = (target: string) => {
  const sectionId = getSectionId(target);
  const element = document.getElementById(sectionId);

  if (!element) return;

  const nextUrl = sectionId === 'home' ? '/' : `/#${sectionId}`;
  window.history.replaceState({}, '', nextUrl);
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
