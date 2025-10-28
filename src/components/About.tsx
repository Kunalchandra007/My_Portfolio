import React from 'react';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      title: "B.Tech CSE",
      description: "Computer Science and Engineering at Haridwar University"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: "Minor in AI & DS",
      description: "Artificial Intelligence & Data Science from IIT Mandi"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "Passion",
      description: "Data Science & Machine Learning Enthusiast with hands-on experience"
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Learning",
      description: "Currently practicing Data Structures and Algorithms in Java and Mastering Data Science"
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: "Goal",
      description: "Aspiring to become a skilled Data Scientist"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging data to solve real-world problems and create meaningful impact through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 dark:from-cyan-500/20 dark:to-purple-600/20 from-blue-500/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
            <img
              src="/Picture mine.jpg"
              alt="About Kunal"
              className="rounded-2xl shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-500/10 shadow-blue-500/10 border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 relative z-10"
            />
          </div>
          
          <div 
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
              I'm a dedicated Computer Science Engineering student at Haridwar University with a deep passion for 
              <span className="text-cyan-400 dark:text-cyan-400 text-blue-600"> Data Science</span> and <span className="text-blue-400 dark:text-blue-400 text-indigo-600">Machine Learning</span>. My journey in technology is driven by curiosity and the desire to 
              create innovative solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
              Currently pursuing a <span className="text-purple-400 dark:text-purple-400 text-purple-600">Minor in AI & DS from IIT Mandi</span>, I'm expanding my expertise in 
              <span className="text-purple-400 dark:text-purple-400 text-purple-600"> Data Structures and Algorithms</span> using Java while simultaneously 
              exploring advanced machine learning concepts. I believe in continuous learning and applying theoretical 
              knowledge to practical projects.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gray-800/50 dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:border-blue-500/30 hover:bg-gray-800/70 dark:hover:bg-gray-800/70 hover:bg-white/70 transition-all duration-300 group"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={`${600 + index * 100}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white dark:text-white text-gray-900 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;