/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        void: 'rgb(var(--c-void) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          2: 'rgb(var(--c-surface-2) / <alpha-value>)',
        },
        nebula: {
          DEFAULT: 'rgb(var(--c-nebula) / <alpha-value>)',
          soft: 'rgb(var(--c-nebula-soft) / <alpha-value>)',
          deep: 'rgb(var(--c-nebula-deep) / <alpha-value>)',
        },
        ice: {
          DEFAULT: 'rgb(var(--c-ice) / <alpha-value>)',
          soft: 'rgb(var(--c-ice-soft) / <alpha-value>)',
        },
        ember: 'rgb(var(--c-ember) / <alpha-value>)',
        hairline: 'rgba(var(--c-line), 0.18)',
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          dim: 'rgb(var(--c-ink-dim) / <alpha-value>)',
          faint: 'rgb(var(--c-ink-faint) / <alpha-value>)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
