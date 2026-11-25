import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const experiences = [
  {
    id: 0,
    company: 'Defence Research and Development Organisation (DRDO), Delhi',
    position: 'Software Development Engineer Intern — Institute of Nuclear Medicine and Allied Sciences (INMAS)',
    duration: 'Jun 2026 – Present',
    location: 'Delhi, India',
    logo: '/drdo.webp',
    website: 'https://www.drdo.gov.in',
    achievements: [
      'Engineered an OCR gate-pass system with ID verification, cutting processing time by 90% — from 2–3 minutes to about 10 seconds.',
      'Centralized visitor and contractual-worker records across 20+ departments, including police-verification tracking.',
      'Built a RAG chatbot for PDF retrieval, reducing search time by 97% — from 30 minutes to about 1 minute.',
      'Ran root-level compliance audits across 230 endpoints (70 Windows, 160 Maya OS) with 16 security checks and generated audit PDFs.',
      'Developing a Demirjian-based dental age prediction system, from tooth-stage labeling through model training.',
    ],
    type: 'internship',
  },
  {
    id: 1,
    company: 'Defence Research and Development Organisation (DRDO), Delhi',
    position: 'Machine Learning Intern — Solid State Physics Laboratory (SSPL)',
    duration: '1 Jan 2026 – 31 Jan 2026',
    location: 'Delhi, India',
    logo: '/drdo.webp',
    website: 'https://www.drdo.gov.in',
    achievements: [
      'Designed a Siamese Nested U-Net (SNUNet) with ECAM in PyTorch (~1.2M parameters) for satellite change detection.',
      'Built a 6-class semantic change pipeline on the CDD dataset, with real-world area quantification.',
      'Reached 96.37% precision, 95.95% recall, and 96.16% F1, with batch processing that can scale.',
    ],
    type: 'internship',
  },
  {
    id: 2,
    company: 'Intelligence Fusion & Strategic Operations (IFSO) Special Cell, Delhi Police',
    position: 'Software Development Engineer Intern',
    duration: 'Aug 2025',
    location: 'Delhi, India',
    logo: '/delhipolice.jpg',
    website: undefined,
    achievements: [
      'Built a local Python tool that uses AST parsing to find buttons, links, and other interactive elements in uploaded files.',
      'Engineered a one-click injection workflow to modify or redirect selected elements without hand-editing files.',
      'Automated those code changes, cutting manual effort and turnaround by about 80–85%.',
    ],
    type: 'internship',
  },
];

const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader title="Where it was used" align="center" />
      </Reveal>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={i} className={`exp-step ${i % 2 === 0 ? 'is-left' : 'is-right'}`}>
            <div className="panel panel-hover p-6 sm:p-8">
              <div className="flex items-start gap-4">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="h-12 w-12 flex-shrink-0 rounded-lg border border-hairline object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-hairline bg-nebula/15">
                    <Building2 className="h-6 w-6 text-ice" />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-snug text-cosmic">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink">{exp.position}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="telemetry flex items-center gap-1.5 text-[0.6rem] text-ink-faint">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.duration}
                </span>
                <span className="telemetry flex items-center gap-1.5 text-[0.6rem] text-ink-faint">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
                <span className="telemetry rounded-full border border-nebula-soft/30 bg-nebula/10 px-2.5 py-1 text-[0.6rem] text-nebula-soft">
                  Internship
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.achievements.map((achievement, a) => (
                  <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ice" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
