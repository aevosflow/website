import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { X, Menu, ChevronDown, BrainCircuit, Zap, BarChart2, ArrowRight } from 'lucide-react';

const SERVICES_DROPDOWN = [
  {
    id: 'ml', title: 'ML & AI Agents', accent: '#06B6D4', icon: BrainCircuit,
    subs: ['Sales Forecasting','Demand Forecasting','Customer Churn Prediction','Customer Segmentation','Recommendation Systems','Risk Analysis','Predictive Analytics','Custom ML Models','AI Chatbots','AI Voice Agents','Customer Support Agents','Lead Generation Agents','Sales Outreach Agents'],
  },
  {
    id: 'automation', title: 'AI Automations', accent: '#8B5CF6', icon: Zap,
    subs: ['Email Follow-up Automation','CRM Automation','Workflow Automation (n8n / Make / Zapier)','Multi-Agent Systems','RAG-Powered Chatbots','LLM Fine-tuning & Prompting','AI Content & Copy Generation'],
  },
  {
    id: 'data', title: 'AI Data Science', accent: '#10B981', icon: BarChart2,
    subs: ['Data Pipeline Development','Dashboard & BI Reporting','Data Cleaning & Preparation','Big Data Analytics','Exploratory Data Analysis','Model Building','Model Evaluation'],
  },
];

const MENU_ITEMS = [
  { title: 'Process', target: 'process' },
  { title: 'Case Studies', target: 'case-studies' },
  { title: 'Insights', target: 'insights' },
];

const MOBILE_NAV = [
  { title: 'Services', target: 'solutions' },
  { title: 'Process', target: 'process' },
  { title: 'Case Studies', target: 'case-studies' },
  { title: 'Insights', target: 'insights' },
];

/* ─── ANIMATED LOGO ─────────────────────────────────── */
function AnimatedLogo() {
  const [hovered, setHovered] = useState(false);
  const [flowColor, setFlowColor] = useState('#0f2040');
  const logoControls = useAnimation();
  const textControls = useAnimation();
  const busy = useRef(false);

  // Init: logo fully hidden (clipped off to left, zero width impact)
  useEffect(() => {
    logoControls.set({ x: -60, opacity: 0, scale: 0.5, rotate: -8 });
    textControls.set({ x: 0 });
  }, []);

  const onEnter = async () => {
    if (busy.current) return;
    busy.current = true;
    setHovered(true);
    setFlowColor('#06B6D4');

    // Logo rockets in with spring overshoot → nudges text right → both settle
    logoControls.start({
      x:       [-60,  4,  -2,  0],
      opacity: [  0,  1,   1,  1],
      scale:   [0.5, 1.18, 0.95, 1],
      rotate:  [ -8,  5,  -2,  0],
      transition: { duration: 0.5, times: [0, 0.42, 0.72, 1], ease: 'easeOut' },
    });

    await textControls.start({
      x: [0, 10, 3, 0],
      transition: { duration: 0.5, times: [0, 0.42, 0.72, 1], ease: 'easeOut' },
    });

    busy.current = false;
  };

  const onLeave = async () => {
    setHovered(false);
    setFlowColor('#0f2040');

    // Logo dashes back off left quickly
    logoControls.start({
      x: -60, opacity: 0, scale: 0.5, rotate: -8,
      transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
    });
    textControls.start({
      x: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    });
  };

  return (
    <a
      href="#"
      className="flex items-center select-none focus:outline-none"
      style={{ gap: 0 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/*
        Logo wrapper: width 0 so it takes no space when hidden.
        overflow-visible so the spring overshoot renders outside the box.
        The logo itself is absolutely positioned relative to this wrapper.
      */}
      <div className="relative overflow-visible" style={{ width: 0, height: 36 }}>
        <motion.div
          animate={logoControls}
          className="absolute top-0 left-0"
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <div className="relative" style={{ width: 30, height: 30, marginTop: 3 }}>
            <img
              src="/logo.png"
              alt="AevosFlow logo"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-contain block"
              draggable={false}
            />
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                boxShadow: hovered
                  ? '0 0 22px 7px rgba(6,182,212,0.55)'
                  : '0 0 0px 0px rgba(6,182,212,0)',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Wordmark — shifts right as logo "pushes" it */}
      <motion.span
        animate={textControls}
        className="font-display font-extrabold text-2xl tracking-tight"
        style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        <span style={{ color: '#0f2040' }}>Aevos</span>
        <motion.span
          animate={{ color: flowColor }}
          transition={{ duration: 0.22 }}
        >
          Flow
        </motion.span>
      </motion.span>
    </a>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
interface NavbarProps { onContactClick: () => void; }

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
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

            <AnimatedLogo />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {/* Services mega-dropdown */}
              <div
                className="relative"
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
                                  <button onClick={(e) => handleNavClick(e as any, 'solutions')}
                                    className="font-display text-xs font-bold text-brand-dark hover:text-brand-cyan transition-colors cursor-pointer">
                                    {cat.title}
                                  </button>
                                </div>
                                <div className="space-y-1">
                                  {cat.subs.map((sub) => (
                                    <button key={sub} onClick={(e) => handleNavClick(e as any, 'solutions')}
                                      className="block w-full text-left px-2 py-1 rounded-lg font-sans text-xs text-brand-gray hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer">
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
                          <button onClick={(e) => handleNavClick(e as any, 'solutions')}
                            className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-brand-cyan hover:text-brand-dark transition-colors cursor-pointer">
                            View all services <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {MENU_ITEMS.map((item) => (
                <a key={item.title} href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="font-display text-sm font-medium text-brand-dark hover:text-brand-cyan transition-colors duration-200">
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onContactClick} id="navbar-contact-btn"
              className="hidden sm:inline-flex bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-5 py-2 rounded-md font-display text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm hover:shadow">
              Contact
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}
            className="fixed top-[57px] inset-x-0 z-40 bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="px-5 pt-4 pb-2 space-y-1">
              {MOBILE_NAV.map((item) => (
                <a key={item.title} href={`#${item.target}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="flex items-center justify-between w-full py-3.5 px-1 border-b border-slate-100 last:border-0 font-display font-semibold text-base text-brand-dark hover:text-brand-cyan transition-colors cursor-pointer">
                  {item.title}
                </a>
              ))}
            </div>
            <div className="px-5 py-5">
              <button onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
                className="w-full bg-brand-dark text-white py-3.5 rounded-xl font-display font-bold text-sm tracking-wide hover:bg-brand-cyan hover:text-brand-dark transition-colors cursor-pointer">
                Book a Meeting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}