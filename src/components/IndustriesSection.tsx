import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Layers, Building, Home, Shield, Users2 } from 'lucide-react';

const industries = [
  {
    title: "Industrial Plants & Factories",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    badge: "PEB & Steel",
    description: "Complete execution of manufacturing facilities, heavy engineering workshops, and process plants with robust structural framework."
  },
  {
    title: "Warehouses & Logistics Sheds",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    badge: "Rapid Erection",
    description: "Large-span storage facilities and distribution centers requiring fast-track construction and optimized space utilization."
  },
  {
    title: "Commercial & High-Rise Buildings",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    badge: "RCC & Composite",
    description: "Structural steel frameworks and composite construction for commercial complexes, malls, and multi-story structures."
  },
  {
    title: "Residential & Housing Projects",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Civil & Supply",
    description: "Civil foundation works and bulk material supply for large-scale residential developments and townships."
  },
  {
    title: "Infrastructure & Public Works",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    badge: "Govt & Infra",
    description: "Supporting critical infrastructure projects including bridges, railway sheds, and utility structures with quality execution."
  },
  {
    title: "Contractors & Developers",
    icon: Users2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    badge: "B2B Sub-Contract",
    description: "Acting as a reliable sub-contracting and supply partner for primary contractors, ensuring timely delivery and quality."
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white border-t border-[#E0DFDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#C0143C] font-semibold tracking-[0.15em] text-sm uppercase mb-4 block">
            Sectors We Support
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight mb-6">
            Industries & <span className="text-[#C0143C]">Project Segments</span>
          </h2>
          <p className="text-[#555555] text-lg">
            Our versatile execution capabilities and reliable supply chain cater to diverse construction needs across major sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#E0DFDD] rounded-lg overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 hover:border-[#C0143C] transition-all duration-300"
            >
              <div className="relative h-48 border-b border-[#E0DFDD] overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full border border-[#C0143C] text-[#C0143C] text-xs font-semibold shadow-sm z-10">
                  {industry.badge}
                </div>
              </div>
              <div className="p-6">
                <industry.icon size={28} className="text-[#C0143C] mb-4" />
                <h3 className="text-xl font-display text-[#111111] mb-3">{industry.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
