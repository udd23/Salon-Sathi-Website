import { PageIntro } from "@/components/page-intro";
import { AccountPanel } from "@/components/account-panel";
export const metadata = { title: "Your account" };
export default function AccountPage() { return <main><PageIntro eyebrow="Your appointments" title={<>Your time,<br /><em>your way.</em></>} copy="Keep track of your SalonSathi appointments and account." /><section className="container account-section"><AccountPanel /></section></main>; }
