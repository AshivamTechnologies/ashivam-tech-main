"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12">
      <section className="section mt-10" style={{ background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(224, 242, 254, 0.7) 100%)", paddingBottom: "8rem" }}>
        <div className="decorative-blob-1"></div>
        <div className="decorative-blob-2"></div>
        <div className="container text-center" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeInUp}>
            <h1 className="heading-lg">Get In <span className="text-primary">Touch</span></h1>
            <p className="subtitle mt-4 mx-auto" style={{ maxWidth: "800px" }}>
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ marginTop: "-6rem", zIndex: 20 }}>
        <div className="container">
          <motion.div className="grid grid-cols-2" style={{ gap: "4rem" }} variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }}>
            
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h2 className="heading-md mb-8">Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="card glass" style={{ padding: "1.5rem", display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: "var(--color-primary)", padding: "1rem", background: "rgba(212, 175, 55, 0.1)", borderRadius: "50%" }}>
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Our Office</h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>Agra, Uttar Pradesh<br/>India</p>
                  </div>
                </div>

                <div className="card glass" style={{ padding: "1.5rem", display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: "var(--color-secondary)", padding: "1rem", background: "rgba(14, 165, 233, 0.1)", borderRadius: "50%" }}>
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Email Us</h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                      <a href="mailto:teamashivam@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>teamashivam@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="card glass" style={{ padding: "1.5rem", display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ color: "var(--color-primary)", padding: "1rem", background: "rgba(212, 175, 55, 0.1)", borderRadius: "50%" }}>
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Call Us</h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>Available during business hours.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "3rem" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", fontWeight: 700 }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: "var(--color-text-muted)", padding: "0.75rem", background: "var(--color-surface)", borderRadius: "50%", transition: "var(--transition)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" style={{ color: "var(--color-text-muted)", padding: "0.75rem", background: "var(--color-surface)", borderRadius: "50%", transition: "var(--transition)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" style={{ color: "var(--color-text-muted)", padding: "0.75rem", background: "var(--color-surface)", borderRadius: "50%", transition: "var(--transition)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="card glass">
              <h2 className="heading-md mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontSize: "1rem", background: "var(--color-surface)" }} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontSize: "1rem", background: "var(--color-surface)" }} placeholder="john@example.com" />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={{ width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontSize: "1rem", background: "var(--color-surface)" }} placeholder="How can we help?" />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontSize: "1rem", resize: "vertical", background: "var(--color-surface)" }} placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: "100%", padding: "1rem", fontSize: "1.125rem" }}>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p style={{ color: "#10b981", textAlign: "center", fontWeight: 600, marginTop: "1rem" }}>Message sent successfully! We will get back to you soon.</p>
                )}
              </form>
            </motion.div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}
