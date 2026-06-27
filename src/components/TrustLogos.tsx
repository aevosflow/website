import { motion } from 'motion/react';

const LOGOS = [
  { name: 'NEURAL', symbol: '◬' },
  { name: 'VERTEX', symbol: '▲' },
  { name: 'STRATA', symbol: '☰' },
  { name: 'OMNI', symbol: '⭘' },
  { name: 'NEXUS', symbol: '◆' },
];

export default function TrustLogos() {
  return (
    <section className="py-16 bg-brand-lowest border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs font-semibold uppercase tracking-widest text-brand-gray mb-10"
        >
          Trusted by modern businesses building smarter operations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20"
        >
          {LOGOS.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              whileHover={{ opacity: 0.9, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-center gap-2 font-display text-base font-bold text-brand-dark tracking-widest cursor-default select-none grayscale hover:grayscale-0 transition-all"
            >
              <span className="text-xl text-brand-cyan font-normal">{logo.symbol}</span>
              <span>{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
