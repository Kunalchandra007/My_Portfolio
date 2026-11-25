import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

/**
 * Unique visitors from Vercel Web Analytics. The number is read through a
 * server route so the access token never reaches the browser.
 */
const SiteViews = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancel = false;
    fetch('/api/visitors')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('views'))))
      .then((data: { visitors?: number | null }) => {
        const n = Number(data.visitors);
        if (!cancel && Number.isFinite(n)) setViews(n);
      })
      .catch(() => {});
    return () => {
      cancel = true;
    };
  }, []);

  if (views === null) return null;

  return (
    <p className="header-views" aria-label={`${views.toLocaleString('en-US')} visitors`}>
      <Eye aria-hidden />
      <span>{views.toLocaleString('en-US')}</span>
    </p>
  );
};

export default SiteViews;
