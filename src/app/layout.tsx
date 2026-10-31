import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "SalonSathi — Your Style. Your Salon. Your Time.", template: "%s | SalonSathi" },
  description: "Discover exceptional salons, explore services you love, and book the perfect appointment.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="page-shell"><SiteHeader />{children}<SiteFooter /></div></body></html>;
}
