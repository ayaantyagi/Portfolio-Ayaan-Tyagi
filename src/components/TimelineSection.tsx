import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Sparkles, Building } from 'lucide-react';

const timelineData = [
  {
    year: '2006',
    title: 'School Beginnings',
    subtitle: 'Deep Memorial Public School',
    description: 'Started my educational journey',
    icon: GraduationCap,
    isCurrent: false,
  },
  {
    year: '2021',
    title: 'College Life',
    subtitle: 'SRM University',
    description: 'B.Tech in Computer Science & Engineering',
    icon: Building,
    isCurrent: false,
  },
  {
    year: '2024',
    title: 'Professional Journey',
    subtitle: 'MRCC Transformation and Solution',
    description: 'Software Engineer',
    icon: Briefcase,
    isCurrent: false,
  },
  {
    year: '2025',
    title: 'Professional Journey',
    subtitle: 'Code to Couture',
    description: 'Full-stack development & modern web solutions',
    icon: Briefcase,
    isCurrent: false,
  },
  {
    year: 'Future',
    title: 'Next Chapter',
    subtitle: 'The Journey Continues',
    description: 'Building scalable solutions and exploring new horizons',
    icon: Sparkles,
    isCurrent: true,
  },
];

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2" />
      
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-primary mb-4">Experience & Education</h2>
          <p className="text-gray-500 text-lg">My journey so far</p>
        </div>

        {/* Scrollable Container */}
        <div className="relative w-full overflow-x-auto pb-16 scrollbar-hide">
          <div className="min-w-[1400px] relative h-[400px] flex items-center px-12 md:px-24">
            {/* The main horizontal dashed line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] border-b border-dashed border-gray-800 -translate-y-1/2" />

            {/* Timeline Items */}
            <div className="flex justify-between w-full relative z-10">
              {timelineData.map((item, index) => {
                const isTop = index % 2 === 0;
                const Icon = item.icon;

                return (
                  <div key={index} className="relative flex flex-col items-center w-64 shrink-0 group">
                    {/* Top Card container */}
                    <div className={`absolute w-full transition-transform duration-500 ${isTop ? 'bottom-full mb-8 group-hover:-translate-y-2' : 'top-full mt-8 group-hover:translate-y-2'}`}>
                      
                      {/* Connecting Line (Vertical) */}
                      <div className={`absolute left-1/2 w-[1px] h-8 bg-gray-800 -translate-x-1/2 ${isTop ? 'top-full' : 'bottom-full'}`} />

                      <motion.div
                        initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={`p-6 rounded-2xl border ${item.isCurrent ? 'bg-[#0f1a14] border-green-500/30' : 'bg-[#111111] border-gray-800'} backdrop-blur-sm relative`}
                      >
                        {item.isCurrent && (
                          <div className="absolute inset-0 bg-green-500/5 rounded-2xl pointer-events-none" />
                        )}
                        <div className="flex items-center gap-2 mb-4">
                          <Icon className={`w-4 h-4 ${item.isCurrent ? 'text-green-500' : 'text-gray-400'}`} />
                          <span className="text-xs text-gray-500 font-mono">{item.year}</span>
                        </div>
                        <h3 className="text-primary text-base font-medium mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                        <p className={`text-xs ${item.isCurrent ? 'text-green-400/80' : 'text-gray-500'} italic`}>
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Node on the central line */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                      className="relative z-20 flex items-center justify-center"
                    >
                      {item.isCurrent ? (
                        <>
                          <div className="absolute w-6 h-6 bg-green-500/20 rounded-full animate-ping" />
                          <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                        </>
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </motion.div>

                    {/* Year Label near the node */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      className={`absolute font-mono text-[10px] text-gray-600 ${isTop ? 'top-full mt-3' : 'bottom-full mb-3'}`}
                    >
                      {item.year}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600 font-mono opacity-50">
          ← Scroll to explore timeline →
        </div>
      </motion.div>
    </section>
  );
}
