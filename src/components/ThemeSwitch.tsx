import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="theme-switch">
      <div className="theme-hint">
        {isDark ? (
          <svg className="theme-hint__rocket" viewBox="0 0 32 32" aria-hidden>
            <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M16 4v3M16 25v3M4 16h3M25 16h3M7.8 7.8l2.1 2.1M22.1 22.1l2.1 2.1M7.8 24.2l2.1-2.1M22.1 9.9l2.1-2.1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="theme-hint__rocket" viewBox="0 0 48 32" aria-hidden>
            <path d="M1 16l8-5-2 5 2 5z" fill="#e07a2f" />
            <path d="M4 16l6-3-1.4 3 1.4 3z" fill="#f2c14a" />
            <path d="M12 10h18c6 0 12 2.6 14 6-2 3.4-8 6-14 6H12z" fill="currentColor" />
            <path d="M14 10 7 4h8z" fill="currentColor" />
            <path d="M14 22 7 28h8z" fill="currentColor" />
            <circle cx="26" cy="16" r="3.1" fill="#f6f1e8" />
            <circle cx="26" cy="16" r="1.6" fill="#6aaed6" />
          </svg>
        )}
        <span>{isDark ? 'Missing the light?' : 'Want to explore space?'}</span>
        <svg className="theme-hint__arrow" viewBox="0 0 92 40" aria-hidden>
          <path
            d="M4 30C28 32 46 10 78 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M66 8L80 16L66 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={isDark ? 'Return to the light theme' : 'Switch on the space theme'}
        title={isDark ? 'Return to daylight' : 'Want to explore space?'}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
