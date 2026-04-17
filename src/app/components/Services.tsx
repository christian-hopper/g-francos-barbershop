import React from 'react';
import { Scissors, Sparkles, Smile, Target, Droplet } from 'lucide-react';
import { business } from '../../data/business';

const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  smile: Smile,
  target: Target,
  droplet: Droplet,
} as const;

export const Services = () => {
  const { servicesSection } = business;

  return (
    <section id="services" className="py-24 bg-[var(--shop-bg-secondary)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
            {servicesSection.title}{' '}
            <span className="text-[var(--shop-accent)]">{servicesSection.titleAccent}</span>
          </h2>

          <div className="w-24 h-1 bg-[var(--shop-accent)] mx-auto mb-6"></div>

          <p className="text-[var(--shop-text-secondary)] font-['Inter'] max-w-2xl mx-auto text-lg">
            {servicesSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesSection.items.map((service, idx) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={idx}
                className="bg-[var(--shop-card-bg)] p-8 rounded-xl border border-white/5 hover:border-[color:var(--shop-accent)]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="bg-[var(--shop-bg-primary)] w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[var(--shop-accent)]" />
                </div>

                <h3 className="text-xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-3 group-hover:text-[var(--shop-accent)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[var(--shop-text-secondary)] font-['Inter'] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-[var(--shop-card-bg)] to-[var(--shop-bg-primary)] p-8 rounded-xl border border-[color:var(--shop-accent)]/30 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
              {servicesSection.ctaTitle}
            </h3>

            <a
              href={servicesSection.ctaHref}
              className="bg-[var(--shop-accent)] text-black px-6 py-3 rounded hover:bg-[var(--shop-text-primary)] transition-colors font-bold uppercase tracking-wider text-sm w-full"
            >
              {servicesSection.ctaButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};