import { Code, Database, Brain, Wrench } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const skillCategories = [
  {
    icon: <Code className="w-5 h-5 text-ice" />,
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: <Wrench className="w-5 h-5 text-ice" />,
    title: 'Developer Tools',
    skills: ['Jupyter Notebook', 'VS Code', 'GitHub', 'Anaconda', 'Google Colab'],
  },
  {
    icon: <Brain className="w-5 h-5 text-ice" />,
    title: 'Frameworks & Libraries',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'ReactJS', 'Node.js', 'Express.js'],
  },
  {
    icon: <Database className="w-5 h-5 text-ice" />,
    title: 'Technologies',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'NLTK'],
  },
  {
    icon: <Database className="w-5 h-5 text-ice" />,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    icon: <Wrench className="w-5 h-5 text-ice" />,
    title: 'Other Tools',
    skills: ['Flask', 'Streamlit', 'Docker', 'Git', 'Bootstrap', 'REST APIs'],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="03" label="Onboard Systems" title="Technical Skills" align="center" />
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <Reveal key={i} delay={i}>
            <div className="panel panel-hover h-full p-6">
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="font-serif text-lg text-ink">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="telemetry text-[0.6rem] px-2.5 py-1 rounded-full border border-hairline bg-surface-2 text-ink-dim transition-colors duration-200 hover:border-nebula-soft/40 hover:text-ice"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
