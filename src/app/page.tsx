import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Compass } from "lucide-react";
import { PlayStoreButton } from "@/components/play-store-button";

export default function HomePage() {
  return (
    <main>
      <section className="container home-hero">
        <div className="home-hero-copy">
          <p className="section-kicker">A considered approach to self-care</p>
          <h1 className="editorial-title">Beauty begins with finding <em>your place.</em></h1>
          <p className="hero-lead">Discover exceptional salons, explore services you love, and book the perfect appointment — all in one place.</p>
          <div className="hero-actions">
            <Link className="button" href="/explore">Explore Salons <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" href="/partners">Become a Partner</Link>
            <PlayStoreButton />
          </div>
          <a className="hero-scroll" href="#how-it-works"><ArrowDown size={15} /> Discover a better way</a>
        </div>
        <div className="hero-visual">
          <Image className="hero-photo" src="/beauty-hero.webp" alt="Sunlit beauty essentials arranged on warm travertine" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
          <span className="hero-photo-index">THE ART OF A LITTLE TIME FOR YOU</span>
          <div className="hero-photo-caption"><span className="caption-sparkle">✳</span><div><small>YOUR NEXT RITUAL</small><p>Care that feels like yours.</p></div><ArrowUpRight size={17} /></div>
        </div>
      </section>
      <section className="home-discovery" id="discover">
        <div className="container discovery-layout">
          <div><p className="section-kicker">Find your new favourite</p><h2 className="editorial-title" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "18px 0" }}>The right care<br />is <em>closer.</em></h2><p className="muted-copy">Browse salon partners and services in your neighbourhood.</p></div>
          <div className="discovery-card"><Compass size={22} strokeWidth={1.5} /><p>Begin with a place, a service, or a feeling.</p><Link className="button" href="/explore">Explore salons <ArrowUpRight size={15} /></Link><span className="data-note">Partner directory will appear when connected</span></div>
        </div>
      </section>
      <section className="service-section">
        <div className="container">
          <div className="service-section-heading">
            <div><p className="section-kicker">A little of what you love</p><h2 className="editorial-title">Make space for <em>you.</em></h2></div>
            <div className="service-heading-aside"><p>Choose a ritual that meets you where you are.</p><Link className="subtle-link" href="/explore">Explore all services <ArrowRight size={15} /></Link></div>
          </div>
          <div className="service-card-grid">
            {[
              { number: "01", category: "STYLE & EXPRESSION", title: "Hair styling", copy: "Cuts, colour and styling for the look you’ve been imagining.", src: "/images/hair-styling.webp", alt: "Salon scissors, a comb and a round styling brush on travertine" },
              { number: "02", category: "SKIN & GLOW", title: "Skin & facials", copy: "Restorative facial rituals, thoughtfully chosen for you.", src: "/images/skin-facials.webp", alt: "Serum, cream and folded towel arranged for a skincare ritual" },
              { number: "03", category: "THE FINISHING TOUCH", title: "Nails & care", copy: "Manicure, pedicure and the little details that feel good.", src: "/images/nail-care.webp", alt: "Unlabelled nail polish and manicure tools on warm stone" },
            ].map((item) => <Link className="service-card" href="/explore" key={item.number}>
              <div className="service-card-art"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="service-card-index">{item.number}<i> / 03</i></span><span className="service-card-open" aria-hidden="true"><ArrowUpRight size={17} /></span></div>
              <div className="service-card-copy"><div><span className="service-card-kicker">{item.category}</span><h3>{item.title}</h3><p>{item.copy}</p></div><span className="service-card-link">Explore <ArrowRight size={14} /></span></div>
            </Link>)}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="how-section">
        <div className="container" style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div><p className="section-kicker">The SalonSathi experience</p><h2 className="editorial-title" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "18px 0 0" }}>A little more <em>you.</em></h2></div>
          <p style={{ maxWidth: 390, color: "#657084", lineHeight: 1.8 }}>A thoughtful foundation for finding the right salon, choosing your service, and making time for yourself.</p>
        </div>
        <div className="container steps-grid">{[["01","Discover a salon","Find a place that feels right."],["02","Choose your service","Explore the care you’re looking for."],["03","Select your time","Pick a slot that fits your day."],["04","Confirm your visit","Keep your plans together."]].map(([number,title,copy])=><article className="step-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <section className="philosophy-section"><div className="container philosophy-inner"><p className="section-kicker">The SalonSathi feeling</p><h2 className="editorial-title">Self-care deserves<br /><em>a better experience.</em></h2><p className="muted-copy">A little more clarity, a little less searching, and more time for the moments that feel like yours.</p></div></section>
      <section className="partner-home"><div className="container partner-home-inner"><div><p className="section-kicker">For salon partners</p><h2 className="editorial-title" style={{fontSize:"clamp(40px, 5vw, 64px)"}}>Your salon deserves<br />to be <em>discovered.</em></h2></div><Link className="button button-outline" href="/partners">Join SalonSathi <ArrowUpRight size={15} /></Link></div></section>
    </main>
  );
}
