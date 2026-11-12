import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("sq");

export default function HomeSq() {
  return <HomePage locale="sq" />;
}
