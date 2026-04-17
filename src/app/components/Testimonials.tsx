import React from 'react';
import { Star, Quote } from 'lucide-react';
import { business } from '../../data/business';

export const Testimonials = () => {
  const { testimonialsSection } = business;

  return (
    <section className="py-24 bg-[var(--shop-bg-primary)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--shop-accent)]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
            {testimonialsSection.title}{' '}
            <span className="text-[var(--shop-accent)]">
              {testimonialsSection.titleAccent}
            </span>
          </h2>

          <div className="w-24 h-1 bg-[var(--shop-accent)] mx-auto mb-6"></div>

          <p className="text-[var(--shop-text-secondary)] font-['Inter'] max-w-2xl mx-auto text-lg">
            {testimonialsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsSection.items.map((review, idx) => (
            <div
              key={idx}
              className="bg-[var(--shop-card-bg)] p-8 rounded-xl border border-white/5 hover:border-[color:var(--shop-accent)]/30 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 text-[color:var(--shop-accent)]/10 w-16 h-16" />

              <div className="flex text-[var(--shop-accent)] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-[var(--shop-text-primary)] font-['Inter'] text-lg italic leading-relaxed mb-8 relative z-10">
                “{review.text}”
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[var(--shop-bg-primary)] border border-[color:var(--shop-accent)]/50 flex items-center justify-center text-[var(--shop-accent)] font-['Oswald'] font-bold text-xl">
                  {review.author.charAt(0)}
                </div>

                <span className="text-[var(--shop-text-secondary)] font-['Oswald'] uppercase tracking-wider font-bold">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};