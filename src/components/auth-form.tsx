"use client";

import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseClient } from "@/lib/firebase/client";

type Mode = "login" | "signup" | "reset";

export function AuthForm({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const titles = { login: "Welcome back.", signup: "Make time for you.", reset: "A fresh start." };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus(""); setBusy(true);
    const firebase = getFirebaseClient();
    if (!firebase) { setStatus("Sign in is not connected yet. Add the existing SalonSathi Firebase web configuration to .env.local."); setBusy(false); return; }
    try {
      if (mode === "signup") await createUserWithEmailAndPassword(firebase.auth, email, password);
      else if (mode === "reset") { await sendPasswordResetEmail(firebase.auth, email); setStatus("If an account exists for this email, a reset link is on its way."); }
      else await signInWithEmailAndPassword(firebase.auth, email, password);
      if (mode !== "reset") window.location.assign("/account");
    } catch (error) {
      const code = (error as { code?: string }).code;
      setStatus(code === "auth/invalid-credential" ? "That email and password combination was not recognized." : code === "auth/email-already-in-use" ? "An account already uses this email. Try signing in." : "We couldn’t complete that request. Check the details and try again.");
    } finally { setBusy(false); }
  }

  return <section className="auth-card"><p className="section-kicker">SalonSathi account</p><h1 className="editorial-title">{titles[mode]}</h1><p className="intro-copy">{mode === "signup" ? "Your next little ritual starts here." : mode === "reset" ? "We’ll send a reset link if there’s an account for that email." : "Sign in to keep your appointments close."}</p>
    <form className="stack-form" onSubmit={submit}><label>Email address<input type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>{mode !== "reset" && <label>Password<input type="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} minLength={6} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" /></label>}
      {status && <p className="form-message" role="status">{status}</p>}<button className="button" disabled={busy}>{busy ? "Please wait…" : mode === "signup" ? "Create account" : mode === "reset" ? "Send reset link" : "Sign in"}</button></form>
    <div className="auth-links">{mode === "login" ? <><Link href="/reset-password">Forgot password?</Link><span>New to SalonSathi? <Link href="/signup">Create an account</Link></span></> : <span>Already have an account? <Link href="/login">Sign in</Link></span>}</div>
  </section>;
}
