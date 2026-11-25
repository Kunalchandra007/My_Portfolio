import { ArrowUpRight, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type SocialLinkProps = {
  label: string;
  icon: () => ReactNode;
  handle: string;
  role: string;
  cta: string;
  href?: string;
  onClick?: () => void;
  side?: 'up' | 'down';
  className?: string;
};

const cardOpen =
  'pointer-events-none absolute left-0 z-40 w-[17.75rem] translate-y-1 opacity-0 transition duration-200 [@media(hover:hover)]:group-hover:pointer-events-auto [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:pointer-events-auto [@media(hover:hover)]:group-focus-visible:translate-y-0 [@media(hover:hover)]:group-focus-visible:opacity-100';

const SocialLink = ({
  label,
  icon,
  handle,
  role,
  cta,
  href,
  onClick,
  side = 'down',
  className = '',
}: SocialLinkProps) => {
  const { isDark } = useTheme();
  const avatar = isDark ? '/fordarktheme.jpg' : '/forlighttheme.jpg';
  const avatarPos = isDark ? 'object-[center_18%]' : 'object-[center_32%]';

  const card = (
    <span
      aria-hidden
      className={`social-card ${cardOpen} ${side === 'up' ? 'bottom-full pb-2' : 'top-full pt-2'}`}
    >
      <span className="block overflow-hidden rounded-2xl border border-hairline bg-[rgba(255,252,247,0.98)] text-left shadow-[0_22px_50px_-28px_rgba(42,24,16,0.55)] dark:border-[rgba(224,122,48,0.28)] dark:bg-[rgba(16,12,8,0.97)]">
        <span className="relative block h-[4.6rem] overflow-hidden">
          <img
            src="/forportfolio.jpg"
            alt=""
            className="h-full w-full object-cover object-[center_28%]"
          />
        </span>
        <span className="relative block px-4 pb-4">
          <img
            src={avatar}
            alt=""
            className={`absolute -top-7 left-4 h-14 w-14 rounded-full border-[3px] border-[rgb(255,252,247)] object-cover dark:border-[#100c08] ${avatarPos}`}
          />
          <span className="block pt-8">
            <span className="block font-serif text-lg leading-tight text-ink">{'Kunal Chandra'}</span>
            <span className="mt-0.5 block text-sm text-ink-faint">{handle}</span>
            <span className="mt-2 block text-sm leading-snug text-ink">{role}</span>
            <span className="my-3 block h-px bg-hairline" />
            <span className="flex items-center gap-1.5 text-sm text-ink-dim">
              <MapPin className="h-3.5 w-3.5" />
              New Delhi
            </span>
            <span className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-hairline bg-surface-2 px-3 py-2 text-sm text-ink">
              <span className="[&_svg]:h-4 [&_svg]:w-4">{icon()}</span>
              {cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </span>
      </span>
    </span>
  );

  const trigger = `inline-flex rounded-full border border-hairline p-3 text-ink-dim transition duration-300 group-hover:-translate-y-0.5 ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group relative">
        <span className={trigger}>{icon()}</span>
        {card}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className="group relative">
      <span className={trigger}>{icon()}</span>
      {card}
    </button>
  );
};

export default SocialLink;
