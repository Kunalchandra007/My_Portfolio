import { ExternalLink, Github } from 'lucide-react';
import AutoScrollRow from './AutoScrollRow';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

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

const Projects = () => {
  const renderRow = (items: Project[], direction: 1 | -1, rowLabel: string) => (
    <AutoScrollRow
      items={items}
      direction={direction}
      ariaLabel={rowLabel}
      pauseDelayMs={3000}
      speedPxPerSecond={34}
      renderItem={(project, index) => (
        <a
          key={`${project.title}-${index}`}
          href={project.demo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-card project-card"
        >
          <div className="relative overflow-hidden rounded-t-xl">
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="p-5">
            <h3 className="mb-2 font-serif text-lg text-ink">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-ink-dim">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={`${project.title}-${tag}-${index}`} className="telemetry text-[0.55rem] rounded-full border border-hairline bg-surface-2 px-2 py-1 text-ink-dim">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-ink-dim">
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
      )}
    />
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto mb-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            index="05"
            label="Expeditions"
            title="Projects"
            subtitle="A collection of my recent work in data science, machine learning, and software development."
            align="center"
          />
        </Reveal>
      </div>

      <div className="relative space-y-6">
        {renderRow(projects, 1, 'Projects sliding left to right')}
      </div>
    </section>
  );
};

export default Projects;
