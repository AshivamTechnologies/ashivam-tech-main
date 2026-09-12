"use client";
import { Building2, ShoppingCart, Activity, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
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

  const industries = [
    { icon: <Building2 size={32} />, title: "Enterprise", desc: "Scalable ERPs, internal tools, and robust infrastructure for large organizations." },
    { icon: <ShoppingCart size={32} />, title: "E-Commerce", desc: "High-conversion online stores with seamless payment and inventory integrations." },
    { icon: <Activity size={32} />, title: "Healthcare", desc: "Secure, HIPAA-compliant telehealth and patient management systems." },
    { icon: <GraduationCap size={32} />, title: "Education", desc: "Interactive e-learning platforms and school management software." }
  ];

  return (
    <div className="pt-24 pb-12">
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-2"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">Industry <span className="text-secondary">Solutions</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              Tailored technology solutions designed to address the unique challenges of your specific industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-2" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            {industries.map((ind, index) => (
              <motion.div key={index} variants={fadeInUp} className="card glass" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ color: "var(--color-secondary)", padding: "1rem", background: "rgba(14, 165, 233, 0.1)", borderRadius: "16px" }}>
                  {ind.icon}
                </div>
                <div>
                  <h3 className="heading-sm mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{ind.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
