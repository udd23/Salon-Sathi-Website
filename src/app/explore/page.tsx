import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ExploreSearch } from "@/components/explore-search";

export const metadata: Metadata = { title: "Explore Salons" };
export default function ExplorePage() {
  return <main><PageIntro eyebrow="Find your place" title={<>Good hair days<br /><em>start here.</em></>} copy="Explore trusted local salons and find the service that fits your moment." /><section className="container directory-section"><ExploreSearch /></section></main>;
}
