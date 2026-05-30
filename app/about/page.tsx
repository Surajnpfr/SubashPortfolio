import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Subash Nepal | Video Editor, 3D Artist & Web Designer",
  description:
    "Learn about Subash Nepal, a creative video editor, 3D artist, and web designer from Bhairahawa, Nepal.",
};

const skills = [
  { name: "Video Editing", level: 90, color: "#FFD43B" },
  { name: "Adobe Premiere Pro", level: 88, color: "#FFD43B" },
  { name: "3D Art (Blender)", level: 80, color: "#FF5C5C" },
  { name: "Web Design", level: 85, color: "#4D96FF" },
  { name: "Web Development", level: 82, color: "#4D96FF" },
  { name: "Graphic Design", level: 80, color: "#6BCB77" },
  { name: "Social Media Design", level: 85, color: "#6BCB77" },
  { name: "Digital Marketing", level: 75, color: "#FFD43B" },
];

const whatIDo = [
  { icon: "🎬", title: "Video Editing", desc: "I edit videos for creators, brands, and businesses — from YouTube content to promo videos and social media reels." },
  { icon: "🧊", title: "3D Visuals", desc: "I create 3D visuals, scenes, and assets using Blender — from product renders to creative compositions." },
  { icon: "🖥️", title: "Web Design & Dev", desc: "I design and develop modern, responsive websites for individuals, brands, and businesses." },
  { icon: "🎨", title: "Graphic Design", desc: "I create social media graphics, banners, thumbnails, posters, and other visual content for digital platforms." },
  { icon: "📣", title: "Digital Content", desc: "I help clients build a stronger digital presence with content strategy and promotional visuals." },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E7" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#111", borderBottom: "4px solid #000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <span className="section-tag" style={{ backgroundColor: "#FFD43B", marginBottom: "1.25rem" }}>
          About Me
        </span>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#FFF8E7", marginTop: "0.5rem", lineHeight: 1.1 }}>
          The Creative Behind the{" "}
          <span style={{ backgroundColor: "#FFD43B", color: "#111", padding: "0 0.25rem" }}>Work</span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "#aaa", maxWidth: "540px", margin: "1rem auto 0", lineHeight: 1.7 }}>
          Video editor, 3D artist, and web designer from Bhairahawa, Nepal.
        </p>
      </section>

      {/* ── INTRO + PHOTO ── */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "center" }}
        className="about-intro-grid"
      >
        <div>
          <span className="section-tag">Who I Am</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", lineHeight: 1.2, color: "#111", marginTop: "0.75rem", marginBottom: "1.25rem" }}>
            Creative, Technical &amp; Ready to Deliver
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            I&apos;m <strong>Subash Nepal</strong>, a video editor, 3D artist, and web designer
            based in <strong>Bhairahawa, Nepal</strong>. I enjoy creating digital experiences
            that combine creativity, design, and technology.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            My work focuses on helping clients communicate better through videos,
            websites, visuals, and social media content — turning ideas into
            eye-catching, memorable digital experiences.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#444", lineHeight: 1.8, marginBottom: "2rem" }}>
            I am an SEE graduate and currently studying <strong>Computer Science</strong>,
            building my skills in creative technology, design, and digital production.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { label: "📍 Bhairahawa, Nepal", color: "#FFD43B" },
              { label: "🎓 CS Student", color: "#4D96FF" },
              { label: "💼 Freelancer", color: "#FF5C5C" },
              { label: "🌏 Remote Worker", color: "#6BCB77" },
            ].map((tag) => (
              <span key={tag.label} style={{ backgroundColor: tag.color, border: "2px solid #000", boxShadow: "3px 3px 0 #000", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", padding: "0.4rem 0.9rem", color: "#111" }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "300px", height: "300px", border: "4px solid #000", boxShadow: "12px 12px 0 #000", backgroundColor: "#FFF8E7", overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/logo.png" alt="Subash Nepal logo" fill style={{ objectFit: "contain", padding: "2rem" }} />
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section style={{ backgroundColor: "#111", padding: "5rem 1.5rem", borderTop: "4px solid #000", borderBottom: "4px solid #000" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="section-tag" style={{ backgroundColor: "#FF5C5C", color: "#fff" }}>What I Do</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#FFF8E7", marginTop: "0.5rem" }}>
              My Core Work Areas
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {whatIDo.map((item) => (
              <div key={item.title} className="card-hover-gold" style={{ backgroundColor: "#FFF8E7", border: "3px solid #000", boxShadow: "6px 6px 0 #FFD43B", padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <span className="section-tag">Skills</span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#111", marginTop: "0.5rem", marginBottom: "2.5rem" }}>
          Tools &amp; Expertise
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#111", marginBottom: "0.5rem" }}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div style={{ height: "16px", backgroundColor: "#fff", border: "2px solid #000", boxShadow: "3px 3px 0 #000" }}>
                <div style={{ height: "100%", width: `${skill.level}%`, backgroundColor: skill.color, borderRight: skill.level < 100 ? "2px solid #000" : "none" }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {["Video Editing","Adobe Premiere Pro","Blender","3D Art","Web Development","Web Design","Graphic Design","Social Media Design","Digital Marketing","Landing Page Design","Portfolio Websites","Web App Development"].map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </section>

      {/* ── AVAILABILITY ── */}
      <section style={{ backgroundColor: "#FFD43B", borderTop: "4px solid #000", borderBottom: "4px solid #000", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#111", marginBottom: "1rem" }}>
            Open to Freelance &amp; Remote Work 🌏
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#333", lineHeight: 1.75, marginBottom: "1.75rem" }}>
            I&apos;m open to a wide range of freelance and remote projects, as long as the work is
            ethical, legal, and does not cause harm or violate platform or community guidelines.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Contact Me →</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
