import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#111111",
        color: "#FFF8E7",
        borderTop: "4px solid #000",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              <Image
                src="/logo.png"
                alt="Subash Nepal Logo"
                width={44}
                height={44}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#FFF8E7",
                }}
              >
                Subash Nepal
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7, color: "#ccc", fontSize: "0.95rem" }}>
              Creative visuals. Bold websites.<br />Powerful digital content.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#aaa", marginTop: "0.75rem" }}>
              📍 Bhairahawa, Nepal
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#FFD43B",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-hover"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      display: "block",
                    }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#FF5C5C",
                marginBottom: "1rem",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Video Editing", "3D Art", "Web Design", "Landing Pages", "Social Media Design", "Graphic Design"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="link-hover link-hover-pink"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      display: "block",
                    }}
                  >
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6BCB77",
                marginBottom: "1rem",
              }}
            >
              Get in Touch
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#ccc", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Have a project in mind? Let&apos;s create something bold together.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
            >
              Contact Me →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "2px solid #333", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#aaa", fontSize: "0.85rem", margin: 0 }}>
            © {year} Subash Nepal. All rights reserved.
          </p>
          {/* Social links */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              { label: "GitHub", href: "https://github.com/Subashnpfr", color: "#FFF8E7" },
              { label: "Instagram", href: "https://www.instagram.com/subashnp_/", color: "#FF5C5C" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/subashnpfr/", color: "#4D96FF" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: s.color,
                  textDecoration: "none",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#aaa", fontSize: "0.85rem", margin: 0 }}>
            Available for freelance &amp; remote work 🌏
          </p>
        </div>
      </div>
    </footer>
  );
}
