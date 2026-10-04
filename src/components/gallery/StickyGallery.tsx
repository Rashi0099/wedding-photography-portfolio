import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GALLERY_ITEMS = [
  { img: "/images/gallery/bts.jpg",        note: "Behind the Scenes",    tag: "BTS",         rotation: -1.5 },
  { img: "/images/gallery/wedding.jpg",    note: "Wedding Cinema",       tag: "WEDDING",     rotation: 1.5  },
  { img: "/images/gallery/backwaters.jpg", note: "Kerala Backwaters",    tag: "AERIAL",      rotation: -1   },
  { img: "/images/gallery/ceremony.jpg",   note: "Traditional Ceremony", tag: "CULTURE",     rotation: 2    },
  { img: "/images/gallery/grade.jpg",      note: "Cinema Grade",         tag: "PRODUCTION",  rotation: -1.5 },
  { img: "/images/gallery/prewedding.jpg", note: "Love Stories",         tag: "PRE-WEDDING", rotation: 1    },
  { img: "/images/gallery/equipment.jpg",  note: "Lens & Light",         tag: "EQUIPMENT",   rotation: -2   },
  { img: "/images/gallery/goldenhour.jpg", note: "Golden Hour",          tag: "PORTRAIT",    rotation: 1.5  },
];

const cols: typeof GALLERY_ITEMS[] = [[], [], []];
GALLERY_ITEMS.forEach((item, i) => cols[i % 3].push(item));

const StickyCard: React.FC<{ item: typeof GALLERY_ITEMS[0] }> = ({ item }) => {
  return (
    <div
      className="sticky-card"
      style={{ transform: `rotate(${item.rotation}deg)` }}
    >
      <div className="sticky-tape-bar" />
      <div className="sticky-img-wrap">
        <img
          src={item.img}
          alt={item.note}
          className="sticky-img"
          loading="lazy"
          decoding="async"
        />
        <div className="sticky-img-overlay">
          <span className="sticky-hover-tag">{item.tag}</span>
        </div>
      </div>
      <div className="sticky-note-text">
        <span className="sticky-note-label">{item.note}</span>
        <span className="sticky-note-dot" />
      </div>
    </div>
  );
};

const StickyGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip GSAP layout calculation on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Clean, butter-smooth one-shot reveal animation — zero continuous scrub loop
        gsap.fromTo(
          ".sticky-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );

        const header = sectionRef.current?.querySelector(".sticky-gallery-header");
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: header, start: "top 85%", once: true },
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
    <section ref={sectionRef} id="gallery" className="sticky-gallery-section scroll-mt-20">
      <div className="sticky-gallery-header">
        <p className="sticky-eyebrow">Visual Journal</p>
        <h2 className="sticky-title">
          Our <span className="sticky-gradient-text">Story Wall</span>
        </h2>
      </div>

      <div className="sticky-columns-wrap">
        {cols.map((colItems, colIdx) => (
          <div key={colIdx} className="sticky-column">
            {colItems.map((item, idx) => (
              <StickyCard key={idx} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyGallery;
