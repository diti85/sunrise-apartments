"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";

// Alternates building shots with standout interiors from different apartments.
const heroImages = [
  "/building/exterior.jpg",
  "/apartments/b20/4.jpg",
  "/building/lobby.jpg",
  "/apartments/mallorca/2.jpg",
  "/building/garden.jpg",
  "/apartments/a57/4.jpg",
  "/building/entrance.jpg",
  "/apartments/genoa/3.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const { t } = useLocale();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt={t.hero.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tight leading-tight mb-6">
            {t.hero.titleLine1}
            <br />
            <span className="font-normal">{t.hero.titleLine2}</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apartments"
              className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              {t.hero.explore}
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
            >
              {t.hero.contact}
            </a>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-28 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current
                  ? "w-10 bg-primary"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#apartments"
          className="absolute bottom-10 text-white/40 hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  );
}
