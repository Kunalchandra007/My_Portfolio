import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const KEY = 'kunalchandra-dev-visits';
const HIT = `https://countapi.mileshilliard.com/api/v1/hit/${KEY}`;
const GET = `https://countapi.mileshilliard.com/api/v1/get/${KEY}`;

/**
 * Public visit total. One increment per browser session, then a read on later loads
 * so a refresh does not add another view.
 */
const SiteViews = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancel = false;
    const seen = sessionStorage.getItem('kc-view-hit');
    if (!seen) sessionStorage.setItem('kc-view-hit', '1');

    const read = (url: string) =>
      fetch(url).then((res) => (res.ok ? res.json() : Promise.reject(new Error('views'))));

    read(seen ? GET : HIT)
      .catch(() => read(HIT))
      .then((data: { value?: string | number }) => {
        const n = Number(data.value);
        if (!cancel && Number.isFinite(n)) setViews(n);
      })
      .catch(() => {});

    return () => {
      cancel = true;
    };
  }, []);

  if (views === null) return null;

  return (
    <p className="header-views" aria-label={`${views.toLocaleString('en-US')} visits`}>
      <Eye aria-hidden />
      <span>{views.toLocaleString('en-US')}</span>
    </p>
  );
};

export default SiteViews;
