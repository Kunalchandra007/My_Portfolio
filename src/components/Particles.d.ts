declare module './Particles' {
  interface ParticlesProps {
    particleColors?: string[];
    particleCount?: number;
    particleSpread?: number;
    speed?: number;
    particleBaseSize?: number;
    moveParticlesOnHover?: boolean;
    alphaParticles?: boolean;
    disableRotation?: boolean;
    className?: string;
  }
  
  const Particles: React.FC<ParticlesProps>;
  export default Particles;
}