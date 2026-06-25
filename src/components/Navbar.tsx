import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu, ChevronDown } from 'lucide-react';

const MENU_ITEMS = [
  { title: 'Services',     target: 'solutions',    sections: [{ title: 'ML & AI Agents', subs: ['Sales Forecasting', 'Customer Churn Prediction', 'Recommendation Systems', 'Custom ML Models', 'AI Chatbots', 'AI Voice Agents'] }, { title: 'AI Automations', subs: ['CRM Automation', 'Workflow Automation', 'Multi-Agent Systems', 'RAG-Powered Chatbots', 'Email Follow-up'] }, { title: 'AI Data Science', subs: ['Data Pipeline Development', 'Dashboard & BI Reporting', 'Predictive Analytics', 'Model Building', 'Big Data Analytics'] }] },
  { title: 'Process',      target: 'process',      sections: [{ title: 'Project Lifecycle', subs: ['Discovery', 'Design', 'Deploy', 'Optimize', 'Scale'] }] },
  { title: 'Case Studies', target: 'case-studies', sections: [{ title: 'Featured Work', subs: ['Retail Automation', 'Finance Productivity', 'Data Modernization'] }] },
  { title: 'Insights',     target: 'insights',     sections: [{ title: 'Thought Leadership', subs: ['Articles', 'Reports', 'Industry Trends'] }] },
];

const MOBILE_NAV = [
  { title: 'Services',     target: 'solutions' },
  { title: 'Process',      target: 'process' },
  { title: 'Case Studies', target: 'case-studies' },
  { title: 'Insights',     target: 'insights' },
];

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="flex items-center gap-12">
            <a href="#" className="font-display font-extrabold text-2xl tracking-tight text-brand-dark flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-cyan rounded-full animate-pulse" />
              AevosFlow
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {MENU_ITEMS.map((item) => (
                <div key={item.title} className="relative group">
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="inline-flex items-center gap-2 font-display text-sm font-medium text-brand-dark hover:text-brand-cyan transition-colors duration-200"
                  >
                    {item.title}
                    <ChevronDown className="w-3.5 h-3.5 text-brand-gray transition-transform duration-200 group-hover:-rotate-180" />
                  </a>
                  <div className="absolute left-0 top-full z-20 opacity-0 invisible min-w-[340px] rounded-[32px] border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                    <div className="space-y-4">
                      {item.sections.map((section, i) => (
                        <div key={section.title} className={i > 0 ? 'pt-3 border-t border-slate-200/70' : ''}>
                          <p className="font-display text-sm font-semibold text-brand-dark mb-2">{section.title}</p>
                          <div className="space-y-2">
                            {section.subs.map((sub) => (
                              <a key={sub} href={`#${item.target}`} onClick={(e) => handleNavClick(e, item.target)}
                                className="block w-full text-left font-sans text-sm text-brand-gray hover:text-brand-dark transition-colors">
                                {sub}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
