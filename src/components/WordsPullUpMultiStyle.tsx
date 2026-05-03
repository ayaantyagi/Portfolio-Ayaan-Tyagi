import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  // Flatten all segments into words, keeping per-word className
  const words: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w) words.push({ word: w, className: seg.className ?? '' });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-0 ${containerClassName}`}>
      {words.map(({ word, className }, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
