"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled glass" : ""}`}>
      <div className="container navbar-container">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Ashivam Technologies" style={{ height: "85px", width: "auto", mixBlendMode: "multiply", objectFit: "contain", transform: "scale(1.2)" }} />
        </Link>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/contact" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
