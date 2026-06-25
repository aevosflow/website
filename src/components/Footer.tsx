import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = 2024; // to match the original layout spec exactly!

  return (
    <footer className="bg-brand-low border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <span className="font-display font-extrabold text-2xl tracking-tight text-brand-dark block mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
            AevosFlow
          </span>
          <p className="font-sans text-sm text-brand-gray leading-relaxed">
            Engineering Editorial Excellence in Intelligent Systems. Deploying enterprise stability, zero-trust security parameters, and custom parameter modeling.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
          <div className="flex flex-col gap-3.5">
            <span className="font-display text-xs font-extrabold text-brand-dark uppercase tracking-wider">Solutions</span>
            <a href="#solutions" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">AI Agents</a>
            <a href="#solutions" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">Automation</a>
            <a href="#solutions" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">Data Pipelines</a>
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="font-display text-xs font-extrabold text-brand-dark uppercase tracking-wider">Resources</span>
            <a href="#insights" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">Insights</a>
            <a href="#case-studies" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">Case Studies</a>
            <a href="#" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">API Specs</a>
          </div>

          <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
            <span className="font-display text-xs font-extrabold text-brand-dark uppercase tracking-wider">Connect</span>
            <a href="#" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">LinkedIn</a>
            <a href="mailto:info@aevosflow.com" className="font-sans text-sm text-brand-gray hover:text-brand-dark hover:underline underline-offset-4 decoration-1 transition-all">Email Specialist</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-gray font-display font-semibold">
        <span>© {currentYear} AevosFlow. Engineering Editorial Excellence.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
