import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFFFF] border-b border-[#E0DFDD] ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex flex-col gap-1">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <polygon points="10,0 40,0 30,18 0,18" fill="#111111" />
              <polygon points="10,22 40,22 30,40 0,40" fill="#C0143C" />
            </svg>
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-display text-xl tracking-wider text-[#111111]">
              NEWGEN <span className="text-[#C0143C]">TRADERS</span>
            </span>
            <span className="text-[#555555] text-xs font-medium uppercase tracking-widest">
              Dhulagori &bull; Howrah
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#111111] text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
            >
              {link.name}
            </a>
          ))}
          <a href="#inquiry" className="btn-crimson ml-4 px-6 py-3 text-sm">
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#111111] hover:opacity-60 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-[#FFFFFF] border-b border-[#E0DFDD]"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#111111] text-sm font-semibold uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#inquiry"
            className="btn-crimson w-full text-center py-3 text-sm mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </a>
        </div>
      </motion.div>
    </header>
  );
}
