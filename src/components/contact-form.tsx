"use client";

import { useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  return <form className="stack-form" onSubmit={(e) => { e.preventDefault(); setMessage("Your message form is ready, but a verified SalonSathi contact endpoint has not been configured yet."); }}>
    <label>Your name<input required name="name" autoComplete="name" placeholder="Name" /></label>
    <label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
    <label>Subject<input required name="subject" placeholder="How can we help?" /></label>
    <label>Message<textarea required name="message" rows={5} placeholder="Tell us a little more" /></label>
    {message && <p className="form-message" role="status">{message}</p>}
    <button className="button" type="submit">Prepare message</button>
  </form>;
}
