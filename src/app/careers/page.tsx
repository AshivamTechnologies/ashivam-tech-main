"use client";
import { Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
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

  const jobs = [
    { title: "Senior React Developer", type: "Full-time", location: "Agra / Remote", dept: "Engineering" },
    { title: "UI/UX Designer", type: "Full-time", location: "Remote", dept: "Design" },
    { title: "Backend Node.js Engineer", type: "Full-time", location: "Agra, UP", dept: "Engineering" },
    { title: "Project Manager", type: "Full-time", location: "Agra, UP", dept: "Management" }
  ];

  return (
    <div className="pt-24 pb-12">
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-2"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">Join Our <span className="text-secondary">Team</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              We're always looking for talented individuals who are passionate about technology and innovation. Build the future with Ashivam.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-2" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            {jobs.map((job, index) => (
              <motion.div key={index} variants={fadeInUp} className="card glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase" }}>{job.dept}</span>
                    <span style={{ background: "rgba(15, 23, 42, 0.05)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 500 }}>{job.type}</span>
                  </div>
                  <h3 className="heading-sm mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{job.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <Briefcase size={16} /> {job.location}
                  </p>
                </div>
                <button className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Apply Now <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
