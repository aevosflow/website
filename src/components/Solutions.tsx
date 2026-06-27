import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot, Zap, BarChart2, X, ArrowRight, ChevronRight,
  TrendingUp, Users, AlertTriangle, Layers, Star, ShieldCheck,
  BrainCircuit, GitBranch, MessageSquare, PhoneCall, UserCheck,
  Mail, Settings, Workflow, Network, Database, PieChart,
  Wand2, Search, Cpu, LineChart, Telescope, FlaskConical,
  Calendar, CheckCircle2, Sparkles
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'ml',
    title: 'ML & AI Agents',
    tagline: 'Intelligent systems that predict, decide and act.',
    description: 'From forecasting revenue to deploying autonomous agents — we build ML pipelines and AI agents that run your business logic 24/7.',
    icon: BrainCircuit,
    accent: '#06B6D4',
    gradient: 'from-cyan-500/10 to-blue-500/5',
    services: [
      { icon: TrendingUp,    label: 'Sales Forecasting',           desc: 'Predict revenue with ML models trained on your historical pipeline data.', tag: 'Forecasting' },
      { icon: BarChart2,     label: 'Demand Forecasting',          desc: 'Anticipate product demand and reduce overstock or shortfalls.', tag: 'Forecasting' },
      { icon: Users,         label: 'Customer Churn Prediction',   desc: 'Identify at-risk accounts before they leave — act early.', tag: 'Prediction' },
      { icon: Layers,        label: 'Customer Segmentation',       desc: 'Cluster customers by behavior to drive personalised marketing.', tag: 'Analytics' },
      { icon: Star,          label: 'Recommendation Systems',      desc: 'Suggest the right product or content to the right user at the right moment.', tag: 'AI Systems' },
      { icon: AlertTriangle, label: 'Risk Analysis',               desc: 'Score and flag operational, financial or compliance risks automatically.', tag: 'Analytics' },
      { icon: LineChart,     label: 'Predictive Analytics',        desc: 'Turn historical patterns into forward-looking business intelligence.', tag: 'Analytics' },
      { icon: Cpu,           label: 'Custom ML Models',            desc: 'End-to-end model development tailored to your exact use-case.', tag: 'Custom' },
      { icon: MessageSquare, label: 'AI Chatbots',                 desc: 'Conversational agents that handle enquiries 24/7 with human-like fluency.', tag: 'Agents' },
      { icon: PhoneCall,     label: 'AI Voice Agents',             desc: 'Phone-based AI that qualifies leads and resolves support calls autonomously.', tag: 'Agents' },
      { icon: UserCheck,     label: 'Customer Support Agents',     desc: 'Deflect tickets intelligently — escalate only what truly needs a human.', tag: 'Agents' },
      { icon: Telescope,     label: 'Lead Generation Agents',      desc: 'Agents that prospect, enrich and qualify leads around the clock.', tag: 'Agents' },
      { icon: ShieldCheck,   label: 'Sales Outreach Agents',       desc: 'Personalised outreach sequences crafted and sent by AI — at scale.', tag: 'Agents' },
    ],
  },
  {
    id: 'automation',
    title: 'AI Automations',
    tagline: 'Eliminate repetitive work. Connect every tool you already use.',
    description: 'We wire up your stack with intelligent automation — from email sequences to multi-agent workflows — so your team focuses on what only humans can do.',
    icon: Zap,
    accent: '#8B5CF6',
    gradient: 'from-violet-500/10 to-purple-500/5',
    services: [
      { icon: Mail,         label: 'Email Follow-up Automation',          desc: 'Trigger contextual follow-up emails based on lead behaviour and stage.', tag: 'Email' },
      { icon: Settings,     label: 'CRM Automation',                      desc: 'Auto-update records, log activities and move deals without manual input.', tag: 'CRM' },
      { icon: Workflow,     label: 'Workflow Automation (n8n / Make / Zapier)', desc: 'Visual workflows that connect 500+ apps — no glue code needed.', tag: 'Workflows' },
      { icon: Network,      label: 'Multi-Agent Systems',                 desc: 'Orchestrate teams of specialised AI agents that collaborate on complex tasks.', tag: 'Agents' },
      { icon: Bot,          label: 'RAG-Powered Chatbots',                desc: 'Chatbots that retrieve live knowledge from your docs, FAQs and databases.', tag: 'Chatbots' },
      { icon: FlaskConical, label: 'LLM Fine-tuning & Prompting',         desc: 'Adapt foundation models to your domain language and compliance requirements.', tag: 'LLMs' },
      { icon: Wand2,        label: 'AI Content & Copy Generation',        desc: 'On-brand copy, product descriptions and reports generated at scale.', tag: 'Content' },
    ],
  },
  {
    id: 'data',
    title: 'AI Data Science',
    tagline: 'Turn raw data into decisions that move the business forward.',
    description: 'Clean data in, confident decisions out. We build the pipelines, dashboards and models that let your team stop guessing and start knowing.',
    icon: BarChart2,
    accent: '#10B981',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    services: [
      { icon: GitBranch,    label: 'Data Pipeline Development',     desc: 'Robust ETL pipelines that ingest, transform and deliver clean data reliably.', tag: 'Pipelines' },
      { icon: PieChart,     label: 'Dashboard & BI Reporting',      desc: 'Interactive dashboards built in Power BI, Looker or custom React — your choice.', tag: 'Dashboards' },
      { icon: Search,       label: 'Data Cleaning & Preparation',   desc: 'Standardise, de-duplicate and validate data so models actually trust it.', tag: 'Data Prep' },
      { icon: Database,     label: 'Big Data Analytics',            desc: 'Process terabytes with Spark or cloud-native warehouses at manageable cost.', tag: 'Big Data' },
      { icon: Telescope,    label: 'Exploratory Data Analysis',     desc: 'Surface hidden patterns and anomalies before you commit to a model strategy.', tag: 'EDA' },
      { icon: FlaskConical, label: 'Model Building',                desc: 'From feature engineering to training — production-grade models, not notebooks.', tag: 'ML' },
      { icon: ShieldCheck,  label: 'Model Evaluation',              desc: 'Rigorous testing for accuracy, fairness and drift so you can deploy with confidence.', tag: 'MLOps' },
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
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string>('All');

  const Icon = category.icon;
  const allTags = ['All', ...Array.from(new Set(category.services.map(s => s.tag)))];
  const filtered = activeTag === 'All' ? category.services : category.services.filter(s => s.tag === activeTag);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md" />

      {/* Panel */}
      <motion.div
        initial={{ y: 80, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative bg-white w-full sm:max-w-5xl max-h-[95vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar at top */}
        <div className="h-1 w-full shrink-0" style={{ background: `linear-gradient(90deg, ${category.accent}, ${category.accent}80)` }} />

        {/* Header */}
        <div
          className="px-6 sm:px-8 pt-6 pb-5 shrink-0 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${category.accent}0D 0%, transparent 60%)` }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl shadow-sm" style={{ background: `${category.accent}18` }}>
                <Icon className="w-7 h-7" style={{ color: category.accent }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-extrabold text-2xl text-brand-dark">{category.title}</h3>
                </div>
                <p className="font-sans text-sm text-brand-gray max-w-lg">{category.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer rounded-full hover:bg-slate-100 shrink-0 mt-0.5">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter tags */}
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-3 py-1.5 rounded-full text-xs font-bold font-display transition-all duration-200 cursor-pointer"
                style={
                  activeTag === tag
                    ? { background: category.accent, color: '#fff' }
                    : { background: '#F1F5F9', color: '#64748B' }
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Service grid */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filtered.map((svc) => {
                const SvcIcon = svc.icon;
                const isSelected = selected === svc.label;
                return (
                  <motion.button
                    key={svc.label}
                    layout
                    whileHover={{ y: -3, boxShadow: `0 8px 24px ${category.accent}22` }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(isSelected ? null : svc.label)}
                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-white shadow-lg'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                    }`}
                    style={isSelected ? { borderColor: category.accent } : {}}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-4 h-4" style={{ color: category.accent }} />
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2.5 rounded-xl shrink-0 transition-colors"
                        style={{
                          background: isSelected ? `${category.accent}18` : '#F1F5F9',
                          color: isSelected ? category.accent : '#64748B',
                        }}
                      >
                        <SvcIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-display font-semibold text-sm text-brand-dark leading-snug">{svc.label}</p>
                        </div>
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold font-display mb-2"
                          style={{ background: `${category.accent}14`, color: category.accent }}
                        >
                          {svc.tag}
                        </span>
                        <p className="font-sans text-xs text-brand-gray leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 px-6 sm:px-8 py-5 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-1 h-10 rounded-full shrink-0"
              style={{ background: selected ? category.accent : '#E2E8F0' }}
            />
            {selected ? (
              <div>
                <p className="font-display font-bold text-sm text-brand-dark">
                  {selected}
                </p>
                <p className="font-sans text-xs text-brand-gray mt-0.5">Ready to book your free strategy call</p>
              </div>
            ) : (
              <div>
                <p className="font-display font-semibold text-sm text-brand-dark">No service selected</p>
                <p className="font-sans text-xs text-brand-gray mt-0.5">Pick a service above to continue</p>
              </div>
            )}
          </div>
          <button
            onClick={() => selected && onBook(selected)}
            disabled={!selected}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-bold text-sm text-white transition-all duration-200 cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed shrink-0 shadow-md"
            style={{ background: selected ? category.accent : '#94A3B8', boxShadow: selected ? `0 4px 20px ${category.accent}50` : 'none' }}
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
            Our Services
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-2xl">
            Your business runs smarter, faster and without unnecessary headcount — pick a category to explore every service we offer.
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
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-1.5 overflow-hidden cursor-pointer"
                onClick={() => setOpenCategory(cat.id)}
              >
                {/* Accent glow */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
                  style={{ background: cat.accent }}
                />
                {/* Subtle background pattern */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top right, ${cat.accent}08 0%, transparent 60%)` }}
                />

                <div className="flex items-center gap-4 mb-5 relative">
                  <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110" style={{ background: `${cat.accent}18` }}>
                    <CatIcon className="w-7 h-7 transition-colors duration-300" style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-dark">{cat.title}</h3>
                    <span className="text-xs font-display font-semibold" style={{ color: cat.accent }}>
                      {cat.services.length} services
                    </span>
                  </div>
                </div>

                <p className="font-sans text-brand-gray text-sm leading-relaxed mb-6 relative">{cat.tagline}</p>

                {/* Service pills */}
                <div className="flex flex-wrap gap-2 mb-8 relative">
                  {cat.services.slice(0, 4).map((svc) => (
                    <span key={svc.label} className="px-3 py-1 text-xs font-display font-semibold rounded-full bg-slate-100 text-brand-gray group-hover:bg-slate-50 transition-colors">
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
                  className="mt-auto inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl font-display font-bold text-sm text-white transition-all duration-200 cursor-pointer group/btn shadow-md"
                  style={{ background: cat.accent, boxShadow: `0 4px 16px ${cat.accent}40` }}
                >
                  <span>Explore {cat.services.length} Services</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
