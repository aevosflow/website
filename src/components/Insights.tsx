import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Share2, Bookmark, Heart, Calendar, User, Clock } from 'lucide-react';
import { InsightArticle } from '../types';

const ARTICLES: InsightArticle[] = [
  {
    id: 'maturity',
    category: 'AI STRATEGY',
    title: 'The 2024 AI Maturity Framework for Enterprise',
    summary: 'How leaders are moving beyond experimental pilots to durable operational advantages.',
    date: 'June 20, 2026',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP48SKIWwNNCgUPOfXncU96NvCddJrDfUT2DYryyGLvQvEdvezROUJAtgGsYC9jhR8a5USC2Nskmc0t5Y40DmUwA7z4ZyejAkhjAcrnCLogXG02S7AEbjj9tD8tCFucB_7D8UhpDELj3wf2zGnBeEwLDdnzleZUQhoIYpMrtyQ_A4lmqglAQXdUWS958QC6jFpmEWgO4x6EgL1F4AwXIA7sfneur_zMiqSgpNr6iDam1jd6dSsyCUW5W_Hp0EOQudH8p1WWKVR18o',
    content: `### Executive Summary
Many enterprises are stuck in "proof-of-concept hell"—having launched numerous micro-projects without achieving true bottom-line ROI. This report outlines how top-performing Fortune 500 organizations establish systematic scaling frameworks for their agentic logic layers.

### Phase 1: Operational Alignment
First, establish strict criteria for where AI agents can operate. Autonomous tools should not simply replace humans; they should eliminate latency in high-volume, rules-governed processing loops:
- Transaction processing (Refunds, Approvals)
- Compliance screening & initial risk evaluation
- Customer intent routing & multi-channel resolution

### Phase 2: Knowledge Extraction
Agents are only as effective as their operational context. Establishing rich, self-tuning vector retrieval repositories is the fundamental differentiator. Standard raw database exports fall short; context must be structured as high-density semantic blueprints.`
  },
  {
    id: 'legacy',
    category: 'AUTOMATION',
    title: 'Bridging the Gap: Legacy Systems Meets Agentic AI',
    summary: 'Integrating state-of-the-art LLM logic layers into decades-old mainframe databases smoothly.',
    date: 'June 15, 2026',
    readTime: '6 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc890OOu1nNzyaHdlMgdVH8EM-x2WiHyNJWphGFlKYkMvmxd0HKKqPln5jW4zLYeTtUwOJFIjaoMaDrVD0CRFK6PdPljF-KZ_IFNwgunM6-IVFIWbXC0deuqXJX7p70UrRQgCah6kuBJthAipZQfYDwngQi60PPeA1hxIWZ4M_hRLbevYUrEBlgbOcpgYVRFoH79fuNTLwYqf8sHgHmRjj7LXpC62lRGlAyOvw1w1NWO7ihCM1_RaMNOfnXFYBYcnMgpWPyPw8d_g',
    content: `### Mainframe Mainstays
For many traditional enterprises, core records reside inside decades-old mainframe COBOL environments. Swapping these databases is a multi-billion dollar risk. The modern path requires creating a middle-tier translation system.

### The Semantic Translation Layer
Rather than making direct database edits, we mount a secure middleware layer (Express + Vite server proxy) that validates inputs, anonymizes customer data (PII extraction), and structures prompts. 
- API triggers translate LLM natural language intentions into raw SQL parameters.
- Mainframe responses are formatted back into clean JSON models for model consumption.`
  },
  {
    id: 'pipelines',
    category: 'DATA SCIENCE',
    title: 'Real-Time Data Pipelines for Agentic Decision Making',
    summary: 'Structuring streaming high-fidelity pipelines to feed live vectors directly to autonomous executors.',
    date: 'June 10, 2026',
    readTime: '7 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhKpGAD2gYyV9ehBbW8x0VxXTEYBdhcdVw12Xn7UUiq3r7ojz-BEw4lEa-CMPrMX9JBxkw9JzWr_jAU9auzqvLNLKiBluf_d_P5Uitm3-ML9OcNljcM47akiSqT3a9x0C4sklTKnblWGkdiFAE_qFlmqXhW6zyy-35ViriVwYL8rcDs9uZE1jpABDDh3dX_lrvabMvzOFuJm8LAaqBhKmjzt8P32VASemCrjxWGBlIoh2r6xIygt66Rm9ZJNQNOrekwmv-RISm-WU',
    content: `### Streaming vs. Batching
Legacy data pipelines rely on overnight batch processing. This is fully incompatible with real-time AI agents. For an approval engine to evaluate risk correctly, it must look at transaction vectors that are milliseconds old.

### Architecture for Low-Latency Ingress
We deploy streaming vectors using lightweight message brokers that process events at up to 50 Hz. Custom transformer endpoints compress text payloads into mathematical array vectors instantly, allowing immediate retrieval.`
  }
];

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const activeArticle = ARTICLES.find(a => a.id === selectedArticle);

  return (
    <section className="py-24 bg-brand-lowest" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
              Insights
            </h2>
            <p className="font-sans text-brand-gray text-base md:text-lg max-w-lg">
              Engineering editorial insights, frameworks, and deep-dives from the forefront of custom enterprise automation.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-display text-sm font-bold text-brand-cyan hover:text-brand-dark hover:underline underline-offset-4 inline-flex items-center gap-1 shrink-0 pb-1 cursor-pointer"
          >
            View All Editorial →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Featured Article (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => setSelectedArticle(ARTICLES[0].id)}
            className="md:col-span-2 group cursor-pointer flex flex-col justify-between h-full"
          >
            <div>
              <div className="aspect-video bg-brand-low rounded-xl mb-6 overflow-hidden border border-outline-variant/30 relative">
                <img
                  referrerPolicy="no-referrer"
                  src={ARTICLES[0].imageUrl}
                  alt={ARTICLES[0].title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <span className="font-display text-xs font-extrabold text-brand-cyan uppercase tracking-widest mb-3 block">
                {ARTICLES[0].category}
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                {ARTICLES[0].title}
              </h3>
              <p className="font-sans text-brand-gray text-sm md:text-base leading-relaxed">
                {ARTICLES[0].summary}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6 text-xs text-brand-gray font-display font-bold">
              <span>{ARTICLES[0].date}</span>
              <span className="h-1 w-1 bg-outline-variant rounded-full" />
              <span>{ARTICLES[0].readTime}</span>
            </div>
          </motion.div>

          {/* Secondary smaller articles */}
          {ARTICLES.slice(1).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx + 1) * 0.1 }}
              onClick={() => setSelectedArticle(article.id)}
              className="group cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                <div className="aspect-square bg-brand-low rounded-xl mb-6 overflow-hidden border border-outline-variant/30 relative">
                  <img
                    referrerPolicy="no-referrer"
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <span className="font-display text-xs font-extrabold text-brand-cyan uppercase tracking-widest mb-3 block">
                  {article.category}
                </span>
                <h3 className="font-display font-extrabold text-xl text-brand-dark mb-3 group-hover:text-brand-cyan transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mt-4 text-xs text-brand-gray font-display font-bold">
                <span>{article.date}</span>
                <span className="h-1 w-1 bg-outline-variant rounded-full" />
                <span>{article.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-over Editorial Reader Panel */}
      <AnimatePresence>
        {selectedArticle && activeArticle && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-brand-dark cursor-pointer"
            />

            {/* Reader Card */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-brand-lowest border-l border-outline-variant/50 shadow-2xl z-10 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="px-8 py-5 border-b border-outline-variant/30 flex items-center justify-between">
                <div className="flex gap-4">
                  <button
                    onClick={() => setLiked(prev => ({ ...prev, [activeArticle.id]: !prev[activeArticle.id] }))}
                    className={`flex items-center gap-1.5 text-xs font-display font-bold transition-colors cursor-pointer ${liked[activeArticle.id] ? 'text-rose-500' : 'text-brand-gray hover:text-brand-dark'}`}
                  >
                    <Heart className={`w-4 h-4 ${liked[activeArticle.id] ? 'fill-rose-500 stroke-rose-500' : ''}`} />
                    <span>{liked[activeArticle.id] ? 'Liked' : 'Like'}</span>
                  </button>

                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="flex items-center gap-1.5 text-xs text-brand-gray hover:text-brand-dark font-display font-bold transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full hover:bg-brand-low/50 text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Reading area */}
              <div className="flex-grow overflow-y-auto px-8 py-10">
                <div className="max-w-xl mx-auto">
                  <span className="font-display text-xs font-extrabold text-brand-cyan tracking-widest uppercase block mb-3">
                    {activeArticle.category}
                  </span>
                  
                  <h1 className="font-display font-extrabold text-3xl md:text-4xl text-brand-dark mb-6 leading-tight">
                    {activeArticle.title}
                  </h1>

                  <div className="flex items-center gap-6 text-xs text-brand-gray font-display font-bold pb-6 border-b border-outline-variant/20 mb-8">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-brand-cyan" />
                      AevosFlow Research
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {activeArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {activeArticle.readTime}
                    </span>
                  </div>

                  <div className="aspect-video bg-brand-low rounded-xl mb-8 overflow-hidden border border-outline-variant/30">
                    <img
                      referrerPolicy="no-referrer"
                      src={activeArticle.imageUrl}
                      alt={activeArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Editorial body copy */}
                  <div className="prose prose-slate prose-sm md:prose-base max-w-none">
                    <p className="font-sans text-brand-gray text-base md:text-lg leading-relaxed font-medium italic border-l-2 border-brand-cyan pl-4 mb-8">
                      {activeArticle.summary}
                    </p>
                    
                    {/* Render Content */}
                    <div className="font-sans text-brand-dark text-sm md:text-base space-y-6 leading-relaxed">
                      {activeArticle.content.split('\n\n').map((para, i) => {
                        if (para.startsWith('### ')) {
                          return (
                            <h3 key={i} className="font-display font-bold text-xl text-brand-dark pt-4 pb-1">
                              {para.replace('### ', '')}
                            </h3>
                          );
                        }
                        if (para.startsWith('- ')) {
                          return (
                            <ul key={i} className="list-disc pl-5 space-y-2 text-brand-gray">
                              {para.split('\n').map((li, idx) => (
                                <li key={idx}>{li.replace('- ', '')}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={i} className="text-brand-gray">{para}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA inside reader */}
              <div className="px-8 py-6 bg-brand-low border-t border-outline-variant/30 text-center">
                <span className="font-display text-xs text-brand-gray font-bold uppercase tracking-wider block mb-2">Want bespoke insights for your system?</span>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    // scroll to contact
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-5 py-2 rounded-md font-display font-semibold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Consult an Operations Specialist <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
