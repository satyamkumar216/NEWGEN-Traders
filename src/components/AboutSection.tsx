import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, MapPin, User, Compass, Target, Check } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#C0143C] font-semibold tracking-[0.15em] text-sm uppercase mb-4 block">
            Company Profile & Overview
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-6">
            Integrated Execution & <span className="text-[#C0143C]">Material Solutions</span>
          </h2>
          <p className="text-[#555555] text-lg">
            NEWGEN TRADERS is a specialized civil and structural firm bridging the gap between material procurement and site execution, offering end-to-end reliability for complex industrial and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden border border-[#E0DFDD]"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80" 
              alt="Construction Site" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg border border-[#E0DFDD] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5F4F2] rounded-full flex items-center justify-center border border-[#E0DFDD]">
                  <User size={20} className="text-[#C0143C]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Md. Nihal Mollah</p>
                  <p className="text-xs text-[#555555]">Proprietor</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#555555] bg-[#F5F4F2] px-3 py-1.5 rounded-full border border-[#E0DFDD]">
                <MapPin size={14} className="text-[#C0143C]" />
                Howrah, WB
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-display text-[#111111] mb-6">Core Business Model</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "One Single Business Partner",
                "Quality-Conscious Procurement",
                "Coordinated On-Site Execution",
                "Direct Material Sourcing",
                "PEB & Structural Fabrication",
                "Turnkey Civil Foundations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-[#C0143C] shrink-0 mt-0.5" />
                  <span className="text-[#555555]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border border-[#E0DFDD] rounded-lg overflow-hidden bg-[#F5F4F2] mt-auto">
              <div className="flex border-b border-[#E0DFDD]">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === 'vision' ? 'bg-white text-[#C0143C] border-b-2 border-b-[#C0143C]' : 'text-[#555555] hover:bg-white/50'}`}
                >
                  <Compass size={16} />
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2 border-l border-[#E0DFDD] ${activeTab === 'mission' ? 'bg-white text-[#C0143C] border-b-2 border-b-[#C0143C]' : 'text-[#555555] hover:bg-white/50'}`}
                >
                  <Target size={16} />
                  Our Mission
                </button>
              </div>
              <div className="p-6 bg-white min-h-[120px]">
                {activeTab === 'vision' ? (
                  <p className="text-[#555555] text-sm leading-relaxed">
                    To be the most reliable construction and procurement partner in West Bengal, setting benchmarks in quality, timely delivery, and ethical business practices in the structural and civil sector.
                  </p>
                ) : (
                  <p className="text-[#555555] text-sm leading-relaxed">
                    To provide integrated material and execution solutions that empower industrial and commercial clients to build better, faster, and more cost-effectively through seamless single-point coordination.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: User, title: "Management", desc: "Proprietor Managed" },
            { icon: MapPin, title: "Headquarters", desc: "Howrah, West Bengal" },
            { icon: Building2, title: "Core Verticals", desc: "Civil, Steel & Materials" },
            { icon: ShieldCheck, title: "Standards", desc: "Quality Assurance" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#E0DFDD] p-5 rounded-lg flex items-center gap-4 hover:border-[#C0143C] transition-colors"
            >
              <stat.icon size={24} className="text-[#C0143C]" />
              <div>
                <p className="text-xs text-[#555555] font-semibold uppercase tracking-wider">{stat.title}</p>
                <p className="text-sm font-medium text-[#111111]">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
