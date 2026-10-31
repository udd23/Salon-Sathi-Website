import { ArrowUpRight, Download } from "lucide-react";

const playStoreSearch = "https://play.google.com/store/search?q=SalonSathi&c=apps";

export function PlayStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`play-store-button${compact ? " play-store-button-compact" : ""}`} href={playStoreSearch} target="_blank" rel="noreferrer">
      <Download size={15} aria-hidden="true" />
      <span>{compact ? "Get the app" : "Download on Google Play"}</span>
      {!compact && <ArrowUpRight size={14} aria-hidden="true" />}
      <span className="sr-only">Search SalonSathi on Google Play</span>
    </a>
  );
}
