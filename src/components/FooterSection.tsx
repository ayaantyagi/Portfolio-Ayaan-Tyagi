import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const EASE = [0.16, 1, 0.3, 1] as const;


const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [time, setTime] = useState("");

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending time, then use mailto as the functional fallback
    setTimeout(() => {
      window.location.href = `mailto:ayan.tyagi2211@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} %0D%0A%0D%0AReply to: ${formData.email}`;
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-black border-t border-[#1a1a1a] relative overflow-hidden pt-20 md:pt-32 pb-8 px-4 md:px-6">
      {/* Very faint noise overlay in footer */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-[0.95]" style={{ color: '#E1E0CC' }}>
            <WordsPullUp text="Let's build together" />
          </h2>
          <motion.p 
            className="text-gray-500 font-serif italic text-xl md:text-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
          >
            I'm currently available for new opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column: Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Connect with me</h3>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Status Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-400 mb-10 bg-[#111] border border-white/10 rounded-2xl p-4 w-fit">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-gray-300">Currently online</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-gray-300 font-mono tracking-tight">{time || "..."}</span>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              <a href="mailto:ayan.tyagi2211@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">Email</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919958354101" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all group">
                <WhatsAppIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">WhatsApp</span>
              </a>
              <a href="https://linkedin.com/in/ayan-tyagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all group">
                <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">LinkedIn</span>
              </a>
              <a href="https://github.com/ayan-tyagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all group">
                <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-300 group-hover:text-white">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Form blur decorations */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none"></div>

            <h3 className="text-2xl font-serif text-white mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-[#151515] transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-[#151515] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-[#151515] transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="mt-2 w-full bg-white text-black font-semibold rounded-xl px-4 py-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Big Name Typography */}
        <motion.div
          className="relative border-t border-[#1a1a1a] pt-8 sm:pt-12 overflow-hidden flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div 
            className="text-[13vw] sm:text-[14vw] md:text-[15vw] font-bold leading-[0.8] tracking-tighter text-center w-full whitespace-nowrap"
            style={{ color: '#0a0a0a', WebkitTextStroke: '1px #1a1a1a' }}
          >
            AYAN TYAGI
          </div>
          
          <div className="absolute bottom-0 w-full flex justify-between items-end pb-2 px-2 text-[10px] text-gray-600 font-light uppercase tracking-widest">
            <span>© {new Date().getFullYear()}</span>
            <span>All rights reserved</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
