import { motion } from 'motion/react';
import { ArrowRight, Bot, Shield, ChevronDown } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const handleScrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-between pt-24 overflow-hidden bg-brand-bg">
      {/* Background WebGL Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderBackground />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-brand-low/80 backdrop-blur-md border border-brand-cyan/20 rounded-full mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-dark/80">
            AevosFlow Core 2.0 Released
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          id="hero-main-title"
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-brand-dark mb-6 max-w-5xl leading-none"
        >
          Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-cyan to-brand-dark bg-[length:200%_auto] animate-pulse">In Motion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="font-sans text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Deploy AI agents, intelligent automation, and data systems that continuously improve how your business operates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <button
            onClick={onBookCall}
            className="inline-flex justify-center items-center gap-2 bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-8 py-4 rounded-md font-display font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0 cursor-pointer"
          >
            Book Discovery Call
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleScrollToSolutions}
            className="inline-flex justify-center items-center gap-2 bg-brand-lowest/80 backdrop-blur-md border border-outline-variant text-brand-dark hover:border-brand-dark px-8 py-4 rounded-md font-display font-bold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Solutions
          </button>
        </motion.div>
      </div>

      {/* Floating prompt scroll-down anchor */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-8">
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          onClick={handleScrollToSolutions}
          className="text-brand-gray hover:text-brand-dark transition-colors flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="text-xs font-display font-medium uppercase tracking-widest">Scroll to build</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </header>
  );
}
