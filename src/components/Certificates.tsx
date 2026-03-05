import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import PixelSnow from './PixelSnow';

type Certificate = {
  name: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  learning: string;
};

const certificates: Certificate[] = [
  {
    name: 'Python for Data Science',
    organization: 'NPTEL - IIT Madras',
    date: '2024',
    description: 'Completed NPTEL Python for Data Science with Elite + Silver.',
    image: '/Python for Data Science (1)_page-0001 (1).jpg',
    learning: 'Strong foundation in data analysis and manipulation with Python.'
  },
  {
    name: 'Programming in Java',
    organization: 'NPTEL',
    date: '2023',
    description: 'Covered OOP, core Java fundamentals, and problem-solving.',
    image: '/programming in java.jpeg',
    learning: 'Improved coding and logic building in Java.'
  },
  {
    name: 'Summer Analytics 2025',
    organization: 'IIT Guwahati',
    date: '2025',
    description: '6-week intensive program on data science and machine learning.',
    image: '/summer.jpg',
    learning: 'Hands-on ML exposure with practical analytics tasks.'
  },
  {
    name: 'DSA in Java',
    organization: 'Apna College',
    date: '2023',
    description: 'Data structures and algorithms practice in Java.',
    image: '/DSA in java.jpeg',
    learning: 'Better algorithmic thinking and coding speed.'
  },
  {
    name: 'Project Management',
    organization: 'Coursera',
    date: '2023',
    description: 'Project planning and execution fundamentals.',
    image: '/project management.jpeg',
    learning: 'Learned delivery workflows and team coordination.'
  },
  {
    name: 'Power BI Training',
    organization: 'Ducat India',
    date: '2024',
    description: 'Power BI dashboards and visualization workflows.',
    image: '/ducat india.jpeg',
    learning: 'Improved BI dashboarding and reporting skills.'
  },
  {
    name: 'GirlScript Summer of Code 2025',
    organization: 'GirlScript Foundation',
    date: '2025',
    description: 'Open-source contributions in a national coding initiative.',
    image: '/gssoc.jpg',
    learning: 'Real-world collaboration with version control and PR workflows.'
  },
  {
    name: 'Web Development',
    organization: 'Apna College',
    date: '2023',
    description: 'Frontend development with HTML, CSS, and JavaScript.',
    image: '/Webdev.jpeg',
    learning: 'Built responsive UI projects and frontend fundamentals.'
  },
  {
    name: 'AI & ML Internship',
    organization: 'Teachnook',
    date: '2023',
    description: 'Worked on preprocessing, model building, and evaluation tasks.',
    image: '/teachnook.jpeg',
    learning: 'Applied ML concepts on practical problems.'
  },
  {
    name: 'Tata Data Analytics Workshop',
    organization: 'Tata Consultancy Services',
    date: '2024',
    description: 'Hands-on workshop on analytics and business insights.',
    image: '/Tata.jpeg',
    learning: 'Exposure to analytics workflows used in industry.'
  },
  {
    name: 'Intra College Cricket Winner',
    organization: 'Haridwar University',
    date: '2024',
    description: 'Won the intra college cricket tournament with team effort.',
    image: '/cricket.jpeg',
    learning: 'Teamwork, consistency, and performance under pressure.'
  },
  {
    name: 'HackWithIndia Finalist',
    organization: 'HackWithIndia 2024',
    date: '2024',
    description: 'Ranked among top teams in a national coding challenge.',
    image: '/hackwithindia.jpeg',
    learning: 'Competitive coding and collaborative problem-solving.'
  }
];

const splitRows = <T,>(items: T[]) => {
  const rowOne: T[] = [];
  const rowTwo: T[] = [];
  items.forEach((item, i) => (i % 2 === 0 ? rowOne.push(item) : rowTwo.push(item)));
  return [rowOne, rowTwo];
};

const Certificates = () => {
  const [rowOne, rowTwo] = splitRows(certificates);
  const [pausedRows, setPausedRows] = useState<Record<string, boolean>>({});
  const hoverTimers = useRef<Record<string, number | null>>({});

  useEffect(() => {
    return () => {
      Object.values(hoverTimers.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  const startHoverTimer = (rowId: string) => {
    if (hoverTimers.current[rowId]) {
      clearTimeout(hoverTimers.current[rowId]!);
    }
    hoverTimers.current[rowId] = window.setTimeout(() => {
      setPausedRows(prev => ({ ...prev, [rowId]: true }));
    }, 3000);
  };

  const clearHoverTimer = (rowId: string) => {
    if (hoverTimers.current[rowId]) {
      clearTimeout(hoverTimers.current[rowId]!);
      hoverTimers.current[rowId] = null;
    }
    setPausedRows(prev => ({ ...prev, [rowId]: false }));
  };

  const pauseOnInteract = (rowId: string) => {
    if (hoverTimers.current[rowId]) {
      clearTimeout(hoverTimers.current[rowId]!);
      hoverTimers.current[rowId] = null;
    }
    setPausedRows(prev => ({ ...prev, [rowId]: true }));
  };

  const renderRow = (items: Certificate[], rowId: string, reverse = false) => (
    <div
      className={`marquee-line ${reverse ? 'marquee-reverse' : ''} ${pausedRows[rowId] ? 'is-paused' : ''}`}
      onMouseEnter={() => startHoverTimer(rowId)}
      onMouseLeave={() => clearHoverTimer(rowId)}
      onPointerDown={() => pauseOnInteract(rowId)}
      onTouchStart={() => pauseOnInteract(rowId)}
    >
      <div className="marquee-track">
        {[...items, ...items].map((cert, index) => (
          <a
            key={`${cert.name}-${index}`}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-card certificate-card"
          >
            <div className="relative overflow-hidden rounded-t-xl bg-gray-800">
              <img src={cert.image} alt={cert.name} className="h-44 w-full object-contain transition-transform duration-300 hover:scale-105" />
              <div className="absolute right-3 top-3 rounded-full border border-yellow-400/30 bg-yellow-500/20 p-2">
                <Award className="h-5 w-5 text-yellow-300" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-1 text-lg font-semibold text-white">{cert.name}</h3>
              <p className="text-sm font-medium text-gray-300">{cert.organization}</p>
              <p className="mb-2 text-xs font-mono text-gray-500">{cert.date}</p>
              <p className="mb-3 text-sm text-gray-400">{cert.description}</p>
              <p className="text-sm italic text-gray-300">{cert.learning}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="certificates" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <PixelSnow
          className="h-full w-full opacity-35"
          color="#c7d2fe"
          variant="round"
          density={0.2}
          brightness={0.85}
          speed={1.05}
          pixelResolution={220}
          direction={132}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/30 pointer-events-none z-[1]" />
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Certificates & <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Certifications and achievements that show continuous learning and practical growth.
          </p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        {renderRow(rowOne, 'cert-row-1', false)}
        {renderRow(rowTwo, 'cert-row-2', true)}
      </div>
    </section>
  );
};

export default Certificates;
