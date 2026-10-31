import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
export const metadata = { title: "Contact" };
export default function ContactPage() { return <main><PageIntro eyebrow="Get in touch" title={<>We’re here to<br /><em>listen.</em></>} copy="Have a question about SalonSathi? Send us a note." /><section className="container contact-layout"><div><p className="section-kicker">Say hello</p><h2 className="serif-subhead">A real conversation<br />starts with a note.</h2><p className="muted-copy">Share a little about what you need and we’ll be ready to help when contact support is connected.</p></div><ContactForm /></section></main>; }
