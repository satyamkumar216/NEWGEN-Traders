import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, CheckCircle2, Calculator, Building2 } from 'lucide-react';

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

    window.open(`https://wa.me/917044161877?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#F5F4F2] border-t border-[#E0DFDD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="block text-sm font-semibold text-[#C0143C] tracking-[0.15em] uppercase mb-4">
              INSTANT QUOTE & INQUIRY
            </span>
            <h2 className="text-5xl md:text-6xl font-display text-[#111111] tracking-tight leading-none mb-2">
              Request a Project
            </h2>
            <h2 className="text-5xl md:text-6xl font-display text-[#C0143C] tracking-tight leading-none mb-6">
              Estimate
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed mb-10">
              Share your high-level requirements. Our engineering and estimation team will analyze your needs and return with a detailed commercial assessment and preliminary execution strategy.
            </p>

            <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h4 className="font-semibold text-[#111111] text-lg mb-1">Direct Consultation</h4>
                <p className="text-[#555555] text-sm">Speak directly with our execution experts.</p>
              </div>
              <a 
                href="tel:+917044161877"
                className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border-[1.5px] border-[#111111] text-[#111111] font-semibold hover:bg-[#111111] hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                +91 70441 61877
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-lg p-8 md:p-10 shadow-sm">
              <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-[#E0DFDD]">
                <Calculator className="w-6 h-6 text-[#C0143C]" />
                <h3 className="text-2xl font-display text-[#111111]">Project Configurator</h3>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                
                {/* Step 1 */}
                <div>
                  <h4 className="text-sm font-semibold text-[#C0143C] uppercase tracking-wider mb-4">Step 1: Select Service Category</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({...formData, category: cat})}
                        className={`py-3 px-4 text-sm font-medium border text-left transition-colors ${
                          formData.category === cat 
                            ? 'bg-[#C0143C] border-[#C0143C] text-white' 
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
                  <h4 className="text-sm font-semibold text-[#C0143C] uppercase tracking-wider mb-4">Step 2: Project Scale</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({...formData, size: size})}
                        className={`py-3 px-4 text-sm font-medium border text-left transition-colors ${
                          formData.size === size 
                            ? 'bg-[#C0143C] border-[#C0143C] text-white' 
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
                  <h4 className="text-sm font-semibold text-[#C0143C] uppercase tracking-wider mb-4">Step 3: Contact Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-4 py-3 outline-none focus:border-[#C0143C] transition-colors"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-4 py-3 outline-none focus:border-[#C0143C] transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Company Name (Optional)" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-4 py-3 outline-none focus:border-[#C0143C] transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Project Location / City" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="bg-white border border-[#E0DFDD] text-[#111111] px-4 py-3 outline-none focus:border-[#C0143C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="Additional Requirements or Notes..." 
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-white border border-[#E0DFDD] text-[#111111] px-4 py-3 outline-none focus:border-[#C0143C] transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#C0143C] text-white py-4 font-semibold text-lg flex items-center justify-center hover:bg-[#960F2E] transition-colors"
                >
                  <Send className="w-5 h-5 mr-3" />
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
