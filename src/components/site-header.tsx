import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PlayStoreButton } from "@/components/play-store-button";

const links = [
  ["Explore Salons", "/explore"],
  ["How It Works", "/#how-it-works"],
  ["For Partners", "/partners"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="SalonSathi home">
          <Image className="wordmark-logo" src="/salonsathi-logo-transparent.png" alt="SalonSathi" width={187} height={211} priority />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="button" href="/explore">Find Your Salon <ArrowUpRight size={15} /></Link>
          <PlayStoreButton compact />
        </div>
      </div>
    </header>
  );
}
