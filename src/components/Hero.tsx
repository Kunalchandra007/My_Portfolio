import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// @ts-ignore
import Particles from './Particles';
// @ts-ignore
import SplitText from './SplitText';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#e5e7eb', '#d1d5db']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20"></div>

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
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 shadow-2xl shadow-white/10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-gray-300/10 animate-pulse"></div>
            </div>
          </motion.div>
          
          <div className="mb-6">
            <SplitText
              text="Hi, I'm Kunal Chandra"
              tag="h1"
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.1}
            />
          </div>
          
          <div
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md"
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
                color: '#f3f4f6',
                fontWeight: '600',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
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
              className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 hover:bg-gray-100 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:shadow-lg hover:shadow-white/25 hover:scale-105 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
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
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 relative z-10" />
            </motion.a>
            <motion.a
              href="https://github.com/Kunalchandra007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white relative z-10" />
            </motion.a>
            <motion.a
              onClick={() => scrollToSection('#contact')}
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400 relative z-10" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Kunal_chandra007/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 6.5L8.5 16L19.5 25.5" stroke="#FFA116" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.5 6.5L12.5 16L23.5 25.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors"
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