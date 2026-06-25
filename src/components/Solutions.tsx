import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Network, Database, ChevronRight, Play, RefreshCw, Send, CheckCircle, Sliders, Sparkles, TrendingUp } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'agents',
    title: 'AI Agents',
    description: 'Autonomous workflows designed to handle complex decision-making, from customer interactions to dynamic task allocation.',
    icon: Bot,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKnixGFB0Q-km8CaopkF4gUcNnoXtDEGB7JETiAbw_ed6Z2qbR8eWaeI2i6nEqnkZtXp_jBvC5IeLxr_A5TwZxOxFhQnM_wqYy3NQBBHbgFQEyOK_oYPUKEk29Drf38T6wexnGq0kAOUORByj0z3PGSiVkKod7zXS4FwSjalaVsOmGwEuDPFeMkWNprudT61Paaa5rSwTj8FuA2x1dTn4m3QCJSBQ3BYc89MdjYCR-Pj0e9o4ycL7ldfa-LuadAHJW1wzYwSpJIAQ',
    imageAlt: 'AI Agents nodes',
  },
  {
    id: 'automation',
    title: 'AI Automation',
    description: 'End-to-end process engineering that eliminates friction, integrates legacy tools, and accelerates speed-to-market.',
    icon: Network,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw3W8XQQei8fPLgrqzPMe9tiqivKmDyccQX6EHIUHtT1-3a0ccZw38uLEZyHM9kfB5_WMKVCfJzQBoZ-EinINvVAYIuoGqgDCyG98xJ08zS3RXVUeMiIT1Hv431Jv38wXzkMurll6-l5SyEgBr0Fdup97qQwJSULfrcfQuDwKuol0vjUcFFS-6xdohYMlx3MZJCJleKktTpN71KDwOx9WR0GhVqDdNdBUPNY--oynq1GHKMDEZ3Z8DrDGjV9c5zT1u9Oq7UFytATc',
    imageAlt: 'AI Automation process paths',
  },
  {
    id: 'data',
    title: 'Data Intelligence',
    description: 'Turn siloed data into predictive insights with custom pipelines that feed directly into your strategic operations.',
    icon: Database,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzEd-V5ruVx8f7CtccyfBQwjfOH_Q3lBZzz_nJ8GCJCFd1iL_RlZYc1gOXl9P0HZeRaNZNgzp-dmIQ4qrUTYCDg7Iq1-s8j-YgEOGykMiVM3nN5KKYxoNR0Jpz_pZXMpoMJ9ypey3U1-kv2lJ36sBJCFM60EMADfnRpEO0lrFOyHjVa-2eszINxaUvzIAUiSm-QlDd0bXTxvBcmEr6iAF-Fh3G2hYwHn4NrIB0aEsxH28u3ZnDU_DDCXiotMHp1J9hbJMwzKhRYPY',
    imageAlt: 'Data Intelligence visualization',
  }
];

export default function Solutions() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // AI Agent Demo States
  const [agentInput, setAgentInput] = useState('Evaluate refund request for order #8493 based on delivery latency.');
  const [agentStep, setAgentStep] = useState(0);
  const [agentSimulating, setAgentSimulating] = useState(false);
  const [agentLog, setAgentLog] = useState<string[]>([]);

  // AI Automation States
  const [selectedTrigger, setSelectedTrigger] = useState('New Zendesk Ticket');
  const [selectedAction, setSelectedAction] = useState('AI Sentiment & Auto-Route');
  const [automationRunning, setAutomationRunning] = useState(false);
  const [automationOutput, setAutomationOutput] = useState<string | null>(null);

  // Data Intelligence States
  const [dataCoverage, setDataCoverage] = useState(65);
  const [dataSampling, setDataSampling] = useState(10); // Hz

  const startAgentSimulation = () => {
    setAgentSimulating(true);
    setAgentStep(1);
    setAgentLog(['Initializing Autonomous Agent Context...', 'Persona loaded: Financial Operations Specialist']);

    const steps = [
      { text: 'Parsing query intent: EXAMINE_LATENCY_REFUND', delay: 1200 },
      { text: 'Connecting database... Found Transaction ID 8493 (Stripe #ch_348A9)', delay: 2400 },
      { text: 'Retrieving logistics vector index: Latency = 4.2 days above SLA threshold', delay: 3600 },
      { text: 'Formulating policy: SLA infraction detected. Auto-approval eligible.', delay: 4800 },
      { text: 'Executing payout via webhook: $48.50 refunded. Customer notified.', delay: 6000 },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setAgentStep(index + 2);
        setAgentLog(prev => [...prev, step.text]);
        if (index === steps.length - 1) {
          setAgentSimulating(false);
        }
      }, step.delay);
    });
  };

  const runAutomation = () => {
    setAutomationRunning(true);
    setAutomationOutput('Listening for events...');

    setTimeout(() => {
      setAutomationOutput(`Trigger received: "${selectedTrigger}" at ${new Date().toLocaleTimeString()}`);
    }, 1000);

    setTimeout(() => {
      setAutomationOutput(prev => prev + '\nExecuting Model: gemini-2.5-flash payload...');
    }, 2000);

    setTimeout(() => {
      setAutomationOutput(prev => prev + `\nApplied Action: "${selectedAction}"`);
    }, 3200);

    setTimeout(() => {
      setAutomationOutput(prev => prev + '\nPipeline Executed: 200 OK. Friction minimized by 94%.');
      setAutomationRunning(false);
    }, 4500);
  };

  return (
    <section className="py-24 bg-brand-lowest border-t border-outline-variant/30" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
              What We Build
            </h2>
            <p className="font-sans text-brand-gray text-base md:text-lg max-w-2xl">
              We design and build bespoke intelligence systems tailored to enterprise workflows, bypassing generic wrappers for true edge advantage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => {
            const IconComponent = sol.icon;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 bg-brand-lowest border rounded-xl flex flex-col justify-between group transition-all duration-300 ${
                  activeDemo === sol.id
                    ? 'border-brand-cyan ring-1 ring-brand-cyan bg-brand-bg/20'
                    : 'border-outline-variant/50 hover:border-brand-cyan/70 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="mb-6 inline-flex p-3 bg-brand-low rounded-lg text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-brand-dark mb-3">
                    {sol.title}
                  </h3>
                  
                  <p className="font-sans text-brand-gray text-sm md:text-base leading-relaxed mb-6">
                    {sol.description}
                  </p>
                  
                  <div className="w-full h-48 bg-brand-low/50 rounded-lg mb-6 overflow-hidden relative border border-outline-variant/30">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-transparent z-10" />
                    <img
                      referrerPolicy="no-referrer"
                      src={sol.imageUrl}
                      alt={sol.imageAlt}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveDemo(activeDemo === sol.id ? null : sol.id);
                    // Reset simulator states
                    setAgentStep(0);
                    setAgentLog([]);
                    setAutomationOutput(null);
                  }}
                  className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-cyan hover:text-brand-dark transition-colors self-start cursor-pointer mt-2"
                >
                  {activeDemo === sol.id ? 'Close Simulation' : 'Launch Live Simulation'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeDemo === sol.id ? 'rotate-90' : ''}`} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Interactive Playgrounds */}
        <AnimatePresence>
          {activeDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="mt-12 overflow-hidden border border-brand-cyan/30 bg-brand-low/40 rounded-xl"
            >
              <div className="p-8 border-t border-brand-cyan/20">
                {activeDemo === 'agents' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
                        <h4 className="font-display font-bold text-lg text-brand-dark">AI Agent Execution Environment</h4>
                      </div>
                      <p className="font-sans text-sm text-brand-gray mb-6 leading-relaxed">
                        Test how an autonomous agent parses prompt instructions, retrieves contextual indices from vector stores, triggers enterprise policy guidelines, and fires secure system actions.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">Prompt Instruction</label>
                          <textarea
                            value={agentInput}
                            onChange={(e) => setAgentInput(e.target.value)}
                            disabled={agentSimulating}
                            className="w-full bg-brand-lowest border border-outline-variant rounded p-3 font-mono text-xs text-brand-dark focus:border-brand-dark focus:ring-0 resize-none h-24"
                          />
                        </div>

                        <button
                          onClick={startAgentSimulation}
                          disabled={agentSimulating || !agentInput}
                          className="bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-5 py-2.5 rounded font-display font-bold text-sm inline-flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                        >
                          {agentSimulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                          {agentSimulating ? 'Running Agent Loop...' : 'Execute Simulator'}
                        </button>
                      </div>
                    </div>

                    <div className="bg-brand-dark rounded-lg p-5 flex flex-col justify-between border border-brand-dark">
                      <div>
                        <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                          <span className="font-mono text-xs text-white/50">SYS_LOG: aevos-agent-core@2.0</span>
                          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        </div>

                        <div className="font-mono text-xs text-white/80 space-y-2.5 overflow-y-auto max-h-64 scrollbar-thin">
                          {agentLog.length === 0 && (
                            <span className="text-white/30 italic">Pending user action simulation trigger...</span>
                          )}
                          {agentLog.map((log, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-2"
                            >
                              <span className="text-brand-cyan select-none">&gt;</span>
                              <span>{log}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {agentStep > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                          <span className="font-mono text-xs text-white/40">Execution Path Status:</span>
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan">
                            {agentStep === 7 ? 'COMPLETE (200 OK)' : `STEP_${agentStep}_RUNNING`}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeDemo === 'automation' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Network className="w-5 h-5 text-brand-cyan" />
                        <h4 className="font-display font-bold text-lg text-brand-dark">Intelligent Pipeline Orchestration</h4>
                      </div>
                      <p className="font-sans text-sm text-brand-gray mb-6 leading-relaxed">
                        Configure event-driven workflows that sync custom software models with real system actions. Eliminate human middleware and speed up transactions.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">Trigger Event</label>
                          <select
                            value={selectedTrigger}
                            onChange={(e) => setSelectedTrigger(e.target.value)}
                            disabled={automationRunning}
                            className="w-full bg-brand-lowest border border-outline-variant rounded p-2.5 font-display text-sm focus:border-brand-dark"
                          >
                            <option>New Zendesk Ticket</option>
                            <option>Salesforce Lead Created</option>
                            <option>S3 Bucket Upload</option>
                            <option>API Webhook Receipt</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">AI Middleware Action</label>
                          <select
                            value={selectedAction}
                            onChange={(e) => setSelectedAction(e.target.value)}
                            disabled={automationRunning}
                            className="w-full bg-brand-lowest border border-outline-variant rounded p-2.5 font-display text-sm focus:border-brand-dark"
                          >
                            <option>AI Sentiment & Auto-Route</option>
                            <option>Draft Personalized Response</option>
                            <option>Extract PII & Anonymize</option>
                            <option>Structured Schema Parse</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={runAutomation}
                        disabled={automationRunning}
                        className="bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-5 py-2.5 rounded font-display font-bold text-sm inline-flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {automationRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                        {automationRunning ? 'Executing Pipeline...' : 'Run Pipeline'}
                      </button>
                    </div>

                    <div className="bg-brand-lowest border border-outline-variant rounded-lg p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center pb-3 border-b border-outline-variant mb-4">
                          <span className="font-display text-xs font-bold text-brand-dark">Live Console Monitor</span>
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            automationRunning ? 'bg-amber-100 text-amber-800 animate-pulse' : 'bg-green-100 text-green-800'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${automationRunning ? 'bg-amber-600' : 'bg-green-600'}`} />
                            {automationRunning ? 'Processing' : 'Idle'}
                          </span>
                        </div>

                        {automationOutput ? (
                          <pre className="font-mono text-xs text-brand-dark whitespace-pre-line leading-relaxed">
                            {automationOutput}
                          </pre>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-10 text-center">
                            <Sliders className="w-8 h-8 text-brand-gray/30 mb-2" />
                            <span className="font-sans text-xs text-brand-gray">Trigger the pipeline to observe streaming console outputs</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'data' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-brand-cyan" />
                        <h4 className="font-display font-bold text-lg text-brand-dark">Predictive Vector Analytics</h4>
                      </div>
                      <p className="font-sans text-sm text-brand-gray mb-6 leading-relaxed">
                        Visualize how streaming high-fidelity pipelines capture siloed system trends and accurately chart predictive paths dynamically.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="flex justify-between font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                            <span>Pipeline Coverage</span>
                            <span className="text-brand-cyan">{dataCoverage}%</span>
                          </div>
                          <input
                            type="range"
                            min="20"
                            max="100"
                            value={dataCoverage}
                            onChange={(e) => setDataCoverage(Number(e.target.value))}
                            className="w-full h-1.5 bg-brand-low rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                            <span>Ingress Sample Rate</span>
                            <span className="text-brand-cyan">{dataSampling} Hz</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="50"
                            value={dataSampling}
                            onChange={(e) => setDataSampling(Number(e.target.value))}
                            className="w-full h-1.5 bg-brand-low rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-lowest border border-outline-variant rounded-lg p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center pb-3 border-b border-outline-variant mb-4">
                          <span className="font-display text-xs font-bold text-brand-dark">Predictive Yield Modeling</span>
                          <span className="font-mono text-xs text-brand-cyan font-bold">Confidence: 99.4%</span>
                        </div>

                        <div className="relative h-44 flex items-end">
                          {/* Beautiful Animated SVG Chart representing live-updating data curve */}
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150">
                            {/* Grid Lines */}
                            <line x1="0" y1="30" x2="300" y2="30" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="0" y1="75" x2="300" y2="75" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="0" y1="120" x2="300" y2="120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3,3" />
                            
                            {/* Ingress Data Curve */}
                            <motion.path
                              d={`M 0 130 Q 50 ${130 - dataCoverage * 0.4} 100 ${120 - dataCoverage * 0.6} T 200 ${100 - dataCoverage * 0.8} T 300 ${80 - dataCoverage * 0.9}`}
                              fill="none"
                              stroke="#E5E7EB"
                              strokeWidth="2"
                            />

                            {/* Predictive AI Inference Path */}
                            <motion.path
                              d={`M 0 130 Q 50 ${130 - dataCoverage * 0.4} 100 ${120 - dataCoverage * 0.6} T 200 ${100 - dataCoverage * 0.8} T 300 ${50 - dataCoverage * 0.9}`}
                              fill="none"
                              stroke="#06B6D4"
                              strokeWidth="3"
                              strokeDasharray="4,4"
                              animate={{ strokeDashoffset: [0, -20] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                            />

                            {/* Data points */}
                            <circle cx="200" cy={100 - dataCoverage * 0.8} r="4" fill="#06B6D4" />
                            <circle cx="300" cy={50 - dataCoverage * 0.9} r="4" fill="#06B6D4" className="animate-pulse" />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-outline-variant flex justify-between text-[11px] text-brand-gray font-mono">
                        <span>Latency: {(1000 / dataSampling).toFixed(0)}ms</span>
                        <span>Estimated Gain: +{(dataCoverage * 1.6).toFixed(1)}% YoY</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
