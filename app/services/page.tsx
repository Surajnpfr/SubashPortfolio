import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Subash Nepal | Video Editing, Web Design, 3D Art",
  description:
    "Hire Subash Nepal for video editing, web design, landing pages, web app development, 3D art, social media design, and graphic design.",
};

const services = [
  {
    icon: "🎬",
    title: "Video Editing",
    description: "Clean and engaging video editing for social media, YouTube, promotional content, and client projects. From raw footage to polished final cut.",
    tools: ["Adobe Premiere Pro", "Motion Graphics", "Color Grading"],
    examples: ["YouTube video editing", "Social media reels & shorts", "Promotional videos", "Content repurposing"],
    color: "#FFD43B",
    accent: "#111",
  },
  {
    icon: "💼",
    title: "Portfolio Website Development",
    description: "Personal portfolio websites for students, freelancers, creators, and professionals who want to showcase their work online.",
    tools: ["HTML / CSS / JS", "Next.js", "Responsive Design"],
    examples: ["Student portfolios", "Freelancer websites", "Creator showcases", "Professional profiles"],
    color: "#4D96FF",
    accent: "#fff",
  },
  {
    icon: "🚀",
    title: "Landing Page Design",
    description: "Bold and focused landing pages for products, services, campaigns, or personal brands. Designed to convert visitors into clients.",
    tools: ["HTML / CSS / JS", "Next.js", "Conversion Design"],
    examples: ["Product launches", "Service promotion pages", "Campaign pages", "Personal brand pages"],
    color: "#FF5C5C",
    accent: "#fff",
  },
  {
    icon: "⚙️",
    title: "Web App Development",
    description: "Simple, modern web applications and interactive digital tools based on client needs. Clean UI, functional logic, responsive layout.",
    tools: ["React / Next.js", "TypeScript", "JavaScript"],
    examples: ["Interactive tools", "Client dashboards", "Custom web apps", "Modern UI interfaces"],
    color: "#6BCB77",
    accent: "#111",
  },
  {
    icon: "📱",
    title: "Social Media Design",
    description: "Eye-catching graphics for Instagram, Facebook, LinkedIn, and other digital platforms. Built for engagement and brand consistency.",
    tools: ["Graphic Design Tools", "Adobe Photoshop", "Canva Pro"],
    examples: ["Instagram posts & stories", "LinkedIn banners", "Facebook cover art", "Content packs"],
    color: "#FFD43B",
    accent: "#111",
  },
  {
    icon: "🧊",
    title: "3D Art",
    description: "Creative 3D visuals, scenes, and assets made using Blender. From product renders to abstract art and creative visual concepts.",
    tools: ["Blender", "3D Modeling", "Lighting & Rendering"],
    examples: ["3D product visuals", "Scene compositions", "Creative 3D concepts", "Brand visuals"],
    color: "#FF5C5C",
    accent: "#fff",
  },
];

const workItems = [
  "✅ Freelance projects",
  "✅ Remote work",
  "✅ Client-based creative work",
  "✅ Website design and development",
  "✅ Video editing projects",
  "✅ Social media design",
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#111", borderBottom: "4px solid #000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <span className="section-tag" style={{ backgroundColor: "#4D96FF", color: "#fff" }}>Services</span>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#FFF8E7", marginTop: "0.75rem", lineHeight: 1.1 }}>
          What I Can Do{" "}
          <span style={{ backgroundColor: "#FFD43B", color: "#111", padding: "0 0.25rem" }}>For You</span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#aaa", maxWidth: "540px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          From bold websites to engaging videos and stunning 3D visuals — I&apos;ve got you covered.
        </p>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }} className="services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="card-hover" style={{ backgroundColor: "#fff", border: "3px solid #000", boxShadow: "7px 7px 0 #000", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Colored header */}
              <div style={{ backgroundColor: svc.color, borderBottom: "3px solid #000", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "2.2rem" }}>{svc.icon}</span>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: svc.accent, margin: 0 }}>
                  {svc.title}
                </h2>
              </div>

              {/* Body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#444", lineHeight: 1.75 }}>
                  {svc.description}
                </p>

                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#111", marginBottom: "0.5rem" }}>
                    Includes:
                  </p>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {svc.examples.map((ex) => (
                      <li key={ex} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#555" }}>
                        → {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#111", marginBottom: "0.5rem" }}>
                    Tools:
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {svc.tools.map((t) => (
                      <span key={t} style={{ backgroundColor: svc.color, border: "2px solid #000", boxShadow: "2px 2px 0 #000", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.75rem", padding: "0.25rem 0.6rem", color: svc.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <Link href="/contact" className="btn-dark">
                    Contact for this service →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AVAILABILITY ── */}
      <section style={{ backgroundColor: "#111", borderTop: "4px solid #000", borderBottom: "4px solid #000", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="availability-grid">
            <div>
              <span className="section-tag" style={{ backgroundColor: "#6BCB77" }}>Availability</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFF8E7", marginTop: "0.75rem", marginBottom: "1rem" }}>
                Open for Work
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#aaa", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                I&apos;m open to a wide range of freelance and remote projects — ethical, legal, and impactful work that helps clients succeed.
              </p>
              <Link href="/contact" className="btn-primary">Start a Project →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {workItems.map((item) => (
                <div key={item} style={{ backgroundColor: "#1a1a1a", border: "2px solid #333", padding: "0.75rem 1rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#FFF8E7" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#FFD43B", borderTop: "4px solid #000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#111", marginBottom: "1rem" }}>
            Ready to get started?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#333", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            Send me a message and let&apos;s discuss how I can help with your video, website, design, or digital content needs.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1.05rem" }}>Contact Me →</Link>
            <Link href="/projects" className="btn-secondary">See My Work</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .availability-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
