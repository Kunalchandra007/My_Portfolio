import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  // const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
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
      title: "My Portfolio",
      description: "A personal portfolio website built with React, Vite, and Tailwind CSS to showcase my projects, skills, and experience.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Vite", "Tailwind CSS", "Portfolio"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007",
      demo: "https://github.com/Kunalchandra007"
    },
    {
      title: "Spotify-Clonee",
      description: "A frontend clone of the Spotify homepage, built with HTML and CSS. Focuses on layout, design, and responsive UI.",
      image: "/spotify.png",
      tags: ["HTML", "CSS", "Frontend", "Clone"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007/Spotify-Clonee",
      demo: "https://github.com/Kunalchandra007/Spotify-Clonee"
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
      title: "Edux",
      description: "An AI-powered educational chatbot platform using Python, Flask, SQLite, and Ollama models. Features prompt engineering, privacy-first AI, and analytics dashboard.",
      image: "/edux.png",
      tags: ["Python", "Flask", "AI", "Chatbot", "Ollama"],
      category: "Data Science",
      github: "https://github.com/Kunalchandra007/Edux",
      demo: "https://github.com/Kunalchandra007/Edux"
    }
  ];

  // const filters = ['All', 'ML', 'Data Science', 'Minor Projects'];
  // const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my recent projects showcasing my skills in data science, machine learning, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
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