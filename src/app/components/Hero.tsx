import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { business } from '../../data/business';

export const Hero = () => {
  const { hero, contact } = business;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--shop-bg-primary)] via-[color:var(--shop-bg-primary)]/80 to-[color:var(--shop-bg-primary)]/40 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 bg-[color:var(--shop-card-bg)]/60 backdrop-blur-sm border border-white/10 w-fit px-4 py-2 rounded-full">
            <div className="flex text-[var(--shop-accent)]">
              {[...Array(hero.ratingStars)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-[var(--shop-text-primary)] text-sm font-['Inter'] font-medium">
              {hero.ratingText}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase leading-[1.1] mb-6">
            {hero.headlineLine1}
            <br />
            <span className="text-[var(--shop-accent)]">{hero.headlineLine2}</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--shop-text-secondary)] font-['Inter'] mb-10 max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href={contact.bookingHref}
              className="bg-[var(--shop-accent)] text-black px-8 py-4 rounded hover:bg-[var(--shop-text-primary)] transition-colors font-bold uppercase tracking-wider text-center text-sm sm:text-base"
            >
              {hero.primaryCta}
            </a>

            <a
              href={`tel:${contact.phoneRaw}`}
              className="border-2 border-[var(--shop-text-primary)] text-[var(--shop-text-primary)] px-8 py-4 rounded hover:bg-[var(--shop-text-primary)] hover:text-black transition-all font-bold uppercase tracking-wider text-center text-sm sm:text-base"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex items-center space-x-3 text-[var(--shop-text-primary)]">
            <CheckCircle className="text-[var(--shop-accent)]" size={20} />
            <span className="font-['Inter'] text-sm tracking-wide">
              {hero.trustText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};