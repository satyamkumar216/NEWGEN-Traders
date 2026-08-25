import React from 'react';
import { Phone, Mail, ArrowUp, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0D0D0D] border-t border-[#333333] pt-20 pb-8 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 flex flex-col gap-0.5">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <polygon points="10,0 40,0 30,18 0,18" fill="#F5F5F5" />
                  <polygon points="10,22 40,22 30,40 0,40" fill="#C0143C" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display tracking-wide leading-none text-white">NEWGEN</h3>
                <span className="text-[#C0143C] text-sm font-semibold tracking-widest font-display">TRADERS</span>
              </div>
            </div>
            <p className="text-[#9A9A9A] text-sm leading-relaxed">
              Integrated PEB construction, structural steel fabrication, civil foundations, and direct building material supply based in Dhulagori, Howrah.
            </p>
            <div className="flex items-center space-x-2 text-[#9A9A9A] text-sm pt-2">
              <ShieldCheck className="w-4 h-4 text-[#C0143C] shrink-0" />
              <span>Proprietor: <strong className="text-white font-medium">Md. Nihal Mollah</strong></span>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Direct Connect</h4>
            <div className="space-y-4">
              <a href="tel:+918777877369" className="flex items-start group">
                <Phone className="w-5 h-5 text-[#C0143C] mr-3 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium group-hover:text-[#C0143C] transition-colors">+91 87778 77369</div>
                  <div className="text-[#9A9A9A] text-xs mt-0.5 font-mono">Mobile / WhatsApp Direct</div>
                </div>
              </a>
              <a href="mailto:newgentraders024@gmail.com" className="flex items-start group">
                <Mail className="w-5 h-5 text-[#C0143C] mr-3 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium group-hover:text-[#C0143C] transition-colors break-all">newgentraders024@gmail.com</div>
                  <div className="text-[#9A9A9A] text-xs mt-0.5 font-mono">Official Inquiries &amp; BOQ</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Office & Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Office &amp; Location</h4>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-[#C0143C] mr-3 mt-0.5 shrink-0" />
              <p className="text-[#9A9A9A] text-sm leading-relaxed">
                Dhulagori, Howrah – 711302,<br />
                West Bengal, India
              </p>
            </div>
            <div className="pt-1 space-y-3 pl-8">
              <a 
                href="https://maps.google.com/?q=Dhulagori,+Howrah+-+711302,+West+Bengal,+India" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-[#C0143C] hover:text-white text-sm font-medium transition-colors"
              >
                View on Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <div className="text-[#9A9A9A] text-xs font-mono pt-1 border-t border-[#222222]">
                GSTIN: <span className="text-white font-semibold">19HJEPM4867D1ZT</span>
              </div>
            </div>
          </div>

          {/* Column 4: Index */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Quick Navigation</h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Industries Supported', href: '#industries' },
                { name: '8-Step Process', href: '#process' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Request a Quote', href: '#inquiry' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#9A9A9A] hover:text-[#C0143C] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#222222]">
          <p className="text-[#9A9A9A] text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} NEWGEN TRADERS. All rights reserved. • Dhulagori, Howrah, WB
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-[#9A9A9A] hover:text-white text-sm transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </footer>
  );
}
