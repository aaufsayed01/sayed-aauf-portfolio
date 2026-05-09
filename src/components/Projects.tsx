import { useEffect, useRef } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const WA = "https://wa.me/971586147909";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const PROJECTS = [
  {
    num: "01", featured: true,
    title: "JEX Logistics Platform",
    category: "Full Stack · Live & Deployed", year: "2025",
    description: "Production-grade freight management system built end-to-end. The entire logistics lifecycle — quotes, pricing, bookings, shipments, real-time chat, document management, VAT invoices, and multi-currency — live and operational.",
    details: ["5 user roles · 38+ DB models", "Real-time Socket.IO messaging", "S3 documents · PDF invoices (UAE VAT)", "10 currencies · Full audit trail", "Docker deployed · 16 integration tests"],
    tech: ["TypeScript", "Node.js", "Express 5", "PostgreSQL", "Prisma", "AWS S3", "Socket.IO", "React 18", "Docker", "PDFKit", "Zod"],
    cta: "Request Walkthrough", href: WA,
  },
  {
    num: "02", featured: false,
    title: "Malware Detection — ML Research",
    category: "Machine Learning · Research", year: "2024",
    description: "Ensemble ML system with dynamic behavioral analysis. Combined Random Forest, SVM, KNN, and Naive Bayes with Cuckoo Sandbox — achieving ~97% detection accuracy.",
    details: ["Ensemble: RF + SVM + KNN + NB", "Cuckoo Sandbox dynamic analysis", "~97% classification accuracy", "Feature engineering from behavior"],
    tech: ["Python", "Scikit-learn", "Random Forest", "SVM", "Cuckoo Sandbox"],
    cta: "Discuss Details", href: WA,
  },
  {
    num: "03", featured: false,
    title: "Personal Finance Dashboard",
    category: "Business Intelligence · Power BI", year: "2025",
    description: "Interactive Power BI dashboard for comprehensive finance tracking — income, expenses, savings, investments with DAX KPIs and drill-through visualisations.",
    details: ["DAX KPIs: savings rate & breakdown", "Power Query data transformation", "Dynamic slicers & drill-through"],
    tech: ["Power BI", "DAX", "Power Query", "Data Modelling"],
    cta: "Request Walkthrough", href: WA,
  },
];

export function Projects() {
  const hRef = useReveal();
  const fRef = useReveal(0.1);
  const gRef = useReveal(0.1);

  return (
    <section style={{ padding: "8rem 2rem", position: "relative", background: "rgba(8,12,17,0.45)" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg,transparent,rgba(200,169,110,0.15),transparent)"
      }} />
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>

        <div ref={hRef} className="reveal" style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "5rem"
        }}>
          <div>
            <p className="label" style={{ marginBottom: "1rem", color: "#c8a96e" }}>04 · Projects</p>
            <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,6rem)", color: "#e2e8f0" }}>
              SELECTED<br /><span className="gold-text">WORK</span>
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", maxWidth: 380, lineHeight: 1.9 }}>
            Real systems with real complexity. Built for production, not demos.
          </p>
        </div>

        {/* Featured */}
        {PROJECTS.filter(p => p.featured).map(proj => (
          <div ref={fRef} key={proj.num} className="reveal card-lift" style={{
            background: "#080c11", border: "1px solid rgba(200,169,110,0.2)",
            borderRadius: 2, marginBottom: "1.5rem", overflow: "hidden", position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, width: "45%", height: "100%",
              background: "radial-gradient(ellipse at top left,rgba(200,169,110,0.05),transparent 70%)",
              pointerEvents: "none"
            }} />
            <div style={{ padding: "3rem", display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "center" }} className="proj-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", color: "#1e293b" }}>/{proj.num}</span>
                  <span className="label" style={{ color: "#c8a96e", fontSize: "0.52rem" }}>{proj.category}</span>
                  <span style={{
                    fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "0.1em",
                    color: "#05070a", background: "#c8a96e", padding: "2px 8px", borderRadius: 2
                  }}>FEATURED</span>
                </div>
                <h3 className="display" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#e2e8f0", marginBottom: "1rem" }}>{proj.title}</h3>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "1.5rem", maxWidth: 540 }}>{proj.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>{proj.tech.map(t => <span key={t} className="tb">{t}</span>)}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ background: "rgba(5,7,10,0.8)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 2, padding: "1.25rem", marginBottom: "0.5rem" }}>
                  {proj.details.map((d, i) => (
                    <p key={i} style={{
                      fontFamily: "'DM Mono',monospace", fontSize: "0.65rem",
                      color: "#cbd5e1", lineHeight: 1.8, paddingLeft: "0.75rem", position: "relative"
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#c8a96e" }}>›</span>{d}
                    </p>
                  ))}
                </div>
                <a href={proj.href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  background: "#c8a96e", color: "#05070a", fontFamily: "'DM Mono',monospace",
                  fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "12px 16px", borderRadius: 2, textDecoration: "none", fontWeight: 500,
                  transition: "opacity 0.2s",
                }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.82"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                  <MessageCircle size={12} />{proj.cta}
                </a>
                <a href="#contact" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8",
                  fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "12px 16px", borderRadius: 2, textDecoration: "none", transition: "all 0.2s",
                }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,169,110,0.35)"; el.style.color = "#c8a96e"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.color = "#94a3b8"; }}>
                  <ArrowUpRight size={12} /> Hire / Contact
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Others */}
        <div ref={gRef} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} >
          {PROJECTS.filter(p => !p.featured).map((proj, i) => (
            <div key={proj.num} className="card-lift" style={{
              background: "#080c11", border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 2, padding: "2rem", position: "relative", overflow: "hidden",
              transitionDelay: `${i * 0.1}s`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", color: "#1e293b" }}>/{proj.num}</span>
                <span className="label" style={{ fontSize: "0.52rem", color: "#c8a96e" }}>{proj.category}</span>
              </div>
              <h3 className="display" style={{ fontSize: "clamp(1.2rem,3vw,1.75rem)", color: "#e2e8f0", marginBottom: "0.75rem" }}>{proj.title}</h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>{proj.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
                {proj.tech.map(t => <span key={t} className="tb">{t}</span>)}
              </div>
              <a href={proj.href} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 6, color: "#c8a96e",
                fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none", transition: "gap 0.2s",
              }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "12px"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "6px"}>
                {proj.cta} <ArrowUpRight size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:700px){.proj-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}