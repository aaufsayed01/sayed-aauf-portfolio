import { useEffect, useRef } from "react";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const JOBS = [
  {
    period: "Dec 2025 — Present", current: true,
    title: "Software Engineer / Full Stack Developer",
    company: "JEX Logistics Platform",
    sub: "Freelance Build · Live & Deployed",
    location: "Dubai, UAE",
    bullets: [
      "Architected a multi-role freight system from scratch — 5 user roles, 38+ DB models, covering quote creation → ops pricing (buy/sell/margin) → booking → shipment tracking → carrier management",
      "Real-time messaging with Socket.IO: per-client threads, staff group chat, typing indicators, read receipts, and an async email notification engine",
      "S3 document system: visibility controls, signed download URLs, soft-delete; UAE VAT-compliant PDF invoices generated via PDFKit on worker threads",
      "Carrier quote subsystem: rate requests → ranked submissions → selection confirmation; full audit trail with actor snapshots across all entities",
      "10-currency support, JWT tokenVersion revocation, bcrypt + OTP auth, structured Pino logging with correlation IDs, Docker Compose deployment, 16 Jest + Supertest integration tests",
    ],
    tech: ["TypeScript", "Node.js", "Express 5", "PostgreSQL", "Prisma ORM", "AWS S3", "Socket.IO", "React 18", "Docker", "PDFKit", "Zod", "JWT", "Pino"],
  },
  {
    period: "Jan 2025 — May 2025", current: false,
    title: "Data Analytics Intern",
    company: "YBI Foundation",
    sub: "16-Week Program · Remote",
    location: "Remote",
    bullets: ["Built a Personal Finance Dashboard in Power BI — DAX KPIs (savings rate, expense breakdown), Power Query transforms, drill-through visuals, and dynamic slicers"],
    tech: ["Power BI", "DAX", "Power Query", "Python"],
  },
  {
    period: "Feb 2023 — Mar 2023", current: false,
    title: "Web Development Intern",
    company: "Isarva Infotech Pvt. Ltd.",
    sub: "", location: "India",
    bullets: ["Built basic web applications using HTML, JavaScript, and Python; early exposure to full-stack development practices"],
    tech: ["HTML", "CSS", "JavaScript", "Python"],
  },
];

export function Experience() {
  const hRef = useReveal();
  return (
    <section style={{ padding: "8rem 2rem", position: "relative" }}>
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
            <p className="label" style={{ marginBottom: "1rem", color: "#c8a96e" }}>03 · Experience</p>
            <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,6rem)", color: "#e2e8f0" }}>
              WHERE I'VE<br /><span className="gold-text">BUILT</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[{ n: "3", l: "Roles" }, { n: "2+", l: "Years Active" }, { n: "1", l: "Live Platform" }].map(s => (
              <div key={s.l} style={{ textAlign: "right" }}>
                <p className="display" style={{ fontSize: "2.5rem", color: "#c8a96e" }}>{s.n}</p>
                <p className="label" style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom,#c8a96e,rgba(200,169,110,0.05))"
          }} />

          {JOBS.map((job, i) => {
            const ref = useReveal(0.1); // eslint-disable-line
            return (
              <div key={i} ref={ref} className="reveal" style={{
                position: "relative", marginBottom: "3rem",
                transitionDelay: `${i * 0.12}s`,
              }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-2.45rem", top: 12,
                  width: job.current ? 13 : 9, height: job.current ? 13 : 9, borderRadius: "50%",
                  background: job.current ? "#c8a96e" : "#1e293b",
                  border: `2px solid ${job.current ? "#c8a96e" : "#334155"}`,
                  boxShadow: job.current ? "0 0 22px rgba(200,169,110,0.55)" : undefined,
                  transition: "box-shadow 0.3s",
                }} />

                <div className="card-lift" style={{
                  background: "#080c11", borderRadius: 2, padding: "2rem",
                  border: `1px solid ${job.current ? "rgba(200,169,110,0.2)" : "rgba(255,255,255,0.05)"}`,
                  position: "relative", overflow: "hidden",
                }}>
                  {job.current && <div style={{
                    position: "absolute", top: 0, right: 0, width: 220, height: 220,
                    background: "radial-gradient(circle at top right,rgba(200,169,110,0.06),transparent 70%)",
                    pointerEvents: "none"
                  }} />}

                  <div style={{
                    display: "flex", flexWrap: "wrap", justifyContent: "space-between",
                    alignItems: "flex-start", gap: "1rem", marginBottom: "1rem"
                  }}>
                    <div>
                      <p className="label" style={{ marginBottom: "0.4rem", color: job.current ? "#c8a96e" : "#b0bec5", fontSize: "0.55rem" }}>{job.period}</p>
                      <h3 className="display" style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)", color: "#e2e8f0" }}>{job.title}</h3>
                      <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: "#c8a96e", marginTop: "0.25rem" }}>{job.company}</p>
                      {job.sub && <p className="label" style={{ fontSize: "0.52rem", marginTop: "0.2rem", color: "#b0bec5" }}>{job.sub}</p>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                      {job.current && <span style={{
                        fontFamily: "'DM Mono',monospace", fontSize: "0.52rem",
                        letterSpacing: "0.12em", color: "#05070a", background: "#c8a96e",
                        padding: "3px 10px", borderRadius: 2
                      }}>CURRENT</span>}
                      <span className="label" style={{ fontSize: "0.6rem", color: "#94a3b8" }}>{job.location}</span>
                    </div>
                  </div>

                  <div style={{ borderLeft: "1px solid rgba(200,169,110,0.15)", paddingLeft: "1.25rem", marginBottom: "1.25rem" }}>
                    {job.bullets.map((b, j) => (
                      <p key={j} style={{
                        fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.85,
                        marginBottom: "0.6rem", position: "relative"
                      }}>
                        <span style={{
                          position: "absolute", left: "-1.25rem", color: "#c8a96e",
                          fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", top: "0.1rem"
                        }}>›</span>
                        {b}
                      </p>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {job.tech.map(t => <span key={t} className="tb">{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}