import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, Users, Cpu } from 'lucide-react';

const OUTCOMES = [
  {
    value: '40%',
    metric: 'Customer Support',
    description: 'Reduction in tickets through conversational AI agents.',
    icon: Users,
    color: 'from-brand-cyan/20 to-transparent',
  },
  {
    value: '2.5x',
    metric: 'Operations',
    description: 'Increase in throughput with automated processing.',
    icon: Cpu,
    color: 'from-brand-cyan/20 to-transparent',
  },
  {
    value: '15%',
    metric: 'Sales',
    description: 'Higher lead conversion via intelligent scoring.',
    icon: TrendingUp,
    color: 'from-brand-cyan/20 to-transparent',
  },
  {
    value: 'Real-Time',
    metric: 'Analytics',
    description: 'Immediate visibility into critical business metrics.',
    icon: ShieldAlert,
    color: 'from-brand-cyan/20 to-transparent',
  }
];

export default function Outcomes() {
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
            Outcomes That Matter
          </h2>
          <p className="font-sans text-brand-gray text-base md:text-lg max-w-xl mx-auto">
            Practical intelligence built to yield clear quantitative performance gains for modern enterprise scales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTCOMES.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <motion.div
                key={outcome.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-brand-lowest p-8 border border-outline-variant/50 rounded-xl relative overflow-hidden group shadow-xs hover:shadow transition-all"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${outcome.color} opacity-40 rounded-bl-full z-0 pointer-events-none group-hover:scale-110 transition-transform duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-brand-cyan mb-4 inline-flex">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark tracking-tight mb-2">
                    {outcome.value}
                  </div>
                  
                  <div className="font-display font-bold text-sm text-brand-dark mb-2 uppercase tracking-wider">
                    {outcome.metric}
                  </div>
                  
                  <p className="font-sans text-brand-gray text-xs md:text-sm leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
