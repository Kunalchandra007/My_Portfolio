/**
 * Full-bleed scrolling tech-name band — big alternating outline/solid words
 * separated by ember spark diamonds. Two rows drift in opposite directions.
 * Pure CSS marquee; respects prefers-reduced-motion via index.css.
 */
const ROW_A = [
  'PYTHON',
  'TENSORFLOW',
  'PYTORCH',
  'SCIKIT-LEARN',
  'OPENCV',
  'PANDAS',
  'NUMPY',
];

const ROW_B = [
  'REACT',
  'NODE.JS',
  'FLASK',
  'DOCKER',
  'MONGODB',
  'STREAMLIT',
  'KERAS',
];

const Spark = () => (
  <span className="tm-spark" aria-hidden>
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
    </svg>
  </span>
);

const Row = ({ words, solid }: { words: string[]; solid: boolean }) => {
  // Duplicate the sequence so the marquee loops seamlessly.
  const loop = [...words, ...words];
  return (
    <div className="tm-track">
      {loop.map((word, i) => (
        <span key={`${word}-${i}`} className="tm-item">
          <span className={solid ? 'tm-word-solid' : 'tm-word-outline'}>{word}</span>
          <Spark />
        </span>
      ))}
    </div>
  );
};

const TechMarquee = () => (
  <div className="tm-band" aria-hidden>
    <div className="tm-row tm-row-a">
      <Row words={ROW_A} solid />
    </div>
    <div className="tm-row tm-row-b">
      <Row words={ROW_B} solid={false} />
    </div>
  </div>
);

export default TechMarquee;
