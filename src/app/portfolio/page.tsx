"use client";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
  };

  const projects = [
    { title: "E-Commerce Replatforming", category: "Web Development", desc: "A high-performance e-commerce platform handling 10k+ daily transactions.", color: "var(--color-primary)" },
    { title: "Healthcare Portal", category: "Mobile App", desc: "A secure patient-doctor communication app with real-time teleconsultation.", color: "var(--color-secondary)" },
    { title: "AI Inventory Manager", category: "AI & Automation", desc: "Machine learning based system to predict inventory shortages.", color: "var(--color-primary)" },
    { title: "Global FinTech App", category: "Web & Mobile", desc: "Cross-border payment application with bank-level security integrations.", color: "var(--color-secondary)" }
  ];

  return (
    <div className="pt-24 pb-12">
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-1"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">Our <span className="text-primary">Portfolio</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              Explore some of our most impactful projects. We deliver scalable solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-2" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className="card glass">
                <span style={{ color: project.color, fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{project.category}</span>
                <h3 className="heading-sm mt-2 mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{project.title}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{project.desc}</p>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: project.color, fontWeight: 600, textDecoration: 'none' }}>
                  View Case Study <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
