declare module './SplitText' {
  interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: string;
    from?: object;
    to?: object;
    threshold?: number;
    rootMargin?: string;
    textAlign?: string;
    tag?: string;
    onLetterAnimationComplete?: () => void;
  }
  
  const SplitText: React.FC<SplitTextProps>;
  export default SplitText;
}