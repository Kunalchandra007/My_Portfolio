import { GraduationCap, Code, Brain, Target } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: 'EDU · 01',
      title: 'B.Tech CSE',
      description: 'Computer Science and Engineering at Haridwar University',
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: 'EDU · 02',
      title: 'Minor in AI & DS',
      description: 'Artificial Intelligence & Data Science from IIT Mandi',
    },
    {
      icon: <Brain className="h-5 w-5" />,
      label: 'FOCUS',
      title: 'Passion',
      description: 'Data Science & Machine Learning Enthusiast with hands-on experience',
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: 'ACTIVE',
      title: 'Learning',
      description:
        'Currently practicing Data Structures and Algorithms in Java and Mastering Data Science',
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: 'VECTOR',
      title: 'Goal',
      description: 'Aspiring to become a skilled Data Scientist',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-surface/20 to-void" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          label="The Navigator"
          coord="Haridwar, IN"
          title={<>Who&apos;s at the <span className="text-cosmic">helm</span></>}
          subtitle="Passionate about leveraging data to solve real-world problems and create meaningful impact through technology."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-nebula/20 via-transparent to-ice/20 blur-2xl" />
              <div className="panel relative overflow-hidden rounded-2xl p-1.5">
                <img
                  src="/Mypicstanding.jpeg"
                  alt="About Kunal"
                  className="h-auto max-h-[620px] w-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={1}>
              <p className="text-lg leading-relaxed text-ink-dim">
                I&apos;m a dedicated Computer Science Engineering student at Haridwar University
                with a deep passion for
                <span className="text-ice"> Data Science</span> and{' '}
                <span className="text-nebula-soft">Machine Learning</span>. My journey in
                technology is driven by curiosity and the desire to create innovative solutions
                that make a difference.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="text-lg leading-relaxed text-ink-dim">
                Currently pursuing a{' '}
                <span className="text-nebula-soft">Minor in AI &amp; DS from IIT Mandi</span>, I&apos;m
                expanding my expertise in
                <span className="text-nebula-soft"> Data Structures and Algorithms</span> using Java
                while simultaneously exploring advanced machine learning concepts. I believe in
                continuous learning and applying theoretical knowledge to practical projects.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={3 + index}>
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
