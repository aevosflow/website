import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Solutions from './components/Solutions';
import Outcomes from './components/Outcomes';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Insights from './components/Insights';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleOpenBooking = () => setShowBookingModal(true);
  const handleCloseBooking = () => setShowBookingModal(false);

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-cyan selection:text-brand-dark overflow-x-hidden antialiased">
      {/* Fixed top navigation */}
      <Navbar onContactClick={handleOpenBooking} />

      {/* Hero Header Section */}
      <Hero onBookCall={handleOpenBooking} />

      {/* Trust Banner with Gray skeleton blocks */}
      <TrustLogos />

      {/* Solutions Cards ("What We Build") */}
      <Solutions />

      {/* Outcomes Grid */}
      <Outcomes />

      {/* Process Roadmap */}
      <Process />

      {/* Case Studies */}
      <CaseStudies />

      {/* Insights Blog */}
      <Insights />

      {/* Why Us Cards */}
      <WhyUs />

      {/* Call to Action with Integrated Scheduler */}
      <CTA
        showBookingModal={showBookingModal}
        onOpenBookingModal={handleOpenBooking}
        onCloseBookingModal={handleCloseBooking}
      />

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
