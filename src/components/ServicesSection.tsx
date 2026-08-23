import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Warehouse, Hammer, HardHat, Truck, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: "peb",
    title: "PEB & Industrial Construction",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "End-to-end Pre-Engineered Building solutions from design conceptualization to on-site erection. We deliver complete industrial sheds and factories engineered for durability.",
    features: ["Custom PEB Design", "Primary & Secondary Framing", "Roofing & Cladding", "Erection & Commissioning"],
    specs: ["Clear spans up to 30m", "High-grade steel", "Fast execution"]
  },
  {
    id: "structural",
    title: "Structural Steel Fabrication",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description: "Precision fabrication of heavy structures, built-up sections, and custom steel components. Our skilled workforce ensures exact adherence to shop drawings and quality standards.",
    features: ["Heavy Structural Fabrication", "Built-up Sections", "Mezzanine Floors", "Gratings & Handrails"],
    specs: ["IS standard compliance", "In-house QA/QC", "Custom dimensions"]
  },
  {
    id: "civil",
    title: "Civil & Building Construction",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    description: "Comprehensive civil execution including heavy foundations, RCC structures, flooring, and masonry. Seamlessly coordinated with structural works for single-point delivery.",
    features: ["Machine Foundations", "RCC Structures", "Industrial Flooring", "Brickwork & Finishing"],
    specs: ["M20-M40 Grades", "VDF Flooring", "Turnkey execution"]
  },
  {
    id: "supply",
    title: "Building Material Supply",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "Reliable procurement and supply of primary construction materials. We leverage our network to provide quality materials at competitive prices, direct to your site.",
    features: ["TMT Bars & Cement", "Structural Steel Sections", "Roofing Sheets", "Aggregates & Sand"],
    specs: ["Primary brands", "Bulk quantities", "Timely logistics"]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-24 bg-[#F5F4F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#C0143C] font-semibold tracking-[0.15em] text-sm uppercase mb-4 block">
            Four Core Pillars
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-6">
            Our Core <span className="text-[#C0143C]">Services & Capabilities</span>
          </h2>
          <p className="text-[#555555] text-lg">
            From material supply to complete structural and civil execution, we provide integrated solutions tailored to industrial and commercial requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 text-sm font-medium transition-colors border ${
                activeService.id === service.id
                  ? 'bg-[#C0143C] text-white border-[#C0143C]'
                  : 'bg-white text-[#555555] border-[#E0DFDD] hover:bg-[#F5F4F2]'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="rounded-lg overflow-hidden border border-[#E0DFDD] shadow-sm bg-white aspect-[4/3]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-l-[#C0143C] border-y border-r border-y-[#E0DFDD] border-r-[#E0DFDD] shadow-sm hover:shadow-lg transition-all duration-300 hover:border-l-8">
                <activeService.icon size={40} className="text-[#C0143C] mb-6" />
                <h3 className="text-3xl font-display text-[#111111] mb-4">{activeService.title}</h3>
                <p className="text-[#555555] mb-8 leading-relaxed text-lg">
                  {activeService.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-4">Key Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-[#C0143C] shrink-0 mt-0.5" />
                        <span className="text-[#555555] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeService.specs.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F5F4F2] border border-[#E0DFDD] text-[#555555] text-xs font-medium rounded">
                      {spec}
                    </span>
                  ))}
                </div>

                <button className="bg-[#C0143C] hover:bg-[#960F2E] text-white px-8 py-3 font-semibold transition-colors uppercase tracking-wider text-sm">
                  Request BOQ / Quote
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
