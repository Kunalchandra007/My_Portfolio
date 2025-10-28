import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  
  // Combined tilt and spotlight effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt effect
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Spotlight effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const projects = [
    {
      title: "SMARTFLOW - Intelligent Traffic Signal Control System",
      description: "AI-based real-time traffic density analysis system that dynamically adjusts signal timings using YOLOv8 for vehicle detection, traffic density estimation, and backend signal adjustment for smoother traffic management.",
      image: "/trafficlight.jpg",
      tags: ["Python", "YOLOv8", "Computer Vision", "IoT", "ESP32", "React"],
      category: "ML",
      github: "https://github.com/Kunalchandra007/SMARTFLOW",
      demo: "https://github.com/Kunalchandra007/SMARTFLOW"
    },
    {
      title: "Pravha",
      description: "An AI-driven full-stack flood forecasting & emergency response platform designed to save lives, protect communities, and ensure resilient disaster management. Pravha integrates real-time sensor data, machine learning, and GIS technology to predict flood occurrences with timing and severity, generate automated early warnings in 12 Indian languages, coordinate emergency responses with SOS system, and plan evacuation routes intelligently.",
      image: "/pravha.jpg",
      tags: ["Python", "React", "FastAPI", "MongoDB", "XGBoost", "GIS", "ML", "AI"],
      category: "ML",
      github: "https://github.com/Kunalchandra007/Pravha",
      demo: "https://pravha.vercel.app/"
    },
    {
      title: "Edux",
      description: "An AI-powered educational chatbot platform using Python, Flask, SQLite, and Ollama models. Features prompt engineering, privacy-first AI, and analytics dashboard.",
      image: "/edux.png",
      tags: ["Python", "Flask", "AI", "Chatbot", "Ollama"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007/Edux",
      demo: "https://github.com/Kunalchandra007/Edux"
    },
    {
      title: "DSCoin: Educational Blockchain Implementation",
      description: "A comprehensive Java implementation of a cryptocurrency system demonstrating both honest and malicious blockchain behaviors. This project implements core blockchain concepts including proof-of-work mining, transaction validation, Merkle trees, and security mechanisms. Features dual implementation with honest and malicious blockchain behaviors, SHA-256 based mining with difficulty target, transaction validation preventing double-spending, Merkle tree integration for efficient verification, multiple chain support with fork reorganization, mining rewards system, and transaction pool management.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Java", "Blockchain", "Cryptocurrency", "SHA-256", "Merkle Tree", "Proof-of-Work"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007/DSCoin_Crypto_Project-",
      demo: "https://github.com/Kunalchandra007/DSCoin_Crypto_Project-"
    },
    {
      title: "Sentiment Analysis on IMDB Dataset",
      description: "Advanced sentiment analysis using machine learning techniques on movie reviews from IMDB dataset with high accuracy classification.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "NLP", "Machine Learning", "Scikit-learn", "Pandas"],
      category: "ML",
      github: "https://github.com/Kunalchandra007/Sentiment_Analysis_on_IMDBdataset",
      demo: "https://github.com/Kunalchandra007/Sentiment_Analysis_on_IMDBdataset"
    },
    {
      title: "Image Classification Project",
      description: "Deep learning model for image classification using convolutional neural networks with TensorFlow and Keras.",
      image: "/classification.png",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
      category: "ML",
      github: "https://github.com/Kunalchandra007/Image_Classification",
      demo: "https://github.com/Kunalchandra007/Image_Classification"
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using various algorithms and feature engineering techniques.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "Scikit-learn", "Pandas", "Data Analysis", "ML"],
      category: "ML",
      github: "https://github.com/Kunalchandra007/Customer_churn_prediction",
      demo: "https://github.com/Kunalchandra007/Customer_churn_prediction"
    },
    {
      title: "YouTube Slide Extractor",
      description: "A Python desktop app that extracts slide-like frames from educational YouTube videos and compiles them into a downloadable PDF. Features OCR, keyframe extraction, and a Tkinter GUI.",
      image: "/youtube.png",
      tags: ["Python", "OpenCV", "Tkinter", "OCR", "PDF"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007/YouTube-Slide-Extractor",
      demo: "https://github.com/Kunalchandra007/YouTube-Slide-Extractor"
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio website built with React, Vite, and Tailwind CSS to showcase my projects, skills, and experience.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Vite", "Tailwind CSS", "Portfolio"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007",
      demo: "https://github.com/Kunalchandra007"
    }
  ];

  // const filters = ['All', 'ML', 'Data Science', 'Minor Projects'];
  // const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my recent projects showcasing my skills in data science, machine learning, and software development.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-white/30 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer relative"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={`${200 + index * 100}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  transformStyle: 'preserve-3d',
                  '--mouse-x': '50%',
                  '--mouse-y': '50%'
                } as React.CSSProperties}
              >
                {/* Spotlight effect overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100 rounded-xl"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)'
                  }}
                />
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {expandedProjects.has(index) ? project.description : truncateDescription(project.description)}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-300 mb-4"
                    >
                      <span className="text-sm font-medium">
                        {expandedProjects.has(index) ? 'Read Less' : 'Read More'}
                      </span>
                      {expandedProjects.has(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay={`${400 + index * 100 + tagIndex * 50}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;