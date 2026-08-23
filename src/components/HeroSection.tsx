import { motion } from "framer-motion";

const TICKER = [
  "ON-TIME EXECUTION",
  "SAFETY FIRST",
  "INTEGRATED PEB CONSTRUCTION",
  "STRUCTURAL STEEL FABRICATION",
  "MATERIAL SUPPLY (SAND, AGGREGATES, BRICKS, CEMENT, TMT)",
  "CIVIL CONSTRUCTION",
  "100+ COMPLETED PROJECTS",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full pt-20 flex flex-col justify-between bg-[#F5F2ED] overflow-hidden">
      {/* Background Pattern - Fades out towards the right so it doesn't clash with the illustration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cpath d='M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 52 L60 69.32 L60 103.96 L30 121.28 L0 103.96 L0 69.32 Z' fill='none' stroke='%23D4CEC7' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 104px",
          maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 30%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 30%, transparent 60%)"
        }}
      />

      {/* Main Viewport Centered Row */}
      <div className="flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between relative z-10 py-6 lg:py-2 gap-6 lg:gap-8">
        
        {/* Left Content Column */}
        <motion.div 
          className="w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-center items-start z-20 py-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#C0143C] mb-3">
            INTEGRATED CONSTRUCTION &amp; MATERIAL SOLUTIONS
          </div>
          
          <h1 className="font-display text-[clamp(2.6rem,4.5vw,4.6rem)] leading-[0.9] tracking-tight text-[#111111] mb-4">
            BUILDING THE
            <br />
            <span className="text-[#C0143C]">FUTURE</span>
            <br />
            OF INDUSTRY
          </h1>
          
          <p className="text-[#555555] text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-6">
            Specializing in Material Supply, Project Logistics, and Turnkey Solutions
          </p>
          
          <div className="flex flex-wrap items-center gap-3.5">
            <a href="#services" className="btn-crimson font-display px-7 py-3 tracking-wider text-sm sm:text-base">
              EXPLORE SERVICES
            </a>
            <a 
              href="#inquiry" 
              className="inline-flex items-center justify-center px-7 py-3 border border-[#111111] bg-transparent text-[#111111] font-display text-sm sm:text-base tracking-wider hover:bg-[#111111] hover:text-white transition-colors duration-200"
            >
              REQUEST QUOTE
            </a>
          </div>
        </motion.div>

        {/* Right Content Column - Soft blend covering the top-left constellation mesh */}
        <motion.div 
          className="w-full lg:w-[60%] xl:w-[62%] relative flex justify-end items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="relative w-full max-w-[1050px] lg:-mr-8 xl:-mr-12">
            {/* Top-Left Vignette Blend that seamlessly dissolves the constellation lines */}
            <div 
              className="absolute -top-6 -left-6 w-80 h-80 pointer-events-none z-10"
              style={{
                background: "radial-gradient(circle at 15% 15%, #F5F2ED 35%, rgba(245,242,237,0.92) 55%, rgba(245,242,237,0.5) 75%, transparent 100%)"
              }}
              aria-hidden
            />

            {/* Top-Edge soft feather overlay */}
            <div 
              className="absolute -top-2 inset-x-0 h-16 pointer-events-none z-10 bg-gradient-to-b from-[#F5F2ED] via-[#F5F2ED]/60 to-transparent"
              aria-hidden
            />
            
            <img 
              src="/hero-isometric.jpg" 
              alt="NEWGEN TRADERS - Integrated PEB Warehouse, Structural Steel, RCC Foundations, and Construction Material Yard" 
              className="w-full h-auto object-contain pointer-events-none mix-blend-multiply"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee Ticker */}
      <div className="w-full border-t border-[#E0DFDD] bg-[#F5F2ED] overflow-hidden relative z-20">
        <div className="flex w-fit animate-marquee whitespace-nowrap py-3.5 sm:py-4">
          {[...TICKER, ...TICKER].map((item, i) => (
            <div key={i} className="flex items-center mx-8 sm:mx-10">
              <span className="text-[#111111] font-bold text-sm sm:text-base tracking-[0.18em] font-display">
                {item}
              </span>
              <div className="w-2 h-2 bg-[#C0143C] rotate-45 ml-10 sm:ml-12 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
