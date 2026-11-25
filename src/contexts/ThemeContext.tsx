'use client';

import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_KEY = 'kc-theme';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const ready = useRef(false);

  useLayoutEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    ready.current = true;
    setIsDark(dark);
  }, []);

  useEffect(() => {
    if (!ready.current) return;
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      /* private mode */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#000000' : '#e8e0d2');
  }, [isDark]);

  const toggleTheme = () => setIsDark((value) => !value);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
