import React from "react";

const FAQS = [
  { q: "How far in advance should I book?",        a: "For weddings and large productions, 2–4 months is ideal. Express bookings are available for urgent shoots." },
  { q: "Do you travel for shoots?",                 a: "Yes — across Kerala, pan-India, and select international destinations with full mobile camera rigs." },
  { q: "What files do I receive?",                  a: "A 4K color-graded master, highlight reel, social short clips, and optional raw footage hard drive." },
  { q: "Can I review edits before final delivery?", a: "Yes. Clients receive private preview links to provide timestamped feedback on rough cuts." },
  { q: "What is the payment structure?",            a: "30% deposit confirms your date; the balance is split across production milestones." },
];

const ProcessFaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-5 sm:px-8 bg-[#080B09] scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#A8A499] mb-2">
            Questions
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F1EDE3] font-normal tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="bg-[#111412] border border-[#F1EDE3]/5 hover:border-[#F1EDE3]/15 transition-colors p-5 rounded-2xl group [&_summary::-webkit-details-marker]:hidden cursor-pointer"
            >
              <summary className="flex items-center justify-between font-sans font-medium text-sm text-[#F1EDE3] select-none">
                <span>{f.q}</span>
                <span className="text-[#A8A499] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[#D8D1C2] text-xs leading-relaxed border-t border-[#F1EDE3]/5 pt-3 font-sans">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFaqSection;
