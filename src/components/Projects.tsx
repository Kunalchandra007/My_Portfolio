import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PixelSnow from './PixelSnow';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'SMARTFLOW - Intelligent Traffic Signal Control System',
    description:
      'AI-based real-time traffic density analysis system that dynamically adjusts signal timings using YOLOv8 for vehicle detection and backend signal adjustment.',
    image: '/trafficlight.jpg',
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'IoT', 'ESP32', 'React'],
    github: 'https://github.com/Kunalchandra007/SMARTFLOW',
    demo: 'https://github.com/Kunalchandra007/SMARTFLOW'
  },
  {
    title: 'Pravha',
    description:
      'AI-driven full-stack flood forecasting and emergency response platform with real-time sensor data, ML predictions, and multilingual alerts.',
    image: '/pravha.jpg',
    tags: ['Python', 'React', 'FastAPI', 'MongoDB', 'XGBoost', 'GIS'],
    github: 'https://github.com/Kunalchandra007/Pravha',
    demo: 'https://pravha.vercel.app/'
  },
  {
    title: 'Edux',
    description:
      'AI-powered educational chatbot platform using Flask, SQLite, and Ollama models with privacy-first architecture and analytics.',
    image: '/edux.png',
    tags: ['Python', 'Flask', 'AI', 'Chatbot', 'Ollama'],
    github: 'https://github.com/Kunalchandra007/Edux',
    demo: 'https://github.com/Kunalchandra007/Edux'
  },
  {
    title: 'DSCoin: Educational Blockchain Implementation',
    description:
      'Java cryptocurrency system with proof-of-work mining, transaction validation, Merkle trees, and chain handling.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Java', 'Blockchain', 'Cryptocurrency', 'Merkle Tree'],
    github: 'https://github.com/Kunalchandra007/DSCoin_Crypto_Project-',
    demo: 'https://github.com/Kunalchandra007/DSCoin_Crypto_Project-'
  },
  {
    title: 'Sentiment Analysis on IMDB Dataset',
    description: 'Sentiment analysis using machine learning techniques on IMDB movie reviews.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
    github: 'https://github.com/Kunalchandra007/Sentiment_Analysis_on_IMDBdataset',
    demo: 'https://github.com/Kunalchandra007/Sentiment_Analysis_on_IMDBdataset'
  },
  {
    title: 'Image Classification Project',
    description: 'CNN based image classification with TensorFlow and Keras.',
    image: '/classification.png',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    github: 'https://github.com/Kunalchandra007/Image_Classification',
    demo: 'https://github.com/Kunalchandra007/Image_Classification'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'ML model to predict customer churn using feature engineering and classification models.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/Kunalchandra007/Customer_churn_prediction',
    demo: 'https://github.com/Kunalchandra007/Customer_churn_prediction'
  },
  {
    title: 'YouTube Slide Extractor',
    description: 'Desktop app that extracts slide-like frames from educational videos and compiles them into PDF.',
    image: '/youtube.png',
    tags: ['Python', 'OpenCV', 'Tkinter', 'OCR', 'PDF'],
    github: 'https://github.com/Kunalchandra007/YouTube-Slide-Extractor',
    demo: 'https://github.com/Kunalchandra007/YouTube-Slide-Extractor'
  },
  {
    title: 'My Portfolio',
    description: 'Portfolio website built with React, Vite, and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Kunalchandra007',
    demo: 'https://github.com/Kunalchandra007'
  }
];

const splitRows = <T,>(items: T[]) => {
  const rowOne: T[] = [];
  const rowTwo: T[] = [];
  items.forEach((item, i) => (i % 2 === 0 ? rowOne.push(item) : rowTwo.push(item)));
  return [rowOne, rowTwo];
};

const Projects = () => {
  const [rowOne, rowTwo] = splitRows(projects);
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

  const renderRow = (items: Project[], rowId: string, reverse = false) => (
    <div
      className={`marquee-line ${reverse ? 'marquee-reverse' : ''} ${pausedRows[rowId] ? 'is-paused' : ''}`}
      onMouseEnter={() => startHoverTimer(rowId)}
      onMouseLeave={() => clearHoverTimer(rowId)}
      onPointerDown={() => pauseOnInteract(rowId)}
      onTouchStart={() => pauseOnInteract(rowId)}
    >
      <div className="marquee-track">
        {[...items, ...items].map((project, index) => (
          <a
            key={`${project.title}-${index}`}
            href={project.demo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-card project-card"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img src={project.image} alt={project.title} className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={`${project.title}-${tag}`} className="rounded-full border border-gray-700/80 bg-gray-800/70 px-2 py-1 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="inline-flex items-center gap-1">
                  <Github size={16} />
                  Code
                </span>
                <span className="inline-flex items-center gap-1">
                  <ExternalLink size={16} />
                  View
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <PixelSnow
          className="h-full w-full opacity-35"
          color="#bfdbfe"
          variant="round"
          density={0.2}
          brightness={0.85}
          speed={1}
          pixelResolution={220}
          direction={125}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/30 pointer-events-none z-[1]" />
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Projects</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            A collection of my recent work in data science, machine learning, and software development.
          </p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        {renderRow(rowOne, 'projects-row-1', false)}
        {renderRow(rowTwo, 'projects-row-2', true)}
      </div>
    </section>
  );
};

export default Projects;
