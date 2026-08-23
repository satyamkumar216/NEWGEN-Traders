import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Layers, Clock, Sparkles } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-[#E0DFDD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <span className="block text-sm font-semibold text-[#C0143C] tracking-[0.15em] uppercase mb-4">
            THE NEWGEN ADVANTAGE
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-[#111111] tracking-tight leading-none mb-2">
            Why Choose
          </h2>
          <h2 className="text-5xl md:text-6xl font-display text-[#C0143C] tracking-tight leading-none">
            NEWGEN TRADERS
          </h2>
          <p className="mt-6 text-lg text-[#555555] max-w-2xl mx-auto">
            We eliminate the friction of coordinating multiple vendors by offering an integrated solution for structural integrity and seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Fragmented Multi-Vendor Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F4F2] border border-[#E0DFDD] rounded-lg p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-8">
              <ShieldAlert className="w-8 h-8 text-[#555555]" />
              <h3 className="text-2xl font-display text-[#111111]">Fragmented Multi-Vendor Model</h3>
            </div>
            
            <ul className="space-y-6 flex-grow">
              {[
                "Multiple separate suppliers for Sand, Aggregates & TMT Steel",
                "Mismatched delivery schedules causing expensive site downtime",
                "No single point of accountability for material quality",
                "Complex coordination between civil contractor and fabricator",
                "Risk of price fluctuations and uncoordinated mobilization"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <X className="w-6 h-6 text-[#555555] mr-3 shrink-0 mt-0.5" />
                  <span className="text-[#555555] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 100% Single Partner Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFFFFF] border-[1.5px] border-[#C0143C] rounded-lg p-8 md:p-10 relative flex flex-col shadow-sm"
          >
            <div className="absolute top-0 right-0 bg-[#C0143C] text-white text-xs font-semibold uppercase tracking-wider py-1.5 px-4 rounded-bl-lg rounded-tr-lg">
              Recommended
            </div>
            
            <div className="flex items-center space-x-3 mb-8">
              <Sparkles className="w-8 h-8 text-[#C0143C]" />
              <h3 className="text-2xl font-display text-[#111111]">100% Single Partner Model</h3>
            </div>
            
            <ul className="space-y-6 flex-grow mb-10">
              {[
                "One unified partner managing supply, fabrication & civil works",
                "Synchronized dispatches tailored to exact erection schedules",
                "Direct proprietorship accountability under Md. Nihal Mollah",
                "Seamless integration between fabrication and civil RCC footings",
                "Guaranteed quality-conscious procurement and transparent BOQ"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-6 h-6 text-[#C0143C] mr-3 shrink-0 mt-0.5" />
                  <span className="text-[#111111] font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-[#C0143C] text-white font-semibold text-lg hover:bg-[#960F2E] transition-colors mt-auto">
              Partner With NEWGEN TRADERS
            </button>
          </motion.div>
        </div>

        {/* 3 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-lg p-8 hover:border-[#C0143C] transition-colors duration-300 group">
            <Layers className="w-10 h-10 text-[#C0143C] mb-6" />
            <h4 className="text-xl font-display text-[#111111] mb-3">Integrated Capability</h4>
            <p className="text-[#555555]">
              Combining structural supply, PEB fabrication, and core civil capabilities under one technical roof.
            </p>
          </div>
          
          <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-lg p-8 hover:border-[#C0143C] transition-colors duration-300 group">
            <Sparkles className="w-10 h-10 text-[#C0143C] mb-6" />
            <h4 className="text-xl font-display text-[#111111] mb-3">Practical Site Knowledge</h4>
            <p className="text-[#555555]">
              Real-world execution experience translating to robust foundations and accurate structural assemblies.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-lg p-8 hover:border-[#C0143C] transition-colors duration-300 group">
            <Clock className="w-10 h-10 text-[#C0143C] mb-6" />
            <h4 className="text-xl font-display text-[#111111] mb-3">Timely Supply & Erection</h4>
            <p className="text-[#555555]">
              Precision planning ensures sequential material delivery, preventing delays and cost overruns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
