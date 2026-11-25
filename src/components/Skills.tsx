import { Code, Database, Brain, Wrench, Server } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';
import TechMarquee from './TechMarquee';

const skillCategories = [
  {
    icon: <Code className="w-5 h-5 text-nebula" />,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    icon: <Server className="w-5 h-5 text-nebula" />,
    title: 'Backend & APIs',
    skills: ['FastAPI', 'REST APIs', 'JWT Authentication', 'Pydantic', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)'],
  },
  {
    icon: <Brain className="w-5 h-5 text-nebula" />,
    title: 'Generative AI & LLMs',
    skills: ['LangChain', 'LlamaIndex', 'Hugging Face Transformers', 'RAG', 'ChromaDB'],
  },
  {
    icon: <Wrench className="w-5 h-5 text-nebula" />,
    title: 'ML/Data',
    skills: ['PyTorch', 'TensorFlow/Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    icon: <Database className="w-5 h-5 text-nebula" />,
    title: 'Databases & Dev Tools',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Git', 'GitHub', 'Linux'],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader title="Technical skills" align="center" />
      </Reveal>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={i} delay={i}>
            <div className="panel panel-hover h-full p-5">
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
      <TechMarquee />
    </div>
  </section>
);

export default Skills;
