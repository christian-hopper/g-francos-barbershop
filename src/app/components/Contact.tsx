import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { business } from '../../data/business';

export const Contact = () => {
  const { contact, contactSection } = business;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(contactSection.formSuccessMessage);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--shop-bg-secondary)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
            {contactSection.title}{' '}
            <span className="text-[var(--shop-accent)]">{contactSection.titleAccent}</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--shop-accent)] mx-auto mb-6"></div>
          <p className="text-[var(--shop-text-secondary)] font-['Inter'] max-w-2xl mx-auto text-lg">
            {contactSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12 bg-[var(--shop-card-bg)] p-8 md:p-12 rounded-xl border border-white/5">
            <div className="flex items-start space-x-6">
              <div className="bg-[var(--shop-bg-primary)] p-4 rounded-full border border-[color:var(--shop-accent)]/30 flex-shrink-0">
                <MapPin className="w-6 h-6 text-[var(--shop-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-2">
                  {contactSection.locationLabel}
                </h3>
                <p className="text-[var(--shop-text-secondary)] font-['Inter'] leading-relaxed">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                  <br />
                  <span className="text-sm">{contact.addressNote}</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[var(--shop-bg-primary)] p-4 rounded-full border border-[color:var(--shop-accent)]/30 flex-shrink-0">
                <Phone className="w-6 h-6 text-[var(--shop-accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-2">
                  {contactSection.callLabel}
                </h3>
                <p className="text-[var(--shop-text-secondary)] font-['Inter'] leading-relaxed text-lg">
                  {contact.phoneFormatted}
                </p>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="text-[var(--shop-accent)] hover:text-[var(--shop-text-primary)] transition-colors text-sm font-['Inter'] font-semibold mt-1 inline-block uppercase tracking-wider"
                >
                  {contactSection.callNowText} &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[var(--shop-bg-primary)] p-4 rounded-full border border-[color:var(--shop-accent)]/30 flex-shrink-0">
                <Clock className="w-6 h-6 text-[var(--shop-accent)]" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-4">
                  {contactSection.hoursLabel}
                </h3>
                <ul className="text-[var(--shop-text-secondary)] font-['Inter'] space-y-3 w-full max-w-xs">
                  {contactSection.hours.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex justify-between pb-2 ${
                        item.closed
                          ? 'text-red-400'
                          : 'border-b border-white/10'
                      }`}
                    >
                      <span>{item.days}</span>
                      <span className={item.closed ? 'font-medium' : 'text-[var(--shop-text-primary)] font-medium'}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--shop-card-bg)] p-8 md:p-12 rounded-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Mail className="w-48 h-48 text-[var(--shop-text-primary)]" />
            </div>

            <h3 className="text-3xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide mb-8 relative z-10">
              {contactSection.formTitle}{' '}
              <span className="text-[var(--shop-accent)]">{contactSection.formTitleAccent}</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-['Inter'] font-medium text-[var(--shop-text-secondary)] mb-2 uppercase tracking-wide"
                >
                  {contactSection.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--shop-bg-primary)] border border-white/10 rounded-md px-4 py-3 text-[var(--shop-text-primary)] focus:outline-none focus:border-[var(--shop-accent)] focus:ring-1 focus:ring-[var(--shop-accent)] transition-colors font-['Inter']"
                  placeholder={contactSection.formPlaceholders.name}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-['Inter'] font-medium text-[var(--shop-text-secondary)] mb-2 uppercase tracking-wide"
                >
                  {contactSection.formLabels.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[var(--shop-bg-primary)] border border-white/10 rounded-md px-4 py-3 text-[var(--shop-text-primary)] focus:outline-none focus:border-[var(--shop-accent)] focus:ring-1 focus:ring-[var(--shop-accent)] transition-colors font-['Inter']"
                  placeholder={contactSection.formPlaceholders.phone}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-['Inter'] font-medium text-[var(--shop-text-secondary)] mb-2 uppercase tracking-wide"
                >
                  {contactSection.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[var(--shop-bg-primary)] border border-white/10 rounded-md px-4 py-3 text-[var(--shop-text-primary)] focus:outline-none focus:border-[var(--shop-accent)] focus:ring-1 focus:ring-[var(--shop-accent)] transition-colors font-['Inter'] resize-none"
                  placeholder={contactSection.formPlaceholders.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--shop-accent)] text-black font-bold uppercase tracking-wider py-4 rounded-md hover:bg-[var(--shop-text-primary)] transition-colors text-lg"
              >
                {contactSection.submitButtonText}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-[var(--shop-card-bg)] rounded-xl border border-white/5 h-80 w-full overflow-hidden flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-[color:var(--shop-bg-primary)]/50 group-hover:bg-transparent transition-colors z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
            style={{ backgroundImage: `url('${contactSection.mapBackgroundImage}')` }}
          ></div>

          <div className="relative z-20 text-center">
            <div className="bg-[var(--shop-bg-primary)] p-6 rounded-full inline-block border-2 border-[var(--shop-accent)] animate-bounce mb-4">
              <MapPin className="w-10 h-10 text-[var(--shop-accent)]" />
            </div>
            <h3 className="text-2xl font-['Oswald'] font-bold text-[var(--shop-text-primary)] uppercase tracking-wide drop-shadow-md">
              {contactSection.mapTitle}
            </h3>
            <p className="text-[var(--shop-accent)] font-['Inter'] font-medium mt-2 drop-shadow-md">
              {contactSection.mapAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};