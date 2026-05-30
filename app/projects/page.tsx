import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Subash Nepal | Video Editing, 3D Art & Web Design Portfolio",
  description:
    "Browse Subash Nepal's portfolio projects in video editing, 3D art, web design, and social media design.",
};

const categories = ["All", "Video Editing", "3D Art", "Web Design", "Graphic Design"];

const projects = [
  {
    id: 1,
    title: "Short-Form Video Series",
    category: "Video Editing",
    description: "A polished short-form video editing project focused on clear storytelling, clean cuts, pacing, and visual engagement. Produced for a content creator's social media channels.",
    tools: ["Adobe Premiere Pro", "Color Grading", "Motion Graphics"],
    role: "Video Editor",
    image: "/project-video.png",
    color: "#FFD43B",
    accentText: "#111",
    link: "https://drive.google.com/drive/folders/130qdpr8ZXNt2sIBSl3hfGKECiMWw3gnK?usp=drive_link",
  },
  {
    id: 2,
    title: "3D Scene Composition",
    category: "3D Art",
    description: "A 3D visual project created using Blender, showcasing lighting, composition, modeling, and creative scene design. Focused on atmosphere and product-style rendering.",
    tools: ["Blender", "3D Modeling", "Lighting", "Rendering"],
    role: "3D Artist",
    image: "/project-3d.png",
    color: "#FF5C5C",
    accentText: "#fff",
    link: "https://drive.google.com/drive/folders/1TLztkRD2gOU4m5BMSQT5Cg1AEmRMMApd?usp=drive_link",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description: "A responsive website designed to present content clearly with a bold and modern Neobrutalism visual style. Built with clean HTML, CSS, and JavaScript for fast loading.",
    tools: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    role: "Web Designer & Developer",
    image: "/project-web.png",
    color: "#4D96FF",
    accentText: "#fff",
    link: "https://surajnepal.dev/",
  },
  {
    id: 4,
    title: "Social Media Design Pack",
    category: "Graphic Design",
    description: "A set of digital visuals designed for online branding, promotion, and social media engagement. Includes post templates, story designs, and banner graphics.",
    tools: ["Graphic Design", "Brand Design", "Social Media"],
    role: "Graphic Designer",
    image: "/project-social.png",
    color: "#6BCB77",
    accentText: "#111",
    link: null,
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#111", borderBottom: "4px solid #000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <span className="section-tag" style={{ backgroundColor: "#6BCB77" }}>Portfolio</span>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#FFF8E7", marginTop: "0.75rem", lineHeight: 1.1 }}>
          My{" "}
          <span style={{ backgroundColor: "#FFD43B", color: "#111", padding: "0 0.25rem" }}>Projects</span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#aaa", maxWidth: "540px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          A selection of work spanning video editing, 3D art, web design, and graphic design.
        </p>
      </section>

      {/* ── CATEGORY TAGS ── */}
      <div style={{ borderBottom: "3px solid #000", backgroundColor: "#FFF8E7", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
        {categories.map((cat, i) => (
          <span key={cat} className={`filter-btn${i === 0 ? " active" : ""}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* ── PROJECT CARDS ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="card-hover-xl project-card-grid"
              style={{
                display: "grid",
                gridTemplateColumns: idx % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                border: "3px solid #000",
                boxShadow: "8px 8px 0 #000",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              {/* Image side */}
              <div
                className="project-img-side"
                style={{
                  order: idx % 2 === 0 ? 0 : 1,
                  position: "relative",
                  minHeight: "280px",
                  backgroundColor: proj.color,
                  borderRight: idx % 2 === 0 ? "3px solid #000" : "none",
                  borderLeft: idx % 2 !== 0 ? "3px solid #000" : "none",
                  overflow: "hidden",
                }}
              >
                <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "16px", left: "16px", backgroundColor: proj.color, border: "2px solid #000", boxShadow: "3px 3px 0 #000", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", padding: "0.3rem 0.75rem", color: proj.accentText }}>
                  {proj.category}
                </div>
              </div>

              {/* Content side */}
              <div
                className="project-content-side"
                style={{ order: idx % 2 === 0 ? 1 : 0, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}
              >
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.4rem" }}>
                    Project {String(proj.id).padStart(2, "0")}
                  </p>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#111", lineHeight: 1.2 }}>
                    {proj.title}
                  </h2>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.75 }}>
                  {proj.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#999" }}>Role:</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#111" }}>{proj.role}</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {proj.tools.map((t) => (
                    <span key={t} style={{ backgroundColor: proj.color, border: "2px solid #000", boxShadow: "2px 2px 0 #000", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.75rem", padding: "0.25rem 0.6rem", color: proj.accentText }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      View Project →
                    </a>
                  ) : (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: "#f0f0f0", border: "2px solid #ccc", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", padding: "0.55rem 1rem", color: "#999" }}>
                      🔒 Link coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#FFD43B", borderTop: "4px solid #000", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#111", marginBottom: "1rem" }}>
            Want to work on something together?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#333", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            I&apos;m available for freelance and remote projects. Let&apos;s create something bold.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1.05rem" }}>Contact Me →</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .project-card-grid { grid-template-columns: 1fr !important; }
          .project-img-side { order: 0 !important; border-right: none !important; border-left: none !important; border-bottom: 3px solid #000 !important; }
          .project-content-side { order: 1 !important; padding: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
