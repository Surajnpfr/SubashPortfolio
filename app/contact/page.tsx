"use client";
import { useState } from "react";
import Link from "next/link";

const projectTypes = [
  "Video Editing",
  "3D Art",
  "Portfolio Website",
  "Landing Page",
  "Web App",
  "Social Media Design",
  "Graphic Design",
  "Other",
];

const budgetOptions = [
  "Under $100",
  "$100 – $300",
  "$300 – $600",
  "$600 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Let's discuss",
];

const timelineOptions = [
  "ASAP (Rush)",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "Flexible / Ongoing",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validate required fields
    const newErrors: Record<string, string> = {};
    if (!data.get("name")) newErrors.name = "Name is required";
    if (!data.get("email")) newErrors.email = "Email is required";
    if (!data.get("message")) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setFormState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xpqnazwv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <div style={{ backgroundColor: "#FFF8E7" }}>

      {/* ── PAGE HEADER ── */}
      <section
        style={{
          backgroundColor: "#111",
          borderBottom: "4px solid #000",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <span className="section-tag" style={{ backgroundColor: "#FF5C5C", color: "#fff" }}>
          Contact
        </span>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "#FFF8E7",
            marginTop: "0.75rem",
            lineHeight: 1.1,
          }}
        >
          Let&apos;s Work{" "}
          <span style={{ backgroundColor: "#FFD43B", color: "#111", padding: "0 0.25rem" }}>
            Together
          </span>
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            color: "#aaa",
            maxWidth: "560px",
            margin: "1rem auto 0",
            lineHeight: 1.7,
          }}
        >
          Have a project in mind? Send me a message and let&apos;s discuss how I can help
          with your video, website, design, or digital content needs.
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >

          {/* ── LEFT: Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            {/* Status badge */}
            <div
              style={{
                backgroundColor: "#6BCB77",
                border: "3px solid #000",
                boxShadow: "6px 6px 0 #000",
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>✅</span>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", margin: 0 }}>
                  Available for Work
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#333", margin: 0 }}>
                  Accepting freelance & remote projects
                </p>
              </div>
            </div>

            {/* Contact info blocks */}
            {[
              { icon: "📍", label: "Location", value: "Bhairahawa, Nepal" },
              { icon: "🌏", label: "Work Type", value: "Freelance & Remote" },
              { icon: "⏰", label: "Response Time", value: "Usually within 24 hours" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "#fff",
                  border: "3px solid #000",
                  boxShadow: "5px 5px 0 #000",
                  padding: "1.25rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", margin: 0, marginBottom: "0.2rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#111", margin: 0 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              style={{
                backgroundColor: "#111",
                border: "3px solid #000",
                boxShadow: "5px 5px 0 #000",
                padding: "1.5rem",
              }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#FFD43B", marginBottom: "1rem" }}>
                Connect Online
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { platform: "LinkedIn", handle: "/in/subashnpfr", href: "https://www.linkedin.com/in/subashnpfr/", color: "#4D96FF" },
                  { platform: "GitHub", handle: "Subashnpfr", href: "https://github.com/Subashnpfr", color: "#FFF8E7" },
                  { platform: "Instagram", handle: "@subashnp_", href: "https://www.instagram.com/subashnp_/", color: "#FF5C5C" },
                ].map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: s.color,
                      textDecoration: "none",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid #222",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.paddingLeft = "0.4rem")}
                    onMouseOut={(e) => (e.currentTarget.style.paddingLeft = "0")}
                  >
                    → {s.handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Services offered */}
            <div
              style={{
                backgroundColor: "#FFD43B",
                border: "3px solid #000",
                boxShadow: "5px 5px 0 #000",
                padding: "1.5rem",
              }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#111", marginBottom: "0.75rem" }}>
                Services Available
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Video Editing", "3D Art", "Web Design", "Landing Pages", "Social Media", "Graphic Design"].map((s) => (
                  <span
                    key={s}
                    style={{
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      boxShadow: "2px 2px 0 #000",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.55rem",
                      color: "#111",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "3px solid #000",
              boxShadow: "8px 8px 0 #000",
            }}
          >
            {/* Form header */}
            <div
              style={{
                backgroundColor: "#FFD43B",
                borderBottom: "3px solid #000",
                padding: "1.25rem 1.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#111",
                  margin: 0,
                }}
              >
                Send a Message 💬
              </h2>
            </div>

            <div style={{ padding: "2rem" }}>
              {formState === "success" ? (
                <div
                  style={{
                    backgroundColor: "#6BCB77",
                    border: "3px solid #000",
                    boxShadow: "5px 5px 0 #000",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#111", marginBottom: "0.75rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#333", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    Thanks for reaching out! I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-primary"
                    style={{ border: "2px solid #000" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                  {/* Name + Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                      >
                        Name <span style={{ color: "#FF5C5C" }}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="neo-input"
                        style={errors.name ? { borderColor: "#FF5C5C", boxShadow: "3px 3px 0 #FF5C5C" } : {}}
                      />
                      {errors.name && <p style={{ color: "#FF5C5C", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                      >
                        Email <span style={{ color: "#FF5C5C" }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="neo-input"
                        style={errors.email ? { borderColor: "#FF5C5C", boxShadow: "3px 3px 0 #FF5C5C" } : {}}
                      />
                      {errors.email && <p style={{ color: "#FF5C5C", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                    >
                      Project Type
                    </label>
                    <select id="contact-project-type" name="project_type" className="neo-input">
                      <option value="">Select a service…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget + Timeline */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label
                        htmlFor="contact-budget"
                        style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                      >
                        Budget
                      </label>
                      <select id="contact-budget" name="budget" className="neo-input">
                        <option value="">Select budget…</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-timeline"
                        style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                      >
                        Timeline
                      </label>
                      <select id="contact-timeline" name="timeline" className="neo-input">
                        <option value="">Select timeline…</option>
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#111", marginBottom: "0.4rem" }}
                    >
                      Message <span style={{ color: "#FF5C5C" }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project — what do you need, what's the goal, any references?"
                      className="neo-input"
                      style={{
                        resize: "vertical",
                        ...(errors.message ? { borderColor: "#FF5C5C", boxShadow: "3px 3px 0 #FF5C5C" } : {}),
                      }}
                    />
                    {errors.message && <p style={{ color: "#FF5C5C", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.message}</p>}
                  </div>

                  {/* Error state */}
                  {formState === "error" && (
                    <div
                      style={{
                        backgroundColor: "#FF5C5C",
                        border: "2px solid #000",
                        padding: "0.75rem 1rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#fff",
                      }}
                    >
                      ⚠️ Something went wrong. Please try again or reach out directly on LinkedIn.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={formState === "submitting"}
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      fontSize: "1.05rem",
                      padding: "0.9rem 2rem",
                      opacity: formState === "submitting" ? 0.7 : 1,
                      cursor: formState === "submitting" ? "wait" : "pointer",
                    }}
                  >
                    {formState === "submitting" ? "Sending…" : "Send Message →"}
                  </button>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#999", textAlign: "center" }}>
                    ✓ Required fields marked with *. I typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ / QUICK INFO ── */}
      <section
        style={{
          backgroundColor: "#111",
          borderTop: "4px solid #000",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="section-tag" style={{ backgroundColor: "#4D96FF", color: "#fff" }}>
            Good to Know
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#FFF8E7",
              marginTop: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            Before You Reach Out
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { q: "What types of projects do you take?", a: "Video editing, web design, landing pages, web apps, 3D art, social media design — and more." },
              { q: "Do you work remotely?", a: "Yes! I work 100% remotely and am available for clients worldwide." },
              { q: "What's your turnaround time?", a: "Depends on scope. Simple projects in days; larger ones in weeks. We'll agree on a timeline upfront." },
              { q: "How do you handle payments?", a: "We'll agree on terms before starting. Typically a deposit is required to begin work." },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "2px solid #333",
                  padding: "1.25rem",
                }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#FFD43B", marginBottom: "0.6rem", lineHeight: 1.4 }}>
                  {item.q}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#bbb", lineHeight: 1.65, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
