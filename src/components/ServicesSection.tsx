import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "PEB & Industrial Construction",
    description: "End-to-end Pre-Engineered Building solutions from structural steel design and fabrication to complete on-site erection.",
    deliverables: [
      "Warehouses, factory sheds & logistics facilities",
      "Structural steel framing, rafters & purlins",
      "Insulated roofing & profile wall cladding",
      "Turnkey erection according to approved drawings"
    ],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Industrial PEB steel warehouse frame and structural erection",
    imageLeft: true,
    bg: "bg-[#FFFFFF]"
  },
  {
    number: "02",
    title: "Structural Steel Fabrication",
    description: "Workshop-precision cutting, drilling, certified welding, and custom assembly of project-oriented steel members.",
    deliverables: [
      "PEB primary & secondary steel frames",
      "Heavy industrial sheds, platforms & walkways",
      "Mezzanine structures, stairs & canopies",
      "Certified welding & shop inspection compliance"
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Heavy structural steel fabrication and welding",
    imageLeft: false,
    bg: "bg-[#F5F4F2]"
  },
  {
    number: "03",
    title: "Civil & Building Construction",
    description: "Heavy civil execution bridging foundation excavations, reinforced concrete columns, and durable industrial floorings.",
    deliverables: [
      "Excavations & machine foundations",
      "RCC columns, beams, footings & slabs",
      "Plinth works, masonry & perimeter walls",
      "Heavy-duty industrial flooring & site drainage"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Civil foundation and reinforced concrete construction site",
    imageLeft: true,
    bg: "bg-[#FFFFFF]"
  },
  {
    number: "04",
    title: "Building Material Supply",
    description: "Direct mill procurement and scheduled site delivery of primary industrial and civil construction materials.",
    deliverables: [
      "River sand & manufactured M-sand",
      "Stone chips & graded aggregates",
      "Primary TMT steel bars & cement",
      "Red clay bricks & eco-friendly fly-ash bricks"
    ],
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Direct construction material supply and stacked TMT steel",
    imageLeft: false,
    bg: "bg-[#F5F4F2]"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      {/* Section Header */}
      <div className="bg-[#FFFFFF] pt-24 pb-16 px-6 lg:px-12 border-b border-[#E0DFDD]">
        <div className="max-w-7xl mx-auto">
          <span className="block text-xs font-semibold text-[#C0143C] tracking-[0.2em] uppercase mb-3">
            FOUR CORE CAPABILITIES
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-[#111111] tracking-tight leading-none">
            WHAT WE DO
          </h2>
          <div className="w-[60px] h-[2px] bg-[#C0143C] mt-4" />
        </div>
      </div>

      {/* Editorial Spread Rows */}
      <div className="w-full">
        {services.map((service) => {
          const isImageLeft = service.imageLeft;

          return (
            <div 
              key={service.number} 
              className={`w-full ${service.bg} overflow-hidden`}
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[660px] items-stretch">
                
                {/* Image Column */}
                <motion.div 
                  className={`w-full min-h-[380px] sm:min-h-[460px] lg:h-auto relative overflow-hidden bg-[#E8E6E3] ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover saturate-[0.88] contrast-[1.05]"
                    loading="lazy"
                  />
                </motion.div>

                {/* Text Content Column */}
                <motion.div 
                  className={`w-full flex items-center justify-center px-8 sm:px-14 lg:px-20 py-20 lg:py-28 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="max-w-[540px] w-full relative">
                    
                    {/* Enlarged Watermark Number behind title */}
                    <div className="text-[8rem] sm:text-[10rem] lg:text-[12rem] font-display text-[#E0DFDD] leading-none select-none absolute -top-16 sm:-top-24 -left-3 z-0 pointer-events-none tracking-tighter opacity-80">
                      {service.number}
                    </div>

                    {/* Title & Content */}
                    <div className="relative z-10 pt-6">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#111111] tracking-tight leading-[0.95] mb-4">
                        {service.title}
                      </h3>

                      <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables List (Clean Sans-Serif Typography) */}
                      <ul className="space-y-3 mb-8">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start text-sm sm:text-base text-[#333333] font-normal leading-relaxed">
                            <span className="text-[#C0143C] font-semibold mr-3 shrink-0 text-base leading-snug">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Text Link */}
                      <a 
                        href="#inquiry" 
                        className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-[#C0143C] hover:text-[#960F2E] transition-colors group"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    </div>

                  </div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
