import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";

const EMAIL = "aauf.sayed01@gmail.com";
const PHONE = "+971 58 614 7909";
const WA = "https://wa.me/971586147909";
const LINKEDIN = "https://www.linkedin.com/in/aauf-sayed";
const GITHUB = "https://github.com/aaufsayed01";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const hRef = useReveal();
  const gRef = useReveal(0.1);
  const copy = () => { navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section style={{ padding: "8rem 2rem", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg,transparent,rgba(200,169,110,0.15),transparent)"
      }} />
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>

        {/* Big CTA */}
        <div ref={hRef} className="reveal" style={{ textAlign: "center", marginBottom: "6rem" }}>
          <p className="label" style={{ marginBottom: "1.5rem", color: "#c8a96e" }}>05 · Contact</p>
          <h2 className="display" style={{
            fontSize: "clamp(3.5rem,10vw,8rem)", color: "#e2e8f0", lineHeight: 0.9, marginBottom: "2rem"
          }}>
            LET'S<br /><span className="gold-shimmer">BUILD</span><br />TOGETHER
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto 3rem", lineHeight: 1.9 }}>
            Open to full-time roles, contract work, and interesting conversations.
            I respond within 24 hours — usually faster.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${EMAIL}?subject=Opportunity — Sayed Aauf`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#c8a96e", color: "#05070a",
              fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em",
              padding: "14px 36px", borderRadius: 2, textDecoration: "none",
              transition: "opacity 0.2s,transform 0.2s",
            }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.85"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)"; }}>
              <Mail size={16} /> Send Email
            </a>
            <a href={WA} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(200,169,110,0.35)", color: "#c8a96e",
              fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em",
              padding: "14px 36px", borderRadius: 2, textDecoration: "none", transition: "all 0.2s",
            }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(200,169,110,0.1)"; el.style.borderColor = "#c8a96e"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(200,169,110,0.35)"; el.style.transform = "translateY(0)"; }}>
              <Phone size={16} /> WhatsApp Me
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div ref={gRef} className="reveal contact-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px",
          background: "rgba(200,169,110,0.07)", border: "1px solid rgba(200,169,110,0.07)",
          borderRadius: 2, overflow: "hidden", marginBottom: "2rem"
        }}>
          {[
            {
              icon: Mail, label: "Email", val: EMAIL, action: () => copy(),
              actionLabel: copied ? <><Check size={10} /> Copied!</> : <><Copy size={10} /> Copy</>
            },
            {
              icon: Phone, label: "WhatsApp", val: PHONE,
              link: { href: WA, label: <>Open Chat <ArrowUpRight size={10} /></> }
            },
            {
              icon: MapPin, label: "Location", val: "Dubai, UAE",
              note: "Open to opportunities"
            },
          ].map((item, i) => (
            <div key={i} className="card-lift" style={{ background: "#05070a", padding: "2rem" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 2,
                background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem"
              }}>
                <item.icon size={15} color="#c8a96e" />
              </div>
              <p className="label" style={{ marginBottom: "0.5rem", fontSize: "0.52rem", color: "#b0bec5" }}>{item.label}</p>
              <p style={{ fontSize: "0.9rem", color: "#e2e8f0", marginBottom: "0.85rem", wordBreak: "break-all", lineHeight: 1.6 }}>{item.val}</p>
              {"action" in item && (
                <button onClick={item.action as () => void} style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: copied ? "#22c55e" : "#c8a96e",
                  background: "none", border: "none", cursor: "none", padding: 0, transition: "color 0.2s",
                }}>{item.actionLabel as React.ReactNode}</button>
              )}
              {"link" in item && (
                <a href={(item as any).link.href} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#c8a96e", textDecoration: "none",
                }}>{(item as any).link.label}</a>
              )}
              {"note" in item && (
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: "#b0bec5" }}>{(item as any).note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Socials */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {[{ icon: Linkedin, href: LINKEDIN, label: "LinkedIn" }, { icon: Github, href: GITHUB, label: "GitHub" }].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#94a3b8", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.07)", padding: "10px 22px", borderRadius: 2, transition: "all 0.2s",
            }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,169,110,0.35)"; el.style.color = "#c8a96e"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.color = "#94a3b8"; el.style.transform = "translateY(0)"; }}>
              <Icon size={13} />{label}<ArrowUpRight size={10} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}