import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, LineChart, Cpu } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: 'discover',
    title: 'Discover',
    summary: 'We audit your existing data and operational gaps.',
    icon: Eye,
    details: [
      'Comprehensive inventory of current data silos and pipeline models.',
      'Analysis of friction vectors inside user support and logistical workflows.',
      'Technical viability feasibility scoring for autonomous agent replacement.'
    ],
    deliverable: 'Operational Friction & Gap Report'
  },
  {
    id: 'design',
    title: 'Design',
    summary: 'Architecting a custom solution for your specific scale.',
    icon: Sparkles,
    details: [
      'Drafting sequence topology maps for custom multi-agent routing.',
      'Designing vector store database architectures and integration parameters.',
      'Selecting optimal model layers (such as Gemini 2.5 series) for cost/latency ratios.'
    ],
    deliverable: 'Custom Agent Architecture Blueprint'
  },
  {
    id: 'deploy',
    title: 'Deploy',
    summary: 'Rapid integration into your current tech stack.',
    icon: Cpu,
    details: [
      'Staging APIs and sandboxed Express server runtimes securely.',
      'Populating vector embeddings databases with enterprise contextual knowledge.',
      'Publishing and connecting production event streams via secure webhooks.'
    ],
    deliverable: 'Sandboxed Production Integration Alpha'
  },
  {
    id: 'optimize',
    title: 'Optimize',
    summary: 'Continuous tuning based on real-world performance.',
    icon: LineChart,
    details: [
      'Analyzing real user telemetry patterns to discover policy failure paths.',
      'Fine-tuning system prompts and temperature defaults for maximum reliability.',
      'Accelerating data streaming pipeline response times under high-load conditions.'
    ],
    deliverable: 'Weekly Optimization Telemetry Digest'
  },
  {
    id: 'scale',
    title: 'Scale',
    summary: 'Expanding intelligence across all business units.',
    icon: ShieldCheck,
    details: [
      'Cloning automation flow structures across adjacent departments.',
      'Integrating secondary data systems for unified dashboard analytics.',
      'Restricting data access rules with custom enterprise security layers.'
    ],
    deliverable: 'Omnichannel Enterprise AI Mesh'
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<string>('discover');

  const currentStepData = PROCESS_STEPS.find(step => step.id === activeStep) || PROCESS_STEPS[0];
  const StepIcon = currentStepData.icon;

  return (
    <section className="py-24 bg-brand-lowest" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
            From Strategy To Scale
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-xl mx-auto">
            Our disciplined roadmap ensures predictability, alignment, and flawless execution at every single stage of deployment.
          </p>
        </motion.div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-[15px] left-0 right-0 h-[1px] bg-outline-variant/50 z-0" />
          
          <div className="flex justify-between relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center max-w-[200px] text-center group focus:outline-hidden cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive ? '#06B6D4' : '#FFFFFF',
                      borderColor: isActive ? '#06B6D4' : '#C6C6CD',
                    }}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive
                        ? 'shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'group-hover:border-brand-dark'
                    }`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : 'bg-outline-variant group-hover:bg-brand-dark'}`} />
                  </motion.div>
                  
                  <h4 className={`font-display text-base mt-4 transition-colors ${isActive ? 'font-bold text-brand-dark' : 'font-medium text-brand-gray group-hover:text-brand-dark'}`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Navigation (Horizontal scrollable badges) */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 mb-8 scrollbar-none scroll-smooth">
          {PROCESS_STEPS.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-5 py-2.5 rounded-full font-display text-sm font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-brand-cyan border-brand-cyan text-brand-dark shadow-sm'
                    : 'bg-brand-lowest border-outline-variant text-brand-gray hover:text-brand-dark'
                }`}
              >
                {step.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-bg/50 border border-outline-variant/60 rounded-xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="text-brand-cyan mb-4 inline-flex p-3 bg-brand-lowest border border-outline-variant/40 rounded-lg shadow-2xs">
                  <StepIcon className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-extrabold text-3xl text-brand-dark mb-2">
                  {currentStepData.title}
                </h3>
                
                <p className="font-sans text-brand-gray mt-6 leading-relaxed text-base md:text-lg">
                  {currentStepData.summary}
                </p>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between h-full bg-brand-lowest border border-outline-variant/40 rounded-xl p-6 lg:p-8">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wider mb-4 border-b border-outline-variant/30 pb-2">
                    Scope of Deliverables
                  </h4>
                  
                  <ul className="space-y-4">
                    {currentStepData.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-sm md:text-base text-brand-gray leading-relaxed">
                        <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="font-display text-[10px] font-bold text-brand-gray uppercase tracking-wider block">
                      Core Output Deliverable
                    </span>
                    <span className="font-display font-bold text-base text-brand-dark">
                      {currentStepData.deliverable}
                    </span>
                  </div>
                  
                  <div className="font-mono text-xs text-brand-cyan font-bold bg-brand-cyan/15 px-3 py-1.5 rounded-md flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                    SLA Checked
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
