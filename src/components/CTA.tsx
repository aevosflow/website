import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle, Mail, Briefcase, User, X, Sparkles, Send, ArrowRight } from 'lucide-react';

interface CTAProps {
  showBookingModal: boolean;
  onCloseBookingModal: () => void;
  onOpenBookingModal: () => void;
}

const TIME_SLOTS = [
  '09:00 AM EST',
  '11:30 AM EST',
  '02:00 PM EST',
  '04:30 PM EST'
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Simple mock calendar dates for June/July 2026
const BOOKING_DATES = [
  { day: '25', month: 'Jun', weekday: 'Thu', available: true },
  { day: '26', month: 'Jun', weekday: 'Fri', available: true },
  { day: '29', month: 'Jun', weekday: 'Mon', available: true },
  { day: '30', month: 'Jun', weekday: 'Tue', available: true },
  { day: '01', month: 'Jul', weekday: 'Wed', available: true },
  { day: '02', month: 'Jul', weekday: 'Thu', available: true },
];

export default function CTA({ showBookingModal, onCloseBookingModal, onOpenBookingModal }: CTAProps) {
  const [selectedDate, setSelectedDate] = useState<typeof BOOKING_DATES[0] | null>(BOOKING_DATES[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(TIME_SLOTS[0]);
  const [formStep, setFormStep] = useState<number>(1); // 1: Date & Time, 2: Form Info, 3: Success

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);
    // Simulate API request to save booking
    setTimeout(() => {
      setSubmitting(false);
      setFormStep(3);
    }, 1500);
  };

  const handleClose = () => {
    onCloseBookingModal();
    // delay reset slightly for animation smoothness
    setTimeout(() => {
      setFormStep(1);
      setName('');
      setEmail('');
      setCompany('');
      setNotes('');
    }, 300);
  };

  return (
    <>
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden" id="contact">
        {/* Subtle glowing mesh backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6">
              Build Your Next Competitive Advantage
            </h2>
            
            <p className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's discuss how customized AI systems can transform your operational efficiency. Bypassing generic models, we design robust pipelines tailored to your enterprise.
            </p>
            
            <button
              onClick={onOpenBookingModal}
              id="cta-schedule-btn"
              className="bg-white text-brand-dark hover:bg-brand-cyan hover:text-brand-dark px-10 py-4 rounded-md font-display font-bold text-base transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-brand-cyan/25 cursor-pointer"
            >
              Schedule Discovery Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Booking Calendar Dialog Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-brand-dark"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-brand-lowest text-brand-dark rounded-xl border border-outline-variant/60 shadow-2xl max-w-lg w-full overflow-hidden z-10"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-brand-low/50 border-b border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                  <span className="font-display font-bold text-sm text-brand-dark">Book Strategy Session</span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-full hover:bg-brand-low text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Steps */}
              <div className="p-6">
                {formStep === 1 && (
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-1">Select Date & Time</h3>
                    <p className="font-sans text-xs text-brand-gray mb-6">Strategy discovery sessions are 30-minute, high-density calls with an AI Architect.</p>

                    {/* Date Selector */}
                    <div className="mb-6">
                      <span className="block font-display text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-3">Available Dates</span>
                      <div className="grid grid-cols-3 gap-2">
                        {BOOKING_DATES.map((d) => {
                          const isSelected = selectedDate?.day === d.day && selectedDate?.month === d.month;
                          return (
                            <button
                              key={`${d.month}-${d.day}`}
                              onClick={() => setSelectedDate(d)}
                              className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-brand-cyan bg-brand-cyan/10 text-brand-dark font-semibold shadow-2xs'
                                  : 'border-outline-variant/40 bg-brand-lowest hover:border-brand-dark text-brand-gray hover:text-brand-dark'
                              }`}
                            >
                              <span className="block font-sans text-[11px] uppercase tracking-wider opacity-85">{d.weekday}</span>
                              <span className="block font-display text-lg font-extrabold mt-0.5">{d.day}</span>
                              <span className="block font-sans text-[10px]">{d.month}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Selector */}
                    <div className="mb-8">
                      <span className="block font-display text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-3">Available Slots</span>
                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map((t) => {
                          const isSelected = selectedTime === t;
                          return (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`p-3 rounded-lg border text-center font-display text-xs transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-brand-cyan bg-brand-cyan/10 text-brand-dark font-bold shadow-2xs'
                                  : 'border-outline-variant/40 bg-brand-lowest hover:border-brand-dark text-brand-gray hover:text-brand-dark'
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={() => setFormStep(2)}
                      disabled={!selectedDate || !selectedTime}
                      className="w-full bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark py-3 rounded-lg font-display font-bold text-sm transition-all inline-flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      Continue to Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {formStep === 2 && (
                  <form onSubmit={handleBookingSubmit}>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-1">Confirm Information</h3>
                    
                    {/* Selected Summary Badge */}
                    <div className="flex items-center gap-4 bg-brand-low/50 border border-outline-variant/30 p-3 rounded-lg mb-6 mt-2">
                      <div className="p-2 bg-brand-lowest rounded border border-outline-variant/30 text-brand-cyan">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="text-xs">
                        <span className="font-display font-bold text-brand-dark block">
                          {selectedDate?.weekday}, {selectedDate?.month} {selectedDate?.day}, 2026
                        </span>
                        <span className="font-sans text-brand-gray block mt-0.5">
                          {selectedTime}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="ml-auto font-display text-[11px] font-bold text-brand-cyan hover:underline cursor-pointer"
                      >
                        Change
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-brand-gray/60" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-brand-lowest border border-outline-variant/60 rounded-md py-2.5 pl-10 pr-4 font-sans text-sm text-brand-dark focus:border-brand-dark focus:ring-0"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Work Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-gray/60" />
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-brand-lowest border border-outline-variant/60 rounded-md py-2.5 pl-10 pr-4 font-sans text-sm text-brand-dark focus:border-brand-dark focus:ring-0"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Company Name</label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-3 w-4 h-4 text-brand-gray/60" />
                            <input
                              type="text"
                              placeholder="Acme Corp"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              className="w-full bg-brand-lowest border border-outline-variant/60 rounded-md py-2.5 pl-10 pr-4 font-sans text-sm text-brand-dark focus:border-brand-dark focus:ring-0"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-display text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1.5">Primary Friction Bottleneck (Optional)</label>
                        <textarea
                          placeholder="Manual risk checking, old legacy APIs..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-brand-lowest border border-outline-variant/60 rounded-md p-3 font-sans text-sm text-brand-dark focus:border-brand-dark focus:ring-0 resize-none h-20"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || !name || !email}
                      className="w-full bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark py-3 rounded-lg font-display font-bold text-sm transition-all inline-flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? 'Securing Calendar...' : 'Confirm Strategy Session'}
                      {submitting ? <Clock className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                  </form>
                )}

                {formStep === 3 && (
                  <div className="text-center py-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-6"
                    >
                      <CheckCircle className="w-12 h-12" />
                    </motion.div>

                    <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-2">Strategy Call Scheduled!</h3>
                    <p className="font-sans text-sm text-brand-gray max-w-sm mx-auto leading-relaxed mb-6">
                      An invitation and pre-meeting operational questionnaire have been dispatched to <span className="font-semibold text-brand-dark">{email}</span>.
                    </p>

                    <div className="bg-brand-low/50 border border-outline-variant/30 rounded-lg p-4 mb-8 text-left max-w-sm mx-auto text-xs">
                      <div className="flex justify-between mb-1.5">
                        <span className="font-display font-bold text-brand-dark">Attendee:</span>
                        <span className="font-sans text-brand-gray">{name}</span>
                      </div>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-display font-bold text-brand-dark">Host:</span>
                        <span className="font-sans text-brand-gray">AevosFlow Solutions</span>
                      </div>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-display font-bold text-brand-dark">Date:</span>
                        <span className="font-sans text-brand-gray">{selectedDate?.weekday}, {selectedDate?.month} {selectedDate?.day}, 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-brand-dark">Time:</span>
                        <span className="font-sans text-brand-gray">{selectedTime}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleClose}
                      className="bg-brand-dark text-white hover:bg-brand-cyan hover:text-brand-dark px-6 py-2.5 rounded-lg font-display font-bold text-sm transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
