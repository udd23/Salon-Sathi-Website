import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { EmptyPanel } from "@/components/page-intro";
export default async function SalonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <main className="container detail-shell"><Link className="back-link" href="/explore"><ArrowLeft size={15} /> Back to salons</Link><div className="detail-art"><span>SalonSathi</span></div><div className="detail-content"><div><p className="section-kicker">Salon profile</p><h1 className="editorial-title">Salon details</h1><p className="intro-copy">Partner reference: {id}</p><p className="detail-meta"><MapPin size={16} /> Address and location will appear from the verified salon profile.</p></div><Link className="button" href={`/booking?salon=${encodeURIComponent(id)}`}>Book an appointment</Link></div><EmptyPanel title="Salon information isn’t available" copy="This profile can’t be shown until an approved salon record is available from the existing SalonSathi database." /></main>;
}
