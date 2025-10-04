import React, { useState } from 'react';
import { Github, ExternalLink, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  // const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

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
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-900 bg-gray-50 relative overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
            A collection of my recent projects showcasing my skills in data science, machine learning, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 overflow-hidden hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:border-blue-500/30 hover:bg-gray-800/70 dark:hover:bg-gray-800/70 hover:bg-white/70 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={`${200 + index * 100}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-2 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-4">
                  {expandedProjects.has(index) ? project.description : truncateDescription(project.description)}
                </p>
                {project.description.length > 150 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center space-x-1 text-cyan-400 dark:text-cyan-400 text-blue-600 hover:text-cyan-300 dark:hover:text-cyan-300 hover:text-blue-500 transition-colors duration-300 mb-4"
                  >
                    <span className="text-sm font-medium">
                      {expandedProjects.has(index) ? 'Read Less' : 'Read More'}
                    </span>
                    {expandedProjects.has(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 dark:bg-gray-700/50 bg-gray-200/50 text-gray-300 dark:text-gray-300 text-gray-700 rounded-full text-sm border border-gray-600/30 dark:border-gray-600/30 border-gray-300/30"
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
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
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