import Link from "next/link";
import { EmptyPanel, PageIntro } from "@/components/page-intro";
export const metadata = { title: "Partner registration" };
export default function PartnerRegisterPage() { return <main><PageIntro eyebrow="SalonSathi partners" title={<>Let’s get to<br /><em>know your salon.</em></>} copy="Partner applications follow SalonSathi’s existing salon approval process." /><section className="container account-section"><EmptyPanel title="Partner registration is not connected" copy="To keep the mobile app and approval workflow in sync, registration needs the existing partner fields and approval rules. No application has been submitted." action={<Link className="button button-outline" href="/partners">Back to partner overview</Link>} /></section></main>; }
