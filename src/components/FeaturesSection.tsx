import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

interface FeatureItem {
  text: string;
}

interface InfoCardProps {
  number: string;
  title: string;
  iconUrl: string;
  items: FeatureItem[];
  index: number;
  parentInView: boolean;
}

function InfoCard({ number, title, iconUrl, items, index, parentInView }: InfoCardProps) {
  return (
    <motion.div
      className="bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={parentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay: (index + 1) * 0.15, duration: 0.8, ease: CARD_EASE }}
    >
      {/* Icon */}
      <div className="mb-6">
        <img
          src={iconUrl}
          alt={title}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
        />
      </div>

      {/* Title row with number */}
      <div className="flex items-start justify-between gap-2 mb-6">
        <h3 className="text-primary text-base sm:text-lg font-medium leading-tight">{title}</h3>
        <span className="text-gray-600 text-xs font-light flex-shrink-0 mt-1">{number}</span>
      </div>

      {/* Checklist */}
      <ul className="flex flex-col gap-3 mb-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item.text}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium group"
      >
        Learn more
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </a>
    </motion.div>
  );
}

const headerSegments = [
  {
    text: 'Production-ready solutions for modern challenges.',
    className: 'text-primary',
  },
];
const headerSegments2 = [
  {
    text: 'Built for scale. Powered by code.',
    className: 'text-gray-500',
  },
];

const card2Items = [
  { text: 'Delivered 3+ responsive client websites from scratch' },
  { text: 'Architected and launched the Code Metrics company website using Next.js' },
  { text: 'Improved page load performance by approximately 30%' },
  { text: 'Collaborated with 4+ backend and database developers to integrate APIs' },
];

const card3Items = [
  { text: 'Automated workflows using Python and Django' },
  { text: 'Improved operational efficiency by 35%' },
  { text: 'Optimized reporting pipelines, reducing report generation time by 50%' },
  { text: 'Resolved 15+ deployment issues across staging and production environments' },
];

const card4Items = [
  { text: 'Online Bookstore: Built with secure authentication and REST-based orders' },
  { text: 'Emotion Detection: AI platform using BERT NLP across 5+ emotion categories' },
  { text: 'Smart Health Monitoring: IoT system processing real-time sensor data' },
  { text: 'Task Tracker: Role-based dashboard tracking 50+ tasks per workflow' },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="min-h-screen bg-black relative py-20 md:py-32 px-4 md:px-6">
      {/* Noise background */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-3 leading-tight">
            <WordsPullUpMultiStyle segments={headerSegments} />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle segments={headerSegments2} />
          </div>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">

          {/* Card 1 — Video */}
          <motion.div
            className="rounded-2xl md:rounded-3xl overflow-hidden relative col-span-1 h-64 md:h-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0 * 0.15, duration: 0.8, ease: CARD_EASE }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm sm:text-base font-medium" style={{ color: '#E1E0CC' }}>
                Full-Stack Development.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Project Storyboard */}
          <InfoCard
            number="01"
            title="Code to Couture."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={card2Items}
            index={1}
            parentInView={inView}
          />

          {/* Card 3 — Smart Critiques */}
          <InfoCard
            number="02"
            title="MRCC Transformation."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={card3Items}
            index={2}
            parentInView={inView}
          />

          {/* Card 4 — Immersion Capsule */}
          <InfoCard
            number="03"
            title="Featured Projects."
            iconUrl="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={card4Items}
            index={3}
            parentInView={inView}
          />
        </div>
      </div>
    </section>
  );
}
