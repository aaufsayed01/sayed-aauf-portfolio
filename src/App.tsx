import { useState, useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { Menu, X } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Magnetic cursor
  useEffect(() => {
    let rx = 0, ry = 0, cx = 0, cy = 0;
    const move = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; };
    window.addEventListener("mousemove", move);
    let raf: number;
    const loop = () => {
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      if (cursorRef.current) { cursorRef.current.style.left = cx + "px"; cursorRef.current.style.top = cy + "px"; }
      if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "skills", "experience", "projects", "contact"];
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { threshold: 0.3 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const navItems = [
    { label: "Skills", href: "#skills" }, { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {/* Cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      {/* Scanline */}
      <div className="scanline" />

      <div style={{ minHeight: "100vh", background: "#05070a", color: "#e2e8f0" }}>
        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(5,7,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.07)" : "none",
          transition: "all 0.4s ease",
        }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
            <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.4rem", color: "#e2e8f0", letterSpacing: "0.05em" }}>
                SA<span style={{ color: "#c8a96e" }}>.</span>
              </span>
            </a>
            <div className="desk" style={{ alignItems: "center", gap: "2.5rem" }}>
              {navItems.map(n => (
                <a key={n.label} href={n.href} className={`nav-a${active === n.href.replace("#", "") ? " active" : ""}`}>{n.label}</a>
              ))}
              <a href="/Aaufresume.pdf" target="_blank" rel="noreferrer" style={{
                fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#c8a96e", border: "1px solid rgba(200,169,110,0.3)", padding: "6px 14px", borderRadius: 2,
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                Résumé ↗
              </a>
            </div>
            <button className="mob" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#e2e8f0", cursor: "none", padding: 4 }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          {menuOpen && (
            <div style={{ background: "rgba(5,7,10,0.98)", borderTop: "1px solid rgba(200,169,110,0.08)", padding: "1.5rem 2rem" }}>
              {navItems.map(n => (
                <a key={n.label} href={n.href} className="nav-a" style={{ display: "block", padding: "0.75rem 0", fontSize: "0.85rem" }}
                  onClick={() => setMenuOpen(false)}>{n.label}</a>
              ))}
              <a href="/Aaufresume.pdf" target="_blank" rel="noreferrer" className="nav-a"
                style={{ display: "block", padding: "0.75rem 0", color: "#c8a96e" }}>Résumé ↗</a>
            </div>
          )}
        </nav>

        <main>
          <div id="home"><Hero /></div>
          <div id="skills"><Skills /></div>
          <div id="experience"><Experience /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>
        </main>

        <footer style={{ borderTop: "1px solid rgba(200,169,110,0.07)", padding: "3rem 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2rem", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
            SAYED AAUF<span style={{ color: "#c8a96e" }}>.</span>
          </p>
          <p className="label" style={{ marginBottom: "1.5rem" }}>Software Engineer · Full Stack Developer</p>
          <div className="divider" style={{ maxWidth: 400, margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: "#1e293b", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Sayed Aauf — Built with TypeScript & React
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}