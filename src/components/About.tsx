import { GraduationCap, Code, Brain } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: '2023 — 2027',
      title: 'B.Tech CSE',
      description: 'Haridwar University · CGPA 7.7',
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: '2025 — 2026',
      title: 'Minor, AI & DS',
      description: 'IIT Mandi · CGPA 9.25',
    },
    {
      icon: <Brain className="h-5 w-5" />,
      label: 'School',
      title: 'Sam International School',
      description: 'Class X 94% · Class XII 80%',
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: 'Practice',
      title: '500+ DSA problems solved',
      description: 'Highest rating — 1776',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-surface/20 to-void dark:hidden" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<>A student who <span className="italic text-cosmic">ships</span></>}
          subtitle="Data science and machine learning, applied to systems that people actually use."
        />

        <div className="about-layout mt-16">
          <figure className="about-figure panel p-1.5">
            <img
              src="/forportfolio.jpg"
              alt="Kunal Chandra standing in a marble lobby"
              className="about-photo"
            />
          </figure>

          <div className="about-side">
            <Reveal delay={1}>
              <p className="font-serif text-3xl italic text-ink">Hi, I&apos;m Kunal.</p>
              <p className="mt-4 text-lg leading-relaxed text-ink-dim">
                I&apos;m a computer science student from New Delhi who loves turning slow, messy
                problems into simple, working solutions. I like understanding how things work,
                then building something people can actually use.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-dim">
                I&apos;m studying at Haridwar University, with a minor in AI &amp; Data Science at
                IIT Mandi. Alongside my studies, I&apos;ve interned at organisations where the work
                had real users and real deadlines, and that taught me to care about what happens
                after the demo.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-dim">
                I learn by building. I take part in hackathons, start projects for the fun of it,
                and practise problem solving regularly to keep my thinking sharp.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-dim">
                When I&apos;m not building, I&apos;m usually looking for the next thing to learn.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink">
                Currently: open to internships, full-time roles, and projects where I can build
                things that matter.
              </p>
            </Reveal>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={3 + index} className="about-card">
                  <div className="panel panel-hover group h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg border border-hairline bg-surface-2 p-2 text-nebula-soft transition-colors duration-300 group-hover:text-ice">
                        {item.icon}
                      </span>
                      <span className="telemetry text-[0.6rem] text-ink-faint">{item.label}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
