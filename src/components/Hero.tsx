import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-900 dark:via-gray-800 dark:to-black from-blue-50 via-indigo-100 to-purple-50 overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div className="relative inline-block">
              <img
                src="/Picture mine.jpg"
                alt="Kunal Chandra"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400/50 dark:border-cyan-400/50 border-blue-500/50 shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-500/20 shadow-blue-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 dark:from-cyan-400/20 dark:to-purple-600/20 from-blue-500/20 to-indigo-600/20 animate-pulse"></div>
            </div>
          </motion.div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold text-white dark:text-white text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Kunal Chandra
            </span>
          </h1>
          
          <div
            className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 text-gray-700 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <TypeAnimation
              sequence={[
                'Data Science Enthusiast',
                2000,
                'ML Explorer',
                2000,
                'B.Tech CSE Student',
                2000,
                'DSA Practitioner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                display: 'inline-block',
                background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              repeat={Infinity}
            />
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-500 dark:to-blue-600 from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-cyan-400/30 dark:border-cyan-400/30 border-blue-500/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-500/25 hover:shadow-blue-500/25 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-500 hover:from-blue-500 hover:to-indigo-500 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="border-2 border-cyan-400/50 dark:border-cyan-400/50 border-blue-500/50 text-cyan-400 dark:text-cyan-400 text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400/10 dark:hover:bg-cyan-400/10 hover:bg-blue-500/10 hover:border-cyan-400 dark:hover:border-cyan-400 hover:border-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-500/25 hover:shadow-blue-500/25 hover:scale-105 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-500/10 from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
          
          <div 
            className="flex justify-center space-x-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <motion.a
              href="https://www.linkedin.com/in/kunal-chandra007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-full border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:border-blue-500/50 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 hover:bg-blue-500/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-gray-400 dark:text-gray-400 text-gray-600 group-hover:text-blue-400 dark:group-hover:text-blue-400 group-hover:text-blue-600 relative z-10" />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="https://github.com/Kunalchandra007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-full border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 hover:border-gray-400/50 dark:hover:border-gray-400/50 hover:border-gray-500/50 hover:bg-gray-400/10 dark:hover:bg-gray-400/10 hover:bg-gray-500/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-gray-400 dark:text-gray-400 text-gray-600 group-hover:text-gray-200 dark:group-hover:text-gray-200 group-hover:text-gray-800 relative z-10" />
              <div className="absolute inset-0 bg-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              onClick={() => scrollToSection('#contact')}
              className="p-3 bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-full border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 hover:bg-cyan-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-gray-400 dark:text-gray-400 text-gray-600 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 group-hover:text-cyan-600 relative z-10" />
              <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Kunal_chandra007/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-full border border-gray-700/50 dark:border-gray-700/50 border-gray-300/50 hover:border-yellow-400/50 dark:hover:border-yellow-400/50 hover:border-yellow-500/50 hover:bg-yellow-400/10 dark:hover:bg-yellow-400/10 hover:bg-yellow-500/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 6.5L8.5 16L19.5 25.5" stroke="#FFA116" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.5 6.5L12.5 16L23.5 25.5" stroke="#070707" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 dark:text-cyan-400 text-blue-600 hover:text-cyan-300 dark:hover:text-cyan-300 hover:text-blue-500 transition-colors"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;