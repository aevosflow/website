import { motion } from 'motion/react';
import { CheckCircle, RefreshCw, Shield, Sparkles } from 'lucide-react';

const ADVANTAGES = [
  {
    title: 'Precision',
    description: "We don't do generic AI. Every system is engineered to your specific industry constraints and data privacy requirements.",
    icon: CheckCircle,
  },
  {
    title: 'Adaptability',
    description: 'Systems that learn and evolve. As your business grows, our intelligent workflows scale and optimize automatically.',
    icon: RefreshCw,
  },
  {
    title: 'Reliability',
    description: 'Enterprise-grade infrastructure built for 99.9% uptime. Reliable intelligence you can trust with your core operations.',
    icon: Shield,
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-low">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-4">
            Built For Long-Term Advantage
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-xl mx-auto">
            We deliver enterprise stability, zero-trust security boundaries, and custom parameter modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-brand-lowest border border-outline-variant/60 rounded-full flex items-center justify-center mb-6 text-brand-dark group-hover:text-brand-cyan group-hover:border-brand-cyan/80 transition-colors shadow-2xs group-hover:shadow-sm">
                  <Icon className="w-6 h-6 transition-transform group-hover:rotate-12 duration-300" />
                </div>
                
                <h4 className="font-display font-bold text-xl text-brand-dark mb-3">
                  {adv.title}
                </h4>
                
                <p className="font-sans text-brand-gray text-sm md:text-base leading-relaxed max-w-sm">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
