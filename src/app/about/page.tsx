"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
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

  const values = [
    "Innovation-Driven Approach",
    "Client-Centric Solutions",
    "Uncompromising Quality",
    "Transparent Communication",
    "Continuous Learning",
    "Agile Development"
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-1"></div>
        <div className="decorative-blob-2"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">About <span className="text-primary">Ashivam Technologies</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              We are a forward-thinking technology company based in Agra, India, dedicated to delivering robust software solutions that empower businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-2" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeInUp} className="card glass-dark" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #A68A2A 100%)", color: "white" }}>
              <h2 className="heading-md" style={{ color: "white" }}>Our Vision</h2>
              <p className="mt-4" style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                To be the global leader in innovative software solutions, transforming ideas into digital realities and setting new standards in the technology industry.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="card glass">
              <h2 className="heading-md">Our Mission</h2>
              <p className="mt-4" style={{ color: "var(--color-text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                To empower businesses of all sizes with cutting-edge digital tools, unparalleled expertise, and a commitment to excellence that drives sustainable growth and success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-surface">
        <div className="container">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="heading-md">Our Core Values</h2>
            <p className="subtitle mt-4">The principles that guide everything we do.</p>
          </motion.div>
          
          <motion.div className="grid grid-cols-3" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            {values.map((value, i) => (
              <motion.div key={i} variants={fadeInUp} className="card glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <CheckCircle2 className="text-primary" size={24} />
                <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>{value}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
