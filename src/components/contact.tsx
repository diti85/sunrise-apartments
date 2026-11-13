"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Globe } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";
import { apartments } from "@/components/apartment-card";

/** Owner's WhatsApp number in international format, digits only (for wa.me links). */
const WHATSAPP_NUMBER = "38344116924";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const fieldClass =
  "w-full px-4 py-3 bg-secondary/50 border border-border text-foreground text-sm focus:border-primary/50 focus:outline-none transition-colors";
const labelClass =
  "block text-xs tracking-widest uppercase text-muted-foreground mb-2";

const emptyForm = {
  firstName: "",
  lastName: "",
  apartment: "",
  guests: "2",
  checkIn: "",
  checkOut: "",
  message: "",
};

export function Contact() {
  const { t } = useLocale();
  const f = t.contact.form;
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);

  const update =
    (key: keyof typeof emptyForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setError(null);
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nights = Math.round(
      (Date.parse(form.checkOut) - Date.parse(form.checkIn)) / 86_400_000,
    );
    if (!(nights > 0)) {
      setError(f.errorDates);
      return;
    }

    const name = `${form.firstName} ${form.lastName}`.trim();
    const apartmentName =
      apartments.find((a) => a.id === form.apartment)?.name ?? f.apartmentAny;

    const lines = [
      f.wa.greeting,
      "",
      `*${f.wa.name}:* ${name}`,
      `*${f.wa.apartment}:* ${apartmentName}`,
      `*${f.wa.checkIn}:* ${form.checkIn}`,
      `*${f.wa.checkOut}:* ${form.checkOut} (${nights} ${f.wa.nights})`,
      `*${f.wa.guests}:* ${form.guests}`,
    ];
    if (form.message.trim()) {
      lines.push("", `*${f.wa.message}:*`, form.message.trim());
    }

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };
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
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">
                      {t.contact.whatsapp}
                    </p>
                    <p className="text-sm">{t.contact.whatsappText}</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className={labelClass}>
                    {f.firstName}
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={update("firstName")}
                    className={fieldClass}
                    placeholder={f.firstNamePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className={labelClass}>
                    {f.lastName}
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={update("lastName")}
                    className={fieldClass}
                    placeholder={f.lastNamePlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-apartment" className={labelClass}>
                    {f.apartment}
                  </label>
                  <select
                    id="contact-apartment"
                    value={form.apartment}
                    onChange={update("apartment")}
                    className={`${fieldClass} [&>option]:bg-background`}
                  >
                    <option value="">{f.apartmentAny}</option>
                    {apartments.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-guests" className={labelClass}>
                    {f.guests}
                  </label>
                  <select
                    id="contact-guests"
                    value={form.guests}
                    onChange={update("guests")}
                    className={`${fieldClass} [&>option]:bg-background`}
                  >
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-check-in" className={labelClass}>
                    {f.checkIn}
                  </label>
                  <input
                    id="contact-check-in"
                    type="date"
                    required
                    value={form.checkIn}
                    onChange={update("checkIn")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-check-out" className={labelClass}>
                    {f.checkOut}
                  </label>
                  <input
                    id="contact-check-out"
                    type="date"
                    required
                    min={form.checkIn || undefined}
                    value={form.checkOut}
                    onChange={update("checkOut")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  {f.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={`${fieldClass} resize-none`}
                  placeholder={f.messagePlaceholder}
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 flex items-center justify-center gap-3 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  {f.submit}
                </button>
                <p className="text-xs text-center text-muted-foreground/70">
                  {f.note}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
