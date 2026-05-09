import { useState, useEffect, useRef } from "react";

const CATS = [
  { id: "backend", label: "Backend", items: ["TypeScript", "Node.js", "Express 5", "REST APIs", "Socket.IO", "Zod", "Pino", "PDFKit", "JWT"] },
  { id: "db", label: "Database", items: ["PostgreSQL 16", "Prisma ORM", "Relational Modelling", "Migrations", "Transactions", "MongoDB"] },
  { id: "cloud", label: "Cloud", items: ["AWS S3", "Docker", "Docker Compose", "Signed URLs", "Nodemailer"] },
  { id: "frontend", label: "Frontend", items: ["React 18", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "TypeScript"] },
  { id: "testing", label: "Testing", items: ["Jest", "Supertest", "Vitest", "Integration Tests", "Unit Tests"] },
  { id: "concepts", label: "Concepts", items: ["System Design", "RBAC", "Audit Logs", "Pricing Engines", "Workflow Automation", "API Security", "Multi-currency"] },
  { id: "langs", label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { id: "data", label: "Data & BI", items: ["Power BI", "DAX", "Power Query", "Data Visualisation"] },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function Skills() {
  const [active, setActive] = useState("backend");
  const cat = CATS.find(c => c.id === active)!;
  const hRef = useReveal();
  const bRef = useReveal();
  const gRef = useReveal();

  return (
    <section style={{ padding: "8rem 2rem", position: "relative", background: "rgba(8,12,17,0.55)" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg,transparent,rgba(200,169,110,0.15),transparent)"
      }} />
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>

        {/* Header */}
        <div ref={hRef} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "5rem" }} >
          <div>
            <p className="label" style={{ marginBottom: "1rem", color: "#c8a96e" }}>02 · Skills</p>
            <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,6rem)", color: "#e2e8f0" }}>
              TECHNICAL<br /><span className="gold-text">ARSENAL</span>
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.9, alignSelf: "center" }}>
            Built through shipping real systems — not tutorials.
            Every skill here has been tested against production requirements
            and real operational complexity.
          </p>
        </div>

        {/* Tabs */}
        <div ref={bRef} className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "3rem" }}>
          {CATS.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "7px 16px", borderRadius: 2, border: "1px solid", cursor: "none", transition: "all 0.2s",
              background: active === c.id ? "#c8a96e" : "transparent",
              color: active === c.id ? "#05070a" : "#94a3b8",
              borderColor: active === c.id ? "#c8a96e" : "rgba(255,255,255,0.08)",
            }}>{c.label}</button>
          ))}
        </div>

        {/* Readable skill display */}
        <div style={{ borderLeft: "2px solid rgba(200,169,110,0.25)", paddingLeft: "2rem", minHeight: 120, marginBottom: "4rem" }}>
          <p className="label" style={{ marginBottom: "1.5rem", fontSize: "0.65rem", color: "#94a3b8" }}>{cat.label} · {cat.items.length} skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {cat.items.map((item, i) => (
              <span key={item} style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "1rem",
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? "#c8a96e" : "#e2e8f0",
                background: i === 0 ? "rgba(200,169,110,0.1)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 0 ? "rgba(200,169,110,0.3)" : "rgba(255,255,255,0.08)"}`,
                padding: "8px 16px", borderRadius: 2,
                cursor: "default", transition: "all 0.2s", letterSpacing: "0.01em",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#c8a96e"; el.style.borderColor = "rgba(200,169,110,0.4)"; el.style.background = "rgba(200,169,110,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = i === 0 ? "#c8a96e" : "#e2e8f0"; el.style.borderColor = i === 0 ? "rgba(200,169,110,0.3)" : "rgba(255,255,255,0.08)"; el.style.background = i === 0 ? "rgba(200,169,110,0.1)" : "rgba(255,255,255,0.04)"; }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gRef} className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "1px", background: "rgba(200,169,110,0.06)",
          border: "1px solid rgba(200,169,110,0.06)", borderRadius: 2, overflow: "hidden"
        }}>
          {CATS.map(c => (
            <div key={c.id} onClick={() => setActive(c.id)} className="card-lift" style={{
              background: active === c.id ? "rgba(200,169,110,0.07)" : "#05070a",
              padding: "1.5rem", cursor: "none",
              borderBottom: active === c.id ? "2px solid #c8a96e" : "2px solid transparent",
              transition: "background 0.2s,border-color 0.2s",
            }}>
              <p className="label" style={{ marginBottom: "0.75rem", fontSize: "0.55rem", color: active === c.id ? "#c8a96e" : "#94a3b8" }}>{c.label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {c.items.slice(0, 4).map(it => <span key={it} className="tb">{it}</span>)}
                {c.items.length > 4 && <span className="tb" style={{ color: "#64748b", borderColor: "rgba(255,255,255,0.06)" }}>+{c.items.length - 4}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}