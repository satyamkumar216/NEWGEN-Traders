import React, { useState } from 'react';
import { Send, PhoneCall, Calculator } from 'lucide-react';

const categories = [
  "PEB Shed / Warehouse",
  "Civil Construction",
  "Material Supply (TMT/Sand)",
  "Full Turnkey Project"
];

const sizes = [
  "Small (Under 5,000 sq ft)",
  "Medium (5,000 - 15,000 sq ft)",
  "Large (15,000 - 50,000 sq ft)",
  "Industrial (50,000+ sq ft)"
];

export default function InquirySection() {
  const [formData, setFormData] = useState({
    category: '',
    size: '',
    name: '',
    phone: '',
    company: '',
    location: '',
    notes: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `*New Project Inquiry - NEWGEN TRADERS* %0A%0A`;
    
    if (formData.category) text += `*Service:* ${formData.category}%0A`;
    if (formData.size) text += `*Project Scale:* ${formData.size}%0A%0A`;
    
    text += `*Contact Details:*%0A`;
    text += `Name: ${formData.name}%0A`;
    if (formData.phone) text += `Phone: ${formData.phone}%0A`;
    if (formData.company) text += `Company: ${formData.company}%0A`;
    if (formData.location) text += `Location: ${formData.location}%0A%0A`;
    
    if (formData.notes) text += `*Notes:* ${formData.notes}`;

    window.open(`https://wa.me/918777877369?text=${text}`, '_blank');
  };

  return (
    <section id="inquiry" className="py-24 bg-[#F5F4F2] border-t border-[#E0DFDD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="block text-xs font-mono font-bold text-[#C0143C] tracking-[0.2em] uppercase mb-3">
              INSTANT QUOTE &amp; INQUIRY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#111111] tracking-tight leading-none mb-2">
              Request a Project
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#C0143C] tracking-tight leading-none mb-6">
              Estimate
            </h2>
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
              Share your high-level requirements. Our engineering and estimation team will analyze your needs and return with a detailed commercial assessment and preliminary execution strategy.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="font-semibold text-[#111111] text-base mb-0.5">Direct Consultation</h4>
                <p className="text-[#555555] text-xs">Speak directly with proprietor Md. Nihal Mollah</p>
              </div>
              <a 
                href="tel:+918777877369"
                className="inline-flex items-center justify-center px-5 py-2.5 border-[1.5px] border-[#111111] text-[#111111] font-mono text-xs font-bold hover:bg-[#111111] hover:text-white transition-colors rounded-md whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-[#C0143C]" />
                +91 87778 77369
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#E0DFDD]">
                <Calculator className="w-5 h-5 text-[#C0143C]" />
                <h3 className="text-xl font-display text-[#111111]">Project Configurator</h3>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                
                {/* Step 1 */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#C0143C] uppercase tracking-wider mb-3">Step 1: Select Service Category</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({...formData, category: cat})}
                        className={`py-2.5 px-3.5 text-xs font-mono border text-left transition-colors rounded-md cursor-pointer ${
                          formData.category === cat 
                            ? 'bg-[#C0143C] border-[#C0143C] text-white font-bold' 
                            : 'bg-white border-[#E0DFDD] text-[#555555] hover:border-[#111111]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#C0143C] uppercase tracking-wider mb-3">Step 2: Project Scale</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({...formData, size: size})}
                        className={`py-2.5 px-3.5 text-xs font-mono border text-left transition-colors rounded-md cursor-pointer ${
                          formData.size === size 
                            ? 'bg-[#C0143C] border-[#C0143C] text-white font-bold' 
                            : 'bg-white border-[#E0DFDD] text-[#555555] hover:border-[#111111]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#C0143C] uppercase tracking-wider mb-3">Step 3: Contact Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-3.5 py-2.5 text-xs font-mono outline-none focus:border-[#C0143C] transition-colors rounded-md"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-3.5 py-2.5 text-xs font-mono outline-none focus:border-[#C0143C] transition-colors rounded-md"
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name (Optional)" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-3.5 py-2.5 text-xs font-mono outline-none focus:border-[#C0143C] transition-colors rounded-md"
                    />
                    <input 
                      type="text" 
                      placeholder="Project Location / City" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-3.5 py-2.5 text-xs font-mono outline-none focus:border-[#C0143C] transition-colors rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="Additional Requirements or Notes..." 
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-white border border-[#E0DFDD] text-[#111111] px-3.5 py-2.5 text-xs font-mono outline-none focus:border-[#C0143C] transition-colors resize-none rounded-md"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-crimson w-full py-3.5 font-display text-base flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Direct WhatsApp Inquiry
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
