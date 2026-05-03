import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export default function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
            <motion.span
              className="inline-block relative"
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span
                  className="absolute font-medium"
                  style={{
                    top: '0.65em',
                    right: '-0.3em',
                    fontSize: '0.31em',
                    color: '#E1E0CC',
                  }}
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
