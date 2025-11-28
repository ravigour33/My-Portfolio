import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="inner">
        <div className="headerB1">
          <h1>Ravi Gour</h1>
        </div>

        <div className="headerB2">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </header>
  );
}
