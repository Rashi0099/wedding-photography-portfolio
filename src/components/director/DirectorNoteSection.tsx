import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onCommissionClick?: () => void;
}

const DirectorNoteSection: React.FC<Props> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip GSAP layout calculation on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        if (containerRef.current) {
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                once: true,
              },
            }
          );
        }
      }, sectionRef);
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      id="director"
      className="py-16 sm:py-28 px-5 sm:px-10 bg-[#080B09] relative overflow-hidden scroll-mt-20 flex items-center justify-center"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#67685D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={containerRef} className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6 sm:mb-10">
          <span className="w-6 h-[1px] bg-[#67685D]" />
          <span className="text-[10px] font-display font-semibold uppercase tracking-[0.3em] text-[#8D8B82]">
            The Art of Preserving Memory
          </span>
          <span className="w-6 h-[1px] bg-[#67685D]" />
        </div>

        {/* Real-Life OG Quote (Aaron Siskind) */}
        <blockquote className="font-serif text-xl sm:text-3xl lg:text-[2.85rem] text-[#F1EDE3] font-normal leading-[1.35] tracking-tight">
          &ldquo;Photography is a way of feeling, of touching, of loving. <br className="hidden sm:inline" />
          What you have caught on film is captured forever… <br />
          <span className="italic font-light text-[#D8D1C2]">
            it remembers little things, long after you have forgotten everything.
          </span>&rdquo;
        </blockquote>

        {/* Quote Credit */}
        <p className="text-[11px] font-display uppercase tracking-[0.25em] text-[#8D8B82] mt-6 sm:mt-8">
          &mdash; Aaron Siskind
        </p>


      </div>
    </section>
  );
};

export default DirectorNoteSection;
