import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#FFF8E7",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "540px" }}>
        <div
          style={{
            backgroundColor: "#FF5C5C",
            border: "4px solid #000",
            boxShadow: "8px 8px 0 #000",
            padding: "1rem 2rem",
            display: "inline-block",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "5rem",
            color: "#fff",
            marginBottom: "1.5rem",
            lineHeight: 1,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#111",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#555",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Looks like this page doesn&apos;t exist. Head back home or explore the portfolio.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Go Home →
          </Link>
          <Link href="/projects" className="btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
