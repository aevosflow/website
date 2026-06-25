import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Zap, TrendingUp, Sparkles, Clock, Globe } from 'lucide-react';
import { CaseStudy } from '../types';

const CASE_STUDIES: (CaseStudy & { 
  roi: string; 
  timeframe: string; 
  testimonial: { quote: string; author: string; role: string };
  metrics: { label: string; val: string }[];
})[] = [
  {
    id: 'risk',
    category: 'FinTech',
    title: 'Automating Risk Assessment',
    challenge: 'Manual processing taking 48 hours per application.',
    outcome: 'Instant approval engine (90% reduction in delay).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGf1NNE19g7oug0qPMDMNMiOifriiRyXN9Xnf1xNZR7T7M-RNoP3ifryYDcGlonUg3oX46mcKY5c5fImogP_1xsuZ-x3_s9Np5_qzNkjGrJvHOxggqjIsm6Luq-80gho--3XRy56wNSIlhnXvzd8IWa3-S4J2raSsuzSMNg8g2nsA22ahyLiZPRnQEpziA2j726oQmRRj4aQMlf9zbKMs55sAysQa8iVEXCfXGsnKdlcKl3umbEKP4HPwUaxJHF-ZIW3dy8kO8fzk',
    roi: '12x ROI in Year 1',
    timeframe: '6 Weeks Deployment',
    testimonial: {
      quote: "AevosFlow transformed our processing bottleneck from a liability into our greatest conversion driver. Approval rates went up, and customer friction completely evaporated.",
      author: "Marcus Vance",
      role: "VP of Credit Operations, CapitalVanguard"
    },
    metrics: [
      { label: 'Latency Reduction', val: '90%' },
      { label: 'Auto-Approval Accuracy', val: '99.8%' },
      { label: 'Operational Cost Drop', val: '64%' }
    ]
  },
  {
    id: 'fleet',
    category: 'Logistics',
    title: 'Dynamic Fleet Optimization',
    challenge: 'Inefficient routing leading to fuel waste and delivery delays.',
    outcome: 'AI-driven route modeling (22% cost savings annually).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA11gJ1AtUkeDYWBfW1HNJS02QdEi1L7QJoX9qzlH12noJ9mIEiEQP7RJuGd-SDoINN4hJtzf8aY-6pTQNWbz73aX33wvS12S5Aki7OwQlpuAwiYINI6lSlWpQj2rxtSukCOXZMLIvxUQ7Rs1dLo5D9EO89sNki7AY8nCTf2wE2TXfAxPMXBAW0S7gCjsXP-7mNr4OXsoeQrWeAXXwxrExAhPN-8sP6o6yvyXmqvDY9bPixsD0D8pcAae1bZVWM_yvOG9jtMvB1His',
    roi: '22% Lower Overhead',
    timeframe: '8 Weeks Deployment',
    testimonial: {
      quote: "The computational model routes are so accurate that our drivers now complete 18% more drops daily without requiring overtime. Fuel savings alone paid off the implementation within 3 months.",
      author: "Elena Rostova",
      role: "Director of Logistics, NordCargo Global"
    },
    metrics: [
      { label: 'Fuel Savings', val: '22%' },
      { label: 'Daily Delivery Increase', val: '18%' },
      { label: 'Route Plan Compile Time', val: '&lt; 3s' }
    ]
  },
  {
    id: 'support',
    category: 'E-commerce',
    title: 'Hyper-Personalized Support',
    challenge: 'Scaling global support without increasing headcount.',
    outcome: 'Multi-language AI agents (85% customer satisfaction).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSlvKC9tPjxElIRU_VV_ZFKkA87UnDCa7ZZPPro-tJK1qGkC4la0BIteO5Dpim2t97dCgyII8eVXmfNMIPHntIM5C_-JQCvRoj1OVcynN7rMiFiBo-v75vxeeBBKY_2ZnHdFGxO_QgOMexHstpI1Dtd_COtM7Gv0bF_L5v9ekp4tO2E_NZu8ekvPhpVzVvimzkY2Q_bG64ewJKGk6pqSiBaUlx3Pp3GlpkY7jYG8BlzcuVgAdCcF-iu8CBkk-BKC3SHDXu_2C3lU8',
    roi: '85% Satisfied Tickets',
    timeframe: '4 Weeks Deployment',
    testimonial: {
      quote: "We serve clients in 14 countries. Building multilingual AI agents that fully understand brand voice and operational policy felt impossible, but AevosFlow executed it seamlessly.",
      author: "Daisuke Sato",
      role: "Head of Customer Success, Lumina Retail"
    },
    metrics: [
      { label: 'SLA Response Rate', val: 'Instant' },
      { label: 'Ticket Resolution', val: '72%' },
      { label: 'Supported Languages', val: '14+' }
    ]
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const activeCaseData = CASE_STUDIES.find(cs => cs.id === selectedCase);

  return (
    <section className="py-24 bg-brand-low" id="case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
            Real Systems. Real Impact.
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-xl">
            See the exact blueprints, ROI parameters, and deployment metrics from our actual production implementations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCase(study.id)}
              className="bg-brand-lowest rounded-xl border border-outline-variant/60 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col cursor-pointer group"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  referrerPolicy="no-referrer"
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded font-display text-xs font-bold text-brand-dark border border-outline-variant/30">
                  {study.category}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-dark mb-5 leading-tight group-hover:text-brand-cyan transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="font-display text-[10px] font-bold text-brand-gray uppercase tracking-widest block mb-1">
                        Challenge
                      </span>
                      <p className="font-sans text-sm text-brand-dark leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-outline-variant/30">
                      <span className="font-display text-[10px] font-bold text-brand-gray uppercase tracking-widest block mb-1">
                        Outcome
                      </span>
                      <p className="font-sans text-sm font-semibold text-brand-cyan leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-xs font-display font-bold">
                  <span className="text-brand-gray">{study.roi}</span>
                  <span className="text-brand-cyan inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Report <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Details Overlay Modal */}
      <AnimatePresence>
        {selectedCase && activeCaseData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-brand-dark"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-brand-lowest rounded-xl border border-outline-variant/60 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 p-8"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-low/50 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-display text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-2">
                {activeCaseData.category} Case Study
              </span>
              
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-brand-dark mb-6 leading-tight pr-8">
                {activeCaseData.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-brand-low/50 rounded-lg border border-outline-variant/30">
                  <span className="font-sans text-[11px] text-brand-gray uppercase tracking-wider block">Deployment Span</span>
                  <span className="font-display font-bold text-lg text-brand-dark inline-flex items-center gap-1.5 mt-1">
                    <Clock className="w-4 h-4 text-brand-cyan" />
                    {activeCaseData.timeframe}
                  </span>
                </div>

                <div className="p-4 bg-brand-low/50 rounded-lg border border-outline-variant/30">
                  <span className="font-sans text-[11px] text-brand-gray uppercase tracking-wider block">Financial Performance</span>
                  <span className="font-display font-bold text-lg text-brand-dark inline-flex items-center gap-1.5 mt-1">
                    <TrendingUp className="w-4 h-4 text-brand-cyan" />
                    {activeCaseData.roi}
                  </span>
                </div>

                <div className="p-4 bg-brand-low/50 rounded-lg border border-outline-variant/30">
                  <span className="font-sans text-[11px] text-brand-gray uppercase tracking-wider block">Verification SLA</span>
                  <span className="font-display font-bold text-lg text-brand-dark inline-flex items-center gap-1.5 mt-1">
                    <Sparkles className="w-4 h-4 text-brand-cyan" />
                    Autonomous Alpha
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-dark uppercase tracking-widest border-b border-outline-variant/20 pb-1.5 mb-3">
                    The Business Problem (Challenge)
                  </h4>
                  <p className="font-sans text-sm md:text-base text-brand-gray leading-relaxed">
                    {activeCaseData.challenge} Prior to implementing AevosFlow models, this represented a massive operational bottleneck, directly increasing friction, degrading SLA metrics, and capping transaction throughput.
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs text-brand-dark uppercase tracking-widest border-b border-outline-variant/20 pb-1.5 mb-3">
                    The Intelligent Solution (Outcome)
                  </h4>
                  <p className="font-sans text-sm md:text-base text-brand-gray leading-relaxed">
                    By deploying {activeCaseData.outcome.toLowerCase()}, we successfully automated the core decision hierarchy. Our customized vector indexes, secure server integration parameters, and fine-tuned logic paths fully eliminated manual overhead.
                  </p>
                </div>
              </div>

              {/* Hard Metrics Grid */}
              <div className="mb-8">
                <h4 className="font-display font-bold text-xs text-brand-dark uppercase tracking-widest border-b border-outline-variant/20 pb-1.5 mb-4">
                  Audit Validation Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {activeCaseData.metrics.map((m) => (
                    <div key={m.label} className="p-4 bg-brand-lowest border border-outline-variant/40 rounded-lg">
                      <span className="font-display font-extrabold text-2xl text-brand-cyan" dangerouslySetInnerHTML={{ __html: m.val }} />
                      <span className="font-sans text-[10px] text-brand-gray block mt-1 leading-snug">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Testimonial quote card */}
              <div className="p-6 bg-brand-dark text-white rounded-xl relative overflow-hidden">
                <div className="absolute top-3 right-5 font-serif text-8xl text-brand-cyan/10 pointer-events-none select-none">“</div>
                <p className="font-sans text-sm italic leading-relaxed relative z-10 mb-4 opacity-90">
                  "{activeCaseData.testimonial.quote}"
                </p>
                <div className="flex justify-between items-center border-t border-white/10 pt-3 text-xs">
                  <div>
                    <span className="font-display font-bold text-white block">{activeCaseData.testimonial.author}</span>
                    <span className="font-sans text-white/60 block mt-0.5">{activeCaseData.testimonial.role}</span>
                  </div>
                  <span className="font-display text-[10px] font-bold text-brand-cyan uppercase bg-brand-cyan/20 px-2.5 py-1 rounded">Verified Client</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
