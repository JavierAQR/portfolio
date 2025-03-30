import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; y: number };
  animationTo?: { opacity: number; y: number };
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = (t: number) => t,
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView) {
      const animateLetters = async () => {
        const letterAnimations = letters.map((_, i) =>
          controls.start({
            opacity: animationTo?.opacity ?? 1,
            y: animationTo?.y ?? 0,
            transition: {
              ease: easing,
              delay: i * (delay / 1000),
            },
          })
        );

        await Promise.all(letterAnimations);

        if (onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
      };

      animateLetters();
    }
  }, [
    inView,
    controls,
    letters.length,
    delay,
    easing,
    animationTo,
    onLetterAnimationComplete,
  ]);

  return (
    <motion.p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;

            return (
              <motion.span
                key={index}
                initial={{
                  opacity: animationFrom?.opacity ?? 0,
                  y: animationFrom?.y ?? 40,
                }}
                animate={{
                  opacity: animationTo?.opacity ?? 1,
                  y: animationTo?.y ?? 0,
                  transition: {
                    ease: easing,
                    delay: index * (delay / 1000),
                  },
                }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </motion.span>
      ))}
    </motion.p>
  );
};

export default SplitText;
