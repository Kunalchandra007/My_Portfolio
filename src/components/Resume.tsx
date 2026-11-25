import { Download, FileText, Eye } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const Resume = () => (
  <section id="resume" className="pt-32 pb-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader
          title="Resume"
          subtitle="The one-page version of the work above, updated 27 September 2026."
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
              href="/Kunal-Chandra-Resume.pdf"
              download="Kunal_Chandra_Resume.pdf"
              className="btn-primary"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <a
              href="/Kunal-Chandra-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Eye size={20} />
              <span>View Online</span>
            </a>
          </div>

          <p className="telemetry mt-8 text-[0.6rem] text-ink-faint">
            PDF · Updated 27 September 2026
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Resume;
