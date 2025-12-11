import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import RaanImage from "../../assets/sp1.png";
import RaanImage2 from "../../assets/sp2.png";
import RaanImage3 from "../../assets/sp3.png";
import RaanImage4 from "../../assets/sp4.png";
import RaanImage5 from "../../assets/bcl.png";
import RaanImage6 from "../../assets/jma.png";
import RaanImage7 from "../../assets/pyra.png";
import RaanImage8 from "../../assets/trust.png";
import RaanImage9 from "../../assets/lotus.png";
import RaanImage10 from "../../assets/war.png";
import RaanImage11 from "../../assets/jor.png";
import RaanImage12 from "../../assets/mynd.png";


const projects = [
  {
    badge: "WORDPRESS",
    title: "BCL GLOBIZ",
    image:
      RaanImage5,
    link: "https://bcl.ae",
  },
  {
    badge: "WORDPRESS",
    title: "jmattachments",
    image:
     RaanImage6,
    link: "https://jmattachments.com/",
  },
  {
    badge: "WORDPRESS",
    title: "pyramindz",
    image:
     RaanImage7,
    link: "https://pyramindz.com/",
  },
  {
    badge: "WORDPRESS",
    title: "Varpra",
    image:
     RaanImage8,
    link: "https://varpra.com/",
  },
  {
    badge: "WORDPRESS",
    title: "TrustNVC",
    image:
      RaanImage8,
    link: "https://trustnvc.com/",
  },
  {
    badge: "WORDPRESS",
    title: "lotusmdwellness",
    image:
      RaanImage9,
    link: "https://lotusmdwellness.com/",
  },
  {
    badge: "WORDPRESS",
    title: "wrnelchemali",
    image:
     RaanImage10,
  },
  {
    badge: "WORDPRESS",
    title: "jordanswatersolutions",
    image:
      RaanImage11,
  },
  {
    badge: "WORDPRESS",
    title: "myndfultalk",
    image:
     RaanImage12,
    link: "https://myndfultalk.com/",
  },

  {
    badge: "SHOPIFY",
    title: "Raan",
    image: RaanImage,
    link: "https://raan.com/",
  },
  {
    badge: "SHOPIFY",
    title: "thenaturalcraft",
    image:
      RaanImage4,
    link: "https://thenaturalcraft.com/",
  },
  {
    badge: "SHOPIFY",
    title: "fit2flaunt",
    image:
      RaanImage3,
    link: "https://fit2flaunt.com/",
  },
  {
    badge: "SHOPIFY",
    title: "podcastmonkey",
    image:
      RaanImage2,
    link: "https://podcastmonkey.co/",
  },
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
      id=""
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
              transform: `translateX(-${progress * maxTranslate}vw)`,
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
