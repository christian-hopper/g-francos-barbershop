import React from 'react';
import { business } from '../../data/business';

export const CTASection = () => {
  const { ctaSection, contact } = business;

  return (
    <section className="relative py-24 bg-[var(--shop-bg-primary)] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 bg-[var(--shop-card-bg)] p-12 md:p-20 rounded-2xl border border-[color:var(--shop-accent)]/30">
        <h2 className="text-5xl md:text-6xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-6 leading-tight">
          {ctaSection.title}
          <br className="md:hidden" />
          <span className="text-[var(--shop-accent)]"> {ctaSection.titleAccent}</span>
        </h2>

        <p className="text-xl text-[var(--shop-text-secondary)] font-['Inter'] mb-10 max-w-2xl mx-auto">
          {ctaSection.description}
        </p>

        <a
          href={contact.bookingHref}
          className="inline-block bg-[var(--shop-accent)] text-black px-12 py-5 rounded-md hover:bg-[var(--shop-text-primary)] transition-all transform hover:scale-105 font-bold uppercase tracking-widest text-lg active:scale-95"
        >
          {ctaSection.buttonText}
        </a>
      </div>
    </section>
  );
};