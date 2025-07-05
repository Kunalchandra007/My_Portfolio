import React from 'react';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';

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
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging data to solve real-world problems and create meaningful impact through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <img
              src="/Picture mine.jpg"
              alt="About Kunal"
              className="rounded-2xl shadow-2xl shadow-cyan-500/10 border border-gray-700/50 relative z-10"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science Engineering student at Haridwar University with a deep passion for 
              <span className="text-cyan-400"> Data Science</span> and <span className="text-blue-400">Machine Learning</span>. My journey in technology is driven by curiosity and the desire to 
              create innovative solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing a <span className="text-purple-400">Minor in AI & DS from IIT Mandi</span>, I'm expanding my expertise in 
              <span className="text-purple-400"> Data Structures and Algorithms</span> using Java while simultaneously 
              exploring advanced machine learning concepts. I believe in continuous learning and applying theoretical 
              knowledge to practical projects.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300 group">
                  <div className="flex items-start space-x-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
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