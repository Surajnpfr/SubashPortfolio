import Image from "next/image";
import Link from "next/link";

const skills = [
  { label: "Video Editing", icon: "🎬", color: "#FFD43B" },
  { label: "3D Art", icon: "🧊", color: "#FF5C5C" },
  { label: "Web Design", icon: "🖥️", color: "#4D96FF" },
  { label: "Graphic Design", icon: "🎨", color: "#6BCB77" },
  { label: "Marketing", icon: "📣", color: "#FFD43B" },
];

const services = [
  { title: "Video Editing", desc: "YouTube, reels, promos & motion graphics", icon: "🎬", color: "#FFD43B" },
  { title: "Portfolio Websites", desc: "Bold personal sites for creatives & pros", icon: "💼", color: "#4D96FF" },
  { title: "Landing Pages", desc: "Focused pages that convert visitors", icon: "🚀", color: "#FF5C5C" },
  { title: "Web App Dev", desc: "Interactive tools & modern web apps", icon: "⚙️", color: "#6BCB77" },
  { title: "Social Media Design", desc: "Graphics for Instagram, LinkedIn & more", icon: "📱", color: "#FFD43B" },
];

const projects = [
  {
    title: "Short-Form Video Series",
    category: "Video Editing",
    desc: "A polished short-form video series with clean cuts, pacing, and engaging motion graphics for a content creator.",
    tools: ["Adobe Premiere Pro"],
    image: "/project-video.png",
    color: "#FFD43B",
  },
  {
    title: "3D Scene Composition",
    category: "3D Art",
    desc: "A creative 3D scene built in Blender showcasing lighting, composition, and modern product visualisation.",
    tools: ["Blender"],
    image: "/project-3d.png",
    color: "#FF5C5C",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    desc: "A responsive, Neobrutalism-styled portfolio website with bold typography and a clean layout.",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "/project-web.png",
    color: "#4D96FF",
  },
  {
    title: "Social Media Pack",
    category: "Graphic Design",
    desc: "A branded set of social media graphics for Instagram and LinkedIn, designed for bold digital presence.",
    tools: ["Graphic Design Tools"],
    image: "/project-social.png",
    color: "#6BCB77",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7" }}>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left content */}
        <div>
          <div className="section-tag" style={{ marginBottom: "1.25rem" }}>
            Available for Freelance &amp; Remote Work 🌏
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "#111",
              marginBottom: "1.25rem",
            }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                backgroundColor: "#FFD43B",
                padding: "0 0.25rem",
                border: "3px solid #000",
                boxShadow: "4px 4px 0 #000",
                display: "inline-block",
              }}
            >
              Subash Nepal.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
              color: "#333",
              marginBottom: "1rem",
              lineHeight: 1.4,
            }}
          >
            Video Editor, 3D Artist &amp; Web Designer
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: "540px",
              marginBottom: "2.25rem",
            }}
          >
            I create bold videos, 3D visuals, websites, and digital content for
            clients, creators, and businesses — from Bhairahawa, Nepal 🇳🇵
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" className="btn-primary">
              Contact Me →
            </Link>
            <Link href="/projects" className="btn-secondary">
              View My Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/subashnpfr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right – photo */}
        <div className="hero-photo" style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "4px solid #000",
              boxShadow: "10px 10px 0 #000",
              backgroundColor: "#FFF8E7",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <Image
              src="/logo.png"
              alt="Subash Nepal — Video Editor, 3D Artist & Web Designer"
              fill
              sizes="300px"
              style={{ objectFit: "contain", padding: "2rem" }}
              priority
            />
          </div>
          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "-16px",
              backgroundColor: "#FF5C5C",
              border: "3px solid #000",
              boxShadow: "4px 4px 0 #000",
              padding: "0.5rem 1rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Open to Work ✓
          </div>
        </div>
      </section>

      {/* ── SKILLS MARQUEE ── */}
      <div
        style={{
          borderTop: "3px solid #000",
          borderBottom: "3px solid #000",
          backgroundColor: "#111",
          overflow: "hidden",
          padding: "0.85rem 0",
        }}
      >
        <div className="marquee-track">
          {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: s.color,
                marginRight: "2.5rem",
                whiteSpace: "nowrap",
              }}
            >
              {s.icon} {s.label}
              <span style={{ color: "#555", marginLeft: "1rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-tag">What I Do</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#111",
              marginTop: "0.5rem",
            }}
          >
            Services I Offer
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="neo-card card-hover"
              style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: svc.color,
                  border: "2px solid #000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  boxShadow: "3px 3px 0 #000",
                  flexShrink: 0,
                }}
              >
                {svc.icon}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111" }}>
                {svc.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.5 }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <Link href="/services" className="btn-secondary">
            See All Services →
          </Link>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="section-tag" style={{ backgroundColor: "#FF5C5C", color: "#fff" }}>
              My Work
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.15,
                color: "#FFF8E7",
                marginTop: "0.5rem",
              }}
            >
              Featured Projects
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="card-hover-gold"
                style={{
                  backgroundColor: "#FFF8E7",
                  border: "3px solid #000",
                  boxShadow: "6px 6px 0 #FFD43B",
                  overflow: "hidden",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: "relative",
                    height: "180px",
                    backgroundColor: proj.color,
                    borderBottom: "3px solid #000",
                    overflow: "hidden",
                  }}
                >
                  <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: proj.color,
                      border: "2px solid #000",
                      padding: "0.2rem 0.6rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      boxShadow: "2px 2px 0 #000",
                    }}
                  >
                    {proj.category}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#111", marginBottom: "0.5rem" }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.55, marginBottom: "1rem" }}>
                    {proj.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {proj.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          backgroundColor: "#111",
                          color: "#FFD43B",
                          border: "1px solid #333",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.55rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/projects"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#111",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
            <Link href="/projects" className="btn-primary">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          backgroundColor: "#FFD43B",
          borderTop: "4px solid #000",
          borderBottom: "4px solid #000",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#111", marginBottom: "1rem" }}>
            Let&apos;s Work Together
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.15,
              color: "#111",
              marginBottom: "1.25rem",
            }}
          >
            Have a project in mind?
            <br />
            Let&apos;s create something{" "}
            <span style={{ backgroundColor: "#111", color: "#FFD43B", padding: "0 0.25rem" }}>bold</span>{" "}
            together.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#333", marginBottom: "2rem", lineHeight: 1.65 }}>
            Need a video edited, a website designed, or creative content for your brand?
            I&apos;m available for freelance and remote projects.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
            Contact Me →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: flex; justify-content: center; }
          .hero-photo > div { width: 240px !important; height: 270px !important; }
        }
      `}</style>
    </div>
  );
}
