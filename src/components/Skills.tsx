import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Languages",
      skills: [
        "Python", "Java", "C", "JavaScript", "HTML", "CSS"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-300" />,
      title: "Developer Tools",
      skills: [
        "Jupyter Notebook", "VS Code", "GitHub", "Anaconda", "Google Colab"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-gray-200" />,
      title: "Frameworks & Libraries",
      skills: [
        "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "ReactJS", "Node.js", "Express.js"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-gray-100" />,
      title: "Technologies",
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "NLTK"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Databases",
      skills: [
        "MongoDB", "MySQL", "SQL"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-300" />,
      title: "Other Tools",
      skills: [
        "Flask", "Streamlit", "Docker", "Git", "Bootstrap", "REST APIs"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-white/30 hover:bg-gray-900/70 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={`${200 + index * 100}`}
            >
              <div className="flex items-center mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-gray-200 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-center hover:border-white/30 hover:bg-gray-800/70 transition-all duration-300 group/skill"
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-delay={`${400 + index * 100 + skillIndex * 50}`}
                  >
                    <span className="text-gray-300 group-hover/skill:text-white font-medium transition-colors duration-300 text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;