import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";

const HeroScene = lazy(() => import("./HeroScene"));

const SERVICES = ["Construction", "PEB", "Steel Fabrication", "Material Supply"];
const TICKER = [
  "PEB STRUCTURES",
  "WAREHOUSES",
  "FACTORIES",
  "RCC WORKS",
  "STRUCTURAL STEEL",
  "TMT SUPPLY",
  "INDUSTRIAL SHEDS",
];
const HEADLINE = ["Building", "the", "Future", "of", "Industry"];

function useTypewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = SERVICES[i % SERVICES.length]!;
    const done = !deleting && text === full;
    const cleared = deleting && text === "";
    const delay = done ? 1400 : cleared ? 200 : deleting ? 45 : 85;

    const id = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setI((n) => n + 1);
        return;
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, i]);

  return text;
}

export default function HeroSection() {
  const typed = useTypewriter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* backdrop glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />

      {/* 3D layer */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-full md:block md:w-[62%]">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ClientOnly>
      </div>
      {/* mobile simplified CSS glow */}
      <div className="pointer-events-none absolute right-[-30%] top-24 h-72 w-72 rounded-full bg-steel/20 blur-3xl md:hidden" aria-hidden />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8"
      >
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-xl tracking-[0.2em] text-foreground sm:text-2xl"
        >
          NEWGEN<span className="text-ember"> TRADERS</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.28, duration: 0.6 }}
          className="flex items-center gap-1 rounded-full border border-glass-border bg-glass px-2 py-1.5 backdrop-blur-xl sm:gap-2 sm:px-3"
        >
          {["About", "Services", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:bg-glass-strong hover:text-foreground sm:text-sm"
            >
              {l}
            </a>
          ))}
        </motion.div>
      </motion.nav>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 pb-40 pt-16 sm:px-8 md:pt-24 lg:pt-32">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.28em] text-steel backdrop-blur-xl"
        >
          Integrated Construction Solutions
        </motion.span>

        <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] tracking-tight">
          {HEADLINE.map((word, idx) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 48, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.55 + idx * 0.13, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-[0.28em] inline-block ${idx === 2 ? "text-ember" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Integrated Construction, PEB, Fabrication &amp; Building Material Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-4 font-mono text-sm uppercase tracking-[0.22em] text-steel sm:text-base"
        >
          <span className="text-muted-foreground">We deliver </span>
          {typed}
          <span className="ml-0.5 inline-block animate-caret text-ember">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#services" className="btn-ember">
            Explore Services
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-y border-glass-border bg-glass py-3 backdrop-blur-xl">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
              {TICKER.map((t) => (
                <span
                  key={t}
                  className="font-display text-sm tracking-[0.26em] text-muted-foreground sm:text-base"
                >
                  {t} <span className="text-ember">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
