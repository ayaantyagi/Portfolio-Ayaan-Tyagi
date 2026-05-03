import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

function AnimatedLetter({ char, progress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedParagraph({ text, className = '', style }: AnimatedParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
}
