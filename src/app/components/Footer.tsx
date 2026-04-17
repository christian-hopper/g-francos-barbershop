import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { business } from '../../data/business';

export const Footer = () => {
  const { brand, footer, contact, socials } = business;

  return (
    <footer className="bg-[var(--shop-bg-primary)] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="text-[var(--shop-text-primary)] font-['Oswald'] text-3xl font-bold uppercase tracking-wide inline-block mb-6"
            >
              {brand.logoPrimary}{' '}
              <span className="text-[var(--shop-accent)]">{brand.logoAccent}</span>
            </a>

            <p className="text-[var(--shop-text-secondary)] font-['Inter'] leading-relaxed mb-8">
              {footer.description}
            </p>

            <div className="flex space-x-4">
              <a
                href={socials.instagram}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[var(--shop-card-bg)] flex items-center justify-center text-[var(--shop-text-primary)] hover:bg-[var(--shop-accent)] hover:text-black transition-colors border border-white/5 hover:border-[var(--shop-accent)]"
              >
                <Instagram size={20} />
              </a>

              <a
                href={socials.facebook}
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[var(--shop-card-bg)] flex items-center justify-center text-[var(--shop-text-primary)] hover:bg-[var(--shop-accent)] hover:text-black transition-colors border border-white/5 hover:border-[var(--shop-accent)]"
              >
                <Facebook size={20} />
              </a>

              <a
                href={socials.twitter}
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[var(--shop-card-bg)] flex items-center justify-center text-[var(--shop-text-primary)] hover:bg-[var(--shop-accent)] hover:text-black transition-colors border border-white/5 hover:border-[var(--shop-accent)]"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--shop-text-primary)] font-['Oswald'] text-xl uppercase tracking-wider font-bold mb-6">
              {footer.quickLinksTitle}
            </h4>

            <ul className="space-y-3 font-['Inter'] text-[var(--shop-text-secondary)]">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[var(--shop-accent)] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--shop-text-primary)] font-['Oswald'] text-xl uppercase tracking-wider font-bold mb-6">
              {footer.contactTitle}
            </h4>

            <ul className="space-y-3 font-['Inter'] text-[var(--shop-text-secondary)]">
              <li>{contact.addressLine1}</li>
              <li>{contact.addressLine2}</li>
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="hover:text-[var(--shop-accent)] transition-colors font-medium text-[var(--shop-text-primary)]"
                >
                  {contact.phoneFormatted}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={footer.directionsHref}
                  className="text-[var(--shop-accent)] font-semibold uppercase tracking-wider text-sm hover:text-[var(--shop-text-primary)] transition-colors"
                >
                  {footer.directionsText} &rarr;
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--shop-text-primary)] font-['Oswald'] text-xl uppercase tracking-wider font-bold mb-6">
              {footer.newsletterTitle}
            </h4>

            <p className="text-[var(--shop-text-secondary)] font-['Inter'] text-sm mb-4">
              {footer.newsletterText}
            </p>

            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder={footer.newsletterPlaceholder}
                  className="w-full bg-[var(--shop-card-bg)] border border-white/10 rounded-md px-4 py-3 text-[var(--shop-text-primary)] focus:outline-none focus:border-[var(--shop-accent)] transition-colors font-['Inter'] pl-10 text-sm"
                />
                <Mail className="absolute left-3 top-3.5 text-[var(--shop-text-secondary)] w-4 h-4" />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--shop-accent)] text-black font-bold uppercase tracking-wider py-3 rounded-md hover:bg-[var(--shop-text-primary)] transition-colors text-sm"
              >
                {footer.newsletterButtonText}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[var(--shop-text-secondary)] font-['Inter'] text-sm">
          <p>
            &copy; {new Date().getFullYear()} {brand.fullName}. {footer.copyrightText}
          </p>

          <div className="flex space-x-6">
            <a href={footer.privacyHref} className="hover:text-[var(--shop-accent)] transition-colors">
              {footer.privacyText}
            </a>
            <a href={footer.termsHref} className="hover:text-[var(--shop-accent)] transition-colors">
              {footer.termsText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};