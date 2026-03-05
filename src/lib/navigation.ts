export const ROUTE_ORDER = [
  '/',
  '/about',
  '/skills',
  '/experience',
  '/projects',
  '/certificates',
  '/resume',
  '/contact'
] as const;

export type RoutePath = (typeof ROUTE_ORDER)[number];

export const navigateTo = (path: string) => {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getAdjacentRoute = (pathname: string, direction: 'next' | 'prev') => {
  const index = ROUTE_ORDER.indexOf(pathname as RoutePath);
  if (index === -1) return null;
  if (direction === 'next') return ROUTE_ORDER[index + 1] ?? null;
  return ROUTE_ORDER[index - 1] ?? null;
};
