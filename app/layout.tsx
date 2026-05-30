import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://subashnepal.com"),
  title: "Subash Nepal | Video Editor, 3D Artist & Web Designer",
  description:
    "Subash Nepal is a video editor, 3D artist, and web designer from Bhairahawa, Nepal, available for freelance and remote projects in video editing, web design, 3D art, and digital content.",
  keywords:
    "video editor, 3D artist, web designer, freelance, Nepal, Bhairahawa, Blender, Adobe Premiere Pro",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Subash Nepal | Video Editor, 3D Artist & Web Designer",
    description:
      "Creative visuals. Bold websites. Powerful digital content. Available for freelance and remote work.",
    url: "https://subashnepal.com",
    siteName: "Subash Nepal Portfolio",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subash Nepal | Video Editor, 3D Artist & Web Designer",
    description:
      "Creative visuals. Bold websites. Powerful digital content. Available for freelance and remote work.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
