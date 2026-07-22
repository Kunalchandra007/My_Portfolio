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
    report: undefined,
    achievements: [
      'Engineered an OCR-based visitor management system, reducing gate congestion by 50% through automated ID verification and pass generation.',
      'Accelerated OCR pipelines using GPU-based OCR and advanced image preprocessing, achieving 2× faster document processing.',
      'Built an LLM-powered RAG chatbot for intelligent document retrieval, reducing information search time by 70%.',
    ],
    type: 'internship',
  },
  {
    id: 1,
    company: 'Defence Research and Development Organisation (DRDO), Delhi',
    position: 'Solid State Physics Laboratory (SSPL) — Machine Learning Intern',
    duration: '1 Jan 2026 – 31 Jan 2026',
    location: 'Delhi, India',
    logo: '/drdo.webp',
    website: 'https://www.drdo.gov.in',
    report: 'https://drive.google.com/file/d/1Rb5Rfer_xWUH3F0S-VHbB8oY3MLnimFY/view',
    achievements: [
      'Developed a Siamese deep learning based change detection system (SNUNet) for multi-temporal satellite imagery.',
      'Focused on automated detection quantification and semantic analysis of land-surface changes.',
      'Enabled defence-grade intelligence workflows for border surveillance, infrastructure monitoring, and disaster damage assessment.',
      'Achieved 96.37% Precision, 95.95% Recall, and 96.16% F1 Score on the CDD dataset.',
    ],
    type: 'internship',
  },
  {
    id: 2,
    company: 'Intelligence Fusion & Strategic Operations (IFSO) Special Cell, Delhi Police',
    position: 'Data Science Intern',
    duration: '1st August 2025 - 31st August 2025',
    location: 'Delhi, India',
    logo: '/delhipolice.jpg',
    website: undefined,
    report: undefined,
    achievements: [
      'Contributed to data-driven projects analyzing intelligence and operational data to enhance strategic decision-making.',
      'Developed several impactful projects using machine learning and data analytics to identify patterns and support law enforcement initiatives.',
      'Collaborated closely with the IFSO Special Cell team onsite to implement actionable insights from complex datasets.',
    ],
    type: 'internship',
  },
];

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="04" label="Mission Log" title="Experience" align="center" />
      </Reveal>

      <div className="relative mt-16 pl-8 sm:pl-12">
        {/* Flight-log spine */}
        <div className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-nebula via-nebula-soft/40 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i}>
              <div className="relative">
                {/* Waypoint node */}
                <div className="absolute -left-8 sm:-left-12 top-6 flex items-center justify-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-ice shadow-[0_0_14px_rgba(124,199,255,0.9)] ring-4 ring-void" />
                </div>

                <div className="panel panel-hover p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="h-12 w-12 flex-shrink-0 rounded-lg border border-hairline object-cover"
                      />
                    ) : (
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-nebula/15 border border-hairline">
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
                    <span className="flex items-center gap-1.5 telemetry text-[0.6rem] text-ink-faint">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 telemetry text-[0.6rem] text-ink-faint">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                    <span className="telemetry text-[0.6rem] rounded-full border border-nebula-soft/30 bg-nebula/10 px-2.5 py-1 text-nebula-soft">
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

                  {exp.report && (
                    <a
                      href={exp.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ice"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Internship Report</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
