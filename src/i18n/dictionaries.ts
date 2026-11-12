export const locales = ["en", "sq"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Path of the home page for each language. English is the default and lives at "/". */
export const localePaths: Record<Locale, string> = {
  en: "/",
  sq: "/sq",
};

const en = {
  meta: {
    title: "Sunrise Apartments | Premium Luxury Stays",
    description:
      "Experience luxury living at Sunrise Apartments. Premium furnished apartments with modern design, stunning interiors, and exceptional comfort for your perfect stay.",
    ogDescription:
      "Experience luxury living at Sunrise Apartments. Premium furnished apartments with modern design and exceptional comfort.",
  },
  nav: {
    home: "Home",
    apartments: "Apartments",
    about: "About",
    contact: "Contact",
    bookNow: "Book Now",
    toggleMenu: "Toggle menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Premium Luxury Stays",
    titleLine1: "Where Elegance",
    titleLine2: "Meets Comfort",
    subtitle:
      "Experience the finest in modern luxury living. Beautifully designed apartments crafted for an unforgettable stay.",
    explore: "Explore Our Suites",
    contact: "Get in Touch",
    imageAlt: "Luxury apartment interior",
  },
  apartments: {
    eyebrow: "Our Collection",
    title: "Premium Apartments",
    intro:
      "Each of our carefully curated apartments offers a unique experience, blending contemporary design with luxurious comfort for an unforgettable stay.",
    bedroom: "Bedroom",
    bathroom: "Bathroom",
    morePhotos: "Photos",
    photo: "Photo",
    viewGallery: "View Gallery",
    features: {
      wifi: "High-Speed WiFi",
      ac: "Air Conditioning",
      tv: "Smart TV",
      washer: "Washer",
    },
    items: {
      a57: {
        tagline: "Modern Minimalist Retreat",
        description:
          "A beautifully crafted space featuring sleek modern design, glass partitions, and premium furnishings. The open-concept living area flows seamlessly into a stylish bedroom, creating a refined atmosphere for discerning guests.",
      },
      b10: {
        tagline: "Classic Luxury Haven",
        description:
          "An exquisite blend of classic elegance and modern comfort. Featuring warm tones, marble-finished bathroom with gold fixtures, and a cozy living space adorned with premium textiles and designer furniture.",
      },
      b20: {
        tagline: "Contemporary Urban Loft",
        description:
          "A stunning urban retreat featuring ambient LED lighting, a striking black partition wall, plush blue velvet furnishings, and floor-to-ceiling windows with a private balcony. The perfect blend of drama and sophistication.",
      },
    },
  },
  about: {
    eyebrow: "Why Choose Us",
    title: "The Sunrise Experience",
    intro:
      "At Sunrise Apartments, we believe every stay should feel like coming home — only better. Our premium apartments combine thoughtful design with everyday comfort.",
    values: {
      quality: {
        title: "Premium Quality",
        description:
          "Every apartment is furnished with designer furniture, premium linens, and high-end appliances for an exceptional stay.",
      },
      safety: {
        title: "Safety & Security",
        description:
          "Smart entry systems, secure buildings, and 24/7 support ensure your complete peace of mind throughout your stay.",
      },
      flexible: {
        title: "Flexible Stays",
        description:
          "Whether it's a weekend getaway or an extended stay, we offer flexible booking options tailored to your needs.",
      },
      personal: {
        title: "Personal Touch",
        description:
          "We go beyond the ordinary with personalized welcome amenities and local recommendations curated just for you.",
      },
    },
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Book Your Stay",
    intro:
      "Ready to experience luxury living? Reach out to us and we'll help you find the perfect apartment for your stay.",
    infoTitle: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationText: "Prishtina, Kosovo · View on Google Maps",
    instagram: "Instagram",
    form: {
      firstName: "First Name",
      firstNamePlaceholder: "John",
      lastName: "Last Name",
      lastNamePlaceholder: "Doe",
      email: "Email",
      emailPlaceholder: "john@example.com",
      checkIn: "Check-in",
      checkOut: "Check-out",
      message: "Message",
      messagePlaceholder: "Tell us about your ideal stay...",
      submit: "Send Inquiry",
    },
  },
  footer: {
    rights: "Sunrise Apartments. All rights reserved.",
    tagline: "Premium Luxury Stays",
  },
};

export type Dictionary = typeof en;

const sq: Dictionary = {
  meta: {
    title: "Sunrise Apartments | Qëndrime luksoze premium",
    description:
      "Përjetoni jetesën luksoze në Sunrise Apartments. Apartamente premium të mobiluara, me dizajn modern, interier mahnitës dhe komoditet të jashtëzakonshëm për qëndrimin tuaj të përsosur.",
    ogDescription:
      "Përjetoni jetesën luksoze në Sunrise Apartments. Apartamente premium të mobiluara, me dizajn modern dhe komoditet të jashtëzakonshëm.",
  },
  nav: {
    home: "Ballina",
    apartments: "Apartamentet",
    about: "Rreth nesh",
    contact: "Kontakti",
    bookNow: "Rezervo tani",
    toggleMenu: "Hap ose mbyll menynë",
    language: "Gjuha",
  },
  hero: {
    eyebrow: "Qëndrime luksoze premium",
    titleLine1: "Ku eleganca",
    titleLine2: "takon komoditetin",
    subtitle:
      "Përjetoni më të mirën e jetesës moderne luksoze. Apartamente të dizajnuara me kujdes për një qëndrim të paharrueshëm.",
    explore: "Shihni apartamentet",
    contact: "Na kontaktoni",
    imageAlt: "Interier i një apartamenti luksoz",
  },
  apartments: {
    eyebrow: "Koleksioni ynë",
    title: "Apartamente premium",
    intro:
      "Secili prej apartamenteve tona, të përzgjedhur me kujdes, ofron një përvojë unike, duke ndërthurur dizajnin bashkëkohor me komoditetin luksoz për një qëndrim të paharrueshëm.",
    bedroom: "dhomë gjumi",
    bathroom: "banjo",
    morePhotos: "foto",
    photo: "Foto",
    viewGallery: "Shiko galerinë",
    features: {
      wifi: "WiFi i shpejtë",
      ac: "Klimë",
      tv: "Smart TV",
      washer: "Lavatriçe",
    },
    items: {
      a57: {
        tagline: "Strehë moderne minimaliste",
        description:
          "Një hapësirë e punuar me kujdes, me dizajn modern e të pastër, ndarëse xhami dhe mobilim premium. Dhoma e ndenjes me plan të hapur lidhet natyrshëm me një dhomë gjumi elegante, duke krijuar një atmosferë të rafinuar për mysafirët më të kërkueshëm.",
      },
      b10: {
        tagline: "Oaz luksi klasik",
        description:
          "Një ndërthurje e shkëlqyer e elegancës klasike me komoditetin modern. Me tone të ngrohta, banjo me mermer dhe pajisje të arta, si dhe një dhomë ndenjeje komode, e pasuruar me tekstile premium dhe mobilie dizajni.",
      },
      b20: {
        tagline: "Loft urban bashkëkohor",
        description:
          "Një strehë urbane mahnitëse me ndriçim ambiental LED, një mur ndarës të zi që bie në sy, mobilie të buta prej kadifeje blu dhe dritare nga dyshemeja deri te tavani me ballkon privat. Ndërthurja e përsosur e dramës dhe sofistikimit.",
      },
    },
  },
  about: {
    eyebrow: "Pse të na zgjidhni",
    title: "Përvoja Sunrise",
    intro:
      "Në Sunrise Apartments besojmë se çdo qëndrim duhet të ndihet si të kthehesh në shtëpi — madje edhe më mirë. Apartamentet tona premium ndërthurin dizajnin e menduar me komoditetin e përditshëm.",
    values: {
      quality: {
        title: "Cilësi premium",
        description:
          "Çdo apartament është i mobiluar me mobilie dizajni, çarçafë premium dhe pajisje të nivelit të lartë për një qëndrim të jashtëzakonshëm.",
      },
      safety: {
        title: "Siguri e plotë",
        description:
          "Sisteme të mençura hyrjeje, ndërtesa të sigurta dhe mbështetje 24/7 ju garantojnë qetësi të plotë gjatë gjithë qëndrimit.",
      },
      flexible: {
        title: "Qëndrime fleksibile",
        description:
          "Qoftë për një fundjavë apo për një qëndrim më të gjatë, ne ofrojmë mundësi fleksibile rezervimi sipas nevojave tuaja.",
      },
      personal: {
        title: "Kujdes personal",
        description:
          "Shkojmë përtej së zakonshmes me dhurata mirëseardhjeje dhe rekomandime lokale të përzgjedhura posaçërisht për ju.",
      },
    },
  },
  contact: {
    eyebrow: "Na kontaktoni",
    title: "Rezervoni qëndrimin tuaj",
    intro:
      "Gati për të përjetuar jetesën luksoze? Na shkruani dhe do t'ju ndihmojmë të gjeni apartamentin e përsosur për qëndrimin tuaj.",
    infoTitle: "Informacioni i kontaktit",
    email: "Email",
    phone: "Telefoni",
    location: "Lokacioni",
    locationText: "Prishtinë, Kosovë · Shiko në Google Maps",
    instagram: "Instagram",
    form: {
      firstName: "Emri",
      firstNamePlaceholder: "Arben",
      lastName: "Mbiemri",
      lastNamePlaceholder: "Krasniqi",
      email: "Email",
      emailPlaceholder: "arben@shembull.com",
      checkIn: "Data e mbërritjes",
      checkOut: "Data e largimit",
      message: "Mesazhi",
      messagePlaceholder: "Na tregoni për qëndrimin tuaj ideal...",
      submit: "Dërgo kërkesën",
    },
  },
  footer: {
    rights: "Sunrise Apartments. Të gjitha të drejtat e rezervuara.",
    tagline: "Qëndrime luksoze premium",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, sq };
