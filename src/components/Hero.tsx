import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/Picture mine.jpg"
                alt="Kunal Chandra"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Kunal Chandra
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="text-cyan-400">B.Tech CSE Student</span> | <span className="text-blue-400">Data Science & Machine Learning Enthusiast</span> | <span className="text-cyan-400">Practicing DSA in Java</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/30"
            >
              Get In Touch
            </button>
            
            <button
              onClick={() => scrollToSection('#projects')}
              className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/kunal-chandra007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/Kunalchandra007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-gray-400/50 hover:bg-gray-400/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-200" />
            </a>
            <a
              onClick={() => scrollToSection('#contact')}
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 group cursor-pointer"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
            </a>
            <a
              href="https://leetcode.com/u/Kunal_chandra007/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 6.5L8.5 16L19.5 25.5" stroke="#FFA116" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.5 6.5L12.5 16L23.5 25.5" stroke="#070707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;