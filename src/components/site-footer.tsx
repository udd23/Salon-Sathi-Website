import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Music2, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <>
      <section className="footer-cta" aria-labelledby="footer-cta-title">
        <div className="container footer-cta-inner">
          <p className="footer-cta-kicker">Your Style. Your Salon. Your Time.</p>
          <h2 id="footer-cta-title">Your next great look is<br />just one booking away.</h2>
          <p className="footer-cta-copy">Discover your salon. Choose your style. Book your moment.</p>
          <Link className="footer-cta-button" href="/explore">Find Your Salon <ArrowRight size={18} /></Link>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <Link className="footer-brand-lockup" href="/" aria-label="SalonSathi home">
              <Image className="footer-logo" src="/salonsathi-logo-transparent.png" alt="" width={187} height={211} />
              <span>SalonSathi</span>
            </Link>
            <p>A premium salon discovery and booking platform — helping you find trusted local salons and plan your next visit with confidence.</p>
            <div className="footer-social" aria-label="Social profiles">
              <span aria-label="Instagram profile not configured" title="Instagram profile not configured"><Instagram size={17} /></span>
              <span aria-label="Facebook profile not configured" title="Facebook profile not configured"><Facebook size={17} /></span>
              <span aria-label="Social profile not configured" title="Social profile not configured"><Music2 size={17} /></span>
            </div>
          </div>
          <nav className="footer-column" aria-label="Explore"><strong>Explore</strong><Link href="/explore">Explore Salons</Link><Link href="/explore">Services</Link><Link href="/#how-it-works">How It Works</Link></nav>
          <nav className="footer-column" aria-label="Company"><strong>Company</strong><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/partners">For Partners</Link></nav>
          <nav className="footer-column" aria-label="Support"><strong>Support</strong><Link href="/contact">Help</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></nav>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} SalonSathi. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
      </footer>
    </>
  );
}
