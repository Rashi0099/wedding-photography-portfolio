import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "25,000",
    desc: "Perfect for intimate events and social reels.",
    features: ["Full-day coverage (8 hrs)", "4K highlight reel (3–5 min)", "30-day delivery", "Online gallery"],
    popular: false,
  },
  {
    id: "signature",
    name: "Signature",
    price: "55,000",
    desc: "Our most popular — ideal for weddings and brand films.",
    features: ["2-day coverage", "Feature film + teaser", "Hollywood color grade", "Drone footage", "14-day delivery", "Raw footage drive"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "1,20,000",
    desc: "Full creative direction for high-end productions.",
    features: ["Unlimited shoot days", "Full production crew", "4K RED/ARRI rig", "VFX & motion graphics", "7-day express delivery", "DCP master file"],
    popular: false,
  },
];

interface Props { onBookClick: () => void; }

const PricingSection: React.FC<Props> = ({ onBookClick }) => {
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1],
            scrollTrigger: { trigger: card, start: "top 85%", once: true } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="estimator" className="py-24 px-5 sm:px-8 bg-[#111412] scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[11px] font-display font-bold uppercase tracking-widest text-[#8D8B82] mb-2">Transparent Pricing</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F1EDE3] font-normal tracking-wide">
            Simple, Honest Packages
          </h2>
          <p className="text-[#8D8B82] text-sm mt-3 max-w-md mx-auto">
            All packages include color grading, sound design, and private client delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-[#F1EDE3] text-[#080B09] shadow-2xl shadow-black/40 scale-[1.02] md:scale-[1.04]"
                  : "bg-[#080B09] border border-[#F1EDE3]/5 hover:border-[#F1EDE3]/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-0.5 rounded-full bg-[#080B09]/10 text-[#080B09] text-[9px] font-display font-extrabold uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <p className={`text-[11px] font-display font-bold uppercase tracking-widest mb-3 ${plan.popular ? "text-[#67685D]" : "text-[#8D8B82]"}`}>
                  {plan.name}
                </p>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-sm font-sans font-medium ${plan.popular ? "text-[#67685D]" : "text-[#8D8B82]"}`}>₹</span>
                  <span className={`font-serif text-4xl sm:text-5xl font-normal tracking-tight ${plan.popular ? "text-[#080B09]" : "text-[#F1EDE3]"}`}>
                    {plan.price}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-6 font-sans ${plan.popular ? "text-[#67685D]" : "text-[#8D8B82]"}`}>{plan.desc}</p>

                <ul className="space-y-2.5 flex-1 font-sans">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs">
                      <span className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-[#080B09]" : "text-[#D8D1C2]"}`}>✓</span>
                      <span className={plan.popular ? "text-[#080B09]/80" : "text-[#D8D1C2]"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onBookClick}
                  className={`mt-7 w-full py-3.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase transition-all ${
                    plan.popular
                      ? "bg-[#080B09] text-[#F1EDE3] hover:bg-[#111412]"
                      : "bg-[#F1EDE3] text-[#080B09] hover:bg-[#D8D1C2]"
                  }`}
                >
                  Book This Package →
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#8D8B82] mt-8">
          Need something custom?{" "}
          <button onClick={onBookClick} className="text-[#D8D1C2] font-bold hover:text-[#F1EDE3] transition-colors">Talk to us →</button>
        </p>

      </div>
    </section>
  );
};

export default PricingSection;
