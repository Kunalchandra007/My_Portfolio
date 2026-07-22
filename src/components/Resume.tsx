import { Download, FileText, Eye } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const Resume = () => (
  <section id="resume" className="pt-32 pb-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader
          index="07"
          label="Dossier"
          title="Resume"
          subtitle="Download my resume to learn more about my experience, skills, and accomplishments."
          align="center"
        />
      </Reveal>

      <Reveal delay={1}>
        <div className="panel panel-hover group relative mx-auto mt-14 max-w-2xl p-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-hairline bg-nebula/15 p-6 transition-transform duration-300 group-hover:scale-110">
              <FileText className="h-12 w-12 text-ice" />
            </div>
          </div>

          <h3 className="mb-4 font-serif text-2xl text-ink">Kunal Chandra — Resume</h3>
          <p className="mb-8 leading-relaxed text-ink-dim">
            Complete overview of my education, skills, projects, and professional experience in data
            science and machine learning.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/Kunal%20Chandra%20Resume%20till%204th%20July.pdf"
              download="Kunal_Chandra_Resume_till_4th_July.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-nebula to-nebula-soft px-8 py-3 font-medium text-white shadow-[0_0_28px_-6px_rgba(139,92,246,0.7)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_-4px_rgba(139,92,246,0.9)]"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <a
              href="/Kunal%20Chandra%20Resume%20till%204th%20July.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface-2 px-8 py-3 font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:border-nebula-soft/50 hover:text-ice"
            >
              <Eye size={20} />
              <span>View Online</span>
            </a>
          </div>

          <p className="telemetry mt-8 text-[0.6rem] text-ink-faint">
            PDF Format · Last Updated: 4 July 2026
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Resume;
