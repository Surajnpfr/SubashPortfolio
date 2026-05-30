"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#FFF8E7",
        borderBottom: "3px solid #000",
        boxShadow: scrolled ? "0 4px 0px #000" : "none",
        transition: "box-shadow 0.2s",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.4rem",
            textDecoration: "none",
            color: "#111",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <Image
            src="/logo.png"
            alt="Subash Nepal Logo"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
          Subash Nepal
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginLeft: "1rem", fontSize: "0.9rem", padding: "0.5rem 1.25rem" }}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "#FFD43B",
            border: "2px solid #000",
            boxShadow: "3px 3px 0px #000",
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
          }}
          className="hamburger-btn"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#000",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#000",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "3px",
              background: "#000",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#FFF8E7",
            borderTop: "3px solid #000",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                color: "#111",
                padding: "0.75rem 1rem",
                border: "2px solid #000",
                backgroundColor: pathname === link.href ? "#FFD43B" : "#fff",
                boxShadow: "3px 3px 0px #000",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ textAlign: "center", justifyContent: "center", marginTop: "0.5rem" }}
          >
            Hire Me →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
