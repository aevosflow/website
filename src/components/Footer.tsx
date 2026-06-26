import { motion } from 'motion/react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // to match the original layout spec exactly!
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const closeModals = () => {
    setShowPrivacy(false);
    setShowTerms(false);
  };

  return (
    <footer className="bg-brand-low border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <img src="/logo.png" alt="AevosFlow" width={36} height={36} style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <span className="font-display font-extrabold text-2xl tracking-tight text-brand-dark">
              Aevos<span style={{ color: '#06B6D4' }}>Flow</span>
            </span>
          </div>
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
          <button onClick={() => { setShowPrivacy(true); setShowTerms(false); }} className="hover:text-brand-dark transition-colors">Privacy Policy</button>
          <button onClick={() => { setShowTerms(true); setShowPrivacy(false); }} className="hover:text-brand-dark transition-colors">Terms of Service</button>
        </div>
      </div>
      
      {/* Privacy / Terms Modals */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={closeModals} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-display font-bold text-lg">Privacy Policy</h3>
              <button onClick={closeModals} className="text-brand-gray hover:text-brand-dark">Close</button>
            </div>
            <div className="mt-4 text-sm text-brand-gray space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="font-semibold">Introduction</p>
              <p>
                AevosFlow (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains what
                information we collect, how we use it, when we may share it, and the choices you have
                regarding your information when using our website and services.
              </p>

              <p className="font-semibold">Information We Collect</p>
              <p>
                We collect information you provide directly (for example, contact forms or email
                communications) and information collected automatically (such as usage data, analytics
                and cookies). We do not sell personal information to third parties.
              </p>

              <p className="font-semibold">How We Use Information</p>
              <p>
                We use collected information to provide, maintain and improve our services, respond to
                inquiries, and communicate important updates. Aggregated or de-identified information may
                be used for analytics and product improvement.
              </p>

              <p className="font-semibold">Cookies & Tracking</p>
              <p>
                We use cookies and similar technologies to operate the site and analyze usage. You can
                control cookies through your browser settings; blocking cookies may affect site
                functionality.
              </p>

              <p className="font-semibold">Data Retention & Your Rights</p>
              <p>
                We retain personal information as long as necessary for the purposes described in this
                policy or as required by law. You may request access, correction, or deletion of your
                personal data by contacting us at the email below.
              </p>

              <p className="font-semibold">Security</p>
              <p>
                We take reasonable measures to protect information from unauthorized access, use or
                disclosure. However, no method of transmission over the internet or storage is
                completely secure.
              </p>

              <p className="font-semibold">Contact</p>
              <p>
                For privacy inquiries, email: <a href="mailto:info.aevosflow@gmail.com" className="text-brand-cyan">info.aevosflow@gmail.com</a>
              </p>

              <p className="font-semibold">Changes</p>
              <p>
                We may update this policy occasionally. When we do, we will revise the "last updated"
                date and, where appropriate, notify users of material changes.
              </p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={closeModals} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-display font-bold text-lg">Terms of Service</h3>
              <button onClick={closeModals} className="text-brand-gray hover:text-brand-dark">Close</button>
            </div>
            <div className="mt-4 text-sm text-brand-gray space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="font-semibold">Introduction</p>
              <p>
                These Terms of Service govern your use of AevosFlow's website and services. By using
                our site, you agree to these terms. If you do not agree, please do not use the site.
              </p>

              <p className="font-semibold">Use of Service</p>
              <p>
                Access to certain features may require creating an account. You agree to provide
                accurate information and to maintain the security of your account credentials.
              </p>

              <p className="font-semibold">Content & Conduct</p>
              <p>
                Users are responsible for their content and must not use the service for any unlawful
                or harmful activities. We reserve the right to remove content that violates these
                terms.
              </p>

              <p className="font-semibold">Intellectual Property</p>
              <p>
                AevosFlow and its licensors retain ownership of all intellectual property rights in
                the website and its content, except for user-submitted content which remains owned by
                the submitter subject to the license you grant us to display and use it.
              </p>

              <p className="font-semibold">Disclaimer of Warranties</p>
              <p>
                Services are provided "as is" and "as available" without warranties of any kind. We
                do not warrant uninterrupted access or that the site will be error-free.
              </p>

              <p className="font-semibold">Limitation of Liability</p>
              <p>
                To the extent permitted by law, AevosFlow will not be liable for indirect,
                incidental, special or consequential damages arising from your use of the service.
              </p>

              <p className="font-semibold">Governing Law</p>
              <p>
                These terms are governed by the laws of the applicable jurisdiction. For questions
                about these terms or commercial inquiries contact: <a href="mailto:info.aevosflow@gmail.com" className="text-brand-cyan">info.aevosflow@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}