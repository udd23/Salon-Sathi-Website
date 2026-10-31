import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, copy, children }: { eyebrow: string; title: ReactNode; copy: string; children?: ReactNode }) {
  return <section className="page-intro"><div className="container"><p className="section-kicker">{eyebrow}</p><h1 className="editorial-title">{title}</h1><p className="intro-copy">{copy}</p>{children}</div></section>;
}

export function EmptyPanel({ title, copy, action }: { title: string; copy: string; action?: ReactNode }) {
  return <div className="empty-panel"><span className="empty-mark">S</span><h2>{title}</h2><p>{copy}</p>{action}</div>;
}
