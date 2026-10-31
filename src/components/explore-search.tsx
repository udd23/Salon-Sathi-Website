"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { EmptyPanel } from "@/components/page-intro";

const categories = ["All services", "Hair styling", "Hair spa", "Facial", "Makeup", "Manicure", "Pedicure", "Grooming"];

export function ExploreSearch() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const activeFilters = useMemo(() => [query, location, category !== categories[0] ? category : ""].filter(Boolean).length, [query, location, category]);

  return <>
    <div className="search-panel">
      <label className="search-field"><span>Salon or service</span><span className="search-input"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try a salon name" /></span></label>
      <label className="search-field"><span>Location</span><span className="search-input"><input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or pincode" /></span></label>
      <label className="search-field"><span>Service</span><select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <button className="button search-submit" type="button"><Search size={16} /> Search</button>
    </div>
    <div className="directory-toolbar"><span><strong>0 salons</strong> found{activeFilters > 0 ? ` · ${activeFilters} filters applied` : ""}</span><button className="text-button" onClick={() => { setQuery(""); setLocation(""); setCategory(categories[0]); }}><SlidersHorizontal size={15} /> Clear filters</button></div>
    <EmptyPanel title="Salon discovery is getting ready" copy="No salon partners are connected to this workspace yet. Once the existing SalonSathi Firebase project and its approval fields are configured, approved salons will appear here." action={<Link className="button button-outline" href="/partners">List your salon</Link>} />
  </>;
}
