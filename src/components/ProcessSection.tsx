import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, FileCheck, Calculator, ShoppingCart, 
  Wrench, Truck, Building, CheckCircle2, 
  ChevronRight, ChevronLeft, ArrowRight 
} from 'lucide-react';

const steps = [
  {
    id: '01',
    label: 'REQUIREMENT',
    title: 'Requirement & Site Understanding',
    icon: Search,
    phase: 'Phase 01',
    desc: 'We conduct a thorough initial briefing and physical site visit if necessary, gathering precise requirements, dimensions, access routes, and operational constraints to form the baseline of the project.',
    deliverables: ['Site Feasibility Summary', 'Initial Logistics Plan', 'Client Specification Notes'],
  },
  {
    id: '02',
    label: 'BOQ REVIEW',
    title: 'BOQ / Drawing / Specification Review',
    icon: FileCheck,
    phase: 'Phase 02',
    desc: 'Our engineering team critically reviews architectural and structural drawings alongside the BOQ to identify any discrepancies, map material grades, and optimize the structural design for cost and safety.',
    deliverables: ['BOQ Verification Report', 'Material Grade Mapping', 'Drawing Discrepancy Checks'],
  },
  {
    id: '03',
    label: 'PLANNING',
    title: 'Technical & Commercial Planning',
    icon: Calculator,
    phase: 'Phase 03',
    desc: 'We generate a transparent, itemized commercial quotation aligned with a milestone execution roadmap, establishing clear project targets and a structured delivery approach.',
    deliverables: ['Itemized Commercial Quotation', 'Milestone Execution Roadmap', 'Procurement Strategy'],
  },
  {
    id: '04',
    label: 'PROCUREMENT',
    title: 'Material Procurement',
    icon: ShoppingCart,
    phase: 'Phase 04',
    desc: 'Direct sourcing of primary TMT steel, structural sections, cement, river/M-sand, and stone aggregates from trusted mills and quarries with strict quality compliance certificates.',
    deliverables: ['Material Quality Certificates', 'Batch Dispatch Records', 'Stock Yard Allocation'],
  },
  {
    id: '05',
    label: 'FABRICATION & CIVIL',
    title: 'Fabrication & Civil Preparation',
    icon: Wrench,
    phase: 'Phase 05',
    desc: 'Simultaneous operations commence: workshop precision fabrication of steel members (cutting, welding, drilling) while civil teams execute site leveling, excavations, and RCC foundations.',
    deliverables: ['Fabricated Structural Members', 'Shop Inspection Logs', 'Cured RCC Footings'],
  },
  {
    id: '06',
    label: 'MOBILISATION',
    title: 'Delivery & Site Mobilisation',
    icon: Truck,
    phase: 'Phase 06',
    desc: 'Finished structural members and required heavy equipment (cranes, lifts) are dispatched to the site in a sequenced manner to prevent congestion and align with the erection schedule.',
    deliverables: ['Dispatch Challan Records', 'Site Safety Clearance', 'Crane & Equipment Setup'],
  },
  {
    id: '07',
    label: 'CONSTRUCTION',
    title: 'Construction & Erection',
    icon: Building,
    phase: 'Phase 07',
    desc: 'The core phase where primary and secondary steel frames are erected, aligned, and bolted, followed by weather-tight roofing, wall cladding installation, brickwork, and industrial flooring.',
    deliverables: ['Erected PEB Structure', 'Weather-tight Roofing', 'Finished Civil & Masonry'],
  },
  {
    id: '08',
    label: 'HANDOVER',
    title: 'Inspection, Rectification & Handover',
    icon: CheckCircle2,
    phase: 'Phase 08',
    desc: 'A final comprehensive joint inspection with the client. We verify structural alignments, torque tightness, rectify any snags, clear the site, and hand over the completed facility with all compliance documentation.',
    deliverables: ['Final Inspection Checklist', 'Quality & Compliance Docs', 'Formal Project Handover'],
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingToStep = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToStep.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      const stepIdx = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
      setActiveStep(stepIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;

    if (totalScrollable > 0) {
      isScrollingToStep.current = true;
      const containerTop = window.scrollY + rect.top;
      const targetY = containerTop + (index / (steps.length - 1)) * totalScrollable;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingToStep.current = false;
      }, 600);
    }
  };

  const step = steps[activeStep];
  const StepIcon = step.icon;

  return (
    <section 
      ref={containerRef} 
      id="process"
      className="relative bg-[#F5F4F2] border-t border-[#E0DFDD] lg:min-h-[300vh]"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="lg:sticky lg:top-20 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          
          {/* Section Heading */}
          <div className="mb-10 lg:mb-12">
            <span className="block text-xs font-mono font-bold text-[#C0143C] tracking-[0.2em] uppercase mb-2">
              WORKFLOW &amp; APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#111111] tracking-tight leading-none">
              How We Engineer <span className="text-[#C0143C]">Project Scale</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#555555] max-w-2xl leading-relaxed">
              From initial site feasibility to final handover, our integrated approach ensures seamless execution across supply, fabrication, and civil works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            
            {/* LEFT: Timeline Navigation */}
            <div className="lg:col-span-5 hidden lg:block relative pl-2">
              {/* Track Line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#E0DFDD]" />
              
              {/* Active Fill Line */}
              <motion.div 
                className="absolute left-[15px] top-4 w-[2px] bg-[#C0143C]"
                animate={{
                  height: `${(activeStep / (steps.length - 1)) * 100}%`
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ maxHeight: 'calc(100% - 32px)' }}
              />

              <div className="space-y-4 relative z-10">
                {steps.map((s, idx) => {
                  const isActive = idx === activeStep;
                  const isPassed = idx < activeStep;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleStepClick(idx)}
                      className="w-full flex items-center text-left group py-1.5 focus:outline-none cursor-pointer"
                    >
                      <div className="relative flex items-center justify-center w-8 h-8 mr-4 shrink-0">
                        <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#C0143C] ring-4 ring-[#C0143C]/20 scale-110' 
                            : isPassed 
                            ? 'bg-[#C0143C]' 
                            : 'bg-[#FFFFFF] border-2 border-[#D4CFC9] group-hover:border-[#C0143C]'
                        }`} />
                      </div>
                      <span className={`text-xs sm:text-sm tracking-[0.14em] font-mono font-bold uppercase transition-colors duration-300 ${
                        isActive 
                          ? 'text-[#C0143C]' 
                          : isPassed
                          ? 'text-[#111111]'
                          : 'text-[#888888] group-hover:text-[#111111]'
                      }`}>
                        {s.id} • {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Content Card with Rounded Design */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#E0DFDD] rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-sm">
                
                {/* Large Background Watermark Step Number */}
                <div className="absolute -right-4 -top-6 text-[120px] sm:text-[150px] font-display text-[#F5F4F2] leading-none pointer-events-none select-none z-0">
                  {step.id}
                </div>

                <div className="relative z-10 min-h-[360px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="flex-grow"
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E0DFDD]">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-10 h-10 bg-[#F5F4F2] flex items-center justify-center rounded-xl border border-[#E0DFDD]">
                            <StepIcon className="w-5 h-5 text-[#C0143C]" />
                          </div>
                          <span className="text-[#C0143C] font-mono font-bold tracking-wider text-xs uppercase">
                            Step {step.id} of 08
                          </span>
                        </div>
                        <div className="flex items-center text-[#555555] text-xs font-mono font-semibold bg-[#F5F4F2] px-3.5 py-1.5 rounded-full border border-[#E0DFDD]">
                          {step.phase}
                        </div>
                      </div>

                      {/* Step Title & Description */}
                      <h3 className="text-2xl sm:text-3xl font-display text-[#111111] tracking-tight mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Deliverables List with Rounded Pill Cards */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-[#C0143C] tracking-[0.18em] uppercase mb-3">
                          Key Outputs &amp; Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {step.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center bg-[#F5F4F2] border border-[#E0DFDD] p-3.5 rounded-xl">
                              <CheckCircle2 className="w-4 h-4 text-[#C0143C] mr-2.5 shrink-0" />
                              <span className="text-[#111111] font-mono text-xs leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#E0DFDD]">
                    <button 
                      onClick={() => handleStepClick(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="inline-flex items-center px-4 py-2 border border-[#E0DFDD] bg-[#F5F4F2] text-[#111111] font-mono text-xs uppercase tracking-wider rounded-lg disabled:opacity-30 hover:border-[#111111] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                    </button>
                    <span className="text-xs font-mono text-[#888888]">
                      {activeStep + 1} / {steps.length}
                    </span>
                    <button 
                      onClick={() => handleStepClick(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="inline-flex items-center px-5 py-2 bg-[#C0143C] text-white font-mono text-xs uppercase tracking-wider rounded-lg disabled:opacity-30 hover:bg-[#960F2E] transition-colors cursor-pointer"
                    >
                      Next <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
