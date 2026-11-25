import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';
import CoverFlow, { drawCoverArt, type CoverFlowArt } from './ui/cover-flow';

function RollArrow({ flip = false }: { flip?: boolean }) {
  return (
    <span className={flip ? 'project-roll-arrow-flip' : undefined}>
    <svg className="project-roll-arrow" viewBox="0 0 92 40" aria-hidden>
      <path
        d="M4 30C28 32 46 10 78 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M66 8L80 16L66 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </span>
  );
}

type Project = {
  title: string;
  description: string;
  image?: string;
  art?: CoverFlowArt;
  mark: string;
  tags: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'SMARTFLOW',
    description:
      'Traffic signals that read the junction. YOLOv8 and BYTETrack estimate density on virtual lines and retiming cut wait by about 40%. ESP32 and UHF RFID clear a path for priority vehicles.',
    image: '/trafficlight.jpg',
    mark: 'SF',
    tags: ['YOLOv8', 'BYTETrack', 'ESP32', 'RFID'],
    github: 'https://github.com/Kunalchandra007/SMARTFLOW',
    demo: 'https://smartflow-eight.vercel.app/',
  },
  {
    title: 'Pravha',
    description:
      'Flood forecasting and response. XGBoost reached 86.5% prediction accuracy, with alerts in 12 Indian languages, GIS shelter routing, and a BLE mesh SOS when the network drops.',
    image: '/pravha.jpg',
    mark: 'PR',
    tags: ['XGBoost', 'FastAPI', 'React', 'MongoDB'],
    github: 'https://github.com/Kunalchandra007/Pravha',
    demo: 'https://pravha.vercel.app/',
  },
  {
    title: 'Enterprise Knowledge Assistant',
    description:
      'A local RAG chatbot over your own documents. Incremental indexing, 1000-token chunks, query rewriting, and two strategies for answers that span more context than one window.',
    art: 'glasshouse',
    mark: 'KA',
    tags: ['Llama.cpp', 'ChromaDB', 'LangChain', 'FastAPI'],
    github: 'https://github.com/Kunalchandra007/Enterprise-Knowledge-Assistant-using-RAG-and-Local-LLMs',
  },
  {
    title: 'Agnidrishti',
    description:
      'Thermal-source intelligence for SIH 2026. Satellite heat detections, named — so a kiln, a flare, and a real fire are not the same event.',
    art: 'ember-season',
    mark: 'AG',
    tags: ['Python', 'Remote sensing', 'SIH 2026'],
    github: 'https://github.com/Kunalchandra007/AGNIDRISHTI',
  },
  {
    title: 'ASHA Health Assistant',
    description:
      'A PWA for rural ASHA workers, built at the IIIT Delhi hackathon. AI reads medical reports and explains them across 12 Indian languages.',
    art: 'open-door',
    mark: 'AH',
    tags: ['JavaScript', 'PWA', 'Healthcare'],
    github: 'https://github.com/Kunalchandra007/IIITDELHI-hackathon',
    demo: 'https://iiitdelhi-hackathon.vercel.app/',
  },
  {
    title: 'Edux',
    description:
      'A tutoring platform with local models, cognitive feedback loops, and a privacy-first path so study material does not have to leave the machine.',
    image: '/edux.png',
    mark: 'ED',
    tags: ['Python', 'Flask', 'LLMs'],
    github: 'https://github.com/Kunalchandra007/Edux',
  },
];

function ProjectArt({ art }: { art: CoverFlowArt }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const paint = () => drawCoverArt(canvas, art, Math.round(canvas.clientWidth * window.devicePixelRatio));
    paint();
    const observer = new ResizeObserver(paint);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [art]);
  return <canvas ref={ref} className="project-sheet__canvas" />;
}

const twoLines = (text: string) => {
  const bits = text.split(/(?<=[.!?])\s+(?=[A-Z])/);
  return bits.slice(0, 2).join(' ').trim();
};

const stepOf = () => Math.round(window.innerHeight * 0.72);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const drive = useRef<{ value: number | null; kick: () => void }>({ value: null, kick: () => {} });
  const project = projects[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const runway = section?.closest('.story-chapter') as HTMLElement | null;
    if (!section || !runway) return;

    const narrow = window.matchMedia('(max-width: 760px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const released = () => narrow.matches || reduce.matches;
    const span = () => stepOf() * Math.max(projects.length - 1, 1);
    const runwayHeight = () => window.innerHeight + span() + window.innerHeight;

    const measure = () => {
      if (released()) {
        runway.style.height = '';
        return;
      }
      runway.style.height = `${runwayHeight()}px`;
    };

    const sync = () => {
      if (released()) {
        drive.current.value = null;
        return;
      }
      const want = `${runwayHeight()}px`;
      if (runway.style.height !== want) runway.style.height = want;
      const travel = span();
      const scrolled = Math.max(0, -runway.getBoundingClientRect().top);
      const exact = travel <= 0 ? 0 : Math.min(projects.length - 1, (scrolled / travel) * (projects.length - 1));
      drive.current.value = exact;
      drive.current.kick();
      const next = Math.round(exact);
      if (next === indexRef.current) return;
      indexRef.current = next;
      setIndex(next);
      setOpen(false);
    };

    measure();
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', measure);
    window.visualViewport?.addEventListener('resize', measure);
    narrow.addEventListener('change', measure);
    reduce.addEventListener('change', measure);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', measure);
      window.visualViewport?.removeEventListener('resize', measure);
      narrow.removeEventListener('change', measure);
      reduce.removeEventListener('change', measure);
      runway.style.height = '';
    };
  }, []);

  const focusProject = (next: number) => {
    setOpen(false);
    const clamped = Math.max(0, Math.min(projects.length - 1, next));
    const runway = sectionRef.current?.closest('.story-chapter') as HTMLElement | null;
    const narrow = window.matchMedia('(max-width: 760px)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (runway && !narrow && !reduce) {
      const top = runway.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + stepOf() * clamped, behavior: 'smooth' });
      return;
    }
    if (clamped === indexRef.current) return;
    indexRef.current = clamped;
    setIndex(clamped);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative flex min-h-0 flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeader
              title="Projects"
              subtitle="A few systems that shipped, and had to keep working."
              align="left"
            />
          </Reveal>
          <span className="telemetry text-[0.62rem]">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
        <div className="project-progress" aria-hidden>
          <span style={{ width: `${((index + 1) / projects.length) * 100}%` }} />
        </div>

        <div className="project-stage">
          <button type="button" className="project-nudge project-nudge--back" onClick={() => focusProject(index - 1)} aria-label="Previous project">
            <RollArrow flip />
            <span>back</span>
          </button>

          <div className="project-flow">
            <CoverFlow
              className="cover-flow-root cover-flow-root--plain"
              items={projects.map((item) => ({
                title: item.title,
                subtitle: item.tags.slice(0, 3).join(' · '),
                src: item.image,
                art: item.art,
                alt: item.title,
              }))}
              index={index}
              scrollDrive={drive}
              onIndexChange={focusProject}
              onSelect={() => setOpen(true)}
              loop={false}
              wheel={false}
              sway={0.6}
              stageColor="transparent"
              pageColor="transparent"
              accent="#c45a1a"
              captionColor="#f6efe0"
              font="var(--font-fraunces), ui-serif, Georgia, serif"
              ariaLabel="Selected projects"
              style={{ width: '100%', height: '100%', minHeight: 0, aspectRatio: 'auto' }}
            />
            {open &&
              createPortal(
                <div className="project-sheet-layer" onClick={() => setOpen(false)}>
                  <article
                    className="project-sheet"
                    role="dialog"
                    aria-modal="true"
                    aria-label={project.title}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="project-sheet__art">
                      {project.image ? (
                        <img src={project.image} alt="" />
                      ) : (
                        project.art && <ProjectArt art={project.art} />
                      )}
                    </div>
                    <div className="project-sheet__body">
                      <h3 className="font-serif text-4xl text-ink">{project.title}</h3>
                      <p>{twoLines(project.description)}</p>
                      <div className="project-sheet__links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={15} /> GitHub
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={15} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>,
                document.body,
              )}
          </div>

          <button type="button" className="project-nudge project-nudge--next" onClick={() => focusProject(index + 1)} aria-label="Next project">
            <RollArrow />
            <span>next</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-ink-dim">
          Earlier exercises and smaller repos live on{' '}
          <a
            href="https://github.com/Kunalchandra007"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-nebula-soft/60 underline-offset-4 hover:text-nebula"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Projects;
