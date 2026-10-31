"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getFirebaseClient } from "@/lib/firebase/client";
import { EmptyPanel } from "@/components/page-intro";

export function AccountPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [connected, setConnected] = useState(false);
  useEffect(() => { const firebase = getFirebaseClient(); if (!firebase) { setReady(true); return; } setConnected(true); return onAuthStateChanged(firebase.auth, (value) => { setUser(value); setReady(true); }); }, []);
  if (!ready) return <div className="empty-panel">Loading your account…</div>;
  if (!connected) return <EmptyPanel title="Your account is almost ready" copy="Customer sign-in will be available when the existing SalonSathi Firebase web configuration is added." action={<Link className="button" href="/login">Go to sign in</Link>} />;
  if (!user) return <EmptyPanel title="Sign in to see your appointments" copy="Your upcoming and past bookings will appear here after sign-in and connection to the existing booking schema." action={<Link className="button" href="/login">Sign in</Link>} />;
  return <><div className="account-welcome"><div><p className="section-kicker">Your SalonSathi</p><h2 className="serif-subhead">Hello, {user.displayName || user.email?.split("@")[0] || "there"}.</h2><p>{user.email}</p></div><button className="button button-outline" onClick={() => { const firebase = getFirebaseClient(); if (firebase) void signOut(firebase.auth); }}>Sign out</button></div><EmptyPanel title="No appointments to show yet" copy="Booking records are not connected until the mobile app’s booking fields and ownership rules have been verified." action={<Link className="button" href="/explore">Explore salons</Link>} /></>;
}
