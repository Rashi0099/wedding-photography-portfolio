import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: "📷", title: "High Quality",         desc: "Top-tier equipment for stunning results."   },
  { icon: "🎬", title: "Creative Storytelling", desc: "Turning moments into timeless stories."     },
  { icon: "⚡", title: "Fast Delivery",         desc: "Quick turnaround, no quality compromise."   },
  { icon: "🤝", title: "Client Focused",        desc: "Your vision, our commitment."               },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

interface Props {
  onBookClick: () => void;
  onExploreClick: () => void;
}

const ApertureRig: React.FC<Props> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative bg-[#080B09] pt-28 sm:pt-36 pb-0 overflow-hidden" aria-label="Hero">

      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#F1EDE3]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">

          {/* Left: copy */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="block w-1 h-5 rounded-full bg-[#8D8B82]" />
              <span className="font-display font-bold text-[11px] uppercase tracking-widest text-[#8D8B82]">
                Photography & Videography
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-[2.8rem] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[#F1EDE3] font-normal"
            >
              We Capture<br />
              <span className="text-[#D8D1C2]">Moments.</span><br />
              You Live Them.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[#8D8B82] text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Professional photography and videography services that turn your moments into timeless stories.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
              <button
                onClick={onExploreClick}
                className="bg-[#F1EDE3] text-[#080B09] font-display font-bold text-sm py-3 px-7 rounded-full w-full sm:w-auto hover:bg-[#D8D1C2] transition-all duration-200"
              >
                View Our Work →
              </button>
              <button onClick={onBookClick} className="flex items-center gap-3 group focus:outline-none">
                <div className="w-11 h-11 rounded-full bg-[#111412] border border-[#F1EDE3]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#F1EDE3]/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#F1EDE3] ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-display font-bold text-xs text-[#8D8B82] group-hover:text-[#D8D1C2] transition-colors">
                  Watch Showreel
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: camera visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#F1EDE3]/[0.03] rounded-full blur-3xl" />
            <div className="relative w-full max-w-[460px] aspect-square">
              <div className="absolute inset-4 rounded-full border border-[#F1EDE3]/10 animate-spin-slow" />
              <div className="absolute inset-6 rounded-3xl overflow-hidden shadow-2xl border border-[#F1EDE3]/8">
                <img
                  src="/hero_camera.png"
                  alt="Studio Camera Setup"
                  className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#111412] border border-[#F1EDE3]/5 rounded-2xl px-6 sm:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURES.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F1EDE3]/5 flex items-center justify-center text-lg flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="font-display font-bold text-[13px] text-[#F1EDE3] mb-0.5">{f.title}</p>
                <p className="text-[#8D8B82] text-[11px] leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      <svg viewBox="0 0 1440 80" className="w-full block mt-8 fill-[#111412]" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,55 L1440,80 L0,80 Z" />
      </svg>

    </section>
  );
};

export default ApertureRig;
