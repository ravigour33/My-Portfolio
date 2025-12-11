import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="inner">
        <div className="headerB1">
          <a href="#banner"><h1>Ravi Gour</h1></a>
        </div>

        {/* Hamburger Icon (button for accessibility) */}
        <button
          className={open ? "hamburger open" : "hamburger"}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="header-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Navigation Menu */}
        <div
          className={open ? "headerB2 openMenu" : "headerB2"}
          id="header-menu"
        >
          <ul>
            <li>
              <a href="#banner" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#technologies" onClick={() => setOpen(false)}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
