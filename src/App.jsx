import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustTicker from './components/TrustTicker';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#008BB9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustTicker />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
