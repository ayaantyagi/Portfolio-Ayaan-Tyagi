import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const EASE = [0.16, 1, 0.3, 1] as const;

const navItems = ['Experience', 'Projects', 'Education', 'Skills', 'Contact'];

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-black p-4 md:p-6">
      {/* Inner container with rounded corners */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

        {/* Navbar — hanging pill from top */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm font-light transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Content — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 md:px-8 md:pb-8">
          <div className="grid grid-cols-12 items-end gap-4">

            {/* Left — Giant heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Ayan" showAsterisk />
              </h1>
            </div>

            {/* Right — Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-4">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
              >
                Computer Science graduate with hands-on experience in full-stack web development and software engineering. Proven ability to deliver scalable, production-ready web applications, collaborate across cross-functional teams, and build end-to-end solutions using modern frontend and backend technologies including Next.js, Python, Django, and cloud platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1 py-1"
                >
                  <span className="text-black font-medium text-sm sm:text-base">Get in touch</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
