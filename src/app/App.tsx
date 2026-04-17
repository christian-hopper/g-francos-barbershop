import React, { useEffect } from 'react';
import { business } from '../data/business';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = business.brand.fullName;

    const root = document.documentElement;
    root.style.setProperty('--shop-accent', business.theme.accent);
    root.style.setProperty('--shop-bg-primary', business.theme.bgPrimary);
    root.style.setProperty('--shop-bg-secondary', business.theme.bgSecondary);
    root.style.setProperty('--shop-card-bg', business.theme.cardBg);
    root.style.setProperty('--shop-text-primary', business.theme.textPrimary);
    root.style.setProperty('--shop-text-secondary', business.theme.textSecondary);
  }, []);

  return (
    <div className="bg-[var(--shop-bg-primary)] text-[var(--shop-text-primary)] min-h-screen font-['Inter'] selection:bg-[var(--shop-accent)] selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}