import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { business } from '../../data/business';

export const About = () => {
  const { aboutSection, brand } = business;

  return (
    <section id="about" className="py-24 bg-[var(--shop-bg-secondary)] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border-2 border-[color:var(--shop-accent)]/20 rounded-xl transform translate-x-4 translate-y-4 -z-10 hidden md:block"></div>

            <div className="rounded-xl overflow-hidden shadow-2xl relative">
              <ImageWithFallback
                src={aboutSection.image}
                alt={aboutSection.imageAlt}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-[var(--shop-accent)] text-black w-14 h-14 rounded-full flex items-center justify-center font-['Oswald'] font-bold text-2xl shadow-lg">
                    {aboutSection.experienceNumber}
                  </div>

                  <div>
                    <h4 className="text-[var(--shop-text-primary)] font-['Oswald'] uppercase tracking-wider font-bold text-lg">
                      {aboutSection.experienceLabel}
                    </h4>
                    <p className="text-[var(--shop-text-secondary)] text-sm font-['Inter']">
                      {aboutSection.experienceSubtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-6">
              {aboutSection.title}{' '}
              <span className="text-[var(--shop-accent)]">{brand.name}</span>{' '}
              {aboutSection.titleSuffix}
            </h2>

            <div className="w-24 h-1 bg-[var(--shop-accent)] mb-8"></div>

            <p className="text-[var(--shop-text-secondary)] font-['Inter'] text-lg leading-relaxed mb-8">
              {aboutSection.description}
            </p>

            <ul className="space-y-4 mb-10">
              {aboutSection.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-[var(--shop-accent)] flex-shrink-0" size={24} />
                  <span className="text-[var(--shop-text-primary)] font-['Inter'] text-lg font-medium tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={aboutSection.buttonHref}
              className="inline-block bg-[var(--shop-accent)] text-black px-8 py-4 rounded hover:bg-[var(--shop-text-primary)] transition-colors font-bold uppercase tracking-wider"
            >
              {aboutSection.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};