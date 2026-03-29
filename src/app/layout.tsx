import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunrise Apartments | Premium Luxury Stays",
  description:
    "Experience luxury living at Sunrise Apartments. Premium furnished apartments with modern design, stunning interiors, and exceptional comfort for your perfect stay.",
  keywords: [
    "luxury apartments",
    "premium stays",
    "Airbnb",
    "furnished apartments",
    "Sunrise Apartments",
  ],
  openGraph: {
    title: "Sunrise Apartments | Premium Luxury Stays",
    description:
      "Experience luxury living at Sunrise Apartments. Premium furnished apartments with modern design and exceptional comfort.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
