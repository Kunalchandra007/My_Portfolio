import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Languages",
      skills: [
        "Python", "Java", "C", "JavaScript", "HTML", "CSS"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: "Developer Tools",
      skills: [
        "Jupyter Notebook", "VS Code", "GitHub", "Anaconda", "Google Colab"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Frameworks & Libraries",
      skills: [
        "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "ReactJS", "Node.js", "Express.js"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: "Technologies",
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "NLTK"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Databases",
      skills: [
        "MongoDB", "MySQL", "SQL"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: "Other Tools",
      skills: [
        "Flask", "Streamlit", "Docker", "Git", "Bootstrap", "REST APIs"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-cyan-500/30 hover:bg-gray-900/70 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white ml-3 group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-center hover:border-cyan-400/50 hover:bg-gray-800/70 transition-all duration-300 group/skill"
                  >
                    <span className="text-gray-300 group-hover/skill:text-cyan-400 font-medium transition-colors duration-300">
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