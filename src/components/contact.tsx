"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Contact() {
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
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            Book Your Stay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to experience luxury living? Reach out to us and we&apos;ll
            help you find the perfect apartment for your stay.
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
                Contact Information
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
                      Email
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
                      Phone
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
                      Location
                    </p>
                    <p className="text-sm">Prishtina, Kosovo · View on Google Maps</p>
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
                      Instagram
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
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your ideal stay..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
