import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import portrait from "../assets/portrait.png";

const EMAIL = "aauf.sayed01@gmail.com";
const WHATSAPP = "https://wa.me/971586147909";
const LINKEDIN = "https://www.linkedin.com/in/aauf-sayed";
const GITHUB = "https://github.com/aaufsayed01";
const ROLES = ["Backend Engineer", "Full Stack Developer", "Systems Builder", "API Architect"];

/* ── Particle grid canvas ─────────────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!; const ctx = canvas.getContext("2d")!;
    let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    type P = { x: number; y: number; o: number; s: number; };
    const pts: P[] = [];
    const COLS = Math.ceil(W / 65), ROWS = Math.ceil(H / 65);
    for (let i = 0; i < COLS; i++) for (let j = 0; j < ROWS; j++)
      if (Math.random() > 0.82) pts.push({ x: i * 65 + Math.random() * 25, y: j * 65 + Math.random() * 25, o: Math.random(), s: 0.003 + Math.random() * 0.005 });
    let t = 0, raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H); t += 0.01;
      ctx.strokeStyle = "rgba(200,169,110,0.022)"; ctx.lineWidth = 0.5;
      for (let i = 0; i <= COLS; i++) { ctx.beginPath(); ctx.moveTo(i * 65, 0); ctx.lineTo(i * 65, H); ctx.stroke(); }
      for (let j = 0; j <= ROWS; j++) { ctx.beginPath(); ctx.moveTo(0, j * 65); ctx.lineTo(W, j * 65); ctx.stroke(); }
      pts.forEach(p => {
        p.o = 0.04 + 0.18 * Math.abs(Math.sin(t * p.s * 100));
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.o})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

/* ── Count-up stat ────────────────────────────────────────────────────────── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0; const dur = 1200; const step = 16;
      const inc = target / (dur / step);
      const t = setInterval(() => {
        start = Math.min(start + inc, target);
        setVal(Math.floor(start));
        if (start >= target) clearInterval(t);
      }, step);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Magnetic button ──────────────────────────────────────────────────────── */
function MagBtn({ href, solid, children, external }: { href: string; solid?: boolean; children: React.ReactNode; external?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!; const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    el.style.transform = `translate(${x}px,${y}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <a ref={ref} href={href}
      target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: "'DM Mono',monospace", fontSize: "0.65rem",
        letterSpacing: "0.12em", textTransform: "uppercase",
        padding: "13px 28px", borderRadius: 2, textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        background: solid ? "#c8a96e" : "transparent",
        color: solid ? "#05070a" : "#c8a96e",
        border: solid ? "none" : "1px solid rgba(200,169,110,0.35)",
        fontWeight: solid ? 500 : 400,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        if (solid) { el.style.opacity = "0.85"; }
        else { el.style.background = "rgba(200,169,110,0.1)"; el.style.borderColor = "#c8a96e"; }
      }}
      onMouseLeave={e => {
        onLeave();
        const el = e.currentTarget;
        if (solid) { el.style.opacity = "1"; }
        else { el.style.background = "transparent"; el.style.borderColor = "rgba(200,169,110,0.35)"; }
      }}
    >{children}</a>
  );
}

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const tmr = useRef<number | null>(null);

  useEffect(() => {
    const t = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < t.length) { tmr.current = window.setTimeout(() => setDisplayed(t.slice(0, displayed.length + 1)), 55); }
      else { tmr.current = window.setTimeout(() => setTyping(false), 1900); }
    } else {
      if (displayed.length > 0) { tmr.current = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30); }
      else { setRoleIdx(i => (i + 1) % ROLES.length); setTyping(true); }
    }
    return () => { if (tmr.current) clearTimeout(tmr.current); };
  }, [displayed, typing, roleIdx]);

  const stats = [
    { val: 38, suffix: "+", label: "DB Models" },
    { val: 5, suffix: "", label: "User Roles" },
    { val: 16, suffix: "", label: "Tests Written" },
    { val: 10, suffix: "", label: "Currencies" },
  ];

  const socials = [
    { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
    { icon: Phone, href: WHATSAPP, label: "WhatsApp" },
    { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" },
    { icon: Github, href: GITHUB, label: "GitHub" },
  ];

  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", maxWidth: "100vw" }}>
      <ParticleCanvas />
      {/* Watermark */}
      <div style={{
        position: "absolute", right: "-0.05em", top: "50%", transform: "translateY(-50%)",
        fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(8rem,22vw,22rem)",
        color: "rgba(200,169,110,0.022)", letterSpacing: "0.02em", pointerEvents: "none",
        userSelect: "none", lineHeight: 1, zIndex: 0
      }}>AAUF</div>

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "8rem 2rem 4rem", position: "relative", zIndex: 1, width: "100%" }}>

        {/* Mobile portrait */}
        <div className="mobile-portrait-wrap" style={{ marginBottom: "2.5rem" }}>
          <div style={{
            width: "100%", maxWidth: 400, margin: "0 auto", borderRadius: 4, overflow: "hidden",
            border: "1px solid rgba(200,169,110,0.18)", position: "relative", height: 260
          }}>
            <img src={portrait} alt="Sayed Aauf"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 50%,rgba(5,7,10,0.55))" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem", alignItems: "center" }} className="hero-grid">
          {/* ── LEFT ── */}
          <div>
            {/* Status pill */}
            <div className="au d1" style={{ marginBottom: "2rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#94a3b8", border: "1px solid rgba(255,255,255,0.08)", padding: "7px 16px", borderRadius: 2,
                background: "rgba(255,255,255,0.02)"
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
                  boxShadow: "0 0 12px #22c55e", display: "inline-block", animation: "pulseDot 2s infinite"
                }} />
                Open to work · Dubai, UAE
              </span>
            </div>

            {/* Giant name with glitch */}
            <div className="au d2" style={{ marginBottom: "0.75rem" }}>
              <h1 style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(4rem,12vw,10rem)", lineHeight: 0.88, color: "#e2e8f0", letterSpacing: "0.02em"
              }}>
                <span className="glitch-wrap" data-text="SAYED">SAYED</span><br />
                <span className="gold-text" style={{ fontSize: "clamp(4rem,12vw,10rem)" }}>AAUF</span>
                <span style={{ color: "#c8a96e" }}>.</span>
              </h1>
            </div>

            {/* Typewriter — brighter color */}
            <div className="au d3" style={{ marginBottom: "1.75rem" }}>
              <p style={{
                fontFamily: "'DM Mono',monospace", fontSize: "clamp(0.85rem,2vw,1.1rem)",
                color: "#c8a96e", letterSpacing: "0.05em", minHeight: "1.8em",
                textShadow: "0 0 20px rgba(200,169,110,0.3)"
              }}>
                <span style={{ color: "#334155" }}>// </span>{displayed}
                <span style={{
                  borderRight: "2px solid #c8a96e", marginLeft: 1,
                  animation: "blink 1s step-end infinite", verticalAlign: "text-bottom"
                }}>‌</span>
              </p>
            </div>

            {/* Summary — high contrast */}
            <div className="au d4" style={{ marginBottom: "2.25rem" }}>
              <p style={{ maxWidth: 520, lineHeight: 1.9, color: "#cbd5e1", fontSize: "0.95rem" }}>
                Backend-focused engineer who built a{" "}
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>production freight management platform</span>
                {" "}end-to-end — from schema through deployment. Strong in{" "}
                <span style={{ color: "#e2e8f0", fontWeight: 500 }}>Node.js · TypeScript · PostgreSQL · Prisma</span>
                {" "}with a bias toward systems that work reliably in production.
              </p>
            </div>

            {/* Stats with count-up */}
            <div className="au d5" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem", marginBottom: "2.25rem" }}>
              {stats.map(s => (
                <div key={s.label} className="stat-box" style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2rem", color: "#c8a96e", lineHeight: 1 }}>
                    <CountUp target={s.val} suffix={s.suffix} />
                  </p>
                  <p style={{
                    fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "0.16em",
                    textTransform: "uppercase", color: "#94a3b8", marginTop: "0.35rem"
                  }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs — magnetic */}
            <div className="au d6" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
              {/* Solid */}
              <MagBtn href="#projects" solid>View Work →</MagBtn>
              {/* Outline */}
              <MagBtn href="/Aaufresume.pdf" external>Download Résumé ↗</MagBtn>
            </div>

            {/* Socials */}
            <div className="au d7" style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}
                  style={{
                    width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.07)", borderRadius: 2, color: "#94a3b8",
                    textDecoration: "none", transition: "all 0.25s"
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(200,169,110,0.4)"; el.style.color = "#c8a96e";
                    el.style.background = "rgba(200,169,110,0.07)"; el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.color = "#94a3b8";
                    el.style.background = "transparent"; el.style.transform = "translateY(0)";
                  }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — desktop portrait ── */}
          <div className="hero-r ai d5" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: -20, right: -20, bottom: 20, left: 20,
              border: "1px solid rgba(200,169,110,0.15)", borderRadius: 2, zIndex: 0
            }} />
            <div style={{
              position: "absolute", top: -10, right: -10, bottom: 10, left: 10,
              border: "1px solid rgba(200,169,110,0.06)", borderRadius: 2, zIndex: 0
            }} />
            <div style={{
              position: "relative", zIndex: 1, borderRadius: 2, overflow: "hidden",
              border: "1px solid rgba(200,169,110,0.14)", aspectRatio: "3/4"
            }}>
              <img src={portrait} alt="Sayed Aauf"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom,transparent 55%,rgba(5,7,10,0.65))"
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                <p style={{
                  fontFamily: "'DM Mono',monospace", fontSize: "0.58rem",
                  color: "rgba(200,169,110,0.75)", letterSpacing: "0.16em", textTransform: "uppercase"
                }}>
                  Based in Dubai, UAE
                </p>
              </div>
            </div>
            <div className="af" style={{
              position: "absolute", bottom: -28, left: -28, zIndex: 2,
              background: "rgba(8,12,17,0.97)", border: "1px solid rgba(200,169,110,0.22)",
              borderRadius: 2, padding: "12px 18px", backdropFilter: "blur(16px)"
            }}>
              <p style={{
                fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#b0bec5", marginBottom: 5
              }}>Primary Stack</p>
              <p style={{
                fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: "#c8a96e",
                letterSpacing: "0.04em"
              }}>TS · Node · Prisma · PG</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes pulseDot{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5);}70%{box-shadow:0 0 0 9px rgba(34,197,94,0);}}
        @media(min-width:901px){
          .mobile-portrait-wrap{display:none!important;}
          .hero-grid{grid-template-columns:1fr 380px!important;}
          .hero-r{display:block!important;}
        }
        @media(max-width:900px){
          .mobile-portrait-wrap{display:block!important;}
          .hero-grid{grid-template-columns:1fr!important;}
          .hero-r{display:none!important;}
        }
      `}</style>
    </section>
  );
}