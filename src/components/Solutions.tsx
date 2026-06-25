import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot, Zap, BarChart2, X, ArrowRight, ChevronRight,
  TrendingUp, Users, AlertTriangle, Layers, Star, ShieldCheck,
  BrainCircuit, GitBranch, MessageSquare, PhoneCall, UserCheck,
  Mail, Settings, Workflow, Network, Database, PieChart,
  Wand2, Search, Cpu, LineChart, Telescope, FlaskConical,
  Calendar
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'ml',
    title: 'ML & AI Agents',
    tagline: 'Intelligent systems that predict, decide and act.',
    icon: BrainCircuit,
    accent: '#06B6D4',
    services: [
      { icon: TrendingUp,    label: 'Sales Forecasting',           desc: 'Predict revenue with ML models trained on your historical pipeline data.' },
      { icon: BarChart2,     label: 'Demand Forecasting',          desc: 'Anticipate product demand and reduce overstock or shortfalls.' },
      { icon: Users,         label: 'Customer Churn Prediction',   desc: 'Identify at-risk accounts before they leave — act early.' },
      { icon: Layers,        label: 'Customer Segmentation',       desc: 'Cluster customers by behavior to drive personalised marketing.' },
      { icon: Star,          label: 'Recommendation Systems',      desc: 'Suggest the right product or content to the right user at the right moment.' },
      { icon: AlertTriangle, label: 'Risk Analysis',               desc: 'Score and flag operational, financial or compliance risks automatically.' },
      { icon: LineChart,     label: 'Predictive Analytics',        desc: 'Turn historical patterns into forward-looking business intelligence.' },
      { icon: Cpu,           label: 'Custom ML Models',            desc: 'End-to-end model development tailored to your exact use-case.' },
      { icon: MessageSquare, label: 'AI Chatbots',                 desc: 'Conversational agents that handle enquiries 24/7 with human-like fluency.' },
      { icon: PhoneCall,     label: 'AI Voice Agents',             desc: 'Phone-based AI that qualifies leads and resolves support calls autonomously.' },
      { icon: UserCheck,     label: 'Customer Support Agents',     desc: 'Deflect tickets intelligently — escalate only what truly needs a human.' },
      { icon: Telescope,     label: 'Lead Generation Agents',      desc: 'Agents that prospect, enrich and qualify leads around the clock.' },
      { icon: ShieldCheck,   label: 'Sales Outreach Agents',       desc: 'Personalised outreach sequences crafted and sent by AI — at scale.' },
    ],
  },
  {
    id: 'automation',
    title: 'AI Automations',
    tagline: 'Eliminate repetitive work. Connect every tool you already use.',
    icon: Zap,
    accent: '#8B5CF6',
    services: [
      { icon: Mail,       label: 'Email Follow-up Automation',        desc: 'Trigger contextual follow-up emails based on lead behaviour and stage.' },
      { icon: Settings,   label: 'CRM Automation',                    desc: 'Auto-update records, log activities and move deals without manual input.' },
      { icon: Workflow,   label: 'Workflow Automation (n8n / Make / Zapier)', desc: 'Visual workflows that connect 500+ apps — no glue code needed.' },
      { icon: Network,    label: 'Multi-Agent Systems',               desc: 'Orchestrate teams of specialised AI agents that collaborate on complex tasks.' },
      { icon: Bot,        label: 'RAG-Powered Chatbots',              desc: 'Chatbots that retrieve live knowledge from your docs, FAQs and databases.' },
      { icon: FlaskConical, label: 'LLM Fine-tuning & Prompting',    desc: 'Adapt foundation models to your domain language and compliance requirements.' },
      { icon: Wand2,      label: 'AI Content & Copy Generation',      desc: 'On-brand copy, product descriptions and reports generated at scale.' },
    ],
  },
  {
    id: 'data',
    title: 'AI Data Science',
    tagline: 'Turn raw data into decisions that move the business forward.',
    icon: BarChart2,
    accent: '#10B981',
    services: [
      { icon: GitBranch,  label: 'Data Pipeline Development',     desc: 'Robust ETL pipelines that ingest, transform and deliver clean data reliably.' },
      { icon: PieChart,   label: 'Dashboard & BI Reporting',      desc: 'Interactive dashboards built in Power BI, Looker or custom React — your choice.' },
      { icon: Search,     label: 'Data Cleaning & Preparation',   desc: 'Standardise, de-duplicate and validate data so models actually trust it.' },
      { icon: Database,   label: 'Big Data Analytics',            desc: 'Process terabytes with Spark or cloud-native warehouses at manageable cost.' },
      { icon: Telescope,  label: 'Exploratory Data Analysis',     desc: 'Surface hidden patterns and anomalies before you commit to a model strategy.' },
      { icon: FlaskConical, label: 'Model Building',              desc: 'From feature engineering to training — production-grade models, not notebooks.' },
      { icon: ShieldCheck, label: 'Model Evaluation',             desc: 'Rigorous testing for accuracy, fairness and drift so you can deploy with confidence.' },
    ],
  },
];

/* ─── SERVICE EXPLORER MODAL ───────────────────────── */
function ServiceModal({
  category,
  onClose,
  onBook,
}: {
  category: typeof CATEGORIES[0];
  onClose: () => void;
  onBook: (service: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-white w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-6 pb-5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl" style={{ background: `${category.accent}18` }}>
              <Icon className="w-6 h-6" style={{ color: category.accent }} />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl text-brand-dark">{category.title}</h2>
              <p className="font-sans text-sm text-brand-gray mt-0.5">{category.tagline}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer rounded-full hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of services */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-gray mb-5">
            Select a service to book a call
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.services.map((svc) => {
              const SvcIcon = svc.icon;
              const isSelected = selected === svc.label;
              return (
                <motion.button
                  key={svc.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelected(isSelected ? null : svc.label)}
                  onMouseEnter={() => setHovered(svc.label)}
                  onMouseLeave={() => setHovered(null)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer group ${
                    isSelected
                      ? 'border-2 bg-white shadow-md'
                      : 'border border-slate-200 hover:border-slate-300 hover:shadow-sm bg-slate-50/50'
                  }`}
                  style={isSelected ? { borderColor: category.accent } : {}}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg shrink-0 mt-0.5 transition-colors"
                      style={{
                        background: (isSelected || hovered === svc.label) ? `${category.accent}18` : '#F1F5F9',
                        color: (isSelected || hovered === svc.label) ? category.accent : '#64748B',
                      }}
                    >
                      <SvcIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-brand-dark leading-snug">{svc.label}</p>
                      <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1">{svc.desc}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 pt-3 border-t flex items-center gap-1.5 text-xs font-bold font-display"
                      style={{ borderColor: `${category.accent}30`, color: category.accent }}
                    >
                      <span>Selected</span>
                      <ChevronRight className="w-3 h-3" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 px-6 sm:px-8 py-5 border-t border-slate-100 bg-slate-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            {selected ? (
              <p className="font-sans text-sm text-brand-dark">
                Ready to discuss <span className="font-bold" style={{ color: category.accent }}>{selected}</span>
              </p>
            ) : (
              <p className="font-sans text-sm text-brand-gray">Pick a service above, then book your free strategy call.</p>
            )}
          </div>
          <button
            onClick={() => selected && onBook(selected)}
            disabled={!selected}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-sm text-white transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            style={{ background: selected ? category.accent : '#94A3B8' }}
          >
            <Calendar className="w-4 h-4" />
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN SECTION ─────────────────────────────────── */
export default function Solutions({ onBookingOpen }: { onBookingOpen?: (service?: string) => void }) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const activeCategory = CATEGORIES.find((c) => c.id === openCategory) ?? null;

  const handleBook = (service: string) => {
    setOpenCategory(null);
    onBookingOpen?.(service);
  };

  return (
    <section className="py-24 bg-brand-lowest border-t border-outline-variant/30" id="solutions">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
            What We Build
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-2xl">
            Three practice areas. One outcome — your business runs smarter, faster and without unnecessary headcount.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: cat.accent }}
                />

                <div className="flex items-center gap-4 mb-5 relative">
                  <div className="p-3 rounded-xl transition-colors duration-300" style={{ background: `${cat.accent}18` }}>
                    <CatIcon className="w-7 h-7 transition-colors duration-300" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">{cat.title}</h3>
                </div>

                <p className="font-sans text-brand-gray text-sm leading-relaxed mb-6 relative">{cat.tagline}</p>

                {/* Service pill count */}
                <div className="flex flex-wrap gap-2 mb-8 relative">
                  {cat.services.slice(0, 4).map((svc) => (
                    <span key={svc.label} className="px-3 py-1 text-xs font-display font-semibold rounded-full bg-slate-100 text-brand-gray">
                      {svc.label}
                    </span>
                  ))}
                  {cat.services.length > 4 && (
                    <span className="px-3 py-1 text-xs font-display font-semibold rounded-full bg-slate-100 text-brand-gray">
                      +{cat.services.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setOpenCategory(cat.id)}
                  className="mt-auto inline-flex items-center justify-between w-full px-5 py-3 rounded-xl font-display font-bold text-sm text-white transition-all duration-200 cursor-pointer group/btn"
                  style={{ background: cat.accent }}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCategory && (
          <ServiceModal
            category={activeCategory}
            onClose={() => setOpenCategory(null)}
            onBook={handleBook}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export { CATEGORIES };
