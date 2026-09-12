import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ashivam Technologies | Software Solutions & Technology",
  description: "A leading software solutions and technology company based in Agra, India, specializing in web development, mobile apps, UI/UX, AI, and ERP solutions.",
  keywords: ["Ashivam Technologies", "Software Company Agra", "Web Development", "Mobile App Development", "ERP Solutions", "AI Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -30, background: '#F8FAFC' }}></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -20,
            opacity: 0.12,
            pointerEvents: 'none'
          }}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
