import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    badge: "SHOPIFY",
    title: "Dandy Storefront",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop",
    link: "#"
  },
  {
    badge: "WORDPRESS",
    title: "Reva Growth",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1800&auto=format&fit=crop",
    link: "#"
  },
  {
    badge: "SHOPIFY",
    title: "Natural Elegance",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1800&auto=format&fit=crop",
    link: "#"
  }
];

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const top = el.offsetTop;
      const height = el.offsetHeight;
      const winH = window.innerHeight;
      const y = window.scrollY;

      const total = height - winH;
      const inside = y - top;
      if (total <= 0) return setProgress(0);

      const p = Math.min(Math.max(inside / total, 0), 1);
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const count = projects.length;
  // ✅ 2 cards per view → max shift = (count*50 - 100) = (count-2)*50
  const maxTranslate = (count - 2) * 50;

  return (
    <section
      className="ps-section"
      ref={sectionRef}
      style={{ height: `${count * 100}vh` }}
    >
      <div className="ps-sticky">
        {/* Header */}
        <div className="ps-header">
          <span className="ps-eyebrow">EXPLORE</span>
          <h2>My Projects</h2>
          
        </div>

        {/* Slider */}
        <div className="ps-viewport">
          <div
            className="ps-track"
            style={{
              // ✅ track width now based on 50vw per card
              width: `${count * 50}vw`,
              transform: `translateX(-${progress * maxTranslate}vw)`
            }}
          >
            {projects.map((p, i) => (
              <article className="ps-card" key={i}>
                <div className="ps-frame">
                  <span className="ps-badge">{p.badge}</span>

                  <div className="ps-media">
                    <img src={p.image} alt={p.title} />
                  </div>

                  <div className="ps-meta">
                    <h3>{p.title}</h3>
                    <a href={p.link}>View Project →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
