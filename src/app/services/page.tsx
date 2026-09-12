"use client";
import { Code, Smartphone, Zap, Shield, Globe, Cpu, Cloud, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
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

  const servicesList = [
    { icon: <Globe size={32} />, title: "Web Development", desc: "Custom web applications using modern frameworks like React, Next.js, and Node.js." },
    { icon: <Smartphone size={32} />, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter." },
    { icon: <Cpu size={32} />, title: "AI & Automation", desc: "Integrating intelligent solutions, machine learning models, and workflow automation." },
    { icon: <Shield size={32} />, title: "Cybersecurity", desc: "Comprehensive security audits, penetration testing, and secure architecture design." },
    { icon: <Cloud size={32} />, title: "Cloud Solutions", desc: "Cloud infrastructure setup, migration, and management on AWS, Azure, and GCP." },
    { icon: <Database size={32} />, title: "ERP & CRM Systems", desc: "Tailored enterprise resource planning and customer relationship management software." },
    { icon: <Code size={32} />, title: "Custom Software", desc: "Bespoke software development designed specifically for your unique business processes." },
    { icon: <Zap size={32} />, title: "IT Consulting", desc: "Strategic technology consulting to align your IT infrastructure with business goals." }
  ];

  return (
    <div className="pt-24 pb-12">
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-1"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">Our <span className="text-primary">Services</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              Comprehensive digital solutions to accelerate your business growth. We combine technical excellence with creative problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-3" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            {servicesList.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="card glass">
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "16px", background: "rgba(212, 175, 55, 0.1)", color: "var(--color-primary)", marginBottom: "1.5rem" }}>
                  {service.icon}
                </div>
                <h3 className="heading-sm mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{service.title}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
