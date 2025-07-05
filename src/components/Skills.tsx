import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: "Developer Tools",
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "Anaconda", level: 90 },
        { name: "Google Colab", level: 90 }
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 90 },
        { name: "Keras", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "ReactJS", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: "Technologies",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "NLTK", level: 85 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: "Other Tools",
      skills: [
        { name: "Flask", level: 85 },
        { name: "Streamlit", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "REST APIs", level: 85 }
      ]
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );

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
            A comprehensive overview of my technical skills and proficiency levels across various domains.
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
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
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