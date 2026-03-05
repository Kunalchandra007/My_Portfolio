import React, { useEffect, useMemo, useRef, useState } from 'react';
import Galaxy from './Galaxy';
import LightPillar from './LightPillar';

type Props = {
  onFinish?: () => void;
};

type Spark = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number };

const PRELOADER_END_MS = 4000;
const METEOR_START_MS = 850;
const METEOR_IMPACT_MS = 1550;
const NAME_REVEAL_MS = 1900;
const FADE_START_MS = 3400;

const Preloader: React.FC<Props> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const planetRef = useRef<HTMLDivElement | null>(null);
  const [showName, setShowName] = useState(false);
  const [planetHit, setPlanetHit] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [shake, setShake] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const reducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const lowPerfMode = useMemo(() => {
    const cores = navigator.hardwareConcurrency ?? 4;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    return cores <= 4 || memory <= 4;
  }, []);

  useEffect(() => {
    let raf = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const ctx = context;
    const dpr = Math.min(window.devicePixelRatio || 1, lowPerfMode ? 1 : 1.5);
    const sparks: Spark[] = [];
    let meteorActive = false;
    let meteorX = -180;
    let meteorY = -100;
    let impactTriggered = false;
    let nameRevealTriggered = false;
    let fadeTriggered = false;
    let disposed = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const updateImpactTarget = () => {
      const planetRect = planetRef.current?.getBoundingClientRect();
      if (!planetRect) {
        targetX = window.innerWidth / 2;
        targetY = window.innerHeight / 2;
        return;
      }
      targetX = planetRect.left + planetRect.width / 2;
      targetY = planetRect.top + planetRect.height / 2;
    };

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateImpactTarget();
    };

    const spawnImpact = (x: number, y: number) => {
      const sparkCount = lowPerfMode ? 48 : 80;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 1.8;
        const maxLife = Math.random() * 56 + 40;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: maxLife,
          maxLife,
        });
      }
    };

    const maybePlayWhoosh = () => {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const audio = new AudioCtx();
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(1400, audio.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(80, audio.currentTime + 0.42);
        gain.gain.setValueAtTime(0.0001, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.18, audio.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.5);
        oscillator.connect(gain);
        gain.connect(audio.destination);
        oscillator.start();
        oscillator.stop(audio.currentTime + 0.52);
      } catch {
        // Ignore autoplay and audio context errors.
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (reducedMotion) {
      const revealTimer = window.setTimeout(() => {
        setShowName(true);
      }, 400);
      const finishTimer = window.setTimeout(() => {
        setIsVisible(false);
        onFinish?.();
      }, 1100);
      return () => {
        window.clearTimeout(revealTimer);
        window.clearTimeout(finishTimer);
        window.removeEventListener('resize', resize);
      };
    }

    const start = performance.now();
    const meteorTravelMs = METEOR_IMPACT_MS - METEOR_START_MS;
    updateImpactTarget();
    const meteorVX = (targetX - meteorX) / (meteorTravelMs / 16.67);
    const meteorVY = (targetY - meteorY) / (meteorTravelMs / 16.67);

    const targetFps = lowPerfMode ? 30 : 45;
    const frameInterval = 1000 / targetFps;
    let lastFrameAt = 0;

    const frame = (now: number) => {
      if (disposed) return;
      if (lastFrameAt !== 0 && now - lastFrameAt < frameInterval) {
        raf = requestAnimationFrame(frame);
        return;
      }
      lastFrameAt = now;

      const t = performance.now() - start;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (t >= METEOR_START_MS && t < METEOR_IMPACT_MS) {
        if (!meteorActive) {
          meteorActive = true;
          maybePlayWhoosh();
        }

        meteorX += meteorVX;
        meteorY += meteorVY;
        const angle = Math.atan2(meteorVY, meteorVX);
        const tail = ctx.createLinearGradient(
          meteorX,
          meteorY,
          meteorX - Math.cos(angle) * 340,
          meteorY - Math.sin(angle) * 340
        );
        tail.addColorStop(0, 'rgba(255,255,225,0.96)');
        tail.addColorStop(0.45, 'rgba(255,170,120,0.5)');
        tail.addColorStop(1, 'rgba(255,170,120,0)');
        ctx.strokeStyle = tail;
        ctx.lineWidth = 18;
        ctx.beginPath();
        ctx.moveTo(meteorX, meteorY);
        ctx.lineTo(meteorX - Math.cos(angle) * 320, meteorY - Math.sin(angle) * 320);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,234,198,1)';
        ctx.ellipse(meteorX, meteorY, 28, 14, angle, 0, Math.PI * 2);
        ctx.fill();
      }

      if (t >= METEOR_IMPACT_MS && !impactTriggered) {
        impactTriggered = true;
        spawnImpact(targetX, targetY);
        setPlanetHit(true);
        setShake(true);
        window.setTimeout(() => setShake(false), 280);
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.11;
        spark.vx *= 0.99;
        spark.life -= 1;
        const alpha = Math.max(spark.life / spark.maxLife, 0);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,132,70,${alpha})`;
        ctx.arc(spark.x, spark.y, 2, 0, Math.PI * 2);
        ctx.fill();
        if (spark.life <= 0) sparks.splice(i, 1);
      }

      if (t >= NAME_REVEAL_MS && !nameRevealTriggered) {
        nameRevealTriggered = true;
        setShowName(true);
      }

      if (t >= FADE_START_MS && !fadeTriggered) {
        fadeTriggered = true;
        setIsFading(true);
      }

      if (t >= PRELOADER_END_MS) {
        disposed = true;
        setIsVisible(false);
        onFinish?.();
        return;
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [lowPerfMode, onFinish, reducedMotion]);

  useEffect(() => {
    if (!isVisible) return;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`preloader-root fixed inset-0 z-[999] flex items-center justify-center bg-black text-white ${
        shake ? 'preloader-shake' : ''
      } ${isFading ? 'preloader-fade-out' : ''}`}
    >
      <Galaxy
        className="absolute inset-0 h-full w-full"
        mouseInteraction={false}
        transparent
        density={lowPerfMode ? 0.52 : 0.72}
        glowIntensity={lowPerfMode ? 0.16 : 0.24}
        twinkleIntensity={lowPerfMode ? 0.1 : 0.16}
        speed={lowPerfMode ? 0.55 : 0.75}
        rotationSpeed={lowPerfMode ? 0.04 : 0.08}
        hueShift={220}
      />
      <div className="absolute inset-0 bg-black/45" />
      <LightPillar
        className="absolute inset-0 opacity-50"
        topColor="#7a8cff"
        bottomColor="#1c1340"
        intensity={lowPerfMode ? 0.35 : 0.45}
        rotationSpeed={0.12}
        interactive={false}
        glowAmount={0.0038}
        pillarWidth={1.9}
        pillarHeight={0.42}
        noiseIntensity={0.3}
        mixBlendMode="screen"
        pillarRotation={0}
        quality={lowPerfMode ? 'low' : 'medium'}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <div ref={planetRef} className={`preloader-planet ${planetHit ? 'preloader-planet-hit' : ''}`} aria-hidden>
          <span className="preloader-planet-emoji">🌍</span>
        </div>
        {showName && <p className="preloader-name">H O L A &nbsp; A M I G O</p>}
      </div>
    </div>
  );
};

export default Preloader;
