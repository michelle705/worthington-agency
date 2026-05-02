import { useState, useEffect } from "react";

const CDN = "https://worthington-agency-v1777320173.websitepro-cdn.com";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#coverage" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR ── */}
      <div
        style={{
          background: "#A07828",
          textAlign: "center",
          padding: "10px 20px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase" as const,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#fff",
            opacity: 0.8,
            animation: "pulse 2s infinite",
            flexShrink: 0,
            display: "inline-block",
          }}
        />
        <span>
          <a href="tel:8137837288" style={{ color: "#fff", textDecoration: "none", marginRight: 16 }}>
            (813) 783-7288
          </a>
          &nbsp;&mdash;&nbsp;
          <a href="mailto:Info@worthington.agency" style={{ color: "#fff", textDecoration: "none", marginLeft: 16 }}>
            Info@worthington.agency
          </a>
          &nbsp;&mdash;&nbsp;
          <span style={{ marginLeft: 16 }}>Wesley Chapel, FL</span>
        </span>
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#fff",
            opacity: 0.8,
            animation: "pulse 2s infinite",
            flexShrink: 0,
            display: "inline-block",
          }}
        />
      </div>

      {/* ── MAIN NAV ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: "#141E32",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
          borderBottom: "1px solid rgba(196,150,58,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 48px",
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#hero" onClick={(e) => scroll(e, "#hero")} style={{ display: "block" }}>
            <img
              src={`${CDN}/wp-content/uploads/2026/03/logo.webp`}
              alt="Worthington Agency"
              style={{
                height: 80,
                width: "auto",
                objectFit: "contain",
                filter: "sepia(0.15) saturate(1.4) hue-rotate(-5deg) brightness(1.1)",
              }}
            />
          </a>

          {/* Desktop nav links */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 36 }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C4963A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scroll(e, "#contact")}
              style={{
                background: "transparent",
                border: "1px solid #C4963A",
                color: "#C4963A",
                padding: "8px 20px",
                borderRadius: 2,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C4963A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C4963A";
              }}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", padding: 8 }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div
            style={{ background: "#141E32", borderTop: "1px solid rgba(196,150,58,0.15)", padding: "0 24px 16px" }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
