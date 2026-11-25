import type { Metadata, Viewport } from 'next';
import { Fraunces, Outfit, Space_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import '../src/index.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-mono',
});

const themeBoot = `(function(){try{if(localStorage.getItem('kc-theme')==='dark'){document.documentElement.classList.add('dark');var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#000000');}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://kunalchandra.dev'),
  title: {
    default: 'Kunal Chandra | Software Engineer',
    template: '%s | Kunal Chandra',
  },
  description:
    'Kunal Chandra is a Computer Science Engineering student at Haridwar University building projects in data science, machine learning, DSA, and web development.',
  authors: [{ name: 'Kunal Chandra' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Kunal Chandra | Software Engineer',
    description:
      'Portfolio of Kunal Chandra, a Haridwar University CSE student building projects in data science, machine learning, DSA, and software development.',
    type: 'website',
    url: 'https://kunalchandra.dev/',
    siteName: 'Kunal Chandra',
    images: ['https://kunalchandra.dev/forlighttheme.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Chandra | Software Engineer',
    description:
      'Portfolio of Kunal Chandra with projects, experience, skills, and resume focused on data science and machine learning.',
    images: ['https://kunalchandra.dev/forlighttheme.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e8e0d2',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://kunalchandra.dev/#person',
      name: 'Kunal Chandra',
      url: 'https://kunalchandra.dev/',
      image: 'https://kunalchandra.dev/forlighttheme.jpg',
      jobTitle: 'Software Engineer',
      description:
        'Computer Science Engineering student at Haridwar University focused on data science, machine learning, DSA, and software development.',
      email: 'mailto:kunalchandra2506@gmail.com',
      homeLocation: { '@type': 'Place', name: 'New Delhi, India' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Haridwar University' },
      sameAs: [
        'https://www.linkedin.com/in/kunal-chandra007',
        'https://github.com/Kunalchandra007',
        'https://leetcode.com/u/Kunal_chandra007/',
        'https://x.com/KunalChandra777',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kunalchandra.dev/#website',
      url: 'https://kunalchandra.dev/',
      name: 'Kunal Chandra',
      description:
        'Portfolio of Kunal Chandra, a Haridwar University CSE student building projects in data science, machine learning, DSA, and software development.',
      publisher: { '@id': 'https://kunalchandra.dev/#person' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
