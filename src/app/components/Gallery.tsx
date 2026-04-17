import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { business } from '../../data/business';

export const Gallery = () => {
  const { gallerySection, brand } = business;

  return (
    <section id="gallery" className="py-24 bg-[var(--shop-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
              {gallerySection.title}{' '}
              <span className="text-[var(--shop-accent)]">{gallerySection.titleAccent}</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--shop-accent)] mb-6 md:mb-0"></div>
          </div>

          <p className="text-[var(--shop-text-secondary)] font-['Inter'] max-w-sm text-lg mt-4 md:mt-0 md:text-right">
            {gallerySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallerySection.images.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl h-80 lg:h-96 bg-[var(--shop-card-bg)]"
            >
              <ImageWithFallback
                src={src}
                alt={`${brand.name} Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-[var(--shop-text-primary)] p-6 font-['Oswald'] uppercase tracking-widest text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {gallerySection.overlayText}{' '}
                  <span className="text-[var(--shop-accent)]">{gallerySection.overlayAccent}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};