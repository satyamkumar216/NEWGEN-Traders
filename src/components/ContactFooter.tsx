import React from 'react';
import { Phone, Mail, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#333333] pt-20 pb-8 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 L50 20 L80 20 L50 50 Z" fill="#F5F5F5" />
                <path d="M20 50 L50 80 L80 80 L50 50 Z" fill="#C0143C" />
              </svg>
              <div>
                <h3 className="text-xl font-display tracking-wide leading-none">NEWGEN</h3>
                <span className="text-[#C0143C] text-sm font-semibold tracking-widest">TRADERS</span>
              </div>
            </div>
            <p className="text-[#9A9A9A] text-sm leading-relaxed">
              Premium Civil Construction & Pre-Engineered Building Solutions. Delivering uncompromising structural integrity and streamlined material supply across the region.
            </p>
            <div className="flex items-center space-x-2 text-[#9A9A9A] text-sm pt-2">
              <ShieldCheck className="w-4 h-4 text-[#C0143C]" />
              <span>Proprietorship: Md. Nihal Mollah</span>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Direct Connect</h4>
            <div className="space-y-4">
              <a href="tel:+917044161877" className="flex items-start group">
                <Phone className="w-5 h-5 text-[#C0143C] mr-3 mt-0.5" />
                <div>
                  <div className="text-white font-medium group-hover:text-[#C0143C] transition-colors">+91 70441 61877</div>
                  <div className="text-[#9A9A9A] text-xs mt-1">Primary Execution & Sales</div>
                </div>
              </a>
              <a href="mailto:contact@newgentraders.com" className="flex items-start group">
                <Mail className="w-5 h-5 text-[#C0143C] mr-3 mt-0.5" />
                <div>
                  <div className="text-white font-medium group-hover:text-[#C0143C] transition-colors">contact@newgentraders.com</div>
                  <div className="text-[#9A9A9A] text-xs mt-1">Estimations & Documentation</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Office & Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Office Headquarters</h4>
            <p className="text-[#9A9A9A] text-sm leading-relaxed">
              Jangalpur, Kolkata,<br />
              West Bengal, India - 711302
            </p>
            <div className="pt-2 space-y-3">
              <a href="#" className="inline-flex items-center text-[#C0143C] hover:text-white text-sm font-medium transition-colors">
                View on Google Maps <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
              <div className="text-[#9A9A9A] text-xs font-mono">GSTIN: 19ABCDE1234F1Z5</div>
            </div>
          </div>

          {/* Column 4: Index */}
          <div className="space-y-6">
            <h4 className="text-lg font-display tracking-wide text-white uppercase">Quick Index</h4>
            <ul className="space-y-3">
              {['Services Overview', 'PEB Fabrication', 'Civil Capabilities', 'Projects & Portfolio', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#9A9A9A] hover:text-[#C0143C] text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#333333]">
          <p className="text-[#9A9A9A] text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} NEWGEN TRADERS. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-[#9A9A9A] hover:text-white text-sm transition-colors"
          >
            Back to Top <ArrowUp className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </footer>
  );
}
