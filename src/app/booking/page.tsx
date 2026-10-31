import Link from "next/link";
import { PageIntro, EmptyPanel } from "@/components/page-intro";
export const metadata = { title: "Book an appointment" };
export default async function BookingPage({ searchParams }: { searchParams: Promise<{ salon?: string }> }) {
  const { salon } = await searchParams;
  return <main><PageIntro eyebrow="Make it your time" title={<>A moment for<br /><em>yourself.</em></>} copy="Choose a service, find a time, and make it yours." /><section className="container booking-section"><ol className="booking-steps"><li className="current"><span>01</span>Service</li><li><span>02</span>Date & time</li><li><span>03</span>Confirm</li></ol><EmptyPanel title="Booking needs a connected salon" copy={salon ? "We couldn’t load this salon’s real services or available slots. No appointment has been created." : "Start by choosing an approved salon. Its real services and available appointment slots will appear here once connected."} action={<Link className="button" href="/explore">Explore salons</Link>} /></section></main>;
}
