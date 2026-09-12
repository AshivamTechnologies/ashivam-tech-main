import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-surface">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="Ashivam Technologies" style={{ height: "100px", width: "auto", mixBlendMode: "multiply", objectFit: "contain", transform: "scale(1.2)" }} />
            </Link>
            <p className="footer-desc mt-4">
              A leading software solutions and technology company based in Agra, India. Delivering premium web, mobile, AI, and ERP solutions globally.
            </p>
            <div className="social-links mt-4" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.linkedin.com/company/ashivam/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', transition: 'var(--transition)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Mobile Apps</Link></li>
              <li><Link href="/services">AI Solutions</Link></li>
              <li><Link href="/services">ERP Systems</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <p>Agra, India</p>
            <p className="mt-2">
              <a href="mailto:teamashivam@gmail.com" className="text-primary font-medium">teamashivam@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ashivam Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
