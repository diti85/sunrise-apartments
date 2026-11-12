"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";

export function Contact() {
  const { t } = useLocale();
  const f = t.contact.form;
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-light text-foreground mb-6 tracking-wide">
                {t.contact.infoTitle}
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:info@sunriseapartments.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                      {t.contact.email}
                    </p>
                    <p className="text-sm">info@sunriseapartments.com</p>
                  </div>
                </a>

                <a
                  href="tel:+38344116924"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                      {t.contact.phone}
                    </p>
                    <p className="text-sm">+383 44 116 924</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/UFQ6M3n1yreo6vvZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                      {t.contact.location}
                    </p>
                    <p className="text-sm">{t.contact.locationText}</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                      {t.contact.instagram}
                    </p>
                    <p className="text-sm">@sunriseapartments</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    {f.firstName}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder={f.firstNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    {f.lastName}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder={f.lastNamePlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {f.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder={f.emailPlaceholder}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    {f.checkIn}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    {f.checkOut}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {f.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder={f.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
              >
                {f.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
