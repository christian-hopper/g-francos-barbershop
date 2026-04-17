import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../../data/business';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Inter'] ${
        isScrolled
          ? 'bg-[color:var(--shop-bg-primary)]/95 backdrop-blur-md shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-[var(--shop-text-primary)] font-['Oswald'] text-2xl md:text-3xl font-bold uppercase tracking-wide"
            >
              {business.brand.logoPrimary}{' '}
              <span className="text-[var(--shop-accent)]">{business.brand.logoAccent}</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--shop-text-secondary)] hover:text-[var(--shop-text-primary)] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href={business.contact.bookingHref}
              className="bg-[var(--shop-accent)] text-black px-6 py-2.5 rounded hover:bg-[var(--shop-text-primary)] transition-colors font-bold uppercase tracking-wider text-sm"
            >
              {business.hero.primaryCta}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a
              href={business.contact.bookingHref}
              className="bg-[var(--shop-accent)] text-black px-4 py-2 rounded hover:bg-[var(--shop-text-primary)] transition-colors font-bold uppercase tracking-wider text-xs"
            >
              {business.hero.primaryCta}
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--shop-text-primary)] hover:text-[var(--shop-accent)] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--shop-bg-primary)] border-t border-[color:var(--shop-card-bg)] shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--shop-text-secondary)] hover:text-[var(--shop-accent)] block px-3 py-4 text-base font-medium uppercase tracking-wide border-b border-[color:var(--shop-card-bg)]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};