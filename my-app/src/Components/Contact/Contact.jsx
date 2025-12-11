import React from "react";
import "./Contact.css";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:ravigour61848@gmail.com?subject=Let%27s%20work%20together&body=Hi%20Ravi,";
  };

  return (
    <section className="c-section" id="contact">
      <div className="c-inner">
        {/* LEFT SIDE */}
        <div className="c-left">
          <div className="c-card">
            <p className="c-label">GET IN TOUCH</p>
            <h2 className="c-title">
              Contact<span className="c-dot">.</span>
            </h2>

            <div className="c-buttons">
              <button className="c-btn" onClick={handleEmailClick}>
                EMAIL
              </button>

              <a
                href="https://www.linkedin.com/in/ravigour/"
                target="_blank"
                rel="noreferrer"
                className="c-btn"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/ravigour33"
                target="_blank"
                rel="noreferrer"
                className="c-btn"
              >
                GITHUB
              </a>
            </div>
          </div>

          <div className="c-bottom">
            <p className="c-thanks">Thanks for scrolling.</p>

            <a href="/Ravi-Gour-Resume.pdf" className="c-resume-btn" download>
              <span>RESUME</span>
              <span className="c-resume-icon">↗</span>
            </a>

            <div className="c-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
