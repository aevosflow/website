import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'motion/react';
import { X, Menu, ChevronDown, BrainCircuit, Zap, BarChart2, ArrowRight } from 'lucide-react';

/* ─── SERVICES DATA ─────────────────────────────────── */
const SERVICES_DROPDOWN = [
  {
    id: 'ml',
    title: 'ML & AI Agents',
    accent: '#06B6D4',
    icon: BrainCircuit,
    subs: [
      'Sales Forecasting', 'Demand Forecasting', 'Customer Churn Prediction',
      'Customer Segmentation', 'Recommendation Systems', 'Risk Analysis',
      'Predictive Analytics', 'Custom ML Models', 'AI Chatbots',
      'AI Voice Agents', 'Customer Support Agents', 'Lead Generation Agents',
      'Sales Outreach Agents',
    ],
  },
  {
    id: 'automation',
    title: 'AI Automations',
    accent: '#8B5CF6',
    icon: Zap,
    subs: [
      'Email Follow-up Automation', 'CRM Automation',
      'Workflow Automation (n8n / Make / Zapier)', 'Multi-Agent Systems',
      'RAG-Powered Chatbots', 'LLM Fine-tuning & Prompting',
      'AI Content & Copy Generation',
    ],
  },
  {
    id: 'data',
    title: 'AI Data Science',
    accent: '#10B981',
    icon: BarChart2,
    subs: [
      'Data Pipeline Development', 'Dashboard & BI Reporting',
      'Data Cleaning & Preparation', 'Big Data Analytics',
      'Exploratory Data Analysis', 'Model Building', 'Model Evaluation',
    ],
  },
];

const MENU_ITEMS = [
  { title: 'Process',      target: 'process' },
  { title: 'Case Studies', target: 'case-studies' },
  { title: 'Insights',     target: 'insights' },
];

const MOBILE_NAV = [
  { title: 'Services',     target: 'solutions' },
  { title: 'Process',      target: 'process' },
  { title: 'Case Studies', target: 'case-studies' },
  { title: 'Insights',     target: 'insights' },
];

/* ─── ANIMATED LOGO ─────────────────────────────────── */
function AnimatedLogo() {
  const [hovered, setHovered] = useState(false);
  const logoControls = useAnimation();
  const textControls = useAnimation();
  const hasAnimated = useRef(false);

  // Entry animation on mount — logo slides in from left, then text fades in
  useEffect(() => {
    const runEntry = async () => {
      // Start: logo off to the left, text invisible
      await logoControls.set({ x: -48, opacity: 0, scale: 0.7 });
      await textControls.set({ opacity: 0, x: -6 });

      // Small delay then race in
      await new Promise(r => setTimeout(r, 300));

      // Logo rockets in with overshoot
      logoControls.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 520,
          damping: 22,
          mass: 0.6,
        },
      });

      // Text rises in slightly after
      await new Promise(r => setTimeout(r, 80));
      textControls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      });
    };

    if (!hasAnimated.current) {
      hasAnimated.current = true;
      runEntry();
    }
  }, []);

  // Hover: logo races right (overshoot), text shifts right, logo snaps back left
  const handleHoverStart = async () => {
    setHovered(true);

    // Logo: dash right with spring overshoot, then snap back
    logoControls.start({
      x: [0, 18, -4, 0],
      rotate: [0, 8, -3, 0],
      scale: [1, 1.12, 0.97, 1],
      transition: {
        duration: 0.55,
        times: [0, 0.35, 0.75, 1],
        ease: 'easeInOut',
      },
    });

    // Text: shift right as logo "pushes" it, then ease back
    textControls.start({
      x: [0, 7, 2, 0],
      transition: {
        duration: 0.55,
        times: [0, 0.35, 0.75, 1],
        ease: 'easeInOut',
      },
    });
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  return (
    <a
      href="#"
      className="flex items-center gap-2.5 select-none focus:outline-none"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Logo image */}
      <motion.div
        animate={logoControls}
        className="relative flex-shrink-0"
        style={{ width: 32, height: 32 }}
      >
        <img
          src="/logo.png"
          alt="AevosFlow"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          draggable={false}
        />
        {/* Cyan glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: hovered
              ? '0 0 18px 4px rgba(6,182,212,0.45)'
              : '0 0 0px 0px rgba(6,182,212,0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Wordmark */}
      <motion.span
        animate={textControls}
        className="font-display font-extrabold text-2xl tracking-tight text-brand-dark"
        style={{ display: 'inline-block' }}
      >
        {/* A stays still, rest of letters slide in slightly on hover */}
        <span>Aevos</span>
        <motion.span
          animate={{ color: hovered ? '#06B6D4' : '#0f2040' }}
          transition={{ duration: 0.25 }}
        >
          Flow
        </motion.span>
      </motion.span>
    </a>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-brand-lowest/90 backdrop-blur-md border-b border-outline-variant/50 shadow-sm'
            : 'py-5 bg-brand-lowest/30 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-10">

            {/* ── Animated Logo ── */}
            <AnimatedLogo />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">

              {/* Services mega-dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={(e) => handleNavClick(e as any, 'solutions')}
                  className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-brand-dark hover:text-brand-cyan transition-colors duration-200 cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 text-brand-gray transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-3 z-20 w-[720px]"
                    >
                      <div className="rounded-2xl border border-slate-200/80 bg-white/98 shadow-2xl backdrop-blur-xl overflow-hidden">
                        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/80">
                          <p className="text-xs font-bold font-display text-brand-gray uppercase tracking-widest">Our Services</p>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-slate-100">
                          {SERVICES_DROPDOWN.map((cat) => {
                            const CatIcon = cat.icon;
                            return (
                              <div key={cat.id} className="p-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="p-1.5 rounded-lg" style={{ background: `${cat.accent}18` }}>
                                    <CatIcon className="w-3.5 h-3.5" style={{ color: cat.accent }} />
                                  </div>
                                  <button
                                    onClick={(e) => handleNavClick(e as any, 'solutions')}
                                    className="font-display text-xs font-bold text-brand-dark hover:text-brand-cyan transition-colors cursor-pointer"
                                  >
                                    {cat.title}
                                  </button>
                                </div>
                                <div className="space-y-1">
                                  {cat.subs.map((sub) => (
                                    <button
                                      key={sub}
                                      onClick={(e) => handleNavClick(e as any, 'solutions')}
                                      className="block w-full text-left px-2 py-1 rounded-lg font-sans text-xs text-brand-gray hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer"
                                    >
                                      {sub}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                          <p className="font-sans text-xs text-brand-gray">27 services across 3 practice areas</p>
                          <button
                            onClick={(e) => handleNavClick(e as any, 'solutions')}
                            className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-brand-cyan hover:text-brand-dark transition-colors cursor-pointer"
                          >
                            View all services <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav items */}
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="font-display text-sm font-medium text-brand-dark hover:text-brand-cyan transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              id="navbar-contact-btn"
              className="hidden sm:inline-flex bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-5 py-2 rounded-md font-display text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm hover:shadow"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[57px] inset-x-0 z-40 bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="px-5 pt-4 pb-2 space-y-1">
              {MOBILE_NAV.map((item) => (
                <a
                  key={item.title}
                  href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="flex items-center justify-between w-full py-3.5 px-1 border-b border-slate-100 last:border-0 font-display font-semibold text-base text-brand-dark hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="px-5 py-5">
              <button
                onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
                className="w-full bg-brand-dark text-white py-3.5 rounded-xl font-display font-bold text-sm tracking-wide hover:bg-brand-cyan hover:text-brand-dark transition-colors cursor-pointer"
              >
                Book a Meeting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}