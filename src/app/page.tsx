"use client";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Zap, Shield, Globe, Cpu } from "lucide-react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});


export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  const services = [
    { icon: <Globe size={32} />, title: "Web Development", desc: "Modern, responsive, and SEO-optimized web applications." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences." },
    { icon: <Code size={32} />, title: "Custom Software", desc: "Tailor-made software solutions for complex business needs." },
    { icon: <Cpu size={32} />, title: "AI Solutions", desc: "Intelligent AI integrations to automate and scale." },
    { icon: <Zap size={32} />, title: "ERP Systems", desc: "Comprehensive enterprise resource planning software." },
    { icon: <Shield size={32} />, title: "Cybersecurity", desc: "Robust security measures to protect your digital assets." }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <ThreeBackground />
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-lg">
              Empowering Your Future With <span className="text-primary">Next-Gen Software</span>
            </h1>
            <p className="subtitle" style={{ color: "var(--color-text)", fontSize: "1.25rem", margin: "1.5rem auto 2.5rem" }}>
              Ashivam Technologies delivers premium software solutions, web development, and AI technologies to transform your business.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className="btn btn-primary">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio" className="btn btn-outline glass">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className={styles.aboutGrid}>
            <motion.div {...fadeInUp}>
              <h2 className="heading-md">Innovating the Digital Landscape from Agra</h2>
              <p className="mt-4" style={{ color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                At Ashivam Technologies, we believe in the power of technology to solve complex problems. Our team of expert developers, designers, and strategists work collaboratively to build scalable and robust digital products.
              </p>
              <Link href="/about" className="btn btn-outline mt-4" style={{ marginTop: "2rem" }}>
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className={styles.aboutStats}>
                <div className="card text-center">
                  <h3 className="heading-md text-primary">50+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="card text-center">
                  <h3 className="heading-md text-secondary">99%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="card text-center">
                  <h3 className="heading-md text-primary">24/7</h3>
                  <p>Support</p>
                </div>
                <div className="card text-center">
                  <h3 className="heading-md text-secondary">5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="heading-md">Our Premium Services</h2>
            <p className="subtitle">We provide end-to-end technology solutions to help your business thrive in the digital age.</p>
          </motion.div>

          <motion.div className="grid grid-cols-3" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            {services.map((service, index) => (
              <motion.div key={index} className="card" variants={fadeInUp}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 style={{ marginTop: "1.5rem" }}>{service.title}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <motion.div {...fadeInUp} className="glass" style={{ padding: "4rem 2rem", borderRadius: "16px" }}>
            <h2 className="heading-md">Ready to start your next project?</h2>
            <p className="subtitle" style={{ color: "var(--color-text)" }}>
              Contact Ashivam Technologies today and let's build something amazing together.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.125rem" }}>
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
