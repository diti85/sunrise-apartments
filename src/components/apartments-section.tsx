"use client";

import { motion } from "framer-motion";
import { ApartmentCard, apartments } from "./apartment-card";
import { useLocale } from "@/i18n/locale-provider";

export function ApartmentsSection() {
  const { t } = useLocale();
  return (
    <section id="apartments" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            {t.apartments.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            {t.apartments.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.apartments.intro}
          </p>
        </motion.div>

        <div className="space-y-32">
          {apartments.map((apartment, index) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
