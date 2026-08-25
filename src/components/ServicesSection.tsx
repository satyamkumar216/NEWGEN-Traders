import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Warehouse, Hammer, HardHat, Truck, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: "peb",
    title: "PEB & Industrial Construction",
    subtitle: "Pre-Engineered Steel Sheds & Industrial Warehouses",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "We undertake and support Pre-Engineered Building (PEB) and industrial shed requirements including warehouses, factory buildings, manufacturing sheds, workshops, storage facilities, logistics structures, commercial structures and related steel buildings. Scope can include structural steel, roofing, wall cladding, fabrication, delivery and erection coordination according to approved drawings and project specifications.",
    features: [
      "Warehouses & Factory Buildings",
      "Manufacturing Sheds & Workshops",
      "Storage & Logistics Structures",
      "Roofing, Wall Cladding & Erection"
    ],
    specs: ["Approved Drawing Coordination", "Full Turnkey Erection", "High-Tensile Steel & Cladding"]
  },
  {
    id: "structural",
    title: "Structural Steel Fabrication",
    subtitle: "Precision Cutting, Drilling, Welding & Assembly",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description: "Our fabrication scope includes project-oriented structural steel fabrication, cutting, drilling, welding, assembly and preparation of steel members and components. Applications include PEB frames, industrial sheds, platforms, supports, stair structures, canopies, mezzanine structures and other project-specific steelwork.",
    features: [
      "Cutting, Drilling, Welding & Assembly",
      "PEB Frames & Industrial Sheds",
      "Mezzanines, Platforms & Walkways",
      "Supports, Stair Structures & Canopies"
    ],
    specs: ["Project-Oriented Fabrication", "Shop Assembly & Inspection", "Certified Welding Standards"]
  },
  {
    id: "civil",
    title: "Civil & Building Construction",
    subtitle: "RCC Works, Foundations & Industrial Flooring",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    description: "Civil construction capability includes excavation and foundations, RCC works, columns, beams and slabs, masonry, plinth works, industrial flooring, boundary works, drainage and allied civil/site development activities, according to project scope and approved drawings.",
    features: [
      "Excavation & Machine Foundations",
      "RCC Columns, Beams & Slabs",
      "Plinth Works, Masonry & Wall Construction",
      "Industrial Flooring & Site Drainage"
    ],
    specs: ["Approved Drawing Execution", "High-Grade RCC Foundations", "Site Development & Drainage"]
  },
  {
    id: "supply",
    title: "Building Material Supply",
    subtitle: "Sand, Aggregates, Bricks, Cement & TMT Steel",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "NEWGEN TRADERS supplies construction and industrial materials including river sand, M-sand, stone chips/aggregates, bricks, fly-ash bricks, cement, TMT steel and other industrial construction materials. Supply is arranged according to project specifications, quantities, delivery schedules and site requirements.",
    features: [
      "River Sand & Manufactured M-Sand",
      "Stone Chips & Graded Aggregates",
      "Red Clay & Eco Fly-Ash Bricks",
      "Certified TMT Steel & Cement"
    ],
    specs: ["Direct Sourcing from Mills", "Scheduled Bulk Site Deliveries", "Quality Tested Supply"]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 bg-[#F5F4F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#C0143C] font-mono font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            FOUR CORE PILLARS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-4">
            Our Core <span className="text-[#C0143C]">Services &amp; Capabilities</span>
          </h2>
          <p className="text-[#555555] text-base md:text-lg leading-relaxed">
            From material supply to complete structural steel and civil execution, we provide integrated solutions tailored to industrial and commercial requirements.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-5 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider transition-colors border rounded-md cursor-pointer ${
                activeService.id === service.id
                  ? 'bg-[#C0143C] text-white border-[#C0143C] font-bold'
                  : 'bg-white text-[#555555] border-[#E0DFDD] hover:bg-[#F5F4F2]'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Image */}
              <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#E0DFDD] shadow-sm bg-white aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Card */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-xl border-l-4 border-l-[#C0143C] border-y border-r border-[#E0DFDD] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <activeService.icon size={28} className="text-[#C0143C] shrink-0" />
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">{activeService.subtitle}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display text-[#111111] mb-3">{activeService.title}</h3>
                  
                  <p className="text-[#555555] mb-6 leading-relaxed text-sm sm:text-base">
                    {activeService.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider mb-3">Scope &amp; Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#C0143C] shrink-0 mt-0.5" />
                          <span className="text-[#555555] text-xs font-mono">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeService.specs.map((spec, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F5F4F2] border border-[#E0DFDD] text-[#555555] text-xs font-mono rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a 
                    href="#inquiry" 
                    className="btn-crimson inline-block px-8 py-3 font-display text-sm tracking-wider uppercase text-center"
                  >
                    Request BOQ / Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
