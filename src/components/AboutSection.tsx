import AnimatedParagraph from './AnimatedParagraph';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const aboutSegments = [
  { text: 'I am Ayan Tyagi,', className: 'font-normal' },
  { text: 'a full-stack developer.', className: 'font-serif italic' },
  {
    text: 'I have skills in Next.js, React, Python, and Django.',
    className: 'font-normal',
  },
];

const bodyText =
  'I am currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, Delhi-NCR Campus (2021-2025). I have professional experience at Code to Couture and MRCC Transformation Solution, where I developed scalable web applications, optimized workflows, and integrated complex APIs.';

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center">

          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs mb-6 sm:mb-8 tracking-widest uppercase font-light">
            Software Engineer
          </p>

          {/* Main Heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 sm:mb-14"
            style={{ color: '#E1E0CC' }}
          >
            <WordsPullUpMultiStyle segments={aboutSegments} />
          </div>

          {/* Scroll-animated body text */}
          <AnimatedParagraph
            text={bodyText}
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: '#DEDBC8', lineHeight: 1.75 }}
          />
        </div>
      </div>
    </section>
  );
}
