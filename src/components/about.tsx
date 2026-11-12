"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, Heart } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";

const values = [
  { key: "quality", icon: <Star size={24} /> },
  { key: "safety", icon: <Shield size={24} /> },
  { key: "flexible", icon: <Clock size={24} /> },
  { key: "personal", icon: <Heart size={24} /> },
] as const;

export function About() {
  const { t } = useLocale();
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            {t.about.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-card/50 border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-foreground font-medium mb-3 tracking-wide">
                {t.about.values[value.key].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.about.values[value.key].description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
