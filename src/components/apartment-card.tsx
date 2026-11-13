"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Maximize,
  Wifi,
  Wind,
  Tv,
  WashingMachine,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useLocale } from "@/i18n/locale-provider";

const features = [
  { key: "wifi", icon: <Wifi size={16} /> },
  { key: "ac", icon: <Wind size={16} /> },
  { key: "tv", icon: <Tv size={16} /> },
  { key: "washer", icon: <WashingMachine size={16} /> },
] as const;

export interface Apartment {
  id: "a57" | "b10" | "b20" | "milano" | "siena" | "bologna" | "genoa" | "mallorca";
  name: string;
  images: string[];
  guests?: number;
  bedrooms: number;
  bathrooms: number;
  /** Floor area, e.g. "55m²". Hidden on the card when not known yet. */
  size?: string;
}

/**
 * Photo list for an apartment. `lead` photo numbers come first: the card shows
 * lead[0] large and lead[1..2] beside it, so pick a living-room shot plus two
 * different rooms. The remaining photos follow in their original order.
 */
const gallery = (
  id: Apartment["id"],
  count: number,
  lead: number[],
  start = 1,
) => {
  const all = Array.from({ length: count }, (_, i) => i + start);
  const order = [...lead, ...all.filter((n) => !lead.includes(n))];
  return order.map((n) => `/apartments/${id}/${n}.jpg`);
};

// Display order on the site (also the order in the booking form's dropdown).
export const apartments: Apartment[] = [
  {
    id: "mallorca",
    name: "Mallorca Apartment",
    images: gallery("mallorca", 21, [2, 9, 13]),
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "b20",
    name: "Palermo Apartment",
    images: gallery("b20", 23, [4, 2, 13], 2),
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    size: "60m²",
  },
  {
    id: "a57",
    name: "Torino Apartment",
    images: gallery("a57", 27, [4, 11, 15]),
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    size: "55m\u00B2",
  },
  {
    id: "b10",
    name: "Firence Apartment",
    images: gallery("b10", 14, [3, 7, 12]),
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    size: "45m\u00B2",
  },
  {
    id: "milano",
    name: "Milano Apartment",
    images: gallery("milano", 8, [2, 6, 7]),
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "siena",
    name: "Siena Apartment",
    images: gallery("siena", 14, [1, 8, 10]),
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "bologna",
    name: "Bologna Apartment",
    images: gallery("bologna", 10, [1, 5, 10]),
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "genoa",
    name: "Genoa Apartment",
    images: gallery("genoa", 14, [3, 8, 10]),
    bedrooms: 1,
    bathrooms: 1,
  },
];

function ImageGallery({
  images,
  name,
  onClose,
}: {
  images: string[];
  name: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white z-50 transition-colors"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((p) => (p - 1 + images.length) % images.length);
        }}
        className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-50"
      >
        <ChevronLeft size={36} />
      </button>

      <div
        className="relative w-full max-w-5xl aspect-[4/3] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`${name} - ${t.apartments.photo} ${current + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
          {current + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrent((p) => (p + 1) % images.length);
        }}
        className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-50"
      >
        <ChevronRight size={36} />
      </button>
    </motion.div>
  );
}

export function ApartmentCard({
  apartment,
  index,
}: {
  apartment: Apartment;
  index: number;
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const isReversed = index % 2 !== 0;
  const { t } = useLocale();
  const copy = t.apartments.items[apartment.id];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isReversed ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Image grid */}
        <div
          className={`${isReversed ? "lg:order-2" : ""}`}
          style={{ direction: "ltr" }}
        >
          <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[4/3]">
            <div
              className="col-span-3 row-span-2 relative cursor-pointer overflow-hidden group"
              onClick={() => {
                setPreviewIndex(0);
                setGalleryOpen(true);
              }}
            >
              <Image
                src={apartment.images[0]}
                alt={apartment.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 75vw, 37vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
            {apartment.images.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden group"
                onClick={() => {
                  setPreviewIndex(i + 1);
                  setGalleryOpen(true);
                }}
              >
                <Image
                  src={img}
                  alt={`${apartment.name} - ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 25vw, 12vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                {i === 1 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs tracking-widest uppercase">
                      +{apartment.images.length - 3} {t.apartments.morePhotos}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`${isReversed ? "lg:order-1" : ""}`} style={{ direction: "ltr" }}>
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
            {copy.tagline}
          </p>
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
            {apartment.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {copy.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bed size={18} className="text-primary" />
              <span className="text-sm">
                {apartment.bedrooms} {t.apartments.bedroom}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bath size={18} className="text-primary" />
              <span className="text-sm">
                {apartment.bathrooms} {t.apartments.bathroom}
              </span>
            </div>
            {apartment.size && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Maximize size={18} className="text-primary" />
                <span className="text-sm">{apartment.size}</span>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mb-10">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border text-muted-foreground text-xs tracking-wider"
              >
                <span className="text-primary">{feature.icon}</span>
                {t.apartments.features[feature.key]}
              </div>
            ))}
          </div>

          <button
            onClick={() => setGalleryOpen(true)}
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            {t.apartments.viewGallery}
          </button>
        </div>
      </motion.div>

      {/* Lightbox gallery */}
      {galleryOpen && (
        <ImageGallery
          images={apartment.images}
          name={apartment.name}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
