"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, Heart } from "lucide-react";

const values = [
  {
    icon: <Star size={24} />,
    title: "Premium Quality",
    description:
      "Every apartment is furnished with designer furniture, premium linens, and high-end appliances for an exceptional stay.",
  },
  {
    icon: <Shield size={24} />,
    title: "Safety & Security",
    description:
      "Smart entry systems, secure buildings, and 24/7 support ensure your complete peace of mind throughout your stay.",
  },
  {
    icon: <Clock size={24} />,
    title: "Flexible Stays",
    description:
      "Whether it's a weekend getaway or an extended stay, we offer flexible booking options tailored to your needs.",
  },
  {
    icon: <Heart size={24} />,
    title: "Personal Touch",
    description:
      "We go beyond the ordinary with personalized welcome amenities and local recommendations curated just for you.",
  },
];

export function About() {
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
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
            The Sunrise Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At Sunrise Apartments, we believe every stay should feel like coming
            home — only better. Our premium apartments combine thoughtful design
            with everyday comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
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
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
